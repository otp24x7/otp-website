'use client'

export default function CTA() {
  const sectionStyle = {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    padding: '120px 0',
    textAlign: 'center',
    borderTop: '1px solid rgba(0, 0, 0, 0.05)'
  }

  const contentStyle = {
    maxWidth: '900px',
    margin: '0 auto'
  }

  const h2Style = {
    fontSize: '48px',
    marginBottom: '20px',
    background: 'linear-gradient(90deg, #0f4c81, #00a86b)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  }

  const pStyle = {
    fontSize: '22px',
    marginBottom: '40px',
    color: '#444'
  }

  const buttonStyle = {
    background: 'linear-gradient(135deg, #0f4c81, #00a86b)',
    color: 'white',
    padding: '18px 50px',
    borderRadius: '50px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '18px',
    display: 'inline-block',
    transition: 'all 0.3s ease',
    boxShadow: '0 8px 25px rgba(0, 168, 107, 0.35)'
  }

  return (
    <>
      <section style={sectionStyle}>
        <div className="container" style={contentStyle}>
          <h2 style={h2Style}>
            Ready to Book Your Medical Test?
          </h2>
          <p style={pStyle}>
            Compare prices, book instantly, and save on medical tests — available 24x7
          </p>
          <a href="#tests" style={buttonStyle} className="cta-button">
            Get Started Now
          </a>
        </div>
      </section>

      <style jsx>{`
        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 40px rgba(0, 168, 107, 0.45);
        }

        @media (max-width: 768px) {
          h2 {
            font-size: 34px !important;
          }
          p {
            font-size: 18px !important;
          }
        }
      `}</style>
    </>
  )
}
