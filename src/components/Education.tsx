'use client';

import { motion } from 'framer-motion';

const degreeStats = [
  { value: '4.0', label: 'gpa', small: false },
  { value: 'Summa Cum Laude', label: 'latin honors', small: true },
  { value: '2026', label: 'graduating', small: false },
];

const honors = [
  '🏅 Dean\'s List × 8',
  '🏅 Provost Scholar × 3',
  '🎖 Distinguished Academic Achievement',
  '👨‍🏫 Outstanding Teaching Assistant Award',
  '🏆 OrthoVirginia Student Achiever',
];

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

export default function Education() {
  return (
    <section id="education" style={{ borderTop: '0.5px solid #181818' }}>
      <style>{`
        @media (max-width: 640px) {
          .education-inner { padding: 0 1.25rem 5rem !important; }
          .education-degree-card { flex-direction: column !important; align-items: flex-start !important; }
        }
        .honor-pill:hover { border-color: #2a2a2a !important; color: #888 !important; }
      `}</style>
      <motion.div
        className="education-inner"
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
          education
        </p>

        {/* Degree card */}
        <div className="education-degree-card" style={{
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
              flexShrink: 0,
            }}>
              🎓
            </div>
            <div>
              <p style={{ fontSize: '14px', fontWeight: 500, color: '#d0d0d0', margin: 0 }}>
                George Mason University
              </p>
              <p style={{ fontSize: '12px', color: '#555', margin: '2px 0 0' }}>
                B.Sc. Computer Science · Fairfax, VA · Aug 2022 – May 2026
              </p>
              <p style={{ fontSize: '11px', color: '#444', margin: '3px 0 0' }}>
                Relevant: Data Mining, Algorithms, OS, Networking, Secure Systems, DB Concepts, Computer Architecture
              </p>
            </div>
          </div>

          {/* Right — stats */}
          <div style={{ display: 'flex', gap: '24px', flexShrink: 0 }}>
            {degreeStats.map(({ value, label, small }) => (
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

        {/* Academic honors */}
        <p style={{
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#333',
          marginTop: '16px',
          marginBottom: '10px',
        }}>
          academic honors
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {honors.map(h => (
            <span key={h} className="honor-pill" style={pillStyle}>
              {h}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
