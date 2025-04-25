'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { allProjects } from '@/data/projectsData';
import ProjectCard from '@/components/projects/ProjectCard';

export default function Projects() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
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
    <section className="py-28 md:py-40 bg-muted/10">
      <div className="container mx-auto">
        <motion.div
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
          className="max-w-5xl mx-auto text-center mb-20"
        >
          <motion.span variants={fadeInUp} className="text-accent text-sm tracking-widest uppercase mb-4 block font-mono">Portfolio</motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-display mb-6 tracking-tight">Selected Projects</motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-foreground/70 max-w-2xl mx-auto">
            A collection of my recent work in UI/UX design and frontend development.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {allProjects.slice(0, 4).map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-20"
        >
          <Link 
            href="/projects"
            className="btn-outline text-lg px-8 py-4"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}