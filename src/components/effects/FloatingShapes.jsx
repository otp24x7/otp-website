'use client'

export default function FloatingShapes() {
  const shapes = [
    { size: 300, top: '10%', left: '10%', delay: '0s' },
    { size: 200, top: '60%', left: '80%', delay: '2s' },
    { size: 250, top: '80%', left: '20%', delay: '4s' },
    { size: 180, top: '30%', left: '70%', delay: '6s' }
  ]

  const containerStyle = {
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: -1,
    overflow: 'hidden',
    pointerEvents: 'none'
  }

  return (
    <div style={containerStyle}>
      {shapes.map((shape, idx) => (
        <div
          key={idx}
          style={{
            position: 'absolute',
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            top: shape.top,
            left: shape.left,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(15, 76, 129, 0.1), rgba(0, 168, 107, 0.1))',
            animation: 'float 20s infinite ease-in-out',
            animationDelay: shape.delay
          }}
        />
      ))}
    </div>
  )
}