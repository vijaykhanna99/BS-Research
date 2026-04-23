import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import { Search } from 'lucide-react'
import "@fortawesome/fontawesome-free/css/all.min.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Indian Institute of Science - Bangalore',
  description: 'Bachelor of Science (Research) Program',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <div className="min-h-screen bg-white flex flex-col">
          <Header />
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
