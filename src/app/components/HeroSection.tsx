import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

interface HeroSectionProps {
  onCTA: () => void;
}

export function HeroSection({ onCTA }: HeroSectionProps) {
  const [studentCount, setStudentCount] = useState(147);

  useEffect(() => {
    const interval = setInterval(() => {
      setStudentCount((prev) => prev + 1);
    }, 24000); // 24 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Load WayForPay script
    const script = document.createElement('script');
    script.id = 'widget-wfp-script';
    script.src = 'https://secure.wayforpay.com/server/pay-widget.js?ref=button';
    script.type = 'text/javascript';
    document.head.appendChild(script);

    // Add WayForPay function
    const functionScript = document.createElement('script');
    functionScript.type = 'text/javascript';
    functionScript.innerHTML = `
      function runWfpWdgt(url){
        var wayforpay=new Wayforpay();
        wayforpay.invoice(url);
      }
    `;
    document.head.appendChild(functionScript);

    return () => {
      const existingScript = document.getElementById('widget-wfp-script');
      if (existingScript) {
        existingScript.remove();
      }
      if (functionScript.parentNode) {
        functionScript.remove();
      }
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 md:pt-32 md:pb-24 px-4 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-lime-500/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white">Як масажисту вийти на</span>{' '}
            <span className="text-lime-400">стабільний дохід</span>{' '}
            <span className="text-white">і заробляти більше</span>
            <br />
            <span className="text-white">без вигорання та хаосу</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            3 заняття, які покажуть реальний ринок масажу, способи масштабування та точки росту доходу
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
            <button
              type="button"
              onClick={() => {
                if (window.runWfpWdgt) {
                  window.runWfpWdgt('https://secure.wayforpay.com/button/b7658c30de930');
                }
              }}
              style={{
                display: 'inline-block',
                background: '#a3e635',
                width: '280px',
                height: '64px',
                border: 'none',
                borderRadius: '12px',
                padding: '16px',
                boxShadow: '0 10px 30px rgba(163, 230, 53, 0.3)',
                textAlign: 'center',
                outline: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.opacity = '0.85';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <span style={{
                fontFamily: 'Verdana, Arial, sans-serif',
                fontWeight: 'bold',
                fontSize: '18px',
                color: '#18181b',
                lineHeight: '32px',
                verticalAlign: 'middle'
              }}>
                ЗАБРАТИ МІСЦЕ
              </span>
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center justify-center gap-4 flex-wrap"
            >
              <span className="text-3xl md:text-4xl text-zinc-500 line-through opacity-70">3000грн</span>
              <span className="text-5xl md:text-6xl font-bold text-lime-400">600грн</span>
              <motion.span
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="bg-lime-400 text-zinc-950 text-xs md:text-sm font-bold px-4 py-2 rounded-full shadow-lg shadow-lime-500/30"
              >
                СПЕЦПРОПОЗИЦІЯ
              </motion.span>
            </motion.div>

            <motion.div 
              className="flex items-center gap-2 text-zinc-400"
              key={studentCount}
              initial={{ opacity: 0.7, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></div>
              <span>Вже <span className="font-bold text-lime-400">{studentCount} масажистів</span> пройшли навчання</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}