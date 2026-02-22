import { useCallback } from 'react';
import { CountdownTimer } from './components/CountdownTimer';
import { HeroSection } from './components/HeroSection';
import { PainSection } from './components/PainSection';
import { RealProblemSection } from './components/RealProblemSection';
import { ExpertSection } from './components/ExpertSection';
import { ProgramSection } from './components/ProgramSection';
import { OpportunitiesSection } from './components/OpportunitiesSection';
import { BonusSection } from './components/BonusSection';
import { ForWhoSection } from './components/ForWhoSection';
import { ResultsSection } from './components/ResultsSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToCTA = useCallback(() => {
    const ctaSection = document.getElementById('cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <CountdownTimer onAction={scrollToCTA} />
      
      <main>
        <HeroSection onCTA={scrollToCTA} />
        <PainSection />
        <RealProblemSection />
        <ExpertSection />
        <ProgramSection />
        <OpportunitiesSection />
        <BonusSection />
        <ForWhoSection />
        <ResultsSection />
        <CTASection onAction={scrollToCTA} />
      </main>

      <Footer />
    </div>
  );
}
