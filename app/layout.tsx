import type React from "react"
import type { Metadata } from "next"
// import { Geist } from "next/font/google"
import "./globals.css"

import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Geist } from 'geist';



export const metadata: Metadata = {
  title: "S4h",
  description: "Contact professionnel - Développeur Web Fullstack",
    generator: 's4h.online'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Neue+Machina:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>{children}</body>
    </html>
  )
}
