'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { allProjects } from '@/data/projectsData';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  slug: string;
  category?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section className="py-24 md:py-36">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-accent text-sm tracking-widest uppercase mb-4 block">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-display mb-6">Selected Projects</h2>
          <p className="text-lg text-foreground/70">
            A collection of my recent work in UI/UX design and frontend development.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {allProjects.slice(0, 4).map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              isHovered={hoveredProject === project.id}
              onHover={() => setHoveredProject(project.id)}
              onLeave={() => setHoveredProject(null)}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-16"
        >
          <Link 
            href="/projects"
            className="btn-outline"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, isHovered, onHover, onLeave }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="group"
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative aspect-video overflow-hidden mb-6">
          {/* Replace with actual image when available */}
          <div className="absolute inset-0 bg-muted/30 flex items-center justify-center">
            <span className="text-foreground/30">{project.title}</span>
          </div>
          <motion.div 
            className="absolute inset-0 bg-accent/10 mix-blend-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />
          {/* Uncomment when you have images
          <motion.img 
            src={project.image} 
            alt={project.title}
            className="object-cover w-full h-full"
            initial={{ scale: 1 }}
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.6 }}
          />
          */}
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-medium group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                className="text-accent"
              >
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </motion.div>
          </div>
          
          <p className="text-foreground/70 line-clamp-2">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 text-xs font-medium bg-muted/50 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}