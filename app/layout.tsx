import type React from "react"
import type { Metadata } from "next"
import { Vazirmatn } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "آموزش برنامه نویسی، طراحی سیستم و سیستم دیزاین | مسیر رشد تفکر مهندسی نرم افزار",
  description: "دوره‌های آموزش برنامه نویسی، هنر کد نویسی، کد نویسی تمیز، طراحی سیستم، سیستم دیزاین و تفکر سیستمی با بهراد زاری. یاد بگیرید چطور سیستم‌های مقیاس‌پذیر بسازید و کد تمیز بنویسید.",
  keywords: [
    "آموزش برنامه نویسی",
    "هنر کد نویسی",
    "کد نویسی تمیز",
    "طراحی سیستم",
    "سیستم دیزاین",
    "system design",
    "تفکر سیستمی",
    "معماری نرم افزار",
    "میکروسرویس",
    "مقیاس پذیری",
    "آموزش Node.js",
    "دوره برنامه نویسی",
    "بهراد زاری",
    "clean code",
    "software architecture",
    "scalability",
    "microservices",
    "backend development",
    "تفکر مهندسی نرم افزار",
  ],
  authors: [{ name: "بهراد زاری", url: "https://www.linkedin.com/in/behradz/" }],
  creator: "بهراد زاری",
  publisher: "بهراد زاری",
  generator: "v0.app",
  applicationName: "مسیر رشد تفکر مهندسی نرم افزار",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'android-chrome', url: '/android-chrome-192x192.png', sizes: '192x192' },
      { rel: 'android-chrome', url: '/android-chrome-512x512.png', sizes: '512x512' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'fa_IR',
    url: 'https://behrad.tech',
    siteName: 'مسیر رشد تفکر مهندسی نرم افزار',
    title: 'آموزش برنامه نویسی، طراحی سیستم و سیستم دیزاین',
    description: 'دوره‌های آموزش برنامه نویسی، هنر کد نویسی، کد نویسی تمیز، طراحی سیستم و سیستم دیزاین با بهراد زاری',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'مسیر رشد تفکر مهندسی نرم افزار',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'آموزش برنامه نویسی، طراحی سیستم و سیستم دیزاین',
    description: 'دوره‌های آموزش برنامه نویسی، هنر کد نویسی و طراحی سیستم با بهراد زاری',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://behrad.tech',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "tzhul4ifsw");
          `}
        </Script>
      </head>
      <body className={`${vazirmatn.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
