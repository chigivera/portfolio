import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from "./components/theme-provider"
import Navbar from "./components/Navbar"
import { ReactNode } from 'react';

export interface RootLayoutProps {
  children: ReactNode;
}


export const metadata: Metadata = {
  title: 'Ayman Benchamkha Portfolio',
  description: 'Page showcasing Ayman`s Web Projects',
}


export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar/>

            <main className="max-w-2xl mx-auto px-4">

            {children}
            </main>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
