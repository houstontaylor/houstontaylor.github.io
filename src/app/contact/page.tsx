'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  
  // Scroll animation for paper airplane
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  const trailDraw = useTransform(scrollYProgress, [0, 1], [600, 0]);
  
  // Transform scroll progress to movement values with curved path
  const airplaneX = useTransform(scrollYProgress, [0, 1], [-400, 1400]);
  // Create a sine wave for loopy Y movement
  const airplaneY = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [500, 400, 450, 380, 420]);
  const airplaneRotate = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, -5, 5, -3, 2]);
  const trailLength = useTransform(scrollYProgress, [0, 0.2, 1], [0, 200, 600]);
  
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
    <div ref={containerRef} className="min-h-screen pt-20 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          
          {/* Header with rounded background */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center justify-center mb-8"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-px bg-[rgb(var(--accent))]"></div>
                <span className="text-[rgb(var(--accent))] font-mono text-sm tracking-[0.2em] uppercase">
                  Get In Touch
                </span>
                <div className="w-12 h-px bg-[rgb(var(--accent))]"></div>
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight"
            >
              Let's Work
              <br />
              <span className="text-[rgb(var(--accent))]">Together</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-[rgb(var(--foreground))]/70 leading-relaxed"
            >
              Have a project in mind? I'd love to hear about it. Send me a message and I'll get back to you within 24 hours.
            </motion.p>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="bg-[rgb(var(--background))] border border-[rgb(var(--foreground))]/10 rounded-2xl p-8 shadow-lg relative"
          >
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-[rgb(var(--accent))]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[rgb(var(--accent))]">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-bold mb-3">Message Sent!</h3>
                <p className="text-[rgb(var(--foreground))]/70">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label 
                      htmlFor="name" 
                      className={`text-sm font-medium transition-colors duration-200 ${
                        focused === 'name' ? 'text-[rgb(var(--accent))]' : 'text-[rgb(var(--foreground))]/70'
                      }`}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      required
                      className={`w-full px-4 py-3 bg-[rgb(var(--foreground))]/5 border rounded-lg outline-none transition-all duration-300 ${
                        focused === 'name' 
                          ? 'border-[rgb(var(--accent))] bg-[rgb(var(--accent))]/5' 
                          : 'border-[rgb(var(--foreground))]/10 focus:border-[rgb(var(--accent))]'
                      }`}
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label 
                      htmlFor="email" 
                      className={`text-sm font-medium transition-colors duration-200 ${
                        focused === 'email' ? 'text-[rgb(var(--accent))]' : 'text-[rgb(var(--foreground))]/70'
                      }`}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      required
                      className={`w-full px-4 py-3 bg-[rgb(var(--foreground))]/5 border rounded-lg outline-none transition-all duration-300 ${
                        focused === 'email' 
                          ? 'border-[rgb(var(--accent))] bg-[rgb(var(--accent))]/5' 
                          : 'border-[rgb(var(--foreground))]/10 focus:border-[rgb(var(--accent))]'
                      }`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label 
                    htmlFor="message" 
                    className={`text-sm font-medium transition-colors duration-200 ${
                      focused === 'message' ? 'text-[rgb(var(--accent))]' : 'text-[rgb(var(--foreground))]/70'
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    required
                    rows={6}
                    className={`w-full px-4 py-3 bg-[rgb(var(--foreground))]/5 border rounded-lg outline-none transition-all duration-300 resize-none ${
                      focused === 'message' 
                        ? 'border-[rgb(var(--accent))] bg-[rgb(var(--accent))]/5' 
                        : 'border-[rgb(var(--foreground))]/10 focus:border-[rgb(var(--accent))]'
                    }`}
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={sending}
                  className="w-full relative overflow-hidden group bg-[rgb(var(--accent))] hover:bg-[rgb(var(--accent))]/90 text-white rounded-lg px-8 py-4 font-medium transition-all duration-300 disabled:opacity-70"
                >
                  <span className={`flex items-center justify-center ${sending ? 'opacity-0' : 'opacity-100'} transition-opacity`}>
                    Send Message
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </span>
                  {sending && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"></path>
                      </svg>
                    </div>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}