'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      }
    }
  };

  return (
    <>
      {/* Section divider for visual separation */}
      <div className="section-divider" />
      
      <section className="py-24 md:py-32">
        <div className="container mx-auto">
          {/* Section header - centered */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-display mb-6 relative inline-block"
            >
              About Me
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-[rgb(var(--secondary-accent))]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </motion.h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
            <motion.div
              className="md:col-span-7"
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
              <motion.h3 
                variants={fadeInUp} 
                className="text-3xl md:text-4xl font-display mb-8 leading-tight"
              >
                Crafting Digital Experiences
              </motion.h3>
              
              <motion.div variants={fadeInUp} className="space-y-6 text-lg text-foreground/80">
                <p>
                  I'm a passionate UI/UX designer and frontend developer studying Computer Science 
                  and Human-Computer Interaction at Stanford University. My focus is on creating 
                  intuitive and engaging digital experiences that bridge the gap between users and technology.
                </p>
                <p>
                  With experience in user research, wireframing, prototyping, and frontend development, 
                  I bring a holistic approach to creating digital products that users love.
                </p>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp} 
                className="mt-10"
              >
                <Link 
                  href="/about"
                  className="inline-flex items-center text-[rgb(var(--accent))] group"
                >
                  <span className="mr-2">More About Me</span>
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    className="transform group-hover:translate-x-1 transition-transform"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="md:col-span-5 relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="aspect-square bg-gradient-to-br from-pink-100 to-green-50 dark:from-pink-900/20 dark:to-green-900/10 rounded-sm overflow-hidden">
                {/* Replace with your actual image */}
                <div className="h-full w-full flex items-center justify-center border border-[rgb(var(--accent))] border-opacity-10">
                  <span className="text-[rgb(var(--accent))] opacity-40">Your Photo</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-3/4 h-3/4 border border-[rgb(var(--secondary-accent))] -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}