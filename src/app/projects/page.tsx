import ProjectsList from '@/components/projects/ProjectsList';

export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-4 pt-32 pb-24">
      <h1 className="text-4xl md:text-5xl font-display font-bold mb-12">My Projects</h1>
      <ProjectsList />
    </main>
  );
}