'use client'

export default function Hero() {
  const sectionStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #0f4c81 0%, #00a86b 100%)',
    position: 'relative',
    overflow: 'hidden'
  }

  const gridPatternStyle = {
    position: 'absolute',
    width: '150%',
    height: '150%',
    background:
      'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
    backgroundSize: '50px 50px',
    animation: 'moveGrid 20s linear infinite'
  }

  const pulseCircleStyle = (position) => ({
    position: 'absolute',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255,255,255,0.12), transparent)',
    animation: 'pulse 3s ease-in-out infinite',
    pointerEvents: 'none',
    ...position
  })

  const contentStyle = {
    position: 'relative',
    zIndex: 1,
    color: 'white',
    padding: '100px 0'
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    alignItems: 'center'
  }

  const h1Style = {
    fontSize: '50px',
    marginBottom: '20px',
    background: 'linear-gradient(to right, #ffffff, #e0f7ef)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  }

  const pStyle = {
    fontSize: '24px',
    marginBottom: '40px',
    opacity: 0.95
  }

  const buttonsStyle = {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap'
  }

  const btnPrimaryStyle = {
    padding: '18px 45px',
    fontSize: '18px',
    borderRadius: '50px',
    fontWeight: 'bold',
    background: 'white',
    color: '#0f4c81',
    textDecoration: 'none',
    boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
    transition: 'all 0.4s ease'
  }

  const btnSecondaryStyle = {
    padding: '18px 45px',
    fontSize: '18px',
    borderRadius: '50px',
    fontWeight: 'bold',
    textDecoration: 'none',
    background: 'rgba(255,255,255,0.1)',
    color: 'white',
    border: '2px solid white',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.4s ease'
  }

  const logoWrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px',
    borderRadius: '30px',
    background: 'rgba(255,255,255,0.12)',
    backdropFilter: 'blur(14px)',
    boxShadow: '0 25px 80px rgba(0,0,0,0.35)',
    animation: 'fadeInRight 1.2s ease'
  }

  const logoStyle = {
    width: '320px',
    maxWidth: '60%',
    //animation: 'float 6s ease-in-out infinite',
    filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.4))',
    borderRadius: '30px'
  }

  return (
    <>
      <section style={sectionStyle} id="home">
        <div style={gridPatternStyle} />
        <div style={pulseCircleStyle({ top: '20%', left: '10%' })} />
        <div
          style={{
            ...pulseCircleStyle({ bottom: '20%', right: '10%' }),
            animationDelay: '1.5s'
          }}
        />

        <div className="container" style={contentStyle}>
          <div style={gridStyle}>
            {/* LEFT CONTENT */}
            <div>
              <h1 style={h1Style}>
                Book Medical Tests at Best Prices
              </h1>

              <p style={pStyle}>
                Compare prices from nearby hospitals and book your medical tests
                instantly — Available 24×7
              </p>

              <div style={buttonsStyle}>
                <a href="#tests" className="btn-primary" style={btnPrimaryStyle}>
                  Browse Tests
                </a>
                <a
                  href="#how-it-works"
                  className="btn-secondary"
                  style={btnSecondaryStyle}
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* RIGHT LOGO */}
            <div style={logoWrapperStyle} className="logo-wrapper">
              {/* HEARTBEAT SVG */}
              <svg
                className="heartbeat"
                viewBox="0 0 600 120"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 60 L80 60 L100 20 L130 100 L160 60 L220 60 
         L240 40 L260 80 L280 60 L360 60 
         L380 30 L400 90 L430 60 L600 60"
                  fill="none"
                  stroke="rgba(255,255,255,0.85)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* LOGO */}
              <img
                src="/otp.svg"
                alt="OTP 24x7"
                style={logoStyle}
              />
            </div>

          </div>
        </div>
      </section>

      <style jsx>{`
        .logo-wrapper {
  position: relative;
  overflow: hidden;
}

.heartbeat {
  position: absolute;
  width: 120%;
  height: 100px;
  top: 50%;
  left: -10%;
  transform: translateY(-50%);
  z-index: 0;
}

.heartbeat path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: heartbeat 2.5s linear infinite;
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.6));
}

.logo-wrapper img {
  position: relative;
  z-index: 2;
}

@keyframes heartbeat {
  0% {
    stroke-dashoffset: 1000;
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  100% {
    stroke-dashoffset: 0;
    opacity: 0;
  }
}

        .btn-primary:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
        }

        .btn-secondary:hover {
          background: white;
          color: #0f4c81;
          transform: translateY(-5px);
        }

        @keyframes moveGrid {
          from {
            transform: translate(0, 0);
          }
          to {
            transform: translate(-50px, -50px);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.2;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 38px !important;
          }

          p {
            font-size: 18px !important;
          }

          .container > div {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
        }
      `}</style>
    </>
  )
}
