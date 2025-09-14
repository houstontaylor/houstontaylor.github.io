'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { allProjects, additionalProjectsNote } from '@/data/projectsData';
import Link from 'next/link';

export default function ProjectsList() {
  const [filter, setFilter] = useState('All');
  
  // Curated categories for employer appeal - focus on core skills and impact areas
  const employerFocusedCategories = [
    'All',
    'AI/ML',           // Shows cutting-edge technical skills
    'Social Impact',   // Shows values and purpose-driven work
    'UI/UX',          // Design skills (covers multiple projects with design elements)
    'Accessibility',   // Important growing field
    'Full-Stack'      // Comprehensive development skills
  ];
  
  // Custom filtering logic that maps to project content
  const getFilteredProjects = (filterCategory: string) => {
    if (filterCategory === 'All') return allProjects;
    
    switch (filterCategory) {
      case 'AI/ML':
        return allProjects.filter(project => 
          project.category === 'AI/ML' || 
          project.tags.some(tag => ['AI/ML', 'Machine Learning', 'Computer Vision', 'Chatbot', 'NLP'].includes(tag))
        );
      case 'Social Impact':
        return allProjects.filter(project => 
          project.category === 'Social Impact' || 
          project.tags.some(tag => ['Social Impact', 'LGBTQ+', 'Healthcare', 'Accessibility'].includes(tag))
        );
      case 'UI/UX':
        return allProjects.filter(project => 
          project.tags.some(tag => ['UI/UX', 'Figma', 'Prototyping', 'Behavior Change', 'Design'].includes(tag)) ||
          project.category === 'Behavior Design'
        );
      case 'Accessibility':
        return allProjects.filter(project => 
          project.category === 'Accessibility' || 
          project.tags.includes('Accessibility')
        );
      case 'Full-Stack':
        return allProjects.filter(project => 
          project.tags.some(tag => ['React', 'Web Development', 'Full-Stack', 'JavaScript'].includes(tag))
        );
      default:
        return allProjects;
    }
  };
  
  const filteredProjects = getFilteredProjects(filter);

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
          Filter by <span className="text-[rgb(var(--accent))]">Focus Area</span>
        </h2>
        
        <div 
          className="flex flex-wrap gap-3 justify-center max-w-2xl mx-auto"
          role="group"
          aria-labelledby="filter-heading"
          aria-describedby="filter-description"
        >
          <div id="filter-description" className="sr-only">
            Filter projects by focus area or skill type. Currently showing {filteredProjects.length} of {allProjects.length} projects.
          </div>
          
          {employerFocusedCategories.map((category, index) => (
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
        
        {/* Filter description */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center text-sm text-[rgb(var(--foreground))]/60 mt-4"
        >
          Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
          {filter !== 'All' && (
            <span> in <span className="text-[rgb(var(--accent))]">{filter}</span></span>
          )}
        </motion.p>
      </motion.div>
      
      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12 mb-20"
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
          className="text-center py-24 bg-[rgb(var(--foreground))]/5 rounded-xl mb-20"
          role="status"
          aria-live="polite"
        >
          <div className="text-4xl mb-4" role="img" aria-label="Search icon">🔍</div>
          <h3 className="text-2xl font-display font-bold mb-4">No projects found</h3>
          <p className="text-[rgb(var(--foreground))]/70 text-lg mb-6">
            No projects match the selected focus area: {filter}
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

      {/* Additional Work Available Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        {/* Decorative separator */}
        <div className="flex items-center mb-12">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[rgb(var(--accent))]/30 to-transparent" />
          <div className="px-6">
            <div className="w-3 h-3 bg-[rgb(var(--accent))]/40 rounded-full" />
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[rgb(var(--accent))]/30 to-transparent" />
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-[rgb(var(--secondary-accent))]/10 text-[rgb(var(--secondary-accent))] text-sm font-mono tracking-wide uppercase mb-4">
              More Work Available
            </span>
            <h3 className="text-3xl font-display font-bold mb-4">
              Curious About More?
            </h3>
            <p className="text-lg text-[rgb(var(--foreground))]/70 leading-relaxed">
              {additionalProjectsNote.description}
            </p>
          </motion.div>

          {/* Additional categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <h4 className="text-lg font-display font-medium mb-4 text-[rgb(var(--accent))]">
              Additional Areas Include:
            </h4>
            <div className="flex flex-wrap gap-3 justify-center">
              {additionalProjectsNote.categories.map((category, index) => (
                <motion.span
                  key={category}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="px-4 py-2 bg-[rgb(var(--foreground))]/5 border border-[rgb(var(--foreground))]/10 rounded-full text-sm text-[rgb(var(--foreground))]/70"
                >
                  {category}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link 
              href="/contact" 
              className="group relative overflow-hidden"
              aria-label="Contact about a specific project"
            >
              <span className="relative z-10 px-8 py-3 block bg-[rgb(var(--secondary-accent))] text-white rounded-lg font-medium transition-all duration-300 group-hover:bg-[rgb(var(--secondary-accent))] group-hover:shadow-lg">
                <span className="flex items-center">
                  Send a Message
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-white/20 w-0 transition-all duration-300 group-hover:w-full z-0" aria-hidden="true"></span>
              </span>
            </Link>
            
            <span className="text-[rgb(var(--foreground))]/50 text-sm">or</span>
            
            <Link 
              href="mailto:houstonctaylor@gmail.com"
              className="group relative overflow-hidden"
              aria-label="Email Houston Taylor to discuss projects"
            >
              <span className="relative px-8 py-3 block border-2 border-[rgb(var(--accent))] text-[rgb(var(--accent))] rounded-lg font-medium transition-all duration-300 hover:shadow-lg overflow-hidden">
                <span className="relative z-10 flex items-center group-hover:text-white transition-colors duration-300">
                  Email Me Directly
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-[rgb(var(--accent))] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" aria-hidden="true"></span>
              </span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}