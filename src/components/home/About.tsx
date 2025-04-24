'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function About() {
  return (
    <section className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">About Me</h2>
            <p className="text-lg mb-6 text-foreground/80">
              I'm a passionate UI/UX designer and frontend developer with a focus on creating
              intuitive and engaging digital experiences. With 5+ years of experience, I combine
              design thinking with technical expertise to build products that users love.
            </p>
            <p className="text-lg mb-6 text-foreground/80">
              When I'm not designing or coding, you can find me hiking, reading sci-fi novels,
              or experimenting with new design tools and technologies.
            </p>
            <Link 
              href="/about"
              className="inline-block px-6 py-3 bg-accent text-white rounded-md font-medium hover:bg-accent/90 transition-colors"
            >
              Learn More About Me
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="aspect-square bg-foreground/5 rounded-lg flex items-center justify-center"
          >
            {/* Replace with your actual image */}
            <div className="text-center p-4">
              <p className="text-lg text-foreground/50">Your Photo Here</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}