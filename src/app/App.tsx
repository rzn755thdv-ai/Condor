import { Hero } from './components/Hero';
import { About } from './components/About';
import { Capabilities } from './components/Capabilities';
import { Sectors } from './components/Sectors';
import { Engagement } from './components/Engagement';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <Capabilities />
      <Sectors />
      <Engagement />
      <Contact />
      <Footer />
    </div>
  );
}
