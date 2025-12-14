'use client'

import { useState } from 'react'

export default function TestCard({ name, price }) {
  const [isHovered, setIsHovered] = useState(false)

  const cardStyle = {
    background: 'linear-gradient(135deg, #ffffff 0%, #f8fcfa 100%)',
    padding: '35px',
    borderRadius: '20px',
    textAlign: 'center',
    boxShadow: isHovered ? '0 15px 40px rgba(0, 168, 107, 0.2)' : '0 5px 20px rgba(0, 0, 0, 0.08)',
    transform: isHovered ? 'translateY(-10px) scale(1.03)' : 'translateY(0) scale(1)',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    border: isHovered ? '2px solid rgba(0, 168, 107, 0.3)' : '2px solid transparent',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer'
  }

  const topBorderStyle = {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #0f4c81, #00a86b)',
    transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
    transformOrigin: 'left',
    transition: 'transform 0.4s ease'
  }

  const h4Style = {
    color: '#0f4c81',
    marginBottom: '15px',
    fontSize: '20px'
  }

  const pStyle = {
    color: '#00a86b',
    fontWeight: 'bold',
    fontSize: '18px'
  }

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={cardStyle}
    >
      <div style={topBorderStyle} />

      <h4 style={h4Style}>
        {name}
      </h4>
      <p style={pStyle}>
        Starting from {price}
      </p>
    </div>
  )
}