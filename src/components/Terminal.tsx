const K = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: '#888' }}>{children}</span>
);
const Str = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: '#64b5f6' }}>{children}</span>
);
const Num = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: '#86efac' }}>{children}</span>
);
const Amber = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: '#fbbf24' }}>{children}</span>
);
const Purple = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: '#c084fc' }}>{children}</span>
);
const Brace = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: '#333' }}>{children}</span>
);

const prompt = (
  <span>
    <span style={{ color: '#64b5f6' }}>gz</span>
    <span style={{ color: '#444' }}>@portfolio</span>
    <span style={{ color: '#888' }}> ~ $ </span>
  </span>
);

export default function Terminal() {
  return (
    <div className="terminal-outer" style={{ maxWidth: '720px', margin: '0 auto', padding: '0 2rem 5rem' }}>
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .cursor { animation: blink 1s step-end infinite; }
        @media (max-width: 640px) {
          .terminal-outer { padding: 0 1.25rem 5rem !important; }
          .terminal-body { font-size: 11.5px !important; padding: 12px 14px !important; }
        }
      `}</style>

      {/* Outer container */}
      <div style={{
        background: '#111',
        border: '0.5px solid #1e1e1e',
        borderRadius: '10px',
        overflow: 'hidden',
      }}>
        {/* Title bar */}
        <div style={{
          background: '#161616',
          padding: '10px 14px',
          borderBottom: '0.5px solid #1e1e1e',
          display: 'flex',
          alignItems: 'center',
        }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#febc2e', display: 'inline-block' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#28c840', display: 'inline-block' }} />
          </div>
          <span style={{ fontFamily: 'monospace', fontSize: '11px', color: '#444', marginLeft: '8px' }}>
            whoami.sh
          </span>
        </div>

        {/* Body */}
        <div className="terminal-body" style={{
          padding: '16px 18px',
          fontFamily: 'var(--font-mono)',
          fontSize: '13px',
          lineHeight: 2,
        }}>
          {/* Command line */}
          <div>{prompt}<span style={{ color: '#f0f0f0' }}>cat whoami.json</span></div>

          {/* JSON output */}
          <div>
            <Brace>{'{'}</Brace>
            <div style={{ paddingLeft: '1.5rem' }}>
              <div><K>"name"</K>{': '}<Str>"Georgi Zahariev"</Str>,</div>
              <div><K>"role"</K>{': '}<Str>"Software Engineer"</Str>,</div>
              <div><K>"education"</K>{': '}<Str>"B.S. Computer Science · George Mason University · 4.0 GPA · Fairfax, VA"</Str>,</div>
              <div>
                <K>"languages"</K>{': ['}<Str>"Java"</Str>{', '}<Str>"Python"</Str>{', '}<Str>"TypeScript"</Str>{', '}<Str>"Go"</Str>{', '}<Str>"SQL"</Str>{', '}<Str>"C"</Str>{'],'}
              </div>
              <div>
                <K>"stack"</K>{': ['}<Str>"React"</Str>{', '}<Str>"Next.js"</Str>{', '}<Str>"PostgreSQL"</Str>{', '}<Str>"MongoDB"</Str>{'],'}
              </div>
              <div>
                <K>"ai_ml"</K>{': ['}<Purple>"Agentic Workflows"</Purple>{', '}<Purple>"Computer Vision"</Purple>{', '}<Purple>"OpenAI / Claude API"</Purple>{', '}<Purple>"Hugging Face"</Purple>{', '}<Purple>"NLP"</Purple>{'],'}
              </div>
              <div>
                <K>"devops"</K>{': ['}<Str>"GitHub"</Str>{', '}<Str>"Docker"</Str>{', '}<Str>"CI/CD"</Str>{', '}<Str>"Keycloak"</Str>{', '}<Str>"GitHub Actions"</Str>{'],'}
              </div>
              <div>
                <K>"interests"</K>{': ['}<Amber>"agentic AI"</Amber>{', '}<Amber>"real-time systems"</Amber>{', '}<Amber>"disaster tech"</Amber>{', '}<Amber>"sports science"</Amber>{'],'}
              </div>
              <div>
                <K>"athlete"</K>{': '}<Brace>{'{'}</Brace>{' '}
                <K>"sport"</K>{': '}<Str>"volleyball"</Str>{', '}
                <K>"div"</K>{': '}<Str>"NCAA D1"</Str>{', '}
                <K>"role"</K>{': '}<Str>"captain"</Str>{', '}
                <K>"honor"</K>{': '}<Str>"1st Team All-Conference"</Str>
                {' '}<Brace>{'}'}</Brace>
              </div>
            </div>
            <Brace>{'}'}</Brace>
          </div>

          {/* Blank line + blinking cursor */}
          <div>&nbsp;</div>
          <div>{prompt}<span className="cursor" style={{ color: '#64b5f6' }}>▌</span></div>
        </div>
      </div>
    </div>
  );
}
