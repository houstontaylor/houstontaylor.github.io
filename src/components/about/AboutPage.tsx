'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-28">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span className="text-accent text-sm tracking-widest uppercase mb-4 block">About</span>
          <h1 className="text-4xl md:text-6xl font-display mb-8 leading-tight">
            Designer & Developer
          </h1>
          <div className="text-lg md:text-xl text-foreground/80 max-w-2xl">
            <p>
              I'm a designer and developer focused on creating clean, intuitive experiences.
              I care about the little things — the way type breathes, how motion feels, and
              how people interact with digital spaces.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-2xl font-display mb-6">Background</h2>
            <div className="space-y-4 text-foreground/80">
              <p>
                With over 5 years of experience in UI/UX design and frontend development, 
                I've worked with clients across various industries to create impactful digital 
                products. My approach combines aesthetic sensibility with technical expertise 
                to deliver experiences that are both beautiful and functional.
              </p>
              <p>
                Currently finishing my Master's at Stanford in HCI, I'm exploring the 
                intersection of design, technology, and human behavior. My research focuses 
                on creating more intuitive and accessible digital interfaces.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-2xl font-display mb-6">Skills & Expertise</h2>
            
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">Design</h3>
              <div className="flex flex-wrap gap-2">
                {['UI/UX Design', 'Visual Design', 'Wireframing', 'Prototyping', 'Design Systems', 'User Research'].map((skill) => (
                  <span key={skill} className="px-3 py-1 text-sm bg-muted/30 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">Development</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Frontend Architecture'].map((skill) => (
                  <span key={skill} className="px-3 py-1 text-sm bg-muted/30 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['Figma', 'Adobe CC', 'VS Code', 'Git', 'GitHub', 'Vercel'].map((skill) => (
                  <span key={skill} className="px-3 py-1 text-sm bg-muted/30 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="py-12 border-t border-muted/20"
        >
          <h2 className="text-2xl font-display mb-6">Let's Connect</h2>
          <p className="text-lg text-foreground/80 mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <a 
            href="/contact" 
            className="btn-primary"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
}