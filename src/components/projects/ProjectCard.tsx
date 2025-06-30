'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="group"
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative overflow-hidden rounded-xl bg-[rgb(var(--foreground))]/5 h-64 mb-6 group-hover:shadow-xl transition-all duration-500">
          {/* Project image/placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[rgb(var(--foreground))]/30 font-display text-xl">{project.title}</span>
          </div>
          
          {/* Category badge */}
          <div className="absolute top-4 left-4 bg-white dark:bg-[rgb(var(--background))] px-3 py-1 text-xs font-mono rounded-full shadow-sm z-10">
            {project.category || 'Project'}
          </div>
          
          {/* Colored overlay on hover */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--accent))]/90 to-[rgb(var(--secondary-accent))]/90"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Project number */}
          <div className="absolute top-4 right-4 text-3xl font-display font-light text-[rgb(var(--foreground))]/10 group-hover:text-white/50 transition-colors duration-300">
            {(index + 1).toString().padStart(2, '0')}
          </div>
          
          {/* View project button that appears on hover */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ y: 20 }}
            whileHover={{ y: 0 }}
          >
            <span className="px-6 py-2 bg-white text-[rgb(var(--accent))] rounded-lg font-medium text-sm shadow-lg">
              View Project →
            </span>
          </motion.div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl md:text-2xl font-display font-bold group-hover:text-[rgb(var(--accent))] transition-colors duration-300">
            {project.title}
          </h3>
          
          <p className="text-[rgb(var(--foreground))]/70 leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 text-xs bg-[rgb(var(--accent))]/10 text-[rgb(var(--accent))] rounded-full font-medium"
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