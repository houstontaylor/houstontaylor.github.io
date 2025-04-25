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
            <motion.span variants={fadeInLeft} className="text-accent text-sm tracking-widest uppercase mb-4 block font-mono">About Me</motion.span>
            <motion.h2 variants={fadeInLeft} className="text-4xl md:text-6xl font-display mb-8 leading-tight tracking-tight">
              Crafting Digital Experiences
            </motion.h2>
            <motion.div variants={fadeInLeft} className="space-y-6 text-xl text-foreground/80">
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
                className="btn-outline text-lg px-8 py-3"
              >
                More About Me
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
              className="aspect-square bg-muted/30 rounded-none overflow-hidden"
            >
              {/* Replace with your actual image */}
              <div className="h-full w-full flex items-center justify-center">
                <span className="text-foreground/30">Your Photo</span>
              </div>
            </motion.div>
            <motion.div 
              variants={fadeInRight}
              className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border-2 border-accent -z-10"
              transition={{ delay: 0.4 }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}