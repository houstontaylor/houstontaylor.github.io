'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { allProjects } from '@/data/projectsData';

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
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
    <section className="py-20 md:py-32 relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-[rgb(var(--accent))/5] -z-10 rounded-bl-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[rgb(var(--background))] -z-10"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto mb-20"
        >
          <motion.div variants={fadeInUp} className="text-center mb-4">
            <span className="inline-block px-4 py-1 rounded-full bg-[rgb(var(--accent))/10 text-[rgb(var(--accent))] text-sm font-mono">Portfolio</span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp} 
            className="text-4xl md:text-5xl font-display text-center mb-6"
          >
            Featured Projects
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp} 
            className="text-lg text-[rgb(var(--foreground))/70 text-center max-w-2xl mx-auto"
          >
            A selection of my recent work in UI/UX design and frontend development.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {allProjects.slice(0, 4).map((project, index) => (
            <FeaturedProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              isHovered={hoveredIndex === index}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <Link 
            href="/projects"
            className="group inline-flex items-center relative overflow-hidden"
          >
            <span className="relative z-10 px-8 py-3 block bg-[rgb(var(--secondary-accent))/10 border border-[rgb(var(--secondary-accent))] text-[rgb(var(--secondary-accent))] rounded-lg font-medium transition-all duration-300 group-hover:text-white">
              <span className="flex items-center">
                Explore All Projects
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </span>
            <span className="absolute inset-0 bg-[rgb(var(--secondary-accent))] w-0 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  slug: string;
  category?: string;
}

interface FeaturedProjectCardProps {
  project: Project;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

function FeaturedProjectCard({ project, index, isHovered, onHover, onLeave }: FeaturedProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative overflow-hidden rounded-lg bg-[rgb(var(--muted))/50 h-64 mb-6">
          {/* Project image/placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[rgb(var(--foreground))]/30 font-display text-2xl">{project.title}</span>
          </div>
          
          {/* Tag */}
          <div className="absolute top-4 left-4 bg-white dark:bg-[rgb(var(--background))] px-3 py-1 text-xs font-mono rounded-full shadow-sm z-10">
            {project.category || 'Project'}
          </div>
          
          {/* Colored overlay on hover */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--accent))] to-[rgb(var(--secondary-accent))] opacity-0 transition-opacity"
            animate={{ opacity: isHovered ? 0.9 : 0 }}
          />
          
          {/* Project number */}
          <div className="absolute top-3 right-4 text-4xl font-display font-light text-[rgb(var(--foreground))]/10">
            {(index + 1).toString().padStart(2, '0')}
          </div>
          
          {/* View project button that appears on hover */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
          >
            <span className="px-4 py-2 bg-white text-[rgb(var(--accent))] rounded font-medium text-sm">
              View Project
            </span>
          </motion.div>
        </div>

        <h3 className="text-xl font-display mb-2 group-hover:text-[rgb(var(--accent))] transition-colors">
          {project.title}
        </h3>
        
        <p className="text-[rgb(var(--foreground))]/70 line-clamp-2 mb-4 text-base">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 text-xs bg-[rgb(var(--accent))]/10 text-[rgb(var(--accent))] rounded-full"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-3 py-1 text-xs bg-[rgb(var(--foreground))]/5 text-[rgb(var(--foreground))]/70 rounded-full">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </Link>
    </motion.div>
  );
}