'use client'

import { useState } from 'react'

export default function PartnerBenefitCard({ icon, title, desc }) {
  const [isHovered, setIsHovered] = useState(false)

  const cardStyle = {
    background: 'rgba(255,255,255,0.08)',
    padding: '36px',
    borderRadius: '20px',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid rgba(255,255,255,0.2)',
    boxShadow: isHovered
      ? '0 18px 50px rgba(255,255,255,0.35)'
      : '0 10px 30px rgba(0,0,0,0.4)',
    transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
    transition: 'all 0.4s ease',
    cursor: 'pointer',
  }

  const iconStyle = {
    fontSize: '42px',
    marginBottom: '18px',
    transform: isHovered ? 'scale(1.15)' : 'scale(1)',
    transition: 'transform 0.3s ease',
  }

  const h3Style = {
    fontSize: '22px',
    marginBottom: '12px',
    color: '#0f4c81',
  }

  const pStyle = {
    color: '#00a86b',
    lineHeight: 1.7,
    fontSize: '15px',
  }

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon && <div style={iconStyle}>{icon}</div>}
      <h3 style={h3Style}>{title}</h3>
      <p style={pStyle}>{desc}</p>
    </div>
  )
}
