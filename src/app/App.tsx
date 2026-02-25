import { useCallback, useEffect } from 'react';
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

  useEffect(() => {
    // Facebook Pixel
    !(function (f: any, b: any, e: any, v: any, n: any, t: any, s: any) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      'script',
      'https://connect.facebook.net/en_US/fbevents.js',
      undefined,
      undefined,
      undefined
    );

    if (window.fbq) {
      window.fbq('init', '901744105931166');
      window.fbq('track', 'PageView');
    }
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Facebook Pixel noscript */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=901744105931166&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>

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
import ThankYou from "./ThankYou";
