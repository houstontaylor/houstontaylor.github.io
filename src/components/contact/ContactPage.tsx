'use client';

import { motion } from 'framer-motion';

export default function ContactPage() {
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      url: 'https://linkedin.com/in/yourusername',
      description: 'Connect with me professionally'
    },
    { 
      name: 'GitHub', 
      url: 'https://github.com/yourusername',
      description: 'Check out my code and projects'
    },
    { 
      name: 'Twitter', 
      url: 'https://twitter.com/yourusername',
      description: 'Follow for updates and thoughts'
    },
    { 
      name: 'Dribbble', 
      url: 'https://dribbble.com/yourusername',
      description: 'See my design work and process'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-28">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span className="text-[rgb(var(--accent))] text-sm tracking-widest uppercase mb-4 block">Contact</span>
          <h1 className="text-4xl md:text-6xl font-display mb-8 leading-tight">
            Let's Work Together
          </h1>
          <div className="text-lg md:text-xl text-[rgb(var(--foreground)/0.8)] max-w-2xl">
            <p>
              I'm currently available for freelance projects and collaboration opportunities.
              If you'd like to discuss a project or just say hello, feel free to reach out!
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-2xl font-display mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Email</h3>
                <a 
                  href="mailto:hctaylor@stanford.edu" 
                  className="text-[rgb(var(--accent))] hover:underline"
                >
                  hctaylor@stanford.edu
                </a>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Location</h3>
                <p className="text-[rgb(var(--foreground)/0.8)]">San Francisco, California</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Response Time</h3>
                <p className="text-[rgb(var(--foreground)/0.8)]">Usually within 24-48 hours</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-2xl font-display mb-6">Connect Online</h2>
            <div className="space-y-6">
              {socialLinks.map((link, index) => (
                <motion.div 
                  key={link.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                >
                  <h3 className="text-lg font-medium mb-1">{link.name}</h3>
                  <p className="text-[rgb(var(--foreground)/0.7)] text-sm mb-2">{link.description}</p>
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[rgb(var(--accent))] hover:underline inline-flex items-center"
                  >
                    {link.url.replace('https://', '')}
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      className="ml-1"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="py-12 border-t border-[rgb(var(--muted)/0.2)] text-center md:text-left"
        >
          <h2 className="text-2xl font-display mb-6">Let's Create Something Amazing</h2>
          <p className="text-lg text-[rgb(var(--foreground)/0.8)]">
            I'm excited to hear about your project and how we might work together!
          </p>
        </motion.div>
      </div>
    </div>
  );
}