'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { allProjects } from '@/data/projectsData';

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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900/20">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto mb-16"
        >
          <motion.div variants={fadeInUp} className="text-center mb-4">
            <span className="text-pink-500 text-sm tracking-widest uppercase font-mono">Portfolio</span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp} 
            className="text-4xl md:text-5xl font-display text-center mb-6"
          >
            Selected Projects
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp} 
            className="text-lg text-foreground/70 text-center max-w-2xl mx-auto"
          >
            A collection of my recent work in UI/UX design and frontend development.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
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
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link 
            href="/projects"
            className="btn btn-outline inline-flex items-center"
          >
            <span>View All Projects</span>
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              className="ml-2"
            >
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative aspect-video mb-6 overflow-hidden bg-gray-100 dark:bg-gray-800">
          {/* Project image/placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-gray-400">{project.title}</span>
          </div>
          
          {/* Colored overlay on hover */}
          <div 
            className="absolute inset-0 bg-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
          
          {/* Index number */}
          <div className="absolute top-3 left-3 text-xs font-mono text-pink-500">
            {(index + 1).toString().padStart(2, '0')}
          </div>
        </div>

        <h3 className="text-xl font-display mb-2 group-hover:text-pink-500 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-foreground/70 line-clamp-2 mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}