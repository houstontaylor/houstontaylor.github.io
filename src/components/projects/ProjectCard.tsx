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
        <div className="relative aspect-video overflow-hidden mb-6 bg-muted/30">
          {/* Image container */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Replace with actual image when available */}
            <div className="absolute inset-0 flex items-center justify-center bg-muted/30">
              <span className="text-foreground/30 text-xl font-light">{project.title}</span>
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
            className="absolute inset-0 bg-accent/10 mix-blend-overlay project-card-overlay"
            animate={{ opacity: isHovered ? 1 : 0 }}
          />
          
          {/* Number indicator for project */}
          <div className="absolute top-4 left-4 text-sm font-mono text-accent">
            {index < 9 ? `0${index + 1}` : index + 1}
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-display group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <motion.div
              initial={{ x: 0, opacity: 0.6 }}
              animate={{ x: isHovered ? 5 : 0, opacity: isHovered ? 1 : 0.6 }}
              transition={{ duration: 0.3 }}
            >
              <svg 
                width="24" 
                height="24" 
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