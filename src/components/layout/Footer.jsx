'use client'

export default function Footer() {
  const footerSections = [
    {
      title: 'Quick Links',
      items: ['Home', 'Features', 'How It Works', 'Browse Tests', 'Partner With Us']
    },
    {
      title: 'Support',
      items: ['FAQs', 'Contact Us', 'Privacy Policy', 'Terms of Service']
    },
    {
      title: 'Contact',
      items: ['📧 support@otp24x7.com', '📞 +91-1800-123-4567', '⏰ Available 24x7']
    }
  ]

  const footerStyle = {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    padding: '80px 0 30px',
    position: 'relative',
    boxShadow: '0 -8px 32px rgba(0, 0, 0, 0.08)',
    borderTop: '1px solid rgba(0, 0, 0, 0.05)'
  }

  const footerContentStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '50px',
    marginBottom: '40px'
  }

  const headingStyle = {
    marginBottom: '25px',
    color: '#0f4c81',
    fontSize: '22px',
    fontWeight: '700',
    position: 'relative',
    display: 'inline-block'
  }

  const paragraphStyle = {
    color: '#444',
    lineHeight: '1.8'
  }

  const listStyle = {
    listStyle: 'none',
    padding: 0
  }

  const listItemStyle = {
    marginBottom: '12px',
    color: '#555',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  }

  const footerBottomStyle = {
    textAlign: 'center',
    paddingTop: '30px',
    borderTop: '1px solid rgba(0, 0, 0, 0.08)',
    color: '#666',
    fontSize: '14px'
  }

  return (
    <>
      <footer style={footerStyle}>
        <div className="container">
          <div style={footerContentStyle}>
            <div>
              <h3 style={headingStyle} className="footer-heading">
                About OTP
              </h3>
              <p style={paragraphStyle}>
                OTP (One Testing Point) is your trusted platform for booking medical tests
                at competitive prices. Available 24x7 for your convenience.
              </p>
            </div>

            {footerSections.map((section, idx) => (
              <div key={idx}>
                <h3 style={headingStyle} className="footer-heading">
                  {section.title}
                </h3>
                <ul style={listStyle}>
                  {section.items.map(item => (
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
              © 2025 OTP 24x7. All rights reserved | Making healthcare accessible for everyone
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
          background: linear-gradient(90deg, #0f4c81, #00a86b);
          border-radius: 2px;
        }

        .footer-link:hover {
          transform: translateX(6px);
          color: #00a86b !important;
        }

        @media (max-width: 768px) {
          footer {
            padding-top: 60px;
          }
        }
      `}</style>
    </>
  )
}
