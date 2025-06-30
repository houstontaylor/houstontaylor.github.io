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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--background))] via-[rgb(var(--accent))]/5 to-[rgb(var(--secondary-accent))]/5"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-[rgb(var(--accent))]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-[rgb(var(--secondary-accent))]/10 rounded-full blur-2xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center bg-[rgba(var(--accent),0.1)] px-4 py-2 rounded-full text-[rgb(var(--accent))] mb-6 font-mono text-sm"
              >
                <span className="inline-block w-2 h-2 rounded-full bg-[rgb(var(--accent))] mr-2"></span>
                Hi there! 👋
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight"
              >
                I'm <span className="text-[rgb(var(--accent))]">Your Name</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg md:text-xl text-[rgb(var(--foreground))]/70 mb-8 leading-relaxed"
              >
                A passionate UI/UX designer and frontend developer studying Computer Science and Human-Computer Interaction at Stanford University. 
                <br/><br/>
                When I'm not coding or designing, you can find me roller skating around campus, knitting cozy sweaters, or diving into the latest indie game.
              </motion.p>
              
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-[rgb(var(--accent))] text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg flex items-center group"
              >
                Learn More About Me
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--accent))]/20 to-[rgb(var(--secondary-accent))]/20 rounded-3xl rotate-6"></div>
                <div className="absolute inset-0 bg-[rgb(var(--background))] rounded-3xl shadow-xl overflow-hidden">
                  {/* Replace with your actual photo */}
                  <div className="w-full h-full bg-[rgb(var(--foreground))]/5 flex items-center justify-center text-[rgb(var(--foreground))]/40">
                    Your Photo Here
                  </div>
                  {/* You can replace the div above with: */}
                  {/* <Image src="/path-to-your-photo.jpg" alt="Your Name" fill className="object-cover" /> */}
                </div>
                {/* Floating elements */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-12 h-12 bg-[rgb(var(--accent))] rounded-full flex items-center justify-center text-white text-xl"
                >
                  🛼
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-[rgb(var(--secondary-accent))] rounded-full flex items-center justify-center text-white text-xl"
                >
                  🎨
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Skills & <span className="text-[rgb(var(--accent))]">Expertise</span>
            </h2>
            <p className="text-lg text-[rgb(var(--foreground))]/70">
              Technologies and tools I love working with
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[rgb(var(--background))] p-6 rounded-xl shadow-lg border border-[rgb(var(--foreground))]/10 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl mb-4">{skillGroup.icon}</div>
                <h3 className="text-xl font-display font-bold mb-4 text-[rgb(var(--accent))]">
                  {skillGroup.category}
                </h3>
                <div className="space-y-2">
                  {skillGroup.items.map(skill => (
                    <span 
                      key={skill} 
                      className="inline-block px-3 py-1 text-sm bg-[rgb(var(--accent))]/10 text-[rgb(var(--foreground))] rounded-full mr-2 mb-2"
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
      <section className="py-20 bg-[rgb(var(--accent))]/5 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              My <span className="text-[rgb(var(--accent))]">Journey</span>
            </h2>
            <p className="text-lg text-[rgb(var(--foreground))]/70">
              Education and work experience that shaped my path
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className={`bg-white p-6 rounded-xl shadow-lg border border-[rgb(var(--foreground))]/10 ${item.type === 'education' ? 'border-l-4 border-l-[rgb(var(--accent))]' : 'border-l-4 border-l-[rgb(var(--secondary-accent))]'}`}>
                    <div className="text-sm font-mono text-[rgb(var(--accent))] mb-2">{item.year}</div>
                    <h3 className="text-xl font-display font-bold mb-2">{item.title}</h3>
                    <div className="text-[rgb(var(--secondary-accent))] font-medium mb-2">{item.company}</div>
                    <p className="text-[rgb(var(--foreground))]/70">{item.description}</p>
                  </div>
                </div>
                <div className="w-12 h-12 bg-[rgb(var(--accent))] rounded-full flex items-center justify-center text-white font-bold text-lg relative z-10">
                  {item.type === 'education' ? '🎓' : '💼'}
                </div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Beyond <span className="text-[rgb(var(--accent))]">Code</span>
            </h2>
            <p className="text-lg text-[rgb(var(--foreground))]/70">
              What I love doing when I'm not designing or coding
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-[rgb(var(--foreground))]/10 hover:shadow-xl transition-all duration-300 text-center group cursor-pointer"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
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
      <section className="py-20 bg-gradient-to-r from-[rgb(var(--accent))]/10 to-[rgb(var(--secondary-accent))]/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Let's Work <span className="text-[rgb(var(--accent))]">Together</span>
            </h2>
            <p className="text-lg text-[rgb(var(--foreground))]/70 mb-8 max-w-2xl mx-auto">
              I'm always excited to collaborate on new projects and bring creative ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-3 bg-[rgb(var(--accent))] text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
              >
                Get In Touch
              </a>
              <a 
                href="/projects" 
                className="px-8 py-3 border-2 border-[rgb(var(--accent))] text-[rgb(var(--accent))] rounded-lg font-medium transition-all duration-300 hover:bg-[rgb(var(--accent))] hover:text-white"
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