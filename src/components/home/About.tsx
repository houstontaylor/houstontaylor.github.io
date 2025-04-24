'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function About() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-accent text-sm tracking-widest uppercase mb-4 block">About Me</span>
            <h2 className="text-3xl md:text-5xl font-display mb-8 leading-tight">Crafting Digital Experiences</h2>
            <div className="space-y-4 text-foreground/80">
              <p>
                I'm a passionate UI/UX designer and frontend developer with a focus on creating
                intuitive and engaging digital experiences. With 5+ years of experience, I combine
                design thinking with technical expertise to build products that users love.
              </p>
              <p>
                When I'm not designing or coding, you can find me hiking, reading sci-fi novels,
                or experimenting with new design tools and technologies.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8"
            >
              <Link 
                href="/about"
                className="btn-outline"
              >
                More About Me
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="aspect-square bg-muted/30 rounded-lg overflow-hidden">
              {/* Replace with your actual image */}
              <div className="h-full w-full flex items-center justify-center">
                <span className="text-foreground/30">Your Photo</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border-2 border-accent rounded-lg -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}