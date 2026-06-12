'use client';

import { motion } from 'framer-motion';

const entries = [
  {
    icon: '🤖',
    company: 'eDynamix',
    role: 'R&D Software Engineer Intern',
    date: 'June 2025 – August 2025 · Bulgaria',
    description:
      'Developed Python pipelines for vehicle image background removal and video noise reduction using open-source AI tools. Built and optimized prompt-based car image validation workflows processing 100K+ images daily at 95%+ accuracy. Researched and evaluated open-source AI models for integration into in-house systems.',
  },
  {
    icon: '🏥',
    company: 'Sentara Healthcare',
    role: 'Data Analyst Intern',
    date: 'May 2024 – June 2024 · Virginia, USA',
    description:
      'Optimized team workflows by analyzing productivity metrics, boosting efficiency by 30%. Implemented automation tools that reduced manual reporting effort by 90%. Delivered actionable insights and visualizations to 10+ managers.',
  },
  {
    icon: '📚',
    company: 'George Mason University',
    role: 'Undergraduate Teaching Assistant',
    date: 'August 2023 – May 2026 · Fairfax, VA',
    description:
      'TA for Database Concepts (senior-level), Data Structures, OOP, and Intro to CS. Supported 900+ students across semesters. Helped 40–50 students per course achieve grade improvements of 20%+.',
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '5rem 0' }}>
      <style>{`
        @media (max-width: 640px) {
          .experience-inner { padding: 0 1.25rem !important; }
        }
      `}</style>
      <motion.div
        className="experience-inner"
        style={{ maxWidth: '720px', margin: '0 auto', padding: '0 2rem' }}
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
          marginBottom: '2rem',
        }}>
          experience
        </p>

        {/* Timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {entries.map((entry, i) => (
            <div key={i} style={{ display: 'flex', gap: '16px' }}>
              {/* Left column */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '32px', flexShrink: 0 }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  background: '#161616',
                  border: '0.5px solid #1e1e1e',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  flexShrink: 0,
                }}>
                  {entry.icon}
                </div>
                {i < entries.length - 1 && (
                  <div style={{
                    width: '0.5px',
                    flex: 1,
                    background: '#1e1e1e',
                    marginTop: '4px',
                    marginBottom: '4px',
                    minHeight: '24px',
                  }} />
                )}
              </div>

              {/* Right column */}
              <div style={{ paddingBottom: i < entries.length - 1 ? '2rem' : 0 }}>
                <p style={{ fontSize: '12px', color: '#3b82f6', margin: 0 }}>{entry.company}</p>
                <p style={{ fontSize: '14px', fontWeight: 500, color: '#d0d0d0', margin: '2px 0 0' }}>{entry.role}</p>
                <p style={{ fontSize: '11px', color: '#444', margin: '2px 0 6px' }}>{entry.date}</p>
                <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.65, margin: 0 }}>{entry.description}</p>
              </div>
            </div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}
