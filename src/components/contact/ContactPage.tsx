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
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSending(false);
    setSubmitted(true);
    
    setTimeout(() => {
      setFormState({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const contactMethods = [
    { 
      type: 'Email',
      value: 'houstonctaylor@gmail.com',
      href: 'mailto:houstonctaylor@gmail.com',
      icon: '✉️',
      description: 'Best for project inquiries'
    },
    { 
      type: 'LinkedIn',
      value: '@houston-taylor',
      href: 'https://www.linkedin.com/in/houston-taylor/',
      icon: '💼',
      description: 'Professional networking'
    },
    { 
      type: 'GitHub',
      value: '@houstontaylor',
      href: 'https://github.com/houstontaylor',
      icon: '💻',
      description: 'Code & repositories'
    }
  ];

  return (
    <section 
      className="py-16 md:py-24 relative overflow-hidden"
      aria-labelledby="contact-section-heading"
    >
      {/* Magazine-style background elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Large geometric accent */}
        <motion.div 
          className="absolute top-10 right-0 w-80 h-80 bg-[rgb(var(--secondary-accent))]/5 rounded-l-full"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
        
        {/* Editorial accent lines */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <motion.div 
            className="w-20 h-1 bg-[rgb(var(--accent))] mb-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          <motion.div 
            className="w-12 h-1 bg-[rgb(var(--secondary-accent))]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
          />
        </div>
        
        {/* Floating number typography */}
        <motion.div 
          className="absolute bottom-20 right-20 w-32 h-32 border-2 border-[rgb(var(--accent))]/20 rounded-full"
          initial={{ rotate: -10, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Magazine-style header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="inline-block px-4 py-1 rounded-full bg-[rgb(var(--accent))]/10 text-[rgb(var(--accent))] text-sm font-mono tracking-wide uppercase">
              Let's Connect
            </span>
          </motion.div>
          
          <motion.h2 
            id="contact-section-heading"
            variants={fadeInUp} 
            className="text-4xl md:text-6xl font-display mb-6 leading-tight"
          >
            Ready to{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Collaborate</span>
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-4 bg-[rgb(var(--secondary-accent))]/30 rounded-sm z-0"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
                aria-hidden="true"
              />
            </span>
            ?
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp} 
            className="text-xl text-[rgb(var(--foreground))]/70 max-w-2xl mx-auto leading-relaxed"
          >
            Got a project in mind? Let's turn your{" "}
            <span className="text-[rgb(var(--accent))] font-medium">ideas</span> into{" "}
            <span className="text-[rgb(var(--secondary-accent))] font-medium">reality</span>.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Contact Form - Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Form header with magazine-style accents */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-8 h-px bg-[rgb(var(--secondary-accent))] mr-4" />
                <span className="text-[rgb(var(--secondary-accent))] font-mono text-sm uppercase tracking-widest">
                  Send Message
                </span>
              </div>
              <h3 className="text-2xl font-display font-bold">Drop me a line</h3>
            </div>

            <div className="relative bg-[rgb(var(--background))] rounded-2xl p-8 border border-[rgb(var(--foreground))]/10 shadow-lg">
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-[rgb(var(--secondary-accent))]/10 rounded-bl-2xl rounded-tr-2xl" aria-hidden="true" />
              
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center py-12 text-center"
                  role="status"
                  aria-live="polite"
                >
                  <div className="w-16 h-16 bg-[rgb(var(--secondary-accent))]/10 rounded-full flex items-center justify-center mb-6" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[rgb(var(--secondary-accent))]" aria-hidden="true">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </div>
                  <h4 className="text-2xl font-display mb-3">Message Sent!</h4>
                  <p className="text-[rgb(var(--foreground))]/70">
                    Thanks for reaching out. I'll get back to you soon!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused(null)}
                        required
                        className="w-full px-4 py-4 bg-transparent border-2 border-[rgb(var(--foreground))]/10 rounded-xl focus:border-[rgb(var(--secondary-accent))] transition-all duration-300 outline-none"
                        placeholder=" "
                        aria-label="Your full name"
                      />
                      <label 
                        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                          focused === 'name' || formState.name 
                            ? '-top-2 text-sm px-2 bg-[rgb(var(--background))] text-[rgb(var(--secondary-accent))]' 
                            : 'top-4 text-[rgb(var(--foreground))]/50'
                        }`}
                      >
                        Your Name
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused(null)}
                        required
                        className="w-full px-4 py-4 bg-transparent border-2 border-[rgb(var(--foreground))]/10 rounded-xl focus:border-[rgb(var(--secondary-accent))] transition-all duration-300 outline-none"
                        placeholder=" "
                        aria-label="Your email address"
                      />
                      <label 
                        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                          focused === 'email' || formState.email 
                            ? '-top-2 text-sm px-2 bg-[rgb(var(--background))] text-[rgb(var(--secondary-accent))]' 
                            : 'top-4 text-[rgb(var(--foreground))]/50'
                        }`}
                      >
                        Email Address
                      </label>
                    </div>
                  </div>

                  <div className="relative">
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      required
                      rows={5}
                      className="w-full px-4 py-4 bg-transparent border-2 border-[rgb(var(--foreground))]/10 rounded-xl focus:border-[rgb(var(--secondary-accent))] transition-all duration-300 outline-none resize-none"
                      placeholder=" "
                      aria-label="Your message"
                    />
                    <label 
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focused === 'message' || formState.message 
                          ? '-top-2 text-sm px-2 bg-[rgb(var(--background))] text-[rgb(var(--secondary-accent))]' 
                          : 'top-4 text-[rgb(var(--foreground))]/50'
                      }`}
                    >
                      Tell me about your project
                    </label>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={sending}
                    className="w-full group relative overflow-hidden bg-gradient-to-r from-[rgb(var(--accent))] to-[rgb(var(--secondary-accent))] text-white py-4 px-8 rounded-xl font-medium text-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02] disabled:opacity-50"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    aria-label={sending ? "Sending your message" : "Send message"}
                  >
                    <span className={`flex items-center justify-center ${sending ? 'opacity-0' : 'opacity-100'} transition-opacity`}>
                      Send Message
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </span>
                    {sending && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-6 h-6 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"/>
                        </svg>
                      </div>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
          
          {/* Contact Methods - Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact methods header */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <span className="text-[rgb(var(--accent))] font-mono text-sm uppercase tracking-widest mr-4">
                  Other Ways
                </span>
                <div className="flex-1 h-px bg-[rgb(var(--accent))]/20" />
              </div>
              <h3 className="text-2xl font-display font-bold">Find me online</h3>
            </div>

            {/* Contact method cards */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.type}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group block relative bg-[rgb(var(--background))] border border-[rgb(var(--foreground))]/10 rounded-xl p-6 transition-all duration-300 hover:border-[rgb(var(--secondary-accent))]/30 hover:shadow-lg hover:scale-[1.02]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  aria-label={`Contact via ${method.type}: ${method.value}`}
                >
                  {/* Card accent */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[rgb(var(--accent))] to-[rgb(var(--secondary-accent))] rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="flex items-center">
                    <div className="text-2xl mr-4" role="img" aria-hidden="true">
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-display font-bold text-lg group-hover:text-[rgb(var(--secondary-accent))] transition-colors">
                            {method.type}
                          </h4>
                          <p className="text-[rgb(var(--foreground))]/60 text-sm mb-1">
                            {method.description}
                          </p>
                          <p className="text-[rgb(var(--foreground))]/80 font-mono text-sm">
                            {method.value}
                          </p>
                        </div>
                        <motion.svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="20" 
                          height="20" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          className="text-[rgb(var(--secondary-accent))] opacity-0 group-hover:opacity-100 transition-opacity"
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          aria-hidden="true"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </motion.svg>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Additional info card - non-clickable styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative bg-[rgb(var(--foreground))]/5 border-2 border-dashed border-[rgb(var(--accent))]/30 rounded-xl p-6"
            >
              {/* Non-clickable indicator */}
              <div className="absolute top-3 right-3 w-2 h-2 bg-[rgb(var(--accent))]/40 rounded-full" aria-hidden="true" />
              
              <div className="flex items-start">
                <div className="text-2xl mr-4" role="img" aria-label="Location pin">📍</div>
                <div>
                  <h4 className="font-display font-bold text-lg mb-2 text-[rgb(var(--accent))]">Currently in</h4>
                  <p className="text-[rgb(var(--foreground))]/70 mb-2 font-medium">Stanford, California</p>
                  <p className="text-sm text-[rgb(var(--foreground))]/60">
                    Available for remote work and local meetups
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}