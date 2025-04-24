'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/yourusername' },
    { name: 'Twitter', url: 'https://twitter.com/yourusername' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
    { name: 'Dribbble', url: 'https://dribbble.com/yourusername' },
  ];

  return (
    <footer className="py-16 border-t border-muted/20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div className="space-y-4">
            <Link href="/" className="text-xl font-medium">
              Houston Taylor
            </Link>
            <p className="text-foreground/70 max-w-xs">
              UI/UX Designer & Frontend Developer creating thoughtful, engaging digital experiences.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-foreground/70 hover:text-accent transition-colors w-fit hover-link">
                Home
              </Link>
              <Link href="/projects" className="text-foreground/70 hover:text-accent transition-colors w-fit hover-link">
                Projects
              </Link>
              <Link href="/about" className="text-foreground/70 hover:text-accent transition-colors w-fit hover-link">
                About
              </Link>
              <Link href="/contact" className="text-foreground/70 hover:text-accent transition-colors w-fit hover-link">
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Connect</h3>
            <div className="flex flex-col space-y-2">
              {socialLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-foreground/70 hover:text-accent transition-colors w-fit hover-link"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-muted/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/50">
            © {currentYear} Houston Taylor. All rights reserved.
          </p>
          
          <motion.a 
            href="mailto:contact@houstontaylor.com"
            className="text-sm text-foreground/50 hover:text-accent transition-colors mt-4 md:mt-0"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            contact@houstontaylor.com
          </motion.a>
        </div>
      </div>
    </footer>
  );
}