'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  slug: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
          {/* Replace with actual image when available */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-foreground/10 group-hover:opacity-80 transition-opacity" />
          <div className="absolute inset-0 flex items-center justify-center text-center p-4">
            <p className="text-foreground/50">{project.title} Image</p>
          </div>
          {/* Uncomment when you have images
          <Image 
            src={project.image} 
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          */}
        </div>

        <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        
        <p className="text-foreground/70 mb-3 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2 py-1 bg-muted text-xs font-medium rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}