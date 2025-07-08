'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function About() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

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
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  // Simplified skills for home page preview
  const highlightSkills = [
    { name: "UI/UX Design", color: "accent", description: "Creating intuitive interfaces" },
    { name: "React", color: "secondary-accent", description: "Building dynamic applications" },
    { name: "TypeScript", color: "accent", description: "Type-safe development" },
    { name: "Figma", color: "secondary-accent", description: "Design & prototyping" }
  ];

  const stats = [
    { number: "5+", label: "Years Experience", icon: "⚡" },
    { number: "8+", label: "Projects Built", icon: "🚀" },
    { number: "∞", label: "Ideas Generated", icon: "💡" }
  ];

  return (
    <section 
      className="py-20 md:py-32 relative overflow-hidden"
      aria-labelledby="about-section-heading"
    >
      {/* Magazine-style background elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        
        {/* Floating geometric shapes */}
        <motion.div 
          className="absolute top-1/4 right-10 w-24 h-24 border-2 border-[rgb(var(--accent))]/20 rounded-full"
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity }
          }}
        />
        
        {/* Magazine-style dot pattern */}
        <div 
          className="absolute bottom-1/4 left-10 w-40 h-40 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(rgb(var(--secondary-accent)) 2px, transparent 2px)',
            backgroundSize: '15px 15px'
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Magazine-style header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="inline-block px-4 py-1 rounded-full bg-[rgb(var(--secondary-accent))]/10 text-[rgb(var(--secondary-accent))] text-sm font-mono tracking-wide">
              MEET THE DESIGNER
            </span>
          </motion.div>
          
          <motion.h2 
            id="about-section-heading"
            variants={fadeInUp} 
            className="text-4xl md:text-6xl font-display mb-6 leading-tight"
          >
            Hey, I'm{" "}
            <span className="relative inline-block">
              <motion.span 
                className="absolute -bottom-1 left-0 w-full h-4 bg-[rgb(var(--accent))]/40 rounded-sm z-0"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                aria-hidden="true"
              />
              <span className="relative z-10">Houston</span>
            </span>
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp} 
            className="text-xl text-[rgb(var(--foreground))]/70 max-w-2xl mx-auto leading-relaxed"
          >
            A recent Stanford graduate creating digital experiences that make people{" "}
            <span className="relative inline-block text-[rgb(var(--accent))] font-medium">
              smile
              <motion.span 
                className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-[rgb(var(--accent))] rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 }}
                aria-hidden="true"
              />
            </span> and{" "}
            <span className="relative inline-block text-[rgb(var(--secondary-accent))] font-medium">
              succeed
              <motion.span 
                className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-[rgb(var(--secondary-accent))] rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.4 }}
                aria-hidden="true"
              />
            </span>.
          </motion.p>
        </motion.div>

        {/* Two-column layout with better spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column - Story & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Story snippet */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-[rgb(var(--foreground))]/80 leading-relaxed">
                I'm passionate about bridging the gap between{" "}
                <strong className="text-[rgb(var(--accent))]">beautiful design</strong> and{" "}
                <strong className="text-[rgb(var(--secondary-accent))]">functional code</strong>.
              </p>
              <p className="text-base text-[rgb(var(--foreground))]/70">
                Fresh out of Stanford with my Master's in Computer Science and a focus on Human-Computer Interaction,
                I love turning complex problems into simple, elegant solutions.
              </p>
            </div>

            {/* Fun stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="text-2xl mb-2 transition-transform duration-300 group-hover:scale-110">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-display font-bold text-[rgb(var(--accent))] mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-[rgb(var(--foreground))]/60 font-mono">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link 
                href="/about"
                className="group inline-flex items-center relative pt-8"
                aria-label="Learn more about Houston Taylor on the full about page"
              >
                <span className="relative px-8 py-3 block border-2 border-[rgb(var(--secondary-accent))] text-[rgb(var(--secondary-accent))] rounded-lg font-medium transition-all duration-300 hover:shadow-lg overflow-hidden group-hover:text-white">
                  <span className="relative z-10 flex items-center">
                    Learn More About Me
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-[rgb(var(--secondary-accent))] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg" aria-hidden="true"></span>
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Interactive Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Skills preview header */}
            <div className="text-center">
              <h3 className="text-2xl font-display font-bold mb-2">
                What I <span className="text-[rgb(var(--accent))]">Do</span>
              </h3>
              <p className="text-[rgb(var(--foreground))]/60 text-sm font-mono">
                Hover to explore my toolkit
              </p>
            </div>

            {/* Interactive skill cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlightSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className={`relative p-6 rounded-xl border-2 border-[rgb(var(--${skill.color}))]/20 bg-[rgb(var(--${skill.color}))]/5 transition-all duration-300 cursor-pointer group hover:border-[rgb(var(--${skill.color}))] hover:bg-[rgb(var(--${skill.color}))]/10 hover:scale-105`}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  role="button"
                  tabIndex={0}
                  aria-label={`${skill.name}: ${skill.description}`}
                >
                  <div className={`text-[rgb(var(--${skill.color}))] font-bold text-lg mb-2 transition-colors duration-300`}>
                    {skill.name}
                  </div>
                  <motion.div 
                    className="text-sm text-[rgb(var(--foreground))]/70 overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: hoveredSkill === skill.name ? 'auto' : 0,
                      opacity: hoveredSkill === skill.name ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {skill.description}
                  </motion.div>
                  
                  {/* Decorative corner accent */}
                  <div className={`absolute top-0 right-0 w-6 h-6 bg-[rgb(var(--${skill.color}))] rounded-bl-xl rounded-tr-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`} aria-hidden="true" />
                </motion.div>
              ))}
            </div>

            {/* Skill categories teaser */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center p-6 bg-[rgb(var(--foreground))]/5 rounded-xl border border-[rgb(var(--foreground))]/10"
            >
              <div className="text-sm text-[rgb(var(--foreground))]/60 mb-2">
                Plus expertise in
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Design Systems", "Accessibility", "Performance", "User Research"].map((item) => (
                  <span 
                    key={item}
                    className="px-3 py-1 text-xs bg-[rgb(var(--accent))]/10 text-[rgb(var(--foreground))]/70 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}