'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['Home', 'Features', 'How It Works', 'Tests', 'Partner With Us']

  const headerStyle = {
    background: 'rgba(255, 255, 255, 1)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    padding: '15px 0',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: scrolled ? '0 8px 32px rgba(0, 0, 0, 0.1)' : 'none',
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
    transition: 'all 0.3s ease'
  }

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }

  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontSize: '28px',
    width: 'auto',
    minWidth: 'auto',
    overflow: 'visible',
    fontWeight: 'bold'
  }

  const logoStyle = {
    height: '60px',
    width: 'auto',
    cursor: 'pointer'
  }

  const navLinksStyle = {
    display: 'flex',
    gap: '30px',
    listStyle: 'none',
    animation: 'slideInRight 0.8s ease-out'
  }

  const navLinkStyle = {
    color: '#0f4c81',
    textDecoration: 'none',
    fontWeight: 600,
    position: 'relative',
    transition: 'color 0.3s'
  }

  const ctaButtonStyle = {
    background: 'linear-gradient(135deg, #0f4c81, #00a86b)',
    color: 'white',
    padding: '12px 30px',
    borderRadius: '30px',
    textDecoration: 'none',
    fontWeight: 'bold',
    boxShadow: '0 4px 15px rgba(0, 168, 107, 0.3)',
    transition: 'all 0.3s ease',
    display: 'inline-block'
  }

  return (
    <>
      <header style={headerStyle}>
        <nav className="container" style={navStyle}>
          <div style={logoContainerStyle} className="logo-container">
            <Image
              src="/otp.svg"
              alt="OTP Logo"
              width={60}
              height={60}
              className="logo-img"
              style={logoStyle}
              priority
            />

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                lineHeight: '1.05',
                fontSize: '14px',
                fontWeight: 700,
                color: '#0f4c81',
                whiteSpace: 'nowrap',
              }}
            >
              <span>ONE</span>
              <span>TESTING</span>
              <span>POINT</span>
            </div>
          </div>


          <ul className="nav-links" style={navLinksStyle}>
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  style={navLinkStyle}
                  className="nav-link"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <style jsx>{`
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #0f4c81, #00a86b);
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }

        .cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 168, 107, 0.4);
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          /* hide the text lines on very small viewports so the svg has room */
          .logo-container > div {
            display: none;
          }
        }
        .logo-container {
          overflow: visible;
        }
      `}</style>
    </>
  )
}