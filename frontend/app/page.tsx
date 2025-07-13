import { AboutSection } from '../components/AboutSection';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { ContactForm } from '../components/ContactForm';

export default function Home() {
  return (
    <main className="min-h-screen">
      <AboutSection />
      <Skills />
      <ContactForm />
    </main>
  );
}
