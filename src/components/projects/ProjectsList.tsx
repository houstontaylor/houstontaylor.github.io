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
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
              filter === category 
                ? 'bg-accent text-white' 
                : 'bg-muted/30 text-foreground/70 hover:bg-muted/50'
            } rounded-full`}
          >
            {category}
          </button>
        ))}
      </div>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
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
          className="text-center py-16"
        >
          <h3 className="text-xl font-medium">No projects found</h3>
          <p className="text-foreground/70 mt-2">Try selecting a different category</p>
        </motion.div>
      )}
    </div>
  );
}