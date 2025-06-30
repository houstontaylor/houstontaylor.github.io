'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  
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
      url: 'https://linkedin.com/in/yourprofile',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      )
    },
    { 
      name: 'Twitter', 
      url: 'https://twitter.com/yourusername',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
        </svg>
      )
    }
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Form appears immediately, no scroll wait */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex-1 flex flex-col"
      >
        {/* Minimal form header */}
        <div className="mb-12">
          <h2 className="text-3xl font-display font-light mb-4">
            Send a <span className="font-medium text-[rgb(var(--accent))]">message</span>
          </h2>
          <p className="text-[rgb(var(--foreground))]/50">
            I'll get back to you within 24 hours.
          </p>
        </div>

        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[rgb(var(--accent))]/10 border border-[rgb(var(--accent))]/20 rounded-xl p-8 text-center"
          >
            <div className="w-16 h-16 bg-[rgb(var(--accent))]/20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[rgb(var(--accent))]">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </div>
            <h3 className="text-xl font-display font-bold mb-3">Message Sent! 🎉</h3>
            <p className="text-[rgb(var(--foreground))]/70">
              Thank you for reaching out. I'll get back to you as soon as possible.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8 flex-1 flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label 
                  htmlFor="name" 
                  className={`text-sm font-medium transition-colors duration-200 ${
                    focused === 'name' ? 'text-[rgb(var(--accent))]' : 'text-[rgb(var(--foreground))]/50'
                  }`}
                >
                  Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    required
                    className={`w-full px-0 py-3 bg-transparent border-0 border-b-2 outline-none transition-all duration-300 ${
                      focused === 'name' 
                        ? 'border-[rgb(var(--accent))]' 
                        : 'border-[rgb(var(--foreground))]/10 focus:border-[rgb(var(--accent))]'
                    }`}
                    placeholder="Your name"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label 
                  htmlFor="email" 
                  className={`text-sm font-medium transition-colors duration-200 ${
                    focused === 'email' ? 'text-[rgb(var(--accent))]' : 'text-[rgb(var(--foreground))]/50'
                  }`}
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    required
                    className={`w-full px-0 py-3 bg-transparent border-0 border-b-2 outline-none transition-all duration-300 ${
                      focused === 'email' 
                        ? 'border-[rgb(var(--accent))]' 
                        : 'border-[rgb(var(--foreground))]/10 focus:border-[rgb(var(--accent))]'
                    }`}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-3 flex-1 flex flex-col">
              <label 
                htmlFor="message" 
                className={`text-sm font-medium transition-colors duration-200 ${
                  focused === 'message' ? 'text-[rgb(var(--accent))]' : 'text-[rgb(var(--foreground))]/50'
                }`}
              >
                Message
              </label>
              <div className="relative flex-1 flex flex-col">
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  required
                  rows={8}
                  className={`w-full px-0 py-3 bg-transparent border-0 border-b-2 outline-none transition-all duration-300 resize-none flex-1 ${
                    focused === 'message' 
                      ? 'border-[rgb(var(--accent))]' 
                      : 'border-[rgb(var(--foreground))]/10 focus:border-[rgb(var(--accent))]'
                  }`}
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>
            </div>
            
            <div className="pt-8">
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
            </div>
          </form>
        )}

        {/* Minimal social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-[rgb(var(--foreground))]/10"
        >
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a 
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[rgb(var(--foreground))]/5 hover:bg-[rgb(var(--accent))] text-[rgb(var(--foreground))]/40 hover:text-white transition-all duration-300 flex items-center justify-center group"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + (index * 0.1), duration: 0.4 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}