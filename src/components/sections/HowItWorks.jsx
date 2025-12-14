'use client'

import { steps } from '@/data/steps'
import StepCard from '@/components/ui/StepCard'

export default function HowItWorks() {
  const sectionStyle = {
    padding: '120px 0',
    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9f5f0 100%)',
    position: 'relative'
  }

  const titleStyle = {
    textAlign: 'center',
    fontSize: '48px',
    marginBottom: '20px',
    background: 'linear-gradient(135deg, #0f4c81, #00a86b)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    animation: 'fadeIn 1s ease'
  }

  const subtitleStyle = {
    textAlign: 'center',
    fontSize: '18px',
    color: '#666',
    marginBottom: '60px',
    animation: 'fadeIn 1.2s ease'
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '50px',
    marginTop: '60px',
    position: 'relative'
  }

  return (
    <section style={sectionStyle} id="how-it-works">
      <div className="container">
        <h2 style={titleStyle}>
          How It Works
        </h2>
        <p style={subtitleStyle}>
          Simple, fast, and efficient
        </p>
        
        <div style={gridStyle}>
          {steps.map((step, idx) => (
            <StepCard 
              key={idx} 
              number={step.number} 
              title={step.title} 
              desc={step.desc} 
              delay={idx * 0.2} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}