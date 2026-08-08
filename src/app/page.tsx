import { HeroScene } from '@/components/hero';
import { AboutScene } from '@/components/about';
import { ProjectsScene } from '@/components/projects';
import { ExperienceScene } from '@/components/experience';
import { ResearchScene } from '@/components/research';
import { ContactScene } from '@/components/contact';

export default function HomePage() {
  return (
    <div className="bg-[#050505] min-h-screen w-full">
      <HeroScene />
      <AboutScene />
      <ProjectsScene />
      <ExperienceScene />
      <ResearchScene />
      <ContactScene />
    </div>
  );
}
