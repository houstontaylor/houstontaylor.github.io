'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show sending state
    setSending(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Show success state
    setSending(false);
    setSubmitted(true);
    
    // Reset form after delay
    setTimeout(() => {
      setFormState({
        name: '',
        email: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      url: 'https://linkedin.com/in/yourusername',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )
    },
    { 
      name: 'GitHub', 
      url: 'https://github.com/yourusername',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      )
    },
    { 
      name: 'Twitter', 
      url: 'https://twitter.com/yourusername',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4c-1.16.52-2.42.87-3.72 1.02A6.452 6.452 0 0 0 21.5 1.89a12.76 12.76 0 0 1-4.06 1.56 6.38 6.38 0 0 0-10.93 4.38v1.43C2.4 9.05 1 4 1 4s-6 5.8 4 12c-2.13 1.42-4.65 2.16-7 2 8 4.42 18 0 18-10.29 0-.24-.03-.5-.05-.73A9.03 9.03 0 0 0 22 4Z"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute right-0 top-0 w-1/3 h-1/2 bg-dotted-pattern bg-dotted-md opacity-40 -z-10"></div>
      <div className="absolute left-0 bottom-0 w-1/4 h-1/3 bg-[rgb(var(--secondary-accent))]/5 -z-10 rounded-tr-[100px]"></div>
      
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="inline-block px-4 py-1 rounded-full bg-[rgb(var(--accent))]/10 text-[rgb(var(--accent))] text-sm font-mono">
              Get In Touch
            </span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp} 
            className="text-4xl md:text-5xl font-display mb-6"
          >
            Let's Work Together
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp} 
            className="text-lg text-[rgb(var(--foreground))]/70 max-w-2xl mx-auto"
          >
            Have a project in mind or just want to say hello? Feel free to reach out!
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[rgb(var(--background))] rounded-lg p-8 shadow-soft border border-[rgb(var(--muted))]"
          >
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-16 h-16 bg-[rgb(var(--accent))]/10 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[rgb(var(--accent))]">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-display mb-3">Message Sent!</h3>
                <p className="text-[rgb(var(--foreground))]/70">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <label 
                    htmlFor="name" 
                    className={`text-sm font-medium transition-colors duration-200 ${
                      focused === 'name' ? 'text-[rgb(var(--accent))]' : 'text-[rgb(var(--foreground))]/70'
                    }`}
                  >
                    Name
                  </label>
                  <div className="relative">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formState.name}
                      onChange={handleChange}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      required
                      className={`w-full px-4 py-3 bg-transparent border rounded-md outline-none transition-all duration-300 ${
                        focused === 'name' 
                          ? 'border-[rgb(var(--accent))] shadow-[0_0_0_1px_rgb(var(--accent))]' 
                          : 'border-[rgb(var(--muted))] focus:border-[rgb(var(--accent))]'
                      }`}
                    />
                    {focused === 'name' && (
                      <motion.div 
                        layoutId="focusIndicator"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-0 right-0 w-2 h-2 rounded-full bg-[rgb(var(--accent))] -translate-y-1 translate-x-1"
                      />
                    )}
                  </div>
                </div>
                
                <div className="space-y-1">
                  <label 
                    htmlFor="email" 
                    className={`text-sm font-medium transition-colors duration-200 ${
                      focused === 'email' ? 'text-[rgb(var(--accent))]' : 'text-[rgb(var(--foreground))]/70'
                    }`}
                  >
                    Email
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      required
                      className={`w-full px-4 py-3 bg-transparent border rounded-md outline-none transition-all duration-300 ${
                        focused === 'email' 
                          ? 'border-[rgb(var(--accent))] shadow-[0_0_0_1px_rgb(var(--accent))]' 
                          : 'border-[rgb(var(--muted))] focus:border-[rgb(var(--accent))]'
                      }`}
                    />
                    {focused === 'email' && (
                      <motion.div 
                        layoutId="focusIndicator"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-0 right-0 w-2 h-2 rounded-full bg-[rgb(var(--accent))] -translate-y-1 translate-x-1"
                      />
                    )}
                  </div>
                </div>
                
                <div className="space-y-1">
                  <label 
                    htmlFor="message" 
                    className={`text-sm font-medium transition-colors duration-200 ${
                      focused === 'message' ? 'text-[rgb(var(--accent))]' : 'text-[rgb(var(--foreground))]/70'
                    }`}
                  >
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      required
                      rows={5}
                      className={`w-full px-4 py-3 bg-transparent border rounded-md outline-none transition-all duration-300 resize-none ${
                        focused === 'message' 
                          ? 'border-[rgb(var(--accent))] shadow-[0_0_0_1px_rgb(var(--accent))]' 
                          : 'border-[rgb(var(--muted))] focus:border-[rgb(var(--accent))]'
                      }`}
                    />
                    {focused === 'message' && (
                      <motion.div 
                        layoutId="focusIndicator"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-0 right-0 w-2 h-2 rounded-full bg-[rgb(var(--accent))] -translate-y-1 translate-x-1"
                      />
                    )}
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  disabled={sending}
                  className="w-full relative overflow-hidden group bg-[rgb(var(--accent))] hover:bg-[rgb(var(--accent))]/90 text-white rounded-md px-6 py-3 font-medium transition-colors duration-300"
                >
                  <span className={`flex items-center justify-center ${sending ? 'opacity-0' : 'opacity-100'} transition-opacity`}>
                    Send Message
                  </span>
                  {sending && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"></path>
                      </svg>
                    </div>
                  )}
                  <div className="absolute inset-0 w-full h-full bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </button>
              </form>
            )}
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >
            {/* Personal Info */}
            <div className="bg-[rgb(var(--background))] rounded-lg p-8 shadow-soft border border-[rgb(var(--muted))] space-y-6">
              <div className="space-y-2">
                <h3 className="font-display text-xl flex items-center">
                  <span className="w-6 h-6 rounded-full bg-[rgb(var(--accent))]/10 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[rgb(var(--accent))]">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </span>
                  Email
                </h3>
                <a 
                  href="mailto:hctaylor@stanford.edu" 
                  className="text-[rgb(var(--foreground))]/70 hover:text-[rgb(var(--accent))] transition-colors ml-9 block"
                >
                  hctaylor@stanford.edu
                </a>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-display text-xl flex items-center">
                  <span className="w-6 h-6 rounded-full bg-[rgb(var(--accent))]/10 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[rgb(var(--accent))]">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </span>
                  Location
                </h3>
                <p className="text-[rgb(var(--foreground))]/70 ml-9">
                  Stanford, California
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-display text-xl flex items-center">
                  <span className="w-6 h-6 rounded-full bg-[rgb(var(--accent))]/10 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[rgb(var(--accent))]">
                      <path d="M12 2v10M12 22v-3M3.9 5.9l1.4 1.4M18.7 16.7l1.4 1.4M5.3 18.1l-1.4 1.4M19.1 5.3l-1.4 1.4M4 12H2M22 12h-2"></path>
                    </svg>
                  </span>
                  Availability
                </h3>
                <p className="text-[rgb(var(--foreground))]/70 ml-9">
                  Available for freelance projects and collaborations
                </p>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="bg-[rgb(var(--background))] rounded-lg p-8 shadow-soft border border-[rgb(var(--muted))]">
              <h3 className="font-display text-xl mb-6">Connect Online</h3>
              
              <div className="space-y-5">
                {socialLinks.map((link, index) => (
                  <motion.a 
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center group hover:text-[rgb(var(--accent))] transition-colors"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + (index * 0.1) }}
                  >
                    <span className="w-10 h-10 rounded-full bg-[rgb(var(--accent))]/10 flex items-center justify-center mr-4 transition-all group-hover:bg-[rgb(var(--accent))] group-hover:text-white">
                      {link.icon}
                    </span>
                    <span className="font-medium">{link.name}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}