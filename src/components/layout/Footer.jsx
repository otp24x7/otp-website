'use client'

export default function Footer() {
  const footerSections = [
    {
      title: 'Quick Links',
      items: ['Home', 'Features', 'How It Works', 'Browse Tests', 'Partner With Us'],
    },
    {
      title: 'Support',
      items: ['FAQs', 'Contact Us', 'Privacy Policy', 'Terms of Service'],
    },
    {
      title: 'Contact',
      items: ['📧 support@otp24x7.com', '📞 +91-1800-123-4567', '⏰ Available 24x7'],
    },
  ]

  const footerStyle = {
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #0f4c81 0%, #00a86b 100%)',
    padding: '90px 0 35px',
  }

  const bubbleStyle = {
    position: 'absolute',
    inset: 0,
    background:
      'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
    backgroundSize: '40px 40px',
    animation: 'moveGrid 30s linear infinite',
    zIndex: 0,
  }

  const footerContentStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '50px',
    marginBottom: '45px',
    position: 'relative',
    zIndex: 1,
  }

  const headingStyle = {
    marginBottom: '26px',
    color: '#ffffff',
    fontSize: '22px',
    fontWeight: '700',
    position: 'relative',
    display: 'inline-block',
  }

  const paragraphStyle = {
    color: 'rgba(255,255,255,0.85)',
    lineHeight: '1.8',
  }

  const listStyle = {
    listStyle: 'none',
    padding: 0,
  }

  const listItemStyle = {
    marginBottom: '12px',
    color: 'rgba(255,255,255,0.75)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  }

  const footerBottomStyle = {
    textAlign: 'center',
    paddingTop: '30px',
    borderTop: '1px solid rgba(255,255,255,0.25)',
    color: 'rgba(255,255,255,0.7)',
    fontSize: '14px',
    position: 'relative',
    zIndex: 1,
  }

  return (
    <>
      <footer style={footerStyle}>
        <div style={bubbleStyle} />

        <div className="container">
          <div style={footerContentStyle}>
            <div>
              <h3 style={headingStyle} className="footer-heading">
                About OTP
              </h3>
              <p style={paragraphStyle}>
                OTP (One Testing Point) is your trusted platform for booking medical
                tests at competitive prices. Available 24x7 for your convenience.
              </p>
            </div>

            {footerSections.map((section, idx) => (
              <div key={idx}>
                <h3 style={headingStyle} className="footer-heading">
                  {section.title}
                </h3>
                <ul style={listStyle}>
                  {section.items.map((item) => (
                    <li
                      key={item}
                      style={listItemStyle}
                      className="footer-link"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={footerBottomStyle}>
            <p>
              © 2025 OTP 24x7. All rights reserved | Making healthcare accessible
              for everyone
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .footer-heading::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 45px;
          height: 3px;
          background: linear-gradient(90deg, #ffffff, rgba(255, 255, 255, 0.6));
          border-radius: 2px;
        }

        .footer-link:hover {
          transform: translateX(6px);
          color: #ffffff !important;
        }

        @keyframes moveGrid {
          from {
            transform: translate(0, 0);
          }
          to {
            transform: translate(-40px, -40px);
          }
        }

        @media (max-width: 768px) {
          footer {
            padding-top: 70px;
          }
        }
      `}</style>
    </>
  )
}
