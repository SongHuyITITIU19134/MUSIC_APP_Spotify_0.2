import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AuthProvider from './AuthContext/AuthProvider'
import PlaylistContextProvider from './PlayListContext/page'
import './globals.css'
import Navbar from './navbar/page'
import SongContextProvider from './PlayListContext/SongContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Music App',
  description: 'Generated by CodFFee ',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="background-1">
          <AuthProvider>
            <SongContextProvider>
            <PlaylistContextProvider>
              <div className='container'>
                <Navbar />
                {children}
              </div>
            </PlaylistContextProvider>
            </SongContextProvider>
          </AuthProvider>
        </div>
      </body>
    </html>
  )
}
