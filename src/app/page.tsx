import { AnimatedCard } from "@/components/AnimatedCard";
import { AnimatedHeader } from "@/components/AnimatedHeader";
import HeroSection from "@/components/HeroSection";
import { Spotlight } from "@/components/spotlight";



export default function Home() {
  return (
    <div className="inset-0 flex flex-col justify-center z-30 mt-10">
      <Spotlight />
      <div className="flex flex-col items-center">
        <AnimatedHeader />
        <AnimatedCard />
        <HeroSection />
      </div>
      <footer className="w-full bg-gray-800 text-white py-4 mt-10">
        <div className="container mx-auto text-center">
          <p>Engineered by: Avocado</p>
          <p>Powered by: ...</p>
        </div>
      </footer>
    </div>
  );
}
