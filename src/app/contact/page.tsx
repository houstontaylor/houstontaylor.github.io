'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  
  // Refs for editorial markup animations
  const heroRef = useRef<HTMLDivElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  // Detect when sections are in view
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const contactInfoInView = useInView(contactInfoRef, { once: true, margin: "-50px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-50px" });
  
  // Editorial markup animation variants
  const underlineVariants = {
    hidden: { width: 0 },
    visible: (delay: number) => ({
      width: "100%",
      transition: {
        duration: 0.8,
        delay: delay,
        ease: "easeOut"
      }
    })
  };

  const highlightVariants = {
    hidden: { width: 0 },
    visible: (delay: number) => ({
      width: "100%",
      transition: {
        duration: 1,
        delay: delay,
        ease: "easeInOut"
      }
    })
  };

  const markupAnnotationVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -10 },
    visible: (delay: number) => ({
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: "backOut"
      }
    })
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

  return (
    <div className="min-h-screen pt-20 pb-16 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--background))] via-[rgb(var(--background))] to-[rgb(var(--accent))]/5 -z-10" />
      <div className="absolute top-1/4 right-10 w-32 h-32 bg-[rgb(var(--secondary-accent))]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/3 left-10 w-24 h-24 bg-[rgb(var(--accent))]/10 rounded-full blur-2xl -z-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Editorial Markup Hero Section */}
          <div ref={heroRef} className="text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center justify-center mb-8"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-px bg-[rgb(var(--accent))]" />
                <span className="text-[rgb(var(--accent))] font-mono text-sm tracking-[0.2em] uppercase">
                  Get In Touch
                </span>
                <div className="w-16 h-px bg-[rgb(var(--accent))]" />
              </div>
            </motion.div>
            
            {/* Main headline with editorial markups */}
            <div className="relative mb-8">
              <motion.h1
                className="text-5xl md:text-7xl font-display font-bold leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: heroInView ? 1 : 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="relative inline-block mb-4">
                  Let's Create
                  {/* Editorial underline */}
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1 bg-[rgb(var(--accent))]/60"
                    variants={underlineVariants}
                    initial="hidden"
                    animate={heroInView ? "visible" : "hidden"}
                    custom={1}
                  />
                  {/* Editorial circle annotation */}
                  <motion.div
                    className="absolute -top-8 -right-12 w-16 h-16 border-2 border-[rgb(var(--secondary-accent))] rounded-full"
                    variants={markupAnnotationVariants}
                    initial="hidden"
                    animate={heroInView ? "visible" : "hidden"}
                    custom={1.5}
                  />
                  <motion.div
                    className="absolute -top-4 -right-8 text-[rgb(var(--secondary-accent))] font-mono text-sm"
                    variants={markupAnnotationVariants}
                    initial="hidden"
                    animate={heroInView ? "visible" : "hidden"}
                    custom={2}
                  >
                    ✓
                  </motion.div>
                </div>
                <br />
                <div className="relative inline-block text-[rgb(var(--secondary-accent))]">
                  Something Great
                  {/* Editorial highlight */}
                  <motion.div
                    className="absolute inset-0 bg-[rgb(var(--secondary-accent))]/20 -z-10"
                    variants={highlightVariants}
                    initial="hidden"
                    animate={heroInView ? "visible" : "hidden"}
                    custom={2.5}
                  />
                  {/* Editorial arrow */}
                  <motion.div
                    className="absolute -left-16 top-1/2 transform -translate-y-1/2"
                    variants={markupAnnotationVariants}
                    initial="hidden"
                    animate={heroInView ? "visible" : "hidden"}
                    custom={3}
                  >
                    <svg width="40" height="20" className="text-[rgb(var(--accent))]">
                      <path
                        d="M5 10 L30 10 M25 5 L30 10 L25 15"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                </div>
              </motion.h1>
            </div>
            
            {/* Subtitle with editorial markup */}
            <div className="relative">
              <motion.div
                className="text-lg md:text-xl text-[rgb(var(--foreground))]/70 leading-relaxed max-w-2xl mx-auto relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: heroInView ? 1 : 0 }}
                transition={{ delay: 4, duration: 0.5 }}
              >
                Have a project in mind? I'd love to hear about it and bring your vision to life.
                
                {/* Editorial markup bracket */}
                <motion.div
                  className="absolute -left-8 top-0 bottom-0 border-l-2 border-[rgb(var(--accent))] opacity-60"
                  variants={markupAnnotationVariants}
                  initial="hidden"
                  animate={heroInView ? "visible" : "hidden"}
                  custom={4.5}
                />
              </motion.div>
            </div>
          </div>

          {/* Contact info with editorial annotations */}
          <div ref={contactInfoRef} className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: contactInfoInView ? 1 : 0, y: contactInfoInView ? 0 : 30 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            >
              {/* Email */}
              <div className="relative">
                <motion.div
                  className="text-lg font-display mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: contactInfoInView ? 1 : 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  Email
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-[rgb(var(--accent))]"
                    variants={underlineVariants}
                    initial="hidden"
                    animate={contactInfoInView ? "visible" : "hidden"}
                    custom={1.5}
                  />
                </motion.div>
                <motion.a
                  href="mailto:houstonctaylor@gmail.com"
                  className="text-[rgb(var(--foreground))]/70 relative inline-block transition-all duration-300 cursor-pointer group"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: contactInfoInView ? 1 : 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(var(--accent), 0.1)';
                    e.currentTarget.style.color = 'rgb(var(--accent))';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'rgba(var(--foreground), 0.7)';
                  }}
                  aria-label="Send email to Houston Taylor at houstonctaylor@gmail.com"
                  role="button"
                >
                  houstonctaylor@gmail.com
                  {/* Editorial checkmark */}
                  <motion.div
                    className="absolute -top-6 -right-4 text-[rgb(var(--secondary-accent))] font-bold text-xl"
                    variants={markupAnnotationVariants}
                    initial="hidden"
                    animate={contactInfoInView ? "visible" : "hidden"}
                    custom={2}
                    aria-hidden="true"
                  >
                    ✓
                  </motion.div>
                  {/* Hover underline that transitions to orange */}
                  <motion.div
                    className="absolute bottom-0 left-4 h-0.5 w-0 transition-all duration-300 group-hover:w-[calc(100%-2rem)]"
                    style={{ backgroundColor: 'rgb(var(--secondary-accent))' }}
                    aria-hidden="true"
                  />
                </motion.a>
              </div>

              {/* Location */}
              <div className="relative">
                <motion.div
                  className="text-lg font-display mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: contactInfoInView ? 1 : 0 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                >
                  Location
                  <motion.div
                    className="absolute inset-0 bg-[rgb(var(--accent))]/20 -z-10"
                    variants={highlightVariants}
                    initial="hidden"
                    animate={contactInfoInView ? "visible" : "hidden"}
                    custom={1.8}
                  />
                </motion.div>
                <motion.div
                  className="text-[rgb(var(--foreground))]/70"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: contactInfoInView ? 1 : 0 }}
                  transition={{ delay: 1.3, duration: 0.5 }}
                >
                  Stanford, California
                </motion.div>
              </div>

              {/* Availability */}
              <div className="relative">
                <motion.div
                  className="text-lg font-display mb-2 relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: contactInfoInView ? 1 : 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  Availability
                  {/* Editorial bracket */}
                  <motion.div
                    className="absolute -left-4 top-0 bottom-0 border-l-2 border-[rgb(var(--secondary-accent))] opacity-60"
                    variants={markupAnnotationVariants}
                    initial="hidden"
                    animate={contactInfoInView ? "visible" : "hidden"}
                    custom={2.2}
                  />
                </motion.div>
                <motion.div
                  className="text-[rgb(var(--foreground))]/70"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: contactInfoInView ? 1 : 0 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                >
                  Open for new projects
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.8 }}
            className="backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl relative max-w-2xl mx-auto"
            style={{
              background: 'linear-gradient(135deg, rgb(var(--background)), rgba(var(--accent), 0.08), rgb(var(--background)))',
              border: '1px solid rgba(var(--accent), 0.2)'
            }}
          >
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
                role="alert"
                aria-live="polite"
              >
                <div className="w-20 h-20 bg-[rgb(var(--accent))]/10 rounded-full flex items-center justify-center mb-6 mx-auto" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[rgb(var(--accent))]" aria-hidden="true">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-bold mb-3">Message Sent!</h3>
                <p className="text-[rgb(var(--foreground))]/70">
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" role="form" aria-label="Contact form">
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
                      className="w-full px-4 py-4 bg-transparent border-2 border-[rgb(var(--foreground))]/10 rounded-xl focus:border-[rgb(var(--accent))] transition-colors duration-300 outline-none peer"
                      placeholder=" "
                      aria-label="Your full name"
                      aria-required="true"
                    />
                    <label 
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focused === 'name' || formState.name 
                          ? '-top-2 text-sm px-2' 
                          : 'top-4'
                      }`}
                      style={{
                        backgroundColor: focused === 'name' || formState.name ? 'rgb(var(--background))' : 'transparent',
                        color: focused === 'name' || formState.name ? 'rgb(var(--accent))' : 'rgba(var(--foreground), 0.5)'
                      }}
                      aria-hidden="true"
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
                      className="w-full px-4 py-4 bg-transparent border-2 border-[rgb(var(--foreground))]/10 rounded-xl focus:border-[rgb(var(--accent))] transition-colors duration-300 outline-none"
                      placeholder=" "
                      aria-label="Your email address"
                      aria-required="true"
                      aria-describedby="email-hint"
                    />
                    <label 
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focused === 'email' || formState.email 
                          ? '-top-2 text-sm px-2' 
                          : 'top-4'
                      }`}
                      style={{
                        backgroundColor: focused === 'email' || formState.email ? 'rgb(var(--background))' : 'transparent',
                        color: focused === 'email' || formState.email ? 'rgb(var(--accent))' : 'rgba(var(--foreground), 0.5)'
                      }}
                      aria-hidden="true"
                    >
                      Email Address
                    </label>
                    <div id="email-hint" className="sr-only">
                      We'll use this email to respond to your message
                    </div>
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
                    className="w-full px-4 py-4 bg-transparent border-2 border-[rgb(var(--foreground))]/10 rounded-xl focus:border-[rgb(var(--accent))] transition-colors duration-300 outline-none resize-none"
                    placeholder=" "
                    aria-label="Your message or project details"
                    aria-required="true"
                    aria-describedby="message-hint"
                  />
                  <label 
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focused === 'message' || formState.message 
                        ? '-top-2 text-sm px-2' 
                        : 'top-4'
                    }`}
                    style={{
                      backgroundColor: focused === 'message' || formState.message ? 'rgb(var(--background))' : 'transparent',
                      color: focused === 'message' || formState.message ? 'rgb(var(--accent))' : 'rgba(var(--foreground), 0.5)'
                    }}
                    aria-hidden="true"
                  >
                    Tell me about your project
                  </label>
                  <div id="message-hint" className="sr-only">
                    Describe your project, timeline, or any questions you have
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={sending}
                  className="w-full group relative overflow-hidden bg-[rgb(var(--accent))] text-white py-4 px-8 rounded-xl font-medium text-lg transition-all duration-300 hover:shadow-xl hover:shadow-[rgb(var(--accent))]/20 disabled:opacity-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label={sending ? "Sending your message, please wait" : "Send your message to Houston Taylor"}
                  aria-disabled={sending}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {sending ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3" aria-hidden="true" />
                        Sending...
                        <span className="sr-only">Your message is being sent</span>
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-[rgb(var(--secondary-accent))] translate-y-full transition-transform duration-300 group-hover:translate-y-0" aria-hidden="true" />
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Bottom CTA with editorial markup */}
          <div ref={ctaRef} className="text-center mt-20">
            <motion.div
              className="relative inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: ctaInView ? 1 : 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="text-lg text-[rgb(var(--foreground))]/60 font-mono relative">
                Ready to start something amazing?
                
                {/* Editorial question mark annotation */}
                <motion.div
                  className="absolute -top-8 -right-8 w-8 h-8 border-2 border-[rgb(var(--secondary-accent))] rounded-full flex items-center justify-center text-[rgb(var(--secondary-accent))] font-bold"
                  variants={markupAnnotationVariants}
                  initial="hidden"
                  animate={ctaInView ? "visible" : "hidden"}
                  custom={1}
                >
                  ?
                </motion.div>
                
                {/* Editorial underline */}
                <motion.div
                  className="absolute -bottom-2 left-0 h-0.5 bg-[rgb(var(--accent))]"
                  variants={underlineVariants}
                  initial="hidden"
                  animate={ctaInView ? "visible" : "hidden"}
                  custom={1.5}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}