export const metadata = {
  title: 'MINDLY',
  description: 'Your social platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
