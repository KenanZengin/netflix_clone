import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.scss'
import { Inter } from 'next/font/google'
import Header from '@/backbones/header'
import Footer from '@/backbones/footer'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Header />
          {children}
          <Footer />
      </body>
    </html>
  )
}
