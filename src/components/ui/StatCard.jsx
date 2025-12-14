export default function StatCard({ number, label }) {
  const containerStyle = {
    animation: 'fadeInUp 1s ease'
  }

  const numberStyle = {
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '10px',
    display: 'block'
  }

  const labelStyle = {
    fontSize: '18px',
    opacity: 0.9
  }

  return (
    <div style={containerStyle}>
      <span style={numberStyle}>
        {number}
      </span>
      <span style={labelStyle}>
        {label}
      </span>
    </div>
  )
}