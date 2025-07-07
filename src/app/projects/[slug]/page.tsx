import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { allProjects } from '@/data/projectsData';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

type Project = typeof allProjects[0];

export function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = allProjects.find((p: Project) => p.slug === params.slug);

  if (!project) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-[rgb(var(--background))]">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-20">
        <Link 
          href="/projects" 
          className="inline-flex items-center gap-2 text-[rgb(var(--foreground))]/70 hover:text-[rgb(var(--accent))] transition-colors mb-8"
        >
          ← Back to Projects
        </Link>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-5xl mx-auto">
          
          {/* 1. LOGISTICS SECTION - Header */}
          <section className="mb-16">
            {/* Magazine-style decorative elements */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-[rgb(var(--accent))]"></div>
                <span className="text-[rgb(var(--accent))] font-mono text-xs tracking-[0.2em] uppercase">
                  Project Case Study
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[rgb(var(--foreground))]/60 font-mono text-xs">
                  {project.year}
                </span>
                <div className="w-8 h-px bg-[rgb(var(--accent))]"></div>
              </div>
            </div>

            {/* Project Header Info */}
            <div className="mb-12">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-[rgb(var(--accent))]/10 text-[rgb(var(--accent))] rounded-full text-sm font-medium">
                  {project.category}
                </span>
                <span className="text-[rgb(var(--foreground))]/60">{project.year}</span>
                <span className="text-[rgb(var(--foreground))]/60">•</span>
                <span className="text-[rgb(var(--foreground))]/60">{project.status}</span>
                {(project as any).course && (
                  <>
                    <span className="text-[rgb(var(--foreground))]/60">•</span>
                    <span className="text-[rgb(var(--foreground))]/60">{(project as any).course}</span>
                  </>
                )}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                {project.title}
              </h1>
              
              <p className="text-xl text-[rgb(var(--foreground))]/80 leading-relaxed max-w-3xl">
                {project.description}
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative w-full aspect-video mb-12 rounded-2xl overflow-hidden bg-[rgb(var(--foreground))]/5">
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Project Meta Info */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-start gap-3">
                📅
                <div>
                  <h3 className="font-semibold mb-1">Timeline</h3>
                  <p className="text-[rgb(var(--foreground))]/70">{project.timeline}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                👤
                <div>
                  <h3 className="font-semibold mb-1">Role</h3>
                  <p className="text-[rgb(var(--foreground))]/70">{project.role}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                🎯
                <div>
                  <h3 className="font-semibold mb-1">Team</h3>
                  <p className="text-[rgb(var(--foreground))]/70">{project.team}</p>
                </div>
              </div>
            </div>
          </section>

          {/* 2. PROJECT OVERVIEW & INVOLVEMENT */}
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-display font-bold">Project Overview</h2>
              <div className="flex-1 h-px bg-[rgb(var(--accent))]/30"></div>
              <span className="text-[rgb(var(--accent))] font-mono text-xs">01</span>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Project Description */}
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed text-[rgb(var(--foreground))]/80 mb-6">
                    {project.longDescription}
                  </p>
                  
                  {(project as any).projectContext && (
                    <div className="bg-[rgb(var(--accent))]/5 rounded-xl p-6 mb-6">
                      <h4 className="font-semibold text-[rgb(var(--accent))] mb-3">Project Context</h4>
                      <p className="text-[rgb(var(--foreground))]/80">
                        {(project as any).projectContext}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* My Involvement */}
              <div>
                <h3 className="text-xl font-display font-bold mb-4">My Contributions</h3>
                {(project as any).myContributions ? (
                  <div className="space-y-3">
                    {(project as any).myContributions.map((contribution: string, index: number) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-[rgb(var(--foreground))]/5 rounded-lg">
                        <div className="w-2 h-2 bg-[rgb(var(--accent))] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-[rgb(var(--foreground))]/80">{contribution}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-[rgb(var(--foreground))]/70">Contributions details coming soon...</p>
                )}
              </div>
            </div>

            {/* Technologies Used - Visually separated */}
            <div className="mt-12 bg-[rgb(var(--foreground))]/5 rounded-2xl p-8">
              <h3 className="text-xl font-display font-bold mb-6">Technologies & Tools</h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies?.map((tech: string) => (
                  <span 
                    key={tech} 
                    className="px-4 py-2 bg-[rgb(var(--accent))]/10 border border-[rgb(var(--accent))]/20 text-[rgb(var(--accent))] rounded-lg text-sm font-medium shadow-sm hover:shadow-md hover:bg-[rgb(var(--accent))]/15 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* 3. PROCESS SECTION */}
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-display font-bold">Process & Research</h2>
              <div className="flex-1 h-px bg-[rgb(var(--accent))]/30"></div>
              <span className="text-[rgb(var(--accent))] font-mono text-xs">02</span>
            </div>

            {/* Research & Analysis */}
            {(project as any).researchProcess && (
              <div className="mb-12">
                <h3 className="text-xl font-display font-bold mb-6">Research & User Insights</h3>
                <div className="bg-gradient-to-r from-[rgb(var(--accent))]/5 to-[rgb(var(--secondary-accent))]/5 rounded-2xl p-8">
                  <p className="text-lg leading-relaxed text-[rgb(var(--foreground))]/80">
                    {(project as any).researchProcess}
                  </p>
                  
                  {(project as any).keyInsights && (
                    <div className="mt-6 grid md:grid-cols-2 gap-6">
                      {(project as any).keyInsights.map((insight: any, index: number) => (
                        <div key={index} className="bg-white/50 rounded-xl p-6">
                          <h4 className="font-semibold mb-2">{insight.title}</h4>
                          <p className="text-sm text-[rgb(var(--foreground))]/70">{insight.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Process Images */}
            {(project as any).processImages && (
              <div className="mb-12">
                <h3 className="text-xl font-display font-bold mb-6">Design & Development Process</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {(project as any).processImages.map((img: any, index: number) => (
                    <div key={index} className="group">
                      <div className="relative aspect-video rounded-xl overflow-hidden bg-[rgb(var(--foreground))]/5 mb-4">
                        <Image 
                          src={img.src} 
                          alt={img.alt} 
                          fill 
                          className="object-cover group-hover:scale-105 transition-transform duration-300" 
                        />
                      </div>
                      <div className="bg-[rgb(var(--foreground))]/5 rounded-lg p-4">
                        <h4 className="font-semibold mb-2 text-[rgb(var(--accent))]">{img.title}</h4>
                        <p className="text-sm text-[rgb(var(--foreground))]/70">{img.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Challenges & Solutions */}
            {(project as any).challenges && (
              <div className="mb-12">
                <h3 className="text-xl font-display font-bold mb-6">Challenges & Solutions</h3>
                <div className="space-y-4">
                  {Array.isArray((project as any).challenges) ? (
                    (project as any).challenges.map((challenge: string, index: number) => (
                      <div key={index} className="flex items-start gap-4 p-6 bg-[rgb(var(--foreground))]/5 rounded-xl">
                        <div className="w-8 h-8 bg-[rgb(var(--secondary-accent))]/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-[rgb(var(--secondary-accent))] font-bold text-sm">{index + 1}</span>
                        </div>
                        <p className="text-[rgb(var(--foreground))]/80 leading-relaxed">{challenge}</p>
                      </div>
                    ))
                  ) : (
                    <div className="p-6 bg-[rgb(var(--foreground))]/5 rounded-xl">
                      <p className="text-[rgb(var(--foreground))]/80">{(project as any).challenges}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </section>

          {/* 4. RESULTS & LINKS */}
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-display font-bold">Results & Links</h2>
              <div className="flex-1 h-px bg-[rgb(var(--accent))]/30"></div>
              <span className="text-[rgb(var(--accent))] font-mono text-xs">03</span>
            </div>

            {/* Impact Statement */}
            {project.impact && (
              <div className="mb-12 bg-gradient-to-r from-[rgb(var(--accent))]/10 to-[rgb(var(--secondary-accent))]/10 rounded-2xl p-8">
                <h3 className="text-xl font-display font-bold mb-4">Project Impact</h3>
                <p className="text-lg leading-relaxed text-[rgb(var(--foreground))]/80">
                  {project.impact}
                </p>
              </div>
            )}

            {/* Recognition */}
            {(project as any).recognition && (
              <div className="mb-12 text-center bg-[rgb(var(--accent))]/5 rounded-2xl p-8">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-display font-bold mb-4">Recognition</h3>
                <p className="text-lg text-[rgb(var(--foreground))]/80">
                  {(project as any).recognition}
                </p>
              </div>
            )}

            {/* Project Links */}
            <div className="bg-[rgb(var(--foreground))]/5 rounded-2xl p-8">
              <h3 className="text-xl font-display font-bold mb-6">Explore This Project</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                
                {/* Figma Link */}
                {(project as any).links?.figma && (
                  <a 
                    href={(project as any).links.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden bg-[rgb(var(--accent))] text-white px-6 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1 flex items-center gap-3"
                  >
                    <div className="text-2xl">🎨</div>
                    <div>
                      <div className="font-semibold text-sm">Figma Design</div>
                      <div className="text-xs opacity-80">View design process</div>
                    </div>
                    <span className="absolute inset-0 bg-black/10 w-0 group-hover:w-full transition-all duration-300 z-0"></span>
                  </a>
                )}

                {/* GitHub Link */}
                {((project as any).links?.github || (project as any).links?.currentGithub) && (
                  <a 
                    href={(project as any).links?.github || (project as any).links?.currentGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden bg-[rgb(var(--foreground))]/80 text-white px-6 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1 flex items-center gap-3"
                  >
                    <div className="text-2xl">💻</div>
                    <div>
                      <div className="font-semibold text-sm">Source Code</div>
                      <div className="text-xs opacity-80">View on GitHub</div>
                    </div>
                    <span className="absolute inset-0 bg-black/10 w-0 group-hover:w-full transition-all duration-300 z-0"></span>
                  </a>
                )}

                {/* Live Demo */}
                {((project as any).liveUrl || (project as any).links?.itchio || (project as any).links?.observable) && (
                  <a 
                    href={(project as any).liveUrl || (project as any).links?.itchio || (project as any).links?.observable}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden bg-[rgb(var(--secondary-accent))] text-white px-6 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1 flex items-center gap-3"
                  >
                    <div className="text-2xl">🚀</div>
                    <div>
                      <div className="font-semibold text-sm">Live Demo</div>
                      <div className="text-xs opacity-80">Try it out</div>
                    </div>
                    <span className="absolute inset-0 bg-black/10 w-0 group-hover:w-full transition-all duration-300 z-0"></span>
                  </a>
                )}

                {/* Article/Documentation */}
                {(project as any).links?.article && (
                  <a 
                    href={(project as any).links.article}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden border-2 border-blue-500 text-blue-600 px-6 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1 flex items-center gap-3 hover:text-white"
                  >
                    <div className="text-2xl">📄</div>
                    <div>
                      <div className="font-semibold text-sm">Read Article</div>
                      <div className="text-xs opacity-80">External coverage</div>
                    </div>
                    <span className="absolute inset-0 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0"></span>
                    <span className="relative z-10"></span>
                  </a>
                )}

                {/* Additional documentation */}
                {(project as any).links?.writeup && (
                  <a 
                    href={(project as any).links.writeup}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden border-2 border-green-500 text-green-600 px-6 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1 flex items-center gap-3 hover:text-white"
                  >
                    <div className="text-2xl">📝</div>
                    <div>
                      <div className="font-semibold text-sm">Project Writeup</div>
                      <div className="text-xs opacity-80">Detailed documentation</div>
                    </div>
                    <span className="absolute inset-0 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0"></span>
                    <span className="relative z-10"></span>
                  </a>
                )}

              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}