'use client'

import { useState } from 'react'
import PartnerBenefitCard from '@/components/ui/PartnerBenefitCard'

export default function PartnerWithUs() {
  const sectionStyle = {
    padding: '120px 0',
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #0f4c81 0%, #00a86b 100%)',
  }

  const bubbleStyle = {
    position: 'absolute',
    inset: 0,
    background:
      'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
    backgroundSize: '40px 40px',
    animation: 'moveGrid 30s linear infinite',
    zIndex: 0,
  }

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '70px',
    position: 'relative',
    zIndex: 1,
  }

  const titleStyle = {
    fontSize: '48px',
    marginBottom: '20px',
    color: '#ffffff',
    animation: 'fadeInUp 1s ease',
  }

  const subtitleStyle = {
    fontSize: '18px',
    color: 'rgba(255,255,255,0.85)',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: 1.7,
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '45px',
    marginBottom: '90px',
    position: 'relative',
    zIndex: 1,
  }

  const formStyle = {
    maxWidth: '650px',
    margin: '0 auto',
    background: 'rgba(255,255,255,0.08)',
    padding: '50px',
    borderRadius: '22px',
    backdropFilter: 'blur(18px)',
    WebkitBackdropFilter: 'blur(18px)',
    border: '1px solid rgba(255,255,255,0.2)',
    position: 'relative',
    zIndex: 1,
  }

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    marginBottom: '18px',
    borderRadius: '12px',
    border: '1px solid rgba(255,255,255,0.3)',
    background: 'rgba(255,255,255,0.12)',
    color: 'white',
    fontSize: '15px',
    outline: 'none',
  }

  const buttonStyle = {
    width: '100%',
    padding: '16px',
    borderRadius: '14px',
    border: 'none',
    background: 'white',
    color: '#0f4c81',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  }

  const errorStyle = {
    color: '#ffd1d1',
    fontSize: '13px',
    marginTop: '-12px',
    marginBottom: '12px',
  }

  const [formData, setFormData] = useState({
    hospital: '',
    city: '',
    phone: '',
    email: '',
  })

  const [message, setMessage] = useState('')
  const [fieldErrors, setFieldErrors] = useState({})

  const handleInputChange = (e) => {
    const { placeholder, value } = e.target
    const fieldMap = {
      'Hospital / Lab Name': 'hospital',
      City: 'city',
      'Contact Number': 'phone',
      'Email Address': 'email',
    }

    setFormData((prev) => ({
      ...prev,
      [fieldMap[placeholder]]: value,
    }))

    setFieldErrors((prev) => ({
      ...prev,
      [fieldMap[placeholder]]: '',
    }))
  }

  const validateForm = () => {
    const errors = {}
    if (!formData.hospital.trim()) errors.hospital = 'Hospital / Lab Name is required'
    if (!formData.city.trim()) errors.city = 'City is required'
    if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, '')))
      errors.phone = 'Valid contact number is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errors.email = 'Valid email is required'
    return errors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errors = validateForm()
    if (Object.keys(errors).length) {
      setFieldErrors(errors)
      return
    }

    try {
      const data = {
        service_id: 'service_2nh4gco',
        template_id: 'template_cch8mk6',
        user_id: 'S_wVsNyAiPL30W5cK',
        template_params: formData,
      }

      const response = await fetch(
        'https://api.emailjs.com/api/v1.0/email/send',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }
      )

      if (response.ok) {
        setMessage('Request submitted successfully! We will contact you soon.')
        setFormData({ hospital: '', city: '', phone: '', email: '' })
        setFieldErrors({})
        setTimeout(() => setMessage(''), 3000)
      }
    } catch {
      setMessage('Error submitting form')
    }
  }

  return (
    <section style={sectionStyle} id="partner-with-us">
      <div style={bubbleStyle} />

      <div className="container">
        <div style={headerStyle}>
          <h2 style={titleStyle}>Partner With Us</h2>
          <p style={subtitleStyle}>
            Join our platform and connect your diagnostic center with thousands
            of patients actively searching for medical tests.
          </p>
        </div>

        <div style={gridStyle}>
          <PartnerBenefitCard icon="🏥" title="Increased Visibility" desc="Get discovered by users searching for tests in your city." />
          <PartnerBenefitCard icon="👥" title="Higher Bookings" desc="Expand your reach and connect with new patients." />
          <PartnerBenefitCard icon="💼" title="Easy Management" desc="Manage pricing, availability, and bookings easily." />
          <PartnerBenefitCard icon="📊" title="Analytics & Insights" desc="Track performance with real-time analytics." />
          <PartnerBenefitCard icon="⚡" title="Instant Notifications" desc="Get notified instantly for new bookings." />
          <PartnerBenefitCard icon="🎯" title="Price Control" desc="Set competitive prices on your terms." />
        </div>

        <form style={formStyle} onSubmit={handleSubmit}>
          <input style={inputStyle} placeholder="Hospital / Lab Name" value={formData.hospital} onChange={handleInputChange} />
          {fieldErrors.hospital && <p style={errorStyle}>{fieldErrors.hospital}</p>}

          <input style={inputStyle} placeholder="City" value={formData.city} onChange={handleInputChange} />
          {fieldErrors.city && <p style={errorStyle}>{fieldErrors.city}</p>}

          <input style={inputStyle} placeholder="Contact Number" value={formData.phone} onChange={handleInputChange} />
          {fieldErrors.phone && <p style={errorStyle}>{fieldErrors.phone}</p>}

          <input style={inputStyle} placeholder="Email Address" value={formData.email} onChange={handleInputChange} />
          {fieldErrors.email && <p style={errorStyle}>{fieldErrors.email}</p>}

          <button style={buttonStyle} className="partner-btn">
            Request Partnership
          </button>

          {message && (
            <p
              style={{
                textAlign: 'center',
                marginTop: '14px',
                color: message.includes('success') ? '#b9ffe8' : '#ffd1d1',
              }}
            >
              {message}
            </p>
          )}
        </form>
      </div>

      <style jsx>{`
        .partner-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(255, 255, 255, 0.4);
        }

        input::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }

        @keyframes moveGrid {
          from {
            transform: translate(0, 0);
          }
          to {
            transform: translate(-40px, -40px);
          }
        }
      `}</style>
    </section>
  )
}
