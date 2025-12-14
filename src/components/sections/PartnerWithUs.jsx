'use client'

import PartnerBenefitCard from '@/components/ui/PartnerBenefitCard'

export default function PartnerWithUs() {
  const sectionStyle = {
    padding: '120px 0',
    background: '#f9fbfd'
  }

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '70px'
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
    fontSize: '18px',
    color: '#666',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: 1.7
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '35px',
    marginBottom: '80px'
  }

  const formStyle = {
    maxWidth: '650px',
    margin: '0 auto',
    background: 'white',
    padding: '50px',
    borderRadius: '20px',
    boxShadow: '0 15px 50px rgba(0,0,0,0.08)'
  }

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    marginBottom: '18px',
    borderRadius: '10px',
    border: '1px solid #ddd',
    fontSize: '15px'
  }

  const buttonStyle = {
    width: '100%',
    padding: '16px',
    borderRadius: '12px',
    border: 'none',
    background: 'linear-gradient(135deg, #0f4c81, #00a86b)',
    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer'
  }

  return (
    <section style={sectionStyle} id="partner-with-us">
      <div className="container">
        <div style={headerStyle}>
          <h2 style={titleStyle}>Partner With Us</h2>
          <p style={subtitleStyle}>
            Join our platform and connect your diagnostic center with thousands
            of patients actively searching for medical tests.
          </p>
        </div>

        <div style={gridStyle}>
          <PartnerBenefitCard
            icon="🏥"
            title="Increased Visibility"
            desc="Get discovered by users searching for tests in your city."
          />
          <PartnerBenefitCard
            icon="👥"
            title="Higher Bookings"
            desc="Connect with new patients and expand your diagnostic services reach."
          />
          <PartnerBenefitCard
            icon="💼"
            title="Easy Management"
            desc="Simple dashboard to manage bookings, pricing, and availability."
          />
          <PartnerBenefitCard
            icon="📊"
            title="Analytics & Insights"
            desc="Track performance with detailed analytics and booking reports."
          />
          <PartnerBenefitCard
            icon="⚡"
            title="Instant Notifications"
            desc="Get real-time alerts for new bookings and patient inquiries."
          />
          <PartnerBenefitCard
            icon="🎯"
            title="Price Control"
            desc="Set your own prices and stay competitive in the market."
          />
        </div>

        <form style={formStyle}>
          <input style={inputStyle} placeholder="Hospital / Lab Name" />
          <input style={inputStyle} placeholder="City" />
          <input style={inputStyle} placeholder="Contact Number" />
          <input style={inputStyle} placeholder="Email Address" />

          <button style={buttonStyle}>
            Request Partnership
          </button>
        </form>
      </div>
    </section>
  )
}
