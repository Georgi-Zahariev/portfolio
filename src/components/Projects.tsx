'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    featured: true,
    icon: '🏠',
    iconBg: '#0f1a2e',
    name: 'Agentic AI Property Valuation',
    description:
      'Fannie Mae hackathon winner. Reduced property valuation turnaround from weeks to under 1 hour by consolidating fragmented data into one AI workflow. Audit-ready with anomaly detection, traceable reasoning, and floor/ceiling estimates.',
    tags: ['Python', 'React', 'TypeScript', 'LLM Agents', 'Computer Vision', 'REST APIs'],
    github: 'https://github.com/Georgi-Zahariev',
    badge: '🏆 Fannie Mae Hackathon Winner',
  },
  {
    featured: false,
    icon: '🌪',
    iconBg: '#0f1a1a',
    name: 'Multimodal AI Disaster Response Dashboard',
    description:
      'Built for CNA to anticipate Tampa Bay hurricane-related fuel, grocery, and route disruptions. Converted traffic, weather, camera, and facility data into explainable real-time alerts for faster disaster response.',
    tags: ['Python', 'FastAPI', 'React', 'TypeScript', 'Geospatial', 'Real-Time Data'],
    github: 'https://github.com/Georgi-Zahariev',
  },
  {
    featured: false,
    icon: '⚡',
    iconBg: '#1a1607',
    name: 'High-Performance Orderbook System',
    description:
      "Real-time crypto orderbook for Raven DAO's HFT challenge. Sub-millisecond order matching with live Binance WebSocket feed.",
    tags: ['Go', 'WebSocket', 'Binance API', 'Algorithms', 'HFT'],
    github: 'https://github.com/Georgi-Zahariev/raven-dev-challenge',
  },
  {
    featured: false,
    icon: '🦙',
    iconBg: '#0f1a2e',
    name: 'Llama Search',
    description:
      'Privacy-first AI chat using a local LLM — no data ever leaves the machine. Built for enterprise security scenarios.',
    tags: ['Python', 'Local LLM', 'Sentiment Analysis', 'NLP'],
    github: 'https://github.com/mithranm/llamasearch',
  },
  {
    featured: false,
    icon: '🎙',
    iconBg: '#1a0f1a',
    name: 'Morning Brief',
    description:
      'Personalized daily audio briefing. A search agent scans the last 24–48 hours of news across your interests, synthesizes a narrative, and generates a podcast-style audio file via ElevenLabs — ready to listen on your commute.',
    tags: ['Python', 'Search Agent', 'ElevenLabs', 'LLM', 'TTS', 'Automation'],
    github: 'https://github.com/Georgi-Zahariev',
  },
  {
    featured: false,
    icon: '🍽',
    iconBg: '#0f1a0f',
    name: 'Online Restaurant Platform',
    description:
      'Full-stack restaurant platform with auth, payment processing, and admin dashboard. Dockerized and production-ready.',
    tags: ['Go', 'React', 'PostgreSQL', 'Docker', 'Keycloak'],
    github: 'https://github.com/Georgi-Zahariev/online-restaurant',
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ borderTop: '0.5px solid #181818' }}>
      <style>{`
        @media (max-width: 640px) {
          .projects-inner { padding: 0 1.25rem 5rem !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
          .projects-featured { grid-column: span 1 !important; }
        }
      `}</style>
      <motion.div
        className="projects-inner"
        style={{ maxWidth: '720px', margin: '0 auto', padding: '0 2rem 5rem' }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-80px' }}
      >
        {/* Header row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '3.5rem',
          marginBottom: '1.5rem',
        }}>
          <p style={{
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#444',
            margin: 0,
          }}>
            projects
          </p>
          <a
            href="https://github.com/Georgi-Zahariev"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '12px', color: '#444', textDecoration: 'none' }}
          >
            all on github ↗
          </a>
        </div>

        {/* Grid */}
        <div className="projects-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '10px',
        }}>
          {projects.map((project) => (
            <div
              key={project.name}
              className={project.featured ? 'projects-featured' : undefined}
              style={{
                position: 'relative',
                background: '#111',
                border: `0.5px solid ${project.featured ? '#252525' : '#1e1e1e'}`,
                borderRadius: '10px',
                padding: '1rem 1.1rem',
                gridColumn: project.featured ? 'span 2' : undefined,
                transition: 'border-color 0.15s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#2a2a2a')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = project.featured ? '#252525' : '#1e1e1e')}
            >
              {/* Top-right: badge (if any) + github link */}
              <div style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                gap: '5px',
              }}>
                {'badge' in project && project.badge && (
                  <span style={{
                    fontSize: '11px',
                    background: '#1a1a07',
                    border: '0.5px solid #333',
                    color: '#a0a000',
                    borderRadius: '4px',
                    padding: '2px 8px',
                    whiteSpace: 'nowrap',
                  }}>
                    {project.badge}
                  </span>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '11px',
                    color: '#333',
                    textDecoration: 'none',
                    transition: 'color 0.15s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#888')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#333')}
                >
                  github ↗
                </a>
              </div>

              {/* Icon box */}
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '7px',
                background: project.iconBg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '15px',
                marginBottom: '10px',
              }}>
                {project.icon}
              </div>

              {/* Name */}
              <p style={{ fontSize: '14px', fontWeight: 500, color: '#e0e0e0', margin: 0 }}>
                {project.name}
              </p>

              {/* Description */}
              <p style={{ fontSize: '12px', color: '#666', lineHeight: 1.6, margin: '4px 0 10px' }}>
                {project.description}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '11px',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      background: '#1a1a1a',
                      color: '#666',
                      border: '0.5px solid #222',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
