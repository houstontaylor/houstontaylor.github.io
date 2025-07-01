'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { allProjects } from '@/data/projectsData';

export default function ProjectsList() {
  const [filter, setFilter] = useState('All');
  
  // Get unique tags from all projects for better filtering
  const allTags = Array.from(new Set(allProjects.flatMap(project => project.tags)));
  const categories = ['All', ...allTags];
  
  // Filter projects based on selected tag
  const filteredProjects = filter === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.tags.includes(filter));

  return (
    <div>
      {/* Filter Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
        role="region"
        aria-labelledby="filter-heading"
      >
        <h2 id="filter-heading" className="text-lg font-display font-medium mb-6 text-center">
          Filter by <span className="text-[rgb(var(--accent))]">Technology</span>
        </h2>
        
        <div 
          className="flex flex-wrap gap-3 justify-center"
          role="group"
          aria-labelledby="filter-heading"
          aria-describedby="filter-description"
        >
          <div id="filter-description" className="sr-only">
            Filter projects by technology or skill. Currently showing {filteredProjects.length} of {allProjects.length} projects.
          </div>
          
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full border ${
                filter === category 
                  ? 'bg-[rgb(var(--accent))] text-white border-[rgb(var(--accent))] shadow-lg' 
                  : 'bg-transparent border-[rgb(var(--foreground))]/20 hover:border-[rgb(var(--accent))] text-[rgb(var(--foreground))]/80 hover:text-[rgb(var(--accent))]'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1]
              }}
              aria-pressed={filter === category}
              aria-label={`Filter projects by ${category}${filter === category ? ' (currently selected)' : ''}`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </motion.div>
      
      {/* Projects Grid - Projects are visible immediately */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12"
          role="list"
          aria-label={`${filteredProjects.length} projects${filter !== 'All' ? ` filtered by ${filter}` : ''}`}
          aria-live="polite"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* No projects found message */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-24 bg-[rgb(var(--foreground))]/5 rounded-xl"
          role="status"
          aria-live="polite"
        >
          <div className="text-4xl mb-4" role="img" aria-label="Search icon">🔍</div>
          <h3 className="text-2xl font-display font-bold mb-4">No projects found</h3>
          <p className="text-[rgb(var(--foreground))]/70 text-lg mb-6">
            No projects match the selected technology: {filter}
          </p>
          <button 
            onClick={() => setFilter('All')}
            className="px-6 py-2 bg-[rgb(var(--accent))] text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
            aria-label="Clear filter and show all projects"
          >
            Show All Projects
          </button>
        </motion.div>
      )}
    </div>
  );
}