import { Footer } from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nojju',
  description: 'Unleashing Outdoor Camping Adventures and Products Insights',
  keywords: 'camping, Camping Tent, Sleeping bag, Camping stove, Camping chairs, Lantern/Flashlight, Cooler/Ice chest, Camping cookware set, Campfire grill, Hammock, Camping mattress/pad, Backpack, Water filter/purifier, Portable camping shower, Camping table, Campfire cooking utensils, Inflatable camping pillow, Portable camping toilet, First aid kit, Camping knife/multi-tool, Portable power bank/solar charger,'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
