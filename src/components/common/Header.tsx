'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

export default function Header () {
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false)
      } else {
        setShow(true)
      }
      setLastScrollY(window.scrollY)
    }

    window.addEventListener('scroll', controlNavbar)
    return () => window.removeEventListener('scroll', controlNavbar)
  }, [lastScrollY])

  const navItems = [
    { name: 'WORK', path: '/projects' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' }
  ]

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: -10 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
        show ? 'translate-y-0' : '-translate-y-full'
      } bg-[rgb(var(--background))] dark:bg-[rgb(var(--background))] shadow-md`}
    >
      <div className='container flex items-center justify-between px-6 py-8 min-h-[6rem]'>

        {/* Left: logo + sun toggle */}
        <div className='flex items-center space-x-4'>
          <Link href='/' className='flex items-center'>
            <div className='w-16 h-16 relative overflow-hidden y-20'>
              <img
                src='/logo.png'
                alt='Logo'
                className='w-full h-full object-contain'
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.parentElement!.innerHTML = `
                    <div class="w-full h-full bg-[rgb(var(--accent))] flex items-center justify-center text-white font-display text-xl">
                      HT
                    </div>
                  `
                }}
              />
            </div>
          </Link>

          {/* Theme toggle with sun icon */}
          <ThemeToggle />
        </div>

        {/* Right: nav links — serif, spaced out */}
        <nav className='flex text-xl font-display tracking-wider uppercase'>
          {navItems.map((item, index) => (
            <div key={item.path} className={`shrink-0 ${index > 0 ? 'ml-8' : ''}`}>
              <Link
                href={item.path}
                className={`inline-block hover-link transition-colors duration-300 ${
                  pathname === item.path
                    ? 'text-[rgb(var(--foreground))] dark:text-[rgb(var(--accent))] font-semibold'
                    : 'text-[rgb(var(--foreground))] dark:text-[rgb(var(--accent))] hover:text-[rgb(var(--secondary-accent))]'
                }`}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}
