'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ProjectCard from '@/components/projects/ProjectCard';
import { allProjects } from '@/data/projectsData';

export default function Projects() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-foreground/70">
            A selection of my recent work in UI/UX design and frontend development.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/projects"
            className="inline-block px-6 py-3 border border-foreground/20 rounded-md font-medium hover:bg-foreground/5 transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}