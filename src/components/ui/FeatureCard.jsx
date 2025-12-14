'use client'

import { useState } from 'react'

export default function FeatureCard({ icon, title, desc }) {
  const [isHovered, setIsHovered] = useState(false)

  const cardStyle = {
    background: 'white',
    padding: '40px',
    borderRadius: '20px',
    textAlign: 'center',
    boxShadow: isHovered ? '0 20px 60px rgba(0, 168, 107, 0.2)' : '0 10px 40px rgba(0, 0, 0, 0.08)',
    transform: isHovered ? 'translateY(-15px) scale(1.02)' : 'translateY(0) scale(1)',
    transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    position: 'relative',
    overflow: 'hidden',
    border: '1px solid rgba(0, 168, 107, 0.1)',
    cursor: 'pointer'
  }

  const topBorderStyle = {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '4px',
    background: 'linear-gradient(90deg, #0f4c81, #00a86b)',
    transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
    transition: 'transform 0.5s ease'
  }

  const iconStyle = {
    fontSize: '60px',
    marginBottom: '20px',
    display: 'inline-block',
    animation: isHovered ? 'spin 0.6s ease-in-out' : 'bounce 2s ease-in-out infinite'
  }

  const h3Style = {
    fontSize: '24px',
    marginBottom: '15px',
    color: '#0f4c81'
  }

  const pStyle = {
    color: '#666',
    lineHeight: 1.8
  }

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={cardStyle}
    >
      <div style={topBorderStyle} />

      <div style={iconStyle}>
        {icon}
      </div>
      
      <h3 style={h3Style}>
        {title}
      </h3>
      <p style={pStyle}>
        {desc}
      </p>
    </div>
  )
}