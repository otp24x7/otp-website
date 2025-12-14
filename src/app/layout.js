import './globals.css'

export const metadata = {
  title: 'OTP 24x7 - Book Medical Tests & Compare Prices',
  description:
    'Compare prices from nearby hospitals and book your medical tests instantly.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}