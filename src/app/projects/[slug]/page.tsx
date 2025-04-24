import { notFound } from 'next/navigation';
import Image from 'next/image';
import { allProjects } from '@/data/projectsData'; // Adjust the import path as necessary

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = allProjects.find(p => p.slug === params.slug);

  if (!project) {
    return notFound();
  }

  return (
    <main className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-lg text-foreground/70 mb-6">{project.description}</p>

      <div className="relative w-full aspect-video mb-8">
        <Image 
          src={project.image} 
          alt={project.title}
          layout="fill"
          className="object-cover rounded-lg"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <span key={tag} className="px-3 py-1 bg-muted text-sm rounded">
            {tag}
          </span>
        ))}
      </div>
    </main>
  );
}
