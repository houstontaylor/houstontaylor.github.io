'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

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
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="listitem"
    >
      <Link 
        href={`/projects/${project.slug}`} 
        className="block"
        aria-label={`View details for ${project.title} project - ${project.description}`}
      >
        <div className="relative overflow-hidden rounded-lg bg-[rgb(var(--muted))]/50 h-64 mb-6">
          {/* Project image/placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[rgb(var(--foreground))]/30 font-display text-2xl" aria-hidden="true">
              {project.title}
            </span>
          </div>
          
          {/* Category tag */}
          <div 
            className="absolute top-4 left-4 bg-white dark:bg-[rgb(var(--background))] px-3 py-1 text-xs font-mono rounded-full shadow-sm z-10"
            role="img"
            aria-label={`Project category: ${project.category || 'Project'}`}
          >
            {project.category || 'Project'}
          </div>
          
          {/* Colored overlay on hover */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--accent))] to-[rgb(var(--secondary-accent))] opacity-0 transition-opacity"
            animate={{ opacity: isHovered ? 0.9 : 0 }}
            aria-hidden="true"
          />
          
          {/* Project number */}
          <div 
            className="absolute top-3 right-4 text-4xl font-display font-light text-[rgb(var(--foreground))]/10"
            aria-label={`Project ${index + 1}`}
          >
            {(index + 1).toString().padStart(2, '0')}
          </div>
          
          {/* View project button that appears on hover */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            aria-hidden="true"
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
        
        <div 
          className="flex flex-wrap gap-2"
          role="list"
          aria-label={`Technologies used: ${project.tags.slice(0, 3).join(', ')}${project.tags.length > 3 ? ` and ${project.tags.length - 3} more` : ''}`}
        >
          {project.tags.slice(0, 3).map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 text-xs bg-[rgb(var(--accent))]/10 text-[rgb(var(--accent))] rounded-full"
              role="listitem"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span 
              className="px-3 py-1 text-xs bg-[rgb(var(--foreground))]/5 text-[rgb(var(--foreground))]/70 rounded-full"
              role="listitem"
              aria-label={`${project.tags.length - 3} additional technologies`}
            >
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </Link>
    </motion.article>
  );
}