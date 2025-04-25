'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { allProjects } from '@/data/projectsData';

export default function ProjectsList() {
  const [filter, setFilter] = useState('All');
  
  // Get unique categories from projects
  const categories = ['All', ...Array.from(new Set(allProjects.map(project => project.category || 'Other')))];
  
  // Filter projects based on selected category
  const filteredProjects = filter === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.category === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-4 mb-16">
        {categories.map((category, index) => (
          <motion.button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-6 py-3 text-sm font-mono transition-all duration-300 ${
              filter === category 
                ? 'bg-accent text-white' 
                : 'bg-transparent border border-muted/50 text-foreground/70 hover:border-accent hover:text-accent'
            }`}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            {category}
          </motion.button>
        ))}
      </div>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 md:gap-20"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-24"
        >
          <h3 className="text-2xl font-display mb-4">No projects found</h3>
          <p className="text-foreground/70 text-lg">Try selecting a different category</p>
        </motion.div>
      )}
    </div>
  );
}