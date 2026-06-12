'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram } from 'lucide-react';

const links = [
  {
    icon: Mail,
    label: 'zahariev.georgi03@gmail.com',
    href: 'mailto:zahariev.georgi03@gmail.com',
  },
  {
    icon: Github,
    label: 'Georgi-Zahariev',
    href: 'https://github.com/Georgi-Zahariev',
  },
  {
    icon: Linkedin,
    label: 'zahariev-georgi',
    href: 'https://www.linkedin.com/in/zahariev-georgi/',
  },
  {
    icon: Instagram,
    label: 'zahariev.georgi11',
    href: 'https://www.instagram.com/zahariev.georgi11/',
  },
];

export default function Contact() {
  return (
    <section id="contact" style={{ borderTop: '0.5px solid #181818' }}>
      <style>{`
        @media (max-width: 640px) {
          .contact-inner { padding: 0 1.25rem 6rem !important; }
        }
      `}</style>
      <motion.div
        className="contact-inner"
        style={{ maxWidth: '720px', margin: '0 auto', padding: '0 2rem 6rem' }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-80px' }}
      >
        <div style={{ paddingTop: '3.5rem' }}>

          {/* Heading */}
          <h2 style={{
            fontSize: 'clamp(22px, 4vw, 28px)',
            fontWeight: 500,
            letterSpacing: '-0.5px',
            color: '#f0f0f0',
            margin: 0,
          }}>
            Let&apos;s build something.
          </h2>

          {/* Subline */}
          <p style={{ fontSize: '14px', color: '#555', margin: '8px 0 0' }}>
            Open to full-time, part-time, and contract roles.
          </p>

          {/* Links row */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            marginTop: '24px',
          }}>
            {links.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                style={{
                  fontSize: '13px',
                  color: '#444',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'color 0.15s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#888')}
                onMouseLeave={e => (e.currentTarget.style.color = '#444')}
              >
                <Icon size={15} strokeWidth={1.5} />
                {label}
              </a>
            ))}
          </div>

          {/* Footer */}
          <div style={{
            marginTop: '4rem',
            paddingTop: '1.5rem',
            borderTop: '0.5px solid #181818',
          }}>
            <p style={{ fontSize: '12px', color: '#2a2a2a', margin: 0 }}>
              © 2026 Georgi Zahariev
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
