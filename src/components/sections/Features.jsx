'use client'

import { features } from '@/data/features'
import FeatureCard from '@/components/ui/FeatureCard'

export default function Features() {
  const sectionStyle = {
    padding: '120px 0',
    background: 'white',
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '40px'
  }

  return (
    <section style={sectionStyle} id="features">
      <div className="container">
        <h2 style={titleStyle}>
          Why Choose OTP?
        </h2>
        <p style={subtitleStyle}>
          Experience healthcare booking like never before
        </p>
        
        <div style={gridStyle}>
          {features.map((feature, idx) => (
            <FeatureCard key={idx} icon={feature.icon} title={feature.title} desc={feature.desc} />
          ))}
        </div>
      </div>
    </section>
  )
}