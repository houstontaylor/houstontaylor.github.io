import ContactForm from '@/components/contact/ContactPage';

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 pt-32 pb-24">
      <h1 className="text-4xl md:text-5xl font-display font-bold mb-12">Get In Touch</h1>
      <ContactForm />
    </main>
  );
}