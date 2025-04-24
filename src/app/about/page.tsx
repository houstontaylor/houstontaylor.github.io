import AboutContent from '@/components/about/AboutPage';

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 pt-32 pb-24">
      <h1 className="text-4xl md:text-5xl font-display font-bold mb-12">About Me</h1>
      <AboutContent />
    </main>
  );
}