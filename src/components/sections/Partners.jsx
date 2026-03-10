'use client'

import PartnersCarousel from '@/components/ui/Partners'

export default function PartnersSection() {
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

  // logos list pulled from public/partners directory
  const logos = [
    '/partners/agilus_diagnostics.png',
    '/partners/apollo.png',
    '/partners/healthians.svg',
    '/partners/lalpathlabs.webp',
    '/partners/manipaltrutest.svg',
    '/partners/max_lab.png',
    '/partners/metropolis.svg',
    '/partners/oncquest.png',
    '/partners/pathkind_labs.png',
    '/partners/redcliffe_labs.avif',
    '/partners/thyrocare.svg'
  ]

  return (
    <section style={sectionStyle} id="partners">
      {/* override default horizontal padding so the carousel spans edge‑to‑edge */}
      <div className="container" style={{ padding: '0' }}>
        <h2 style={titleStyle}>Our Partners</h2>
        <p style={subtitleStyle}>Trusted names we work with</p>
        <PartnersCarousel logos={logos} />
      </div>
    </section>
  )
}
