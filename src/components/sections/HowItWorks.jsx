'use client'

import { steps } from '@/data/steps'
import StepCard from '@/components/ui/StepCard'

export default function HowItWorks() {
  const sectionStyle = {
    padding: '120px 0',
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #0f4c81 0%, #00a86b 100%)',
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

  const titleStyle = {
    textAlign: 'center',
    fontSize: '48px',
    marginBottom: '20px',
    color: '#ffffff',
    animation: 'fadeInUp 1s ease',
  }

  const subtitleStyle = {
    textAlign: 'center',
    fontSize: '18px',
    marginBottom: '60px',
    color: 'rgba(255,255,255,0.85)',
    animation: 'fadeInUp 1.2s ease',
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '50px',
    marginTop: '60px',
    position: 'relative',
    zIndex: 1,
  }

  return (
    <section style={sectionStyle} id="how-it-works">
      {/* White bubbles */}
      <div style={bubbleStyle} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 style={titleStyle}>How It Works</h2>
        <p style={subtitleStyle}>Simple, fast, and efficient</p>

        <div style={gridStyle}>
          {steps.map((step, idx) => (
            <StepCard
              key={idx}
              number={step.number}
              title={step.title}
              desc={step.desc}
              delay={idx * 0.2}
              theme="dark"
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes moveGrid {
          from {
            transform: translate(0, 0);
          }
          to {
            transform: translate(-40px, -40px);
          }
        }
      `}</style>
    </section>
  )
}