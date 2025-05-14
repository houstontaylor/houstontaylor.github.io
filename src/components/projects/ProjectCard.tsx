'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group project-card"
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative aspect-video overflow-hidden mb-6 bg-[rgb(var(--foreground))]/5 rounded-xl shadow-sm">
          {/* Image container */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Replace with actual image when available */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[rgb(var(--foreground))]/30 text-xl font-light">{project.title}</span>
            </div>
            {/* Uncomment when you have images
            <Image 
              src={project.image} 
              alt={project.title}
              fill
              className="object-cover project-card-image"
            />
            */}
          </div>
          
          {/* Colored overlay on hover */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-[rgb(var(--accent))]/30 to-[rgb(var(--secondary-accent))]/30 project-card-overlay rounded-xl"
            animate={{ opacity: isHovered ? 1 : 0 }}
          />
          
          {/* Number indicator for project */}
          <div className="absolute top-4 left-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 dark:bg-[rgb(var(--background))]/80 text-sm font-mono text-[rgb(var(--accent))] shadow-sm">
            {index < 9 ? `0${index + 1}` : index + 1}
          </div>
          
          {/* View project button that appears on hover */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
          >
            <span className="px-4 py-2 bg-white dark:bg-[rgb(var(--background))] text-[rgb(var(--accent))] rounded-lg font-medium text-sm shadow-md">
              View Project
            </span>
          </motion.div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-display group-hover:text-[rgb(var(--accent))] transition-colors">
              {project.title}
            </h3>
            <motion.div
              initial={{ x: 0, opacity: 0.6 }}
              animate={{ x: isHovered ? 5 : 0, opacity: isHovered ? 1 : 0.6 }}
              transition={{ duration: 0.3 }}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[rgb(var(--accent))]/10 group-hover:bg-[rgb(var(--accent))]/20 transition-colors"
            >
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                className="text-[rgb(var(--accent))]"
              >
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </motion.div>
          </div>
          
          <p className="text-[rgb(var(--foreground))]/70 line-clamp-2">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 text-xs font-medium bg-[rgb(var(--foreground))]/5 rounded-full"
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