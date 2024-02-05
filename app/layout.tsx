import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import logo from '@/assets/FullLogo.png'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import 'regenerator-runtime/runtime.js'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quack-coding',
  description: 'Rubber duck coding companion with AI capabilities',
  icons: {
    icon: '/favicon.ico',
  },
  referrer: 'origin-when-cross-origin',
  keywords: ['coding', 'rubber-duck', 'coding-help'],
  creator: 'Nicholas Milligan',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="h-auto flex items-center justify-between p-2">
          <section className="flex gap-4">
            <Link href="https://github.com/NicMilli">
              <FontAwesomeIcon icon={faGithub} size="2xl" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/nicholaskmilligan/"
              className="flex justify-center"
            >
              <div className="bg-white h-[20px] w-[20px] absolute -z-10 self-center"></div>
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2xl"
                color="#0077b5"
                className="z-1"
              />
            </Link>
          </section>

          <a href="https://www.buymeacoffee.com/nicmilligan" target="_blank">
            <Image
              src="https://cdn.buymeacoffee.com/buttons/default-orange.png"
              alt="Buy Me A Coffee"
              className="rounded-lg w-[174px] h-auto"
              width={0}
              height={0}
              sizes="100vw"
            />
          </a>
        </header>
        {children}
        <footer className="flex-column items-center justify-center text-center w-full h-auto border-t text-white">
          <div className="flex items-center w-full justify-center">
            <Image
              src={logo}
              width={0}
              height={0}
              sizes="100vw"
              className="rounded-lg w-auto h-[80px]"
              alt="Nicholas Milligan Logo"
            />
          </div>

          <p className="text-md">&copy; 2024 </p>
        </footer>
      </body>
    </html>
  )
}
