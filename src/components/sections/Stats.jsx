'use client'

import { stats } from '@/data/stats'
import StatCard from '@/components/ui/StatCard'

export default function Stats() {
  const sectionStyle = {
    padding: '100px 0',
    background: 'linear-gradient(135deg, #0f4c81 0%, #00a86b 100%)',
    color: 'white'
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '40px',
    textAlign: 'center'
  }

  return (
    <section style={sectionStyle}>
      <div className="container">
        <div style={gridStyle}>
          {stats.map((stat, idx) => (
            <StatCard key={idx} number={stat.number} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  )
}