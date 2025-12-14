'use client'

import { tests } from '@/data/tests'
import TestCard from '@/components/ui/TestCard'

export default function Tests() {
  const sectionStyle = {
    padding: '120px 0',
    background: 'white'
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '30px',
    marginTop: '60px'
  }

  return (
    <section style={sectionStyle} id="tests">
      <div className="container">
        <h2 style={titleStyle}>
          Popular Medical Tests
        </h2>
        <p style={subtitleStyle}>
          Most commonly booked tests on our platform
        </p>
        
        <div style={gridStyle}>
          {tests.map((test, idx) => (
            <TestCard key={idx} name={test.name} price={test.price} />
          ))}
        </div>
      </div>
    </section>
  )
}