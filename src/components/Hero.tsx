'use client';

export default function Hero() {
  return (
    <section id="about" className="hero-section" style={{ paddingTop: '7rem', paddingBottom: '5rem' }}>
      <style>{`
        @media (max-width: 640px) {
          .hero-section { padding-top: 5rem !important; }
          .hero-inner { padding: 0 1.25rem !important; }
          .hero-name { font-size: 36px !important; }
        }
      `}</style>
      <div className="hero-inner" style={{
        maxWidth: '720px',
        margin: '0 auto',
        padding: '0 2rem',
      }}>
        {/* Eyebrow */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '16px',
        }}>
          <span style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#22c55e',
            flexShrink: 0,
          }} />
          <span style={{
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: '0.08em',
            color: '#444',
            textTransform: 'uppercase',
          }}>
            available for opportunities · europe (in-person, hybrid, remote)
          </span>
        </div>

        {/* Name */}
        <h1 className="hero-name" style={{
          fontSize: 'clamp(36px, 6vw, 52px)',
          fontWeight: 500,
          letterSpacing: '-2px',
          lineHeight: 1.05,
          color: '#f0f0f0',
          margin: 0,
        }}>
          Georgi<br />Zahariev.
        </h1>

        {/* Bio */}
        <p style={{
          fontSize: '15px',
          color: '#888',
          lineHeight: 1.7,
          maxWidth: '500px',
          marginTop: '20px',
        }}>
          Software engineer focused on backend systems, AI/ML, and full-stack development.
          Building things that work at scale — from financial engineering to AI agent workflows.
        </p>

        {/* Actions */}
        <div style={{
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap',
          marginTop: '28px',
          alignItems: 'center',
        }}>
          <a
            href="#projects"
            style={{
              background: '#f0f0f0',
              color: '#0d0d0d',
              fontSize: '13px',
              fontWeight: 500,
              padding: '8px 18px',
              borderRadius: '8px',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            view projects
          </a>
          <a
            href="/resume.pdf"
            style={{
              border: '0.5px solid #1e1e1e',
              color: '#ccc',
              background: 'transparent',
              fontSize: '13px',
              fontWeight: 500,
              padding: '8px 18px',
              borderRadius: '8px',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            resume
          </a>
          <a
            href="https://github.com/Georgi-Zahariev"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '13px',
              color: '#444',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#888')}
            onMouseLeave={e => (e.currentTarget.style.color = '#444')}
          >
            github ↗
          </a>
        </div>
      </div>
    </section>
  );
}
