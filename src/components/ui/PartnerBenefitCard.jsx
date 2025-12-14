'use client'

import { useState } from 'react'

export default function PartnerBenefitCard({ icon, title, desc }) {
  const [isHovered, setIsHovered] = useState(false)

  const cardStyle = {
    background: 'white',
    padding: '35px',
    borderRadius: '18px',
    textAlign: 'left',
    boxShadow: isHovered
      ? '0 18px 50px rgba(0, 168, 107, 0.18)'
      : '0 10px 35px rgba(0, 0, 0, 0.08)',
    transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
    transition: 'all 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.15)',
    position: 'relative',
    overflow: 'hidden',
    border: '1px solid rgba(0, 168, 107, 0.12)',
    cursor: 'pointer'
  }

  const leftBorderStyle = {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: '5px',
    background: 'linear-gradient(180deg, #0f4c81, #00a86b)',
    transform: isHovered ? 'scaleY(1)' : 'scaleY(0)',
    transformOrigin: 'top',
    transition: 'transform 0.4s ease'
  }

  const iconStyle = {
    fontSize: '42px',
    marginBottom: '20px',
    color: '#00a86b',
    transform: isHovered ? 'scale(1.15)' : 'scale(1)',
    transition: 'transform 0.4s ease'
  }

  const h3Style = {
    fontSize: '22px',
    marginBottom: '12px',
    color: '#0f4c81'
  }

  const pStyle = {
    color: '#666',
    lineHeight: 1.7,
    fontSize: '15px'
  }

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={cardStyle}
    >
      <div style={leftBorderStyle} />

      {icon && <div style={iconStyle}>{icon}</div>}

      <h3 style={h3Style}>{title}</h3>
      <p style={pStyle}>{desc}</p>
    </div>
  )
}
