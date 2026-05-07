import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Modeling } from './components/Modeling';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { BackToTop } from './components/BackToTop';
import { FloatingIconsBackground } from './components/FloatingIconsBackground';

export default function App() {
  return (
    <div className="min-h-screen bg-background relative">
      <FloatingIconsBackground />
      <ScrollProgress />
      <BackToTop />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Modeling />
      </main>
      <Footer />
    </div>
  );
}