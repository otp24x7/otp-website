'use client'

import { useState } from 'react'

export default function StepCard({ number, title, desc, delay }) {
  const [isHovered, setIsHovered] = useState(false)

  const containerStyle = {
    textAlign: 'center',
    position: 'relative',
    animation: `fadeInUp 0.8s ease ${delay}s both`
  }

  const numberContainerStyle = {
    width: '80px',
    height: '80px',
    background: 'linear-gradient(135deg, #0f4c81 0%, #00a86b 100%)',
    color: 'white',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '32px',
    fontWeight: 'bold',
    margin: '0 auto 25px',
    boxShadow: isHovered ? '0 15px 40px rgba(0, 168, 107, 0.5)' : '0 10px 30px rgba(0, 168, 107, 0.3)',
    transform: isHovered ? 'scale(1.1) rotate(360deg)' : 'scale(1) rotate(0deg)',
    transition: 'all 0.4s ease',
    position: 'relative',
    cursor: 'pointer'
  }

  const rippleStyle = {
    content: '',
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #0f4c81 0%, #00a86b 100%)',
    zIndex: -1,
    animation: 'ripple 2s ease-out infinite',
    opacity: 0
  }

  const h3Style = {
    fontSize: '22px',
    marginBottom: '15px',
    color: '#0f4c81'
  }

  const pStyle = {
    color: '#666'
  }

  return (
    <div style={containerStyle}>
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={numberContainerStyle}
      >
        <div style={rippleStyle} />
        {number}
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
