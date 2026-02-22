import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

interface CTASectionProps {
  onAction: () => void;
}

export function CTASection({ onAction }: CTASectionProps) {
  return (
    <section id="cta" className="py-20 md:py-32 px-4 bg-zinc-950">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          {...fadeInUp}
          className="relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-12 md:p-16 overflow-hidden backdrop-blur-sm"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-zinc-800/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-zinc-700/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Почніть заробляти більше
              <br />
              в професії масажиста
              <br />
              вже зараз
            </motion.h2>

            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto"
            >
              3 заняття + бонус стратегічна сесія
              <br />
              14 днів доступу до матеріалів
            </motion.p>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.4 }}
              className="pt-4"
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
                  width: '320px',
                  height: '72px',
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
                  fontSize: '20px',
                  color: '#18181b',
                  lineHeight: '40px',
                  verticalAlign: 'middle'
                }}>
                  ЗАБРАТИ МІСЦЕ
                </span>
              </button>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.6 }}
              className="pt-8 space-y-2"
            >
              <p className="text-lg text-zinc-400">
                <span className="font-bold text-lime-400">Залишилось місць:</span> обмежено
              </p>
              <p className="text-base text-zinc-500">
                Доступ до тренінгу відкривається одразу після оплати
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}