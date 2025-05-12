'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };
  
  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const skills = [
    { category: "Design", items: ["UI/UX Design", "Wireframing", "Prototyping", "User Research", "Figma", "Adobe XD"] },
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"] },
    { category: "Other", items: ["Git", "Responsive Design", "Accessibility", "SEO", "Performance Optimization"] }
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute left-0 top-1/3 w-full h-screen -skew-y-6 bg-[rgb(var(--accent))]/5 -z-10 transform-gpu"></div>
      <motion.div 
        className="absolute -right-20 top-20 w-64 h-64 rounded-full bg-[rgb(var(--accent))]/10 -z-10 blur-3xl"
        animate={{ 
          x: [0, 20, 0],
          opacity: [0.4, 0.7, 0.4] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
      />
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <motion.div
            className="md:col-span-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.div variants={fadeInLeft} className="mb-4">
              <span className="inline-block px-4 py-1 rounded-full bg-[rgb(var(--accent))]/10 text-[rgb(var(--accent))] text-sm font-mono">
                About Me
              </span>
            </motion.div>
            
            <motion.h2 
              variants={fadeInLeft} 
              className="text-3xl md:text-4xl font-display mb-8 leading-tight"
            >
              Crafting Digital Experiences with Purpose
            </motion.h2>
            
            <motion.div variants={fadeInLeft} className="space-y-6 text-lg text-[rgb(var(--foreground))]/80">
              <p>
                I'm a passionate UI/UX designer and frontend developer studying Computer Science 
                and Human-Computer Interaction at Stanford University. My focus is on creating 
                intuitive and engaging digital experiences that connect people with technology in 
                meaningful ways.
              </p>
              <p>
                With experience in user research, wireframing, prototyping, and frontend development, 
                I bring a holistic approach to creating digital products that users love. I believe 
                great design should be both beautiful and functional, with careful attention to the 
                smallest details.
              </p>
            </motion.div>
            
            <motion.div 
              variants={fadeInLeft} 
              className="mt-8"
            >
              <Link 
                href="/about"
                className="group relative overflow-hidden inline-flex items-center"
              >
                <span className="relative z-10 px-6 py-3 block border border-[rgb(var(--accent))] text-[rgb(var(--accent))] rounded-lg font-medium transition-all duration-300 group-hover:text-white">
                  <span className="flex items-center">
                    More About Me
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </span>
                <span className="absolute inset-0 bg-[rgb(var(--accent))] w-0 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="md:col-span-6 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              variants={fadeInRight}
              className="bg-[rgb(var(--background))] rounded-lg p-6 soft-shadow border border-[rgb(var(--muted))]"
            >
              <h3 className="text-xl font-display mb-6 text-[rgb(var(--foreground))]">Skills & Expertise</h3>
              
              <div className="space-y-8">
                {skills.map((skillGroup, index) => (
                  <motion.div 
                    key={skillGroup.category}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-[rgb(var(--secondary-accent))] font-mono text-sm uppercase tracking-wider mb-3">
                      {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map(skill => (
                        <span 
                          key={skill} 
                          className="px-3 py-1 text-sm bg-[rgb(var(--accent))]/10 text-[rgb(var(--foreground))] rounded-md hover:bg-[rgb(var(--accent))]/20 transition-colors cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="mt-8 p-4 bg-[rgb(var(--accent))]/5 rounded-lg border border-[rgb(var(--accent))]/10 relative overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-[rgb(var(--accent))]"></div>
                <p className="text-[rgb(var(--foreground))]/90 text-sm italic">
                  "I'm passionate about creating digital experiences that are not only visually appealing 
                  but also intuitive and accessible to all users."
                </p>
              </motion.div>
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 border-2 border-dashed border-[rgb(var(--accent))]/30 rounded-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
            />
            <motion.div 
              className="absolute -z-10 -top-6 -left-6 w-24 h-24 bg-[rgb(var(--secondary-accent))]/10 rounded-full blur-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              viewport={{ once: true }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}