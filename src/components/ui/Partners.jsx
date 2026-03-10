'use client'

import { useEffect } from 'react'
import Image from 'next/image'

// UI component responsible for rendering the sliding logos carousel.
// displays an infinite horizontal marquee of partner logos
export default function Partners({ logos }) {
  // no local state needed for auto scroll; CSS handles the loop

  const carouselContainerStyle = {
    position: 'relative',
    height: '200px',
    overflow: 'hidden'
  }

  const trackStyle = {
    display: 'flex',
    alignItems: 'center',
    animation: 'scrollLeft 20s linear infinite'
  }

  const logoWrapperStyle = {
    padding: '10px',
    minWidth: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }


  if (!logos || logos.length === 0) return null

  // duplicate logos to create seamless loop
  const displayLogos = [...logos, ...logos]

  return (
    <>
      <div style={carouselContainerStyle}>
        <div style={trackStyle}>
          {displayLogos.map((logo, idx) => (
            <div key={idx} style={logoWrapperStyle}>
              <Image
                src={logo}
                alt={`partner-${idx}`}
                width={150}
                height={100}
                style={{ maxWidth: '150px', height: 'auto', objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (max-width: 768px) {
          div {
            padding: 0;
          }
        }
      `}</style>
    </>
  )
}
