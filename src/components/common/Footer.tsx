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

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={footerVariants}
      className="border-t border-muted/20 mt-24 py-12 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div variants={itemVariants} className="space-y-2">
            <h3 className="text-lg font-display font-medium">Houston Taylor</h3>
            <p className="text-sm text-foreground/70">
              UI/UX Designer & Frontend Developer creating thoughtful, engaging digital experiences.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-2">
            <h3 className="text-lg font-display font-medium">Links</h3>
            <ul className="space-y-1">
              <li><Link href="/" className="text-sm text-foreground/70 hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/projects" className="text-sm text-foreground/70 hover:text-accent transition-colors">Projects</Link></li>
              <li><Link href="/about" className="text-sm text-foreground/70 hover:text-accent transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-sm text-foreground/70 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-2">
            <h3 className="text-lg font-display font-medium">Connect</h3>
            <ul className="space-y-1">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/70 hover:text-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="text-center text-sm text-foreground/50 pt-4 border-t border-muted/10">
          © {currentYear} Houston Taylor. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
}