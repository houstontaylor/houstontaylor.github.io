'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function About() {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2
      }
    }
  };

  // Skills with consistent categorization
  const skills = [
    { category: "Design", items: ["UI/UX Design", "Wireframing", "Prototyping", "User Research", "Figma", "Adobe XD"] },
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"] },
    { category: "Other", items: ["Git", "Responsive Design", "Accessibility", "SEO", "Performance Optimization"] }
  ];

  return (
    <section className="py-28 md:py-40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <motion.div
            className="md:col-span-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
          >
            <motion.span variants={fadeInLeft} className="text-[rgb(var(--accent))] text-sm tracking-widest uppercase mb-4 block font-mono">About Me</motion.span>
            <motion.h2 variants={fadeInLeft} className="text-4xl md:text-5xl font-display mb-8 leading-tight">
              Crafting Digital Experiences
            </motion.h2>
            <motion.div variants={fadeInLeft} className="space-y-6 text-lg text-[rgb(var(--foreground))]/80">
              <p>
                I'm a passionate UI/UX designer and frontend developer studying Computer Science and Human-Computer Interaction at Stanford University. My focus is on creating intuitive and engaging digital experiences that bridge the gap between users and technology.
              </p>
              <p>
                With experience in user research, wireframing, prototyping, and frontend development, I bring a holistic approach to creating digital products that users love.
              </p>
            </motion.div>
            <motion.div variants={fadeInLeft} className="mt-10">
              <Link 
                href="/about"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-[rgb(var(--accent))]/10 text-[rgb(var(--accent))] hover:bg-[rgb(var(--accent))]/20 transition-all duration-300 group"
              >
                More About Me
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="md:col-span-5 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              variants={fadeInRight}
              className="aspect-square bg-[rgb(var(--foreground))]/5 rounded-xl overflow-hidden"
            >
              {/* Replace with your actual image */}
              <div className="h-full w-full flex items-center justify-center">
                <span className="text-[rgb(var(--foreground))]/30">Your Photo</span>
              </div>
            </motion.div>
            <motion.div 
              variants={fadeInRight}
              className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border-2 border-[rgb(var(--accent))] rounded-xl -z-10"
              transition={{ delay: 0.4 }}
            ></motion.div>

            {/* Skills section with improved spacing */}
            <motion.div
              variants={fadeInRight}
              className="mt-16 space-y-6"
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-xl font-display mb-4">Skills & Expertise</h3>
              
              {skills.map((skillGroup, i) => (
                <div key={skillGroup.category} className="space-y-3">
                  <h4 className="text-[rgb(var(--secondary-accent))] font-mono text-sm uppercase tracking-wider">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map(skill => (
                      <span 
                        key={skill} 
                        className="px-3 py-1 text-sm bg-[rgb(var(--accent))]/10 text-[rgb(var(--foreground))] rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}