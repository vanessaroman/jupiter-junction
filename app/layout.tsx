'use client'

import { ChakraProvider } from '@chakra-ui/react'
import NavBar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
        <NavBar />
        {children}
        <Footer />
        </ChakraProvider>
        </body>
    </html>
  )
}
