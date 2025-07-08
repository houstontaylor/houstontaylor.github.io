'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C#", "C++", "C", "Java", "HTML", "CSS"],
    icon: "💻"
  },
  {
    title: "Frameworks & Tools",
    skills: ["Next.js", "Node.js", "Unity", "Twine", "Tailwind CSS", "Bootstrap", "Git", "Figma", "Framer Motion"],
    icon: "🛠️"
  },
  {
    title: "Design & Research",
    skills: ["Need Finding", "User Interviews", "UI/UX Design", "Accessibility", "Prototyping", "Wireframing", "Visual Design"],
    icon: "🎨"
  }
];

const experiences = [
  {
    year: "2024-2025",
    title: "Master's in Computer Science",
    company: "Stanford University",
    description: "Co-term program focusing on Human-Computer Interaction, building on undergraduate CS foundation.",
    type: "education",
    icon: "🎓"
  },
  {
    year: "2023-2024",
    title: "Project Manager & Frontend Designer",
    company: "Sunao Labs",
    description: "Led project development and designed user interfaces for innovative startup solutions, including the PodBot project.",
    type: "work",
    icon: "🚀"
  },
  {
    year: "2023",
    title: "Full Stack Developer Intern",
    company: "EmployReward Solutions, Inc.",
    description: "Developed end-to-end web applications during junior year summer internship in South Carolina.",
    type: "work",
    icon: "💻"
  },
  {
    year: "2022-2023",
    title: "Head Teaching Assistant",
    company: "National Student Leadership Conference",
    description: "Created lesson plans and managed 7 TAs while teaching mock trial to high schoolers. Led the program for two summers.",
    type: "work",
    icon: "👨‍🏫"
  },
  {
    year: "2021-2025",
    title: "Lifeguard Supervisor",
    company: "Stanford Aquatics",
    description: "Progressed from lifeguard to supervisor throughout college, ensuring safety for the Stanford community.",
    type: "work",
    icon: "🏊‍♂️"
  },
  {
    year: "2020-2024",
    title: "Bachelor's in Computer Science",
    company: "Stanford University",
    description: "Undergraduate degree with HCI focus, active in Mock Trial, Talisman a cappella, and various CS organizations.",
    type: "education",
    icon: "🎓"
  }
];

const hobbies = [
  {
    title: "Roller Skating",
    description: "Yellow Moxi skates with pink flower toe stops - my favorite way to get around campus!",
    icon: "⛸️",
    colorScheme: "orange"
  },
  {
    title: "Cozy Gaming",
    description: "Stardew Valley enthusiast (too many hours logged!), plus Spiritfarer, Sims 4, and nostalgic Pokemon sessions.",
    icon: "🎮",
    colorScheme: "neutral"
  },
  {
    title: "Fiber Arts",
    description: "From middle school scarves to complex sweaters, now learning crochet alongside my knitting.",
    icon: "🧶",
    colorScheme: "green"
  },
  {
    title: "Oil Painting",
    description: "Recently switched from colored pencils to oils - love the long drying time for adjustments. Working on an Italian canal scene!",
    icon: "🎨",
    colorScheme: "neutral"
  },
  {
    title: "Game Design",
    description: (
      <>
        Created analog games including one about NIMBYism - available online with original art{" "}
        <a 
          href="https://www.thegamecrafter.com/games/sunnyvale-ca" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[rgb(var(--accent))] hover:underline font-medium"
        >
          here
        </a>
        !
      </>
    ),
    icon: "🎲",
    colorScheme: "green"
  },
  {
    title: "Music & Performance",
    description: "Stanford Talisman a cappella member who loves getting lost in thoughtful content.",
    icon: "🎵",
    colorScheme: "orange"
  }
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[rgb(var(--accent))]/10 rounded-full blur-3xl -z-10" aria-hidden="true" />
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-[rgb(var(--secondary-accent))]/10 rounded-full blur-2xl -z-10" aria-hidden="true" />
        
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
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg md:text-xl text-[rgb(var(--foreground))]/70 leading-relaxed mb-8 space-y-4"
              >
                <p>
                  I'm a UI/UX Designer and Frontend Developer from South Carolina, who recently completed my Master's in Computer Science at Stanford University with a focus on Human-Computer Interaction.
                </p>
                <p>
                  At 23, I've already gained experience as a project manager, frontend designer, and full-stack developer, but what really drives me is finding the intersection between human needs and technological possibilities. I believe any good design process should begin with need-finding and user interviews.
                </p>
                <p>
                  When I'm not coding or designing, you'll find me roller skating around on my yellow Moxi skates, knitting intricate sweaters, or completely absorbed in a cozy game like Stardew Valley.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex justify-start"
              >
                <button 
                  onClick={() => {
                    const skillsSection = document.querySelector('#skills-section');
                    skillsSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group inline-flex items-center relative"
                  aria-label="Learn more about Houston Taylor's professional skills"
                >
                  <span className="relative px-8 py-3 block bg-[rgb(var(--accent))] text-white rounded-lg font-medium transition-all duration-300 group-hover:shadow-lg">
                    Learn More About Me
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 inline transition-transform duration-300 group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
              </motion.div>
            </motion.div>

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-2xl">
                {/* Replace with your actual photo */}
                <div className="w-full h-full bg-[rgb(var(--foreground))]/5 flex items-center justify-center text-[rgb(var(--foreground))]/40">
                  <Image 
                  src="/headshot.jpeg" 
                  alt="Houston Taylor" 
                  width={320} 
                  height={320} 
                  className="object-cover w-full h-full" 
                  priority
                />
                </div>
              </div>
              {/* Floating elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-[rgb(var(--accent))] rounded-full flex items-center justify-center text-white text-xl"
                aria-hidden="true"
              >
                🎵
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-[rgb(var(--secondary-accent))] rounded-full flex items-center justify-center text-white text-xl"
                aria-hidden="true"
              >
                🎨
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills-section" className="py-20 bg-[rgb(var(--background-secondary))]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Technical Skills
            </h2>
            <p className="text-lg text-[rgb(var(--foreground))]/70 max-w-2xl mx-auto">
              I love bridging the gap between design and development, with a focus on creating 
              human-centered solutions through thoughtful research and implementation.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={fadeInUp}
                className="bg-[rgb(var(--background))] p-6 rounded-xl shadow-sm border border-[rgb(var(--muted))]/20 hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-3xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-[rgb(var(--accent))]/10 text-[rgb(var(--accent))] rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section className="py-20 bg-[rgb(var(--accent))]/5 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              My <span className="text-[rgb(var(--accent))]">Journey</span>
            </h2>
            <p className="text-lg text-[rgb(var(--foreground))]/70 max-w-2xl mx-auto">
              From Stanford classrooms to startup offices, here's how my experience in development, 
              design, and leadership has shaped my approach to creating thoughtful digital solutions.
            </p>
          </motion.div>

          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px w-0.5 bg-[rgb(var(--accent))]/20 h-full top-0 bottom-0 hidden md:block"></div>

          <div className="max-w-6xl mx-auto">
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-0 gap-4`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} text-center md:text-left`}>
                  <div className={`bg-[rgb(var(--background))] p-6 rounded-xl shadow-sm border border-[rgb(var(--muted))]/20 hover:shadow-md transition-all duration-300 ${item.type === 'education' ? 'border-l-4 border-l-[rgb(var(--accent))]' : 'border-l-4 border-l-[rgb(var(--secondary-accent))]'}`}>
                    <div className="text-sm text-[rgb(var(--foreground))]/60 mb-2 font-mono">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-display font-bold mb-1">
                      {item.title}
                    </h3>
                    <div className={`font-medium mb-3 ${item.type === 'education' ? 'text-[rgb(var(--accent))]' : 'text-[rgb(var(--secondary-accent))]'}`}>
                      {item.company}
                    </div>
                    <p className="text-[rgb(var(--foreground))]/70">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center w-16 h-16 bg-[rgb(var(--background))] rounded-full shadow-lg border-4 border-[rgb(var(--background-secondary))] relative z-10">
                  <span className="text-2xl">
                    {item.type === 'education' ? '🎓' : '💼'}
                  </span>
                </div>
                <div className="w-full md:w-1/2 hidden md:block"></div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 text-center"
          >
            <div className="inline-block bg-[rgb(var(--accent))]/10 px-6 py-3 rounded-lg">
              <p className="text-[rgb(var(--accent))] font-medium">
                💡 Currently exploring opportunities in UI/UX design, frontend development, and the intersection of technology and intellectual property law.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Personal Interests Section */}
      <section className="py-20 bg-[rgb(var(--background-secondary))]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Beyond the Code
            </h2>
            <p className="text-lg text-[rgb(var(--foreground))]/70 max-w-2xl mx-auto">
              I believe creativity and curiosity fuel great design. Here are some of the things 
              that inspire me and keep me balanced outside of work.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {hobbies.map((hobby, index) => (
              <motion.div
                key={hobby.title}
                variants={fadeInUp}
                className="bg-[rgb(var(--background))] p-6 rounded-xl shadow-sm border border-[rgb(var(--muted))]/20 hover:shadow-md transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl mb-3">{hobby.icon}</div>
                <h3 className="text-lg font-bold mb-2">{hobby.title}</h3>
                <p className="text-[rgb(var(--foreground))]/70 text-sm leading-relaxed">
                  {hobby.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 text-center"
          >
            <div className="inline-block bg-[rgb(var(--secondary-accent))]/10 px-6 py-3 rounded-lg">
              <p className="text-[rgb(var(--secondary-accent))] font-medium">
                🎯 I'm the type of person who prefers diving deep into things - whether it's a 2-hour video essay or spending months perfecting a sweater pattern!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--accent))]/5 to-[rgb(var(--secondary-accent))]/5 -z-10" />
        
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Let's Create Something Amazing Together
            </h2>
            <p className="text-lg text-[rgb(var(--foreground))]/70 mb-8">
              Whether you need a thoughtful UX designer, a skilled frontend developer, 
              or someone who can bridge both worlds, I'd love to hear about your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-[rgb(var(--accent))] text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
                aria-label="Get in touch with Houston Taylor"
              >
                Get In Touch
              </Link>
              <Link 
                href="/projects" 
                className="px-8 py-3 border-2 border-[rgb(var(--accent))] text-[rgb(var(--accent))] rounded-lg font-medium transition-all duration-300 hover:bg-[rgb(var(--accent))] hover:text-white"
                aria-label="View Houston Taylor's portfolio work"
              >
                View My Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}