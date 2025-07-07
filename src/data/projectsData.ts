export const allProjects = [
  // === FEATURED/MAJOR PROJECTS ===
  {
    id: '1',
    title: 'PodBot',
    description: 'An accessible AI chatbot that answers podcast listener questions using past episodes, with full transcripts and source citations.',
    longDescription: 'Started as an independent study combining accessibility work and AI chatbot development. PodBot answers podcast listeners\' questions in the host\'s style using only past episodes as sources, with accessible transcripts and episode carousels.',
    
    // Basic logistics
    category: 'AI/ML',
    year: '2023-2024',
    timeline: 'Summer 2023 - Spring 2024',
    role: 'Project Manager/Accessibility Designer → Frontend Designer',
    team: 'Startup Team (4 people)',
    company: 'Sunao Lab',
    course: null, // No course since it was a startup
    status: 'Completed (Startup)',
    
    // Hero image with styling
    image: '/podbot/hero-image.jpg',
    heroCaption: 'PodBot interface showing episode citations and accessibility features',
    
    // Enhanced project context
    projectContext: 'Began as an independent study combining two CS 206 computational journalism projects - accessible podcast captioning and AI chatbot development. After the independent study completed, our professor invested his own money to begin a startup called Sunao Labs.',
    
    // My specific contributions
    myContributions: [
      'Accessible podcast captioning with ads and affiliate links',
      'Project management and timeline coordination',
      'Frontend UI/UX design in Figma',
      'Frontend development implementation',
      'Cross-team collaboration and communication'
    ],
    
    // Technologies
    technologies: ['Machine Learning', 'Natural Language Processing', 'Figma', 'Frontend Development', 'Accessibility Design', 'Captioning'],
    
    // Research & Process
    researchProcess: 'Combined two existing projects: my work on accessible podcast captioning (including ads with affiliate links for funding) and another team\'s Planet Money chatbot. We interviewed podcast listeners and accessibility advocates to understand needs for inclusive podcast interaction.',
    
    keyInsights: [
      {
        title: 'Accessibility Gap',
        description: 'Podcast platforms lacked comprehensive captioning, especially for dynamic ad content'
      },
      {
        title: 'Citation Importance', 
        description: 'Users wanted to verify information by accessing original episode sources'
      },
      {
        title: 'Host Voice Authenticity',
        description: 'Maintaining the distinctive style of podcast hosts was crucial for user trust'
      }
    ],
    
    // Process images (these would be in /public/podbot/)
    processImages: [
      {
        src: '/podbot/wireframes.jpg',
        alt: 'Initial wireframes and user flow',
        title: 'User Experience Design',
        description: 'Early wireframes focusing on accessibility patterns and clear information hierarchy for screen readers'
      },
      {
        src: '/podbot/figma-iterations.jpg', 
        alt: 'Figma design iterations',
        title: 'Interface Development',
        description: 'Multiple design iterations in Figma, testing different layouts for episode citation display'
      },
      {
        src: '/podbot/accessibility-testing.jpg',
        alt: 'Accessibility testing session',
        title: 'Accessibility Validation',
        description: 'Testing with screen readers and keyboard navigation to ensure full accessibility compliance'
      },
      {
        src: '/podbot/team-collaboration.jpg',
        alt: 'Team working together',
        title: 'Cross-Team Collaboration', 
        description: 'Working closely with backend developers to integrate ML model with accessible frontend'
      }
    ],
    
    // Challenges faced
    challenges: [
      'Maintaining host voice authenticity while ensuring accessibility compliance',
      'Creating intuitive interfaces for complex AI interactions without overwhelming users',
      'Scaling from single podcast (Planet Money) to multiple shows with different formats',
      'Balancing comprehensive captioning with real-time ad content that changes per listen'
    ],
    
    // Project impact
    impact: 'Created a proof of concept for accessible podcast interaction that secured real startup investment. Demonstrated how AI can maintain authentic voice while serving accessibility needs, paving the way for more inclusive podcast experiences.',
    
    // Recognition (if any)
    recognition: 'Secured startup funding from Stanford professor, featured in Stanford journalism fellowship article',
    
    // All project links
    links: {
      figma: 'https://figma.com/podbot-designs', // You'll replace with actual Figma link
      currentGithub: 'https://github.com/sunaolab/PodBot',
      oldGithub: 'https://github.com/ori-spector/pmb_live',
      article: 'https://jskfellows.stanford.edu/can-we-build-an-ai-chatbot-for-journalism-79ffe39e053e',
      originalPaper: 'https://docs.google.com/document/d/1mXWqRyPfH1qAVAQ-qAr-T9gQ7gjjIJISWCkYiX5RJ1I/edit?tab=t.0#heading=h.gzw7f9xr9l24'
    },
    
    // Metadata
    tags: ['AI/ML', 'Chatbot', 'Startup', 'Accessibility', 'NLP', 'Figma', 'Frontend'],
    slug: 'planet-money-bot',
    featured: true,
    type: 'Professional'
  },

  {
    id: '2', 
    title: 'QUEERx',
    description: 'A React app helping queer patients find LGBTQ+-friendly healthcare providers through crowdsourced reviews.',
    longDescription: 'A comprehensive platform that allows LGBTQ+ patients to vet healthcare providers based on community reviews. Addresses critical gaps in healthcare accessibility for queer individuals seeking sensitive, affirming care.',
    
    // Basic logistics
    category: 'Social Impact',
    year: '2023',
    timeline: 'Fall 2023', 
    role: 'Full-Stack Developer (Solo Coding)',
    team: 'Group of 4 (research), Solo development',
    course: 'CS 147 - Human-Computer Interaction',
    status: 'Completed',
    
    // Hero image
    image: '/queerx/hero-interface.jpg',
    heroCaption: 'QUEERx healthcare provider search interface',
    
    // Project context
    projectContext: 'For CS 147, we had to needfind within the healthcare space. Our team of 4 decided to focus on the LGBTQ+ community after discovering significant gaps in finding affirming healthcare providers.',
    
    // My contributions
    myContributions: [
      'Conducted user interviews across age groups 19-80',
      'Solo development of entire React application',
      'UI/UX design and prototyping',
      'User research synthesis and insights',
      'Final presentation and demo'
    ],
    
    // Technologies
    technologies: ['React', 'JavaScript', 'CSS', 'User Research', 'Figma', 'HTML'],
    
    // Research process
    researchProcess: 'Interviewed about a dozen people across different age groups in the United States (19-80s) to understand healthcare challenges in LGBTQ+ community. Discovered issues like providers making assumptions about sexual activity based on orientation, or lack of gender-affirming care knowledge.',
    
    keyInsights: [
      {
        title: 'Provider Assumptions',
        description: 'Healthcare providers often make incorrect assumptions about LGBTQ+ patients\' needs and experiences'
      },
      {
        title: 'Trust & Safety',
        description: 'Community members need way to verify provider acceptance before vulnerable appointments'
      },
      {
        title: 'Information Gap',
        description: 'No centralized resource for finding LGBTQ+-friendly providers with verified reviews'
      }
    ],
    
    // Process images
    processImages: [
      {
        src: '/queerx/user-interviews.jpg',
        alt: 'User interview notes and insights',
        title: 'User Research',
        description: 'Synthesizing insights from interviews with LGBTQ+ community members across age groups'
      },
      {
        src: '/queerx/persona-development.jpg',
        alt: 'User personas and journey maps',
        title: 'Persona Development',
        description: 'Creating detailed personas based on interview findings to guide design decisions'
      },
      {
        src: '/queerx/wireframe-iterations.jpg',
        alt: 'Wireframe sketches and digital prototypes',
        title: 'Interface Design',
        description: 'Iterating on wireframes to balance transparency with user privacy concerns'
      },
      {
        src: '/queerx/final-prototype.jpg',
        alt: 'Final React application screenshots',
        title: 'Development & Testing',
        description: 'Building and testing the React application with community feedback'
      }
    ],
    
    // Challenges
    challenges: [
      'Balancing user privacy with transparency in healthcare reviews',
      'Solo coding entire React app while team members focused on research',
      'Designing for diverse community needs across age groups and experiences',
      'Creating trust mechanisms for sensitive healthcare information'
    ],
    
    // Impact
    impact: 'Won "Greatest Social Impact" award at CS 147 final presentation. Addresses critical healthcare accessibility gap for LGBTQ+ community through peer review system, potentially improving healthcare experiences for vulnerable populations.',
    
    // Recognition
    recognition: 'Won "Greatest Social Impact" award at CS 147 final presentation, voted by visiting professionals in the industry',
    
    // Links
    links: {
      figma: 'https://www.figma.com/design/qVVPOrhMlClvlKx8GzU1Sp/QueerX-Workspace?node-id=0-1&p=f&t=OpxNjliumROLFFNR-0',
      github: 'https://github.com/houstontaylor/QUEERx'
    },
    
    // Metadata
    tags: ['React', 'Healthcare', 'LGBTQ+', 'Social Impact', 'UI/UX', 'User Research'],
    slug: 'queerx',
    featured: true,
    type: 'Academic'
  },

  {
    id: '3',
    title: 'Tend',
    description: 'A behavior change app using plant metaphors to help new graduates nurture and maintain their friendships.',
    longDescription: 'An innovative behavior change design that gamifies friendship maintenance for new graduates. Users create virtual plants representing each friendship and care for them through real-world activities - texting gives sun, calling provides water, meeting in person adds nutrients.',
    image: '/projects/friendship-garden.jpg',
    tags: ['Figma', 'Behavior Change', 'UI/UX', 'Psychology', 'User Research'],
    slug: 'friendship-garden',
    category: 'Behavior Design',
    featured: true,
    year: '2025',
    timeline: 'Winter 2025',
    role: 'Group Member (Design & Research)',
    course: 'CS 247B - Design for Behavior Change',
    team: 'Group of 4',
    status: 'Completed',
    technologies: ['Figma', 'User Research', 'Behavioral Psychology', 'Prototyping'],
    
    targetAudience: 'New graduates struggling to maintain friendships after leaving college environment',
    
    researchProcess: 'Interviewed and ran behavior change studies on about a dozen new graduates',
    
    coreFeatures: [
      'Plant representation of each friendship with different care needs',
      'Goal setting for texting, calling, and in-person meetings',
      'Action logging mapped to plant care (texting = sun, calling = water, meeting = nutrients)',
      'Home screen widgets for quick friendship health overview',
      'Visual health indicators based on care consistency'
    ],
    
    challenges: 'Translating abstract friendship concepts into engaging, sustainable mechanics',
    
    impact: 'Novel approach to maintaining social connections for young adults in transition',
    
    links: {
      figma: 'https://www.figma.com/design/MpbBcBCQncpo5LsIaRjyTk/Clickable-Prototype?node-id=0-1&p=f&t=e3GRpuTPhQNefyvr-0',
      writeup: 'https://highercommonsense.com/cs247b/16794/'
    },
    
    type: 'Academic'
  },

  {
    id: '4',
    title: 'FilmFlicks',
    description: 'A movie recommendation app where users swipe on films and join groups for personalized suggestions.',
    longDescription: 'A social movie discovery platform combining individual preferences with group dynamics. Users swipe on movies like Letterboxd, then join groups with friends to get curated recommendations based on collective tastes with filtering options.',
    image: '/projects/filmflicks.jpg',
    tags: ['React', 'Recommendation Engine', 'Social Features', 'UI/UX', 'LLM'],
    slug: 'filmflicks',
    category: 'Entertainment',
    featured: true,
    year: '2024',
    timeline: 'Spring 2024',
    role: 'Frontend Developer & Designer',
    course: 'CS 194W - Software Project',
    team: 'Group of 4',
    status: 'Completed',
    technologies: ['React', 'JavaScript', 'Figma', 'LLM Integration', 'Recommendation Algorithms'],
    
    myContributions: [
      'Figma design and prototyping',
      'Frontend development with 2 partners',
      'User interface design'
    ],
    
    teamStructure: 'Frontend team of 3 (including me) + 1 backend developer handling LLM functionality',
    
    coreFeatures: [
      'Tinder-style swiping for movie preferences',
      'Letterboxd-inspired movie tracking',
      'Group formation for collective recommendations',
      'Filtering by genre, length, time, and more',
      'LLM-powered recommendation engine'
    ],
    
    challenges: 'Balancing individual preferences with group recommendations, integrating LLM for smart suggestions',
    
    impact: 'Simplified movie discovery for friend groups with personalized AI recommendations',
    
    links: {
      figma: 'https://www.figma.com/design/avbYqkfzrZbES49Aqu9lqg/CS194W--Flim-Flicks?node-id=0-1&p=f&t=0hkoRgpTte7BNaUz-0'
    },
    
    type: 'Academic'
  },

  {
    id: '5',
    title: 'Accessible Barcode Scanner',
    description: 'An app helping blind and low-vision users identify allergens in products through scanning with haptic feedback.',
    longDescription: 'An accessibility-focused shopping app for blind and low-vision users. Scans product barcodes to quickly identify allergens with haptic feedback and clear SAFE/NOT SAFE responses, plus suggests alternatives.',
    image: '/projects/allergen-scanner.jpg',
    tags: ['Accessibility', 'Mobile App', 'Computer Vision', 'API Integration', 'LLM'],
    slug: 'allergen-scanner',
    category: 'Accessibility',
    featured: true,
    year: '2025',
    timeline: 'Winter 2025',
    role: 'API Developer & Frontend Developer',
    course: 'CS 377Q - Designing for Accessibility',
    team: 'Group of 5',
    status: 'Completed',
    technologies: ['Mobile Development', 'API Integration', 'LLM', 'Computer Vision', 'Accessibility Standards'],
    
    targetAudience: 'Blind and low-vision individuals shopping in-person',
    
    myContributions: [
      'API functionality to determine food safety',
      'Frontend screen development',
      'Integration of two allergen databases',
      'LLM implementation for conflict resolution'
    ],
    
    technicalApproach: 'Calls two allergen databases, uses LLM to determine safety when APIs conflict or lack information',
    
    coreFeatures: [
      'Barcode scanning for product identification',
      'Quick haptic feedback for immediate response',
      'Clear SAFE/NOT SAFE visual indicators',
      'Alternative product suggestions when unsafe',
      'Future computer vision integration for non-barcode products'
    ],
    
    researchProcess: 'Interviewed blind and low-vision individuals to understand shopping challenges',
    
    challenges: 'Creating intuitive non-visual interaction patterns, handling conflicting database information',
    
    impact: 'Improves shopping safety and independence for blind/low-vision users',
    
    links: {
      figma: 'https://www.figma.com/design/w6O54iLL5FVgMDWIwOJaW7/P3-Prototyping?m=auto&fuid=1291908997707874300',
      github: 'https://github.com/houstontaylor/accessible-barcode-scanner'
    },
    
    type: 'Academic'
  },

  // === GAME DESIGN PROJECTS ===
  {
    id: '6',
    title: 'Critter',
    description: 'A Unity puzzle-platformer about a forest creature stopping factory robots from destroying its home.',
    longDescription: 'An environmental narrative game where a small forest critter enters a robot factory to stop the destruction of its home. Combines 2D platforming with puzzle mechanics and environmental storytelling.',
    image: '/projects/critter.jpg',
    tags: ['Unity', 'Game Design', 'Environmental Narrative', 'C#', 'Sound Design'],
    slug: 'critter',
    category: 'Game Design',
    featured: false,
    year: '2024',
    timeline: 'Spring 2024',
    role: 'Sound Designer, Artist, & Developer',
    course: 'CS 247G - Introduction to Game Design',
    team: 'Group of 5',
    status: 'Completed',
    technologies: ['Unity', 'C#', 'Sound Design', 'Digital Art', 'Game Mechanics'],
    
    myContributions: [
      'Sound design and audio implementation',
      'Art creation and visual assets',
      'Game object setup and minor coding'
    ],
    
    gameplayMechanics: '2D platformer with puzzle elements - critter navigates factory, solves puzzles to reach AI core and shut down robot production',
    
    narrative: 'Environmental storytelling about habitat destruction and taking action against industrial threats',
    
    challenges: 'Balancing puzzle difficulty with narrative pacing, creating cohesive audio-visual experience',
    
    impact: 'Explores environmental themes through interactive storytelling and gameplay',
    
    links: {
      github: 'https://github.com/houstontaylor/critter-game',
      itchio: 'https://lwcoding.itch.io/critter'
    },
    
    type: 'Academic'
  },

  {
    id: '7',
    title: 'InterStellar Postal Service',
    description: 'A space-themed Unity game teaching postal systems through package sorting and alien delivery mechanics.',
    longDescription: 'A polished Unity game about delivering packages in space. Features custom pixel art, engaging sorting mechanics, and teaches postal systems through space-themed gameplay with alien planets.',
    image: '/projects/interstellar-postal.jpg',
    tags: ['Unity', 'Pixel Art', 'Game Design', 'C#', 'Educational'],
    slug: 'interstellar-postal-service',
    category: 'Game Design',
    featured: false,
    year: '2024',
    timeline: 'Fall 2024',
    role: 'Artist',
    course: 'CS 377G - Design and Analysis of Games',
    team: 'Group of 4',
    status: 'Completed',
    technologies: ['Unity', 'C#', 'Pixel Art', 'UI Design', 'Educational Design'],
    
    myContributions: [
      'Art creation and visual design',
      'Pixel art assets and animations',
      'UI/UX visual elements'
    ],
    
    teamStructure: '2 artists (including me) + 2 programmers',
    
    gameplayMechanics: [
      'Catch falling packages and sort into correct piles',
      'Deliver packages by shooting them at receiving aliens',
      'Avoid obstacles during delivery',
      'Earn money to upgrade equipment and unlock new areas'
    ],
    
    educationalGoal: 'Teaching postal system concepts through engaging space-themed gameplay',
    
    challenges: 'Creating intuitive sorting mechanics that scale in difficulty while maintaining educational value',
    
    impact: 'Demonstrates collaborative game development and educational game design',
    
    links: {
      github: 'https://github.com/anaxrocks/ISPS-P3',
      itchio: 'https://anaxrocks.itch.io/interstellar-postal-service'
    },
    
    type: 'Academic'
  },

  {
    id: '8',
    title: 'Raccoon Mama',
    description: 'A Unity platformer following a raccoon mother searching for her babies across Stanford campus.',
    longDescription: 'An ongoing independent study project creating a 2D platformer set on Stanford campus. A raccoon mother navigates familiar campus locations, encountering helpful animals and iconic landmarks while searching for her five lost babies.',
    image: '/projects/raccoon-game.jpg',
    tags: ['Unity', 'Game Design', 'C#', 'Independent Study', 'Campus Culture'],
    slug: 'raccoon-campus-quest',
    category: 'Game Design',
    featured: false,
    year: '2025',
    timeline: 'Spring 2025 - Ongoing',
    role: 'Artist & Developer',
    course: 'Independent Study',
    team: 'Started with 2, now solo',
    status: 'In Development (Side Project)',
    technologies: ['Unity', 'C#', 'Digital Art', 'Level Design', 'Game Mechanics'],
    
    myContributions: [
      'All art creation and visual design',
      'Game development and coding',
      'Level design and campus representation'
    ],
    
    projectEvolution: 'Started as independent study with partner, continuing solo as side project after graduation',
    
    storyPlan: [
      'Raccoon mama loses babies in campus flood',
      'First baby found in storm drains (campus travel system)',
      'Second baby held as mascot at fraternity house',
      'Three more babies scattered across campus landmarks'
    ],
    
    campusHomage: 'Tribute to Stanford featuring recognizable locations and campus culture',
    
    challenges: 'Accurately representing campus geography while maintaining engaging gameplay, balancing nostalgia with universal appeal',
    
    impact: 'Combines local Stanford culture with universal themes of family and perseverance',
    
    links: {
      github: 'https://github.com/Nils-Forstall/Raccoon-Mama'
    },
    
    type: 'Personal'
  },

  // === DATA & ANALYSIS PROJECTS ===
  {
    id: '9',
    title: 'National Gallery Art Acquisition Analysis',
    description: 'Interactive data visualization exploring power dynamics in art acquisition and display at the National Gallery.',
    longDescription: 'A comprehensive data analysis titled "What Shapes What We See?" examining manifestations of power in art acquisition and display trends. Uses three interactive D3 visualizations to reveal institutional collecting patterns.',
    image: '/projects/national-gallery-dataviz.jpg',
    tags: ['Data Visualization', 'D3.js', 'Observable', 'Analysis', 'Art History'],
    slug: 'national-gallery-analysis',
    category: 'Data Visualization',
    featured: false,
    year: '2024',
    timeline: 'Fall 2024',
    role: 'Data Analyst & Visualization Developer',
    course: 'Data Visualization Course',
    team: 'Partnership (2 people)',
    status: 'Completed',
    technologies: ['D3.js', 'Observable', 'Data Analysis', 'Interactive Design'],
    
    myContributions: [
      'Created 2 of 3 interactive visualizations',
      'Co-authored analysis and findings',
      'Writing and editing of final piece'
    ],
    
    researchQuestion: 'How do power dynamics manifest in institutional art acquisition and display decisions?',
    
    methodology: 'Analysis of National Gallery acquisition data through three interactive visualization approaches',
    
    challenges: 'Transforming complex institutional data into engaging, accessible narratives',
    
    impact: 'Reveals hidden patterns in museum collecting practices and institutional power structures',
    
    links: {
      observable: 'https://observablehq.com/d/0897f83ea44f3d15'
    },
    
    type: 'Academic'
  },

  {
    id: '10',
    title: 'BrainSpark Games Strategy',
    description: 'Product management strategy and PRD for educational gaming company\'s MathQuest 2.',
    longDescription: 'A comprehensive product strategy for BrainSpark Games\' MathQuest 2, including market analysis, user research, competitive analysis, and complete Product Requirements Document.',
    image: '/projects/brainspark-strategy.jpg',
    tags: ['Product Management', 'Strategy', 'EdTech', 'User Research', 'PRD'],
    slug: 'brainspark-games-strategy',
    category: 'Product Management',
    featured: false,
    year: '2025',
    timeline: 'Winter 2025',
    role: 'Team Member (Strategy & Research)',
    course: 'CS 177 - Human Centered Product Management',
    team: 'Group Project',
    status: 'Completed',
    technologies: ['Market Research', 'User Interviews', 'Competitive Analysis', 'PRD Development'],
    
    projectScope: 'Complete product strategy for mock educational gaming company\'s new math learning game',
    
    deliverables: [
      'One-pager executive summary',
      'Pitch deck presentation',
      'Student interviews and research',
      'Competitive analysis',
      'Complete Product Requirements Document'
    ],
    
    challenges: 'Balancing educational effectiveness with engaging gameplay mechanics for student audiences',
    
    impact: 'Comprehensive go-to-market strategy for educational gaming with evidence-based recommendations',
    
    links: {
      prd: 'https://docs.google.com/document/d/e/2PACX-1vR0YIDuD-twc_lFp-y1N4jHPZYo1d39C9RPtIapJ5g0Puq14X3AWA1e6QV-RBjgnfu5GHKg-0br--CS/pub',
      companyDetails: 'https://docs.google.com/document/d/e/2PACX-1vReKbSCpBy2j_MW3m5ID9MjLywQ2Kl3DBW8QIysumJSI-hmfZT2Ccq5ucj8pILa8ul8EZ0yy7ET-RNf/pub'
    },
    
    type: 'Academic'
  },

  // === SPECIALIZED PROJECTS ===
  {
    id: '11',
    title: 'Inclusive ASL Fingerspelling Recognition',
    description: 'Computer vision project improving fingerspelling recognition across different skin tones and lighting.',
    longDescription: 'A machine learning project addressing bias in computer vision systems by creating a more inclusive ASL fingerspelling recognition model. Designed specifically to work accurately across different skin tones and lighting conditions.',
    image: '/projects/sign-language-cv.jpg',
    tags: ['Computer Vision', 'Machine Learning', 'Accessibility', 'Python', 'Bias Mitigation'],
    slug: 'sign-language-recognition',
    category: 'AI/ML',
    featured: false,
    year: '2022',
    timeline: 'Fall 2022',
    role: 'Solo Developer & Researcher',
    course: 'CS 229 - Machine Learning',
    team: 'Individual Project',
    status: 'Completed',
    technologies: ['Python', 'Computer Vision', 'Machine Learning', 'Data Analysis'],
    
    personalMotivation: 'As someone who knows ASL and is half Black, wanted to design for underrepresented groups who would benefit immensely from improved recognition',
    
    technicalChallenge: 'Improving computer vision efficacy for darker skin tones that are typically underrepresented in training data',
    
    researchFocus: 'Recognition and distinction between ASL fingerspelling letters across diverse skin tones and lighting conditions',
    
    challenges: 'Addressing systemic bias in existing computer vision models, ensuring inclusive dataset representation',
    
    impact: 'More inclusive accessibility technology for deaf/HOH community, particularly people of color',
    
    note: 'Code lost due to laptop failure, may have final poster available',
    
    type: 'Academic'
  },

  {
    id: '12',
    title: 'Archival Echoes',
    description: 'A Twine-based interactive fiction exploring information integrity and archival power dynamics.',
    longDescription: 'A short interactive game where players take on the role of an archivist discovering they\'re being tasked with deleting evidence of past revolutions. Explores themes of information control and resistance.',
    image: '/projects/interactive-fiction.jpg',
    tags: ['Twine', 'Interactive Fiction', 'Information Integrity', 'Narrative Design'],
    slug: 'archival-echoes',
    category: 'Interactive Media',
    featured: false,
    year: '2025',
    timeline: 'Winter 2025',
    role: 'Developer & Narrative Designer',
    course: 'CS 218 - Information Integrity',
    team: 'Individual Project',
    status: 'Completed',
    technologies: ['Twine', 'Interactive Narrative', 'Game Design'],
    
    gameplayMechanic: 'Player discovers they\'re deleting evidence of civil unrest rather than neutral archival work, must choose between compliance and resistance',
    
    thematicFocus: 'Information integrity, archival power, resistance vs. compliance, historical erasure',
    
    narrativeWarning: 'Explores consequences of both compliance and resistance - not all revolutions succeed',
    
    impact: 'Thought-provoking exploration of information control and institutional power',
    
    links: {
      itchio: 'https://housangel.itch.io/archival-echoes'
    },
    
    type: 'Academic'
  }
];

// Additional projects note for ProjectsList
export const additionalProjectsNote = {
  title: "Additional Work Available",
  description: "I have several other projects including computational journalism work, 3D modeling experiments, and various class assignments. Feel free to ask about specific areas of interest!",
  categories: [
    "3D Modeling & Animation",
    "Data Analysis Projects", 
    "Web Development Experiments",
    "Academic Coursework",
    "Research Projects"
  ]
};

// Helper functions
export const getFeaturedProjects = () => {
  return allProjects.filter(project => project.featured);
};

export const getProjectsByCategory = (category: string) => {
  return allProjects.filter(project => project.category === category);
};

export const getProjectsByType = (type: 'Academic' | 'Professional' | 'Personal') => {
  return allProjects.filter(project => project.type === type);
};