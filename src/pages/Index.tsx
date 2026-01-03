import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ReflectionSection } from '@/components/ReflectionSection';
import { ConclusionSection } from '@/components/ConclusionSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ReflectionSection />
      <ConclusionSection />
      <Footer />
    </main>
  );
};

export default Index;
