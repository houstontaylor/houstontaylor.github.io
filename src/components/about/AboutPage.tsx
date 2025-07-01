'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
  const skills = [
    { category: "Design", items: ["UI/UX Design", "Wireframing", "Prototyping", "User Research", "Figma", "Adobe XD"], icon: "🎨" },
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML/CSS"], icon: "💻" },
    { category: "Languages", items: ["JavaScript", "TypeScript", "Python", "Java", "Swift"], icon: "⚡" },
    { category: "Tools", items: ["Git", "VS Code", "Vercel", "Firebase", "Node.js"], icon: "🛠️" }
  ];

  const timeline = [
    {
      year: "2024 - Present",
      title: "Graduate Student",
      company: "Stanford University",
      description: "Pursuing MS in Computer Science with focus on Human-Computer Interaction",
      type: "education"
    },
    {
      year: "2023 - 2024",
      title: "Frontend Developer",
      company: "Campus Startup",
      description: "Built responsive web applications and improved user experience for student platform",
      type: "work"
    },
    {
      year: "2020 - 2024",
      title: "Undergraduate Student",
      company: "Stanford University",
      description: "Bachelor's in Computer Science, focus on web development and design",
      type: "education"
    },
    {
      year: "2022 - 2023",
      title: "Design Intern",
      company: "Tech Company",
      description: "Created user interfaces and conducted usability testing for mobile app",
      type: "work"
    }
  ];

  const interests = [
    { name: "Roller Skating", icon: "🛼", description: "Weekend adventures on wheels" },
    { name: "Gaming", icon: "🎮", description: "Strategy games and indie favorites" },
    { name: "Knitting", icon: "🧶", description: "Creating cozy scarves and sweaters" },
    { name: "Painting", icon: "🎨", description: "Watercolors and digital art" },
    { name: "Photography", icon: "📸", description: "Capturing campus life and nature" },
    { name: "Coffee", icon: "☕", description: "Always searching for the perfect brew" }
  ];

  return (
    <>
      {/* Hero Section with Picture */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" role="banner">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--background))] via-[rgb(var(--background))] to-[rgb(var(--accent))]/5 -z-10" aria-hidden="true" />
        <div className="absolute top-1/4 right-10 w-32 h-32 bg-[rgb(var(--secondary-accent))]/10 rounded-full blur-3xl -z-10" aria-hidden="true" />
        <div className="absolute bottom-1/3 left-10 w-24 h-24 bg-[rgb(var(--accent))]/10 rounded-full blur-2xl -z-10" aria-hidden="true" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6"
              >
                Hi, I'm{' '}
                <span className="text-[rgb(var(--accent))]">Houston</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg md:text-xl text-[rgb(var(--foreground))]/70 leading-relaxed mb-8"
              >
                I'm a UI/UX Designer and Frontend Developer currently pursuing my Master's in Computer Science at Stanford University.
                <br/><br/>
                I love creating digital experiences that are both beautiful and functional, bridging the gap between user needs and technical possibilities.
                <br/><br/>
                When I'm not coding or designing, you can find me roller skating around campus, knitting cozy sweaters, or diving into the latest indie game.
              </motion.p>
              
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-[rgb(var(--accent))] text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg flex items-center group"
                aria-label="Scroll down to learn more about my skills and experience"
              >
                Learn More About Me
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.button>
            </motion.div>

            {/* Picture */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-80 h-80 mx-auto">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--accent))]/20 to-[rgb(var(--secondary-accent))]/20 rounded-3xl rotate-6" aria-hidden="true"></div>
                <div className="absolute inset-0 bg-[rgb(var(--background))] rounded-3xl shadow-xl overflow-hidden">
                  {/* Replace with your actual photo */}
                  <div className="w-full h-full bg-[rgb(var(--foreground))]/5 flex items-center justify-center text-[rgb(var(--foreground))]/40">
                    Your Photo Here
                  </div>
                  {/* You can replace the div above with: */}
                  {/* <Image src="/path-to-your-photo.jpg" alt="Houston Taylor - UI/UX Designer and Frontend Developer at Stanford University" width={320} height={320} className="object-cover" /> */}
                </div>
                {/* Floating elements */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-12 h-12 bg-[rgb(var(--accent))] rounded-full flex items-center justify-center text-white text-xl"
                  aria-hidden="true"
                  role="img"
                  aria-label="Roller skate emoji representing my hobby"
                >
                  🛼
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-[rgb(var(--secondary-accent))] rounded-full flex items-center justify-center text-white text-xl"
                  aria-hidden="true"
                  role="img"
                  aria-label="Art palette emoji representing my design work"
                >
                  🎨
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative" aria-labelledby="skills-heading">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 id="skills-heading" className="text-3xl md:text-4xl font-display font-bold mb-4">
              Skills & <span className="text-[rgb(var(--accent))]">Expertise</span>
            </h2>
            <p className="text-lg text-[rgb(var(--foreground))]/70">
              Technologies and tools I love working with
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" role="list" aria-label="Skills organized by category">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[rgb(var(--background))] p-6 rounded-xl shadow-lg border border-[rgb(var(--foreground))]/10 hover:shadow-xl transition-all duration-300"
                role="listitem"
              >
                <div className="text-3xl mb-4" role="img" aria-label={`${skillGroup.category} category icon`}>
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-4 text-[rgb(var(--accent))]">
                  {skillGroup.category}
                </h3>
                <div className="space-y-2" role="list" aria-label={`${skillGroup.category} skills`}>
                  {skillGroup.items.map(skill => (
                    <span 
                      key={skill} 
                      className="inline-block px-3 py-1 text-sm bg-[rgb(var(--accent))]/10 text-[rgb(var(--foreground))] rounded-full mr-2 mb-2"
                      role="listitem"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-[rgb(var(--accent))]/5 relative" aria-labelledby="timeline-heading">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 id="timeline-heading" className="text-3xl md:text-4xl font-display font-bold mb-4">
              My <span className="text-[rgb(var(--accent))]">Journey</span>
            </h2>
            <p className="text-lg text-[rgb(var(--foreground))]/70">
              Education and work experience that shaped my path
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto" role="list" aria-label="Professional and educational timeline">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                role="listitem"
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className={`bg-white p-6 rounded-xl shadow-lg border border-[rgb(var(--foreground))]/10 ${item.type === 'education' ? 'border-l-4 border-l-[rgb(var(--accent))]' : 'border-l-4 border-l-[rgb(var(--secondary-accent))]'}`}>
                    <div className="text-sm text-[rgb(var(--foreground))]/60 mb-2 font-mono">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-display font-bold mb-1">
                      {item.title}
                    </h3>
                    <div className="text-[rgb(var(--accent))] font-medium mb-3">
                      {item.company}
                    </div>
                    <p className="text-[rgb(var(--foreground))]/70">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg border-4 border-[rgb(var(--background))] relative z-10">
                  <span className="text-2xl" role="img" aria-label={item.type === 'education' ? 'Education milestone' : 'Work experience milestone'}>
                    {item.type === 'education' ? '🎓' : '💼'}
                  </span>
                </div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-20 relative" aria-labelledby="interests-heading">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 id="interests-heading" className="text-3xl md:text-4xl font-display font-bold mb-4">
              Beyond <span className="text-[rgb(var(--accent))]">Code</span>
            </h2>
            <p className="text-lg text-[rgb(var(--foreground))]/70">
              What I love doing when I'm not designing or coding
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list" aria-label="Personal interests and hobbies">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-[rgb(var(--foreground))]/10 hover:shadow-xl transition-all duration-300 text-center group cursor-pointer"
                role="listitem"
                tabIndex={0}
                aria-label={`${interest.name}: ${interest.description}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    // You could add more interaction here if needed
                  }
                }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300" role="img" aria-label={`${interest.name} icon`}>
                  {interest.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-2 group-hover:text-[rgb(var(--accent))] transition-colors">
                  {interest.name}
                </h3>
                <p className="text-[rgb(var(--foreground))]/70">
                  {interest.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[rgb(var(--accent))]/10 to-[rgb(var(--secondary-accent))]/10" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-display font-bold mb-6">
              Let's Work <span className="text-[rgb(var(--accent))]">Together</span>
            </h2>
            <p className="text-lg text-[rgb(var(--foreground))]/70 mb-8 max-w-2xl mx-auto">
              I'm always excited to collaborate on new projects and bring creative ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-3 bg-[rgb(var(--accent))] text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
                aria-label="Navigate to contact page to get in touch with Houston Taylor"
              >
                Get In Touch
              </a>
              <a 
                href="/projects" 
                className="px-8 py-3 border-2 border-[rgb(var(--accent))] text-[rgb(var(--accent))] rounded-lg font-medium transition-all duration-300 hover:bg-[rgb(var(--accent))] hover:text-white"
                aria-label="Navigate to projects page to view Houston Taylor's portfolio work"
              >
                View My Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}