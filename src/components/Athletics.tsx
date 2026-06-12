'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: 'Captain', label: 'team role', small: true },
  { value: '1st Team', label: 'All-Conference', small: true },
];

const athleticAwards = [
  '🏆 First Team All-Conference',
  '📰 Conference Player of the Week',
  '🌐 National Player of the Week',
];

const subsectionLabel = (text: string, mt?: number): React.ReactNode => (
  <p style={{
    fontSize: '11px',
    fontWeight: 500,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: '#333',
    marginTop: mt ?? 0,
    marginBottom: '10px',
  }}>
    {text}
  </p>
);

const pillStyle: React.CSSProperties = {
  fontSize: '11px',
  padding: '4px 12px',
  borderRadius: '4px',
  background: '#111',
  border: '0.5px solid #1e1e1e',
  color: '#555',
  cursor: 'default',
  transition: 'border-color 0.15s ease, color 0.15s ease',
};

export default function Athletics() {
  return (
    <section id="athletics" style={{ borderTop: '0.5px solid #181818' }}>
      <style>{`
        @media (max-width: 640px) {
          .athletics-inner { padding: 0 1.25rem 5rem !important; }
          .athletics-card { flex-direction: column !important; align-items: flex-start !important; }
        }
        .athletic-pill:hover { border-color: #2a2a2a !important; color: #888 !important; }
      `}</style>
      <motion.div
        className="athletics-inner"
        style={{ maxWidth: '720px', margin: '0 auto', padding: '0 2rem 5rem' }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-80px' }}
      >
        {/* Section label */}
        <p style={{
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#444',
          paddingTop: '3.5rem',
          marginBottom: '1.5rem',
        }}>
          athletics
        </p>

        {/* Main card */}
        <div className="athletics-card" style={{
          background: '#111',
          border: '0.5px solid #1e1e1e',
          borderRadius: '10px',
          padding: '1rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          {/* Left */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              background: '#161616',
              border: '0.5px solid #1e1e1e',
              borderRadius: '8px',
              padding: '8px 10px',
              fontSize: '20px',
              lineHeight: 1,
            }}>
              🏐
            </div>
            <div>
              <p style={{ fontSize: '14px', fontWeight: 500, color: '#d0d0d0', margin: 0 }}>
                NCAA Division I Men&apos;s Volleyball
              </p>
              <p style={{ fontSize: '12px', color: '#555', margin: '2px 0 0' }}>
                George Mason University · EIVA Conference
              </p>
            </div>
          </div>

          {/* Right — stats */}
          <div style={{ display: 'flex', gap: '24px' }}>
            {stats.map(({ value, label, small }) => (
              <div key={label}>
                <p style={{ fontSize: small ? '14px' : '20px', fontWeight: 500, color: '#e0e0e0', margin: 0 }}>
                  {value}
                </p>
                <p style={{ fontSize: '11px', color: '#555', margin: '2px 0 0' }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Athletic recognition */}
        {subsectionLabel('athletic recognition', 16)}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {athleticAwards.map(a => (
            <span key={a} className="athletic-pill" style={pillStyle}>{a}</span>
          ))}
        </div>

        {/* SAAC */}
        {subsectionLabel('saac', 14)}
        <div style={{
          background: '#111',
          border: '0.5px solid #1e1e1e',
          borderRadius: '10px',
          padding: '1rem 1.25rem',
        }}>
          {/* Top row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '28px',
              height: '28px',
              background: '#161616',
              border: '0.5px solid #1e1e1e',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              flexShrink: 0,
            }}>
              🏛
            </div>
            <p style={{ fontSize: '13px', fontWeight: 500, color: '#d0d0d0', margin: 0 }}>
              SAAC Representative
            </p>
            <span style={{
              fontSize: '11px',
              background: '#161616',
              border: '0.5px solid #1e1e1e',
              color: '#444',
              borderRadius: '4px',
              padding: '2px 8px',
              marginLeft: 'auto',
              whiteSpace: 'nowrap',
            }}>
              George Mason University
            </span>
          </div>
          {/* Description */}
          <p style={{ fontSize: '12px', color: '#555', lineHeight: 1.65, margin: '8px 0 0' }}>
            Student-Athlete Advisory Committee representative — the direct voice between student-athletes and university/NCAA administration. Weekly meetings, reports, and proposals on athlete welfare, policy, and legislation. Organized community service, volunteering, and campus engagement initiatives.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
