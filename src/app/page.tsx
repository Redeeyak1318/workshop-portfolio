import { HeroScene } from '@/components/hero';
import { AboutScene } from '@/components/about';

export default function HomePage() {
  return (
    <div className="bg-[#050505] min-h-screen w-full">
      <HeroScene />
      <AboutScene />
    </div>
  );
}
