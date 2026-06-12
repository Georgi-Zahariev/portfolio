'use client';

import { useEffect, useState } from 'react';

const links = [
  { label: 'about', href: '#about' },
  { label: 'experience', href: '#experience' },
  { label: 'education', href: '#education' },
  { label: 'projects', href: '#projects' },
  { label: 'athletics', href: '#athletics' },
  { label: 'contact', href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      height: '52px',
      backgroundColor: scrolled ? 'rgba(13,13,13,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '0.5px solid #1e1e1e' : '0.5px solid transparent',
      transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease',
    }}>
      <div className="nav-inner" style={{
        maxWidth: '720px',
        margin: '0 auto',
        padding: '0 2rem',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Left */}
        <a
          href="#"
          style={{
            fontSize: '15px',
            fontWeight: 500,
            color: '#f0f0f0',
            letterSpacing: '-0.3px',
            textDecoration: 'none',
          }}
        >
          gz.
        </a>

        {/* Center */}
        <div style={{
          display: 'flex',
          gap: '28px',
        }} className="nav-links">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              style={{
                fontSize: '13px',
                color: '#888',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#f0f0f0')}
              onMouseLeave={e => (e.currentTarget.style.color = '#888')}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Right */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: '12px',
            padding: '6px 14px',
            borderRadius: '8px',
            border: '0.5px solid #1e1e1e',
            color: '#888',
            textDecoration: 'none',
            transition: 'color 0.2s ease, border-color 0.2s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color = '#f0f0f0';
            e.currentTarget.style.borderColor = '#444';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = '#888';
            e.currentTarget.style.borderColor = '#1e1e1e';
          }}
        >
          resume ↗
        </a>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .nav-links { display: none !important; }
          .nav-inner { padding: 0 1.25rem !important; }
        }
      `}</style>
    </nav>
  );
}
