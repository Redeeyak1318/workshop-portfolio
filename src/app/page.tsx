import { HeroScene } from '@/components/hero';
import { AboutScene } from '@/components/about';
import { ProjectsScene } from '@/components/projects';
import { ExperienceScene } from '@/components/experience';
import { ResearchScene } from '@/components/research';
import { ContactScene } from '@/components/contact';
import { Navigation } from '@/components/navigation/Navigation';

export default function HomePage() {
  return (
    <div className="bg-[#050505] min-h-screen w-full relative">
      <Navigation />
      <HeroScene />
      <AboutScene />
      <ProjectsScene />
      <ExperienceScene />
      <ResearchScene />
      <ContactScene />
    </div>
  );
}
