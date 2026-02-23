import { motion } from 'motion/react';
import { Gift } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export function BonusSection() {
  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          {...fadeInUp}
          className="relative bg-gradient-to-br from-lime-400/20 to-lime-600/20 border-2 border-lime-500 rounded-2xl p-8 md:p-12 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-lime-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-lime-600/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center space-y-6">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: 'spring' }}
              className="inline-block"
            >
              <div className="bg-lime-400 rounded-full p-6 mb-6">
                <Gift className="w-12 h-12 text-zinc-950" />
              </div>
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Бонус для учасників
            </h2>

            <div className="bg-zinc-950/80 border border-lime-500/50 rounded-xl p-8 backdrop-blur-sm">
              <p className="text-2xl md:text-3xl font-bold text-lime-400 mb-4">
                Запис 2-годинної стратегічної сесії + безкоштовний розбір в Zoom
              </p>
              <p className="text-xl text-zinc-300 leading-relaxed">
                Детальний розбір: як побудувати систему залучення клієнтів, 
                правильно позиціонуватись та виходити на бажаний дохід.
              </p>
            </div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.3 }}
              className="pt-6 space-y-4"
            >
              <p className="text-lg text-zinc-400">
                Цей запис окремо коштує <span className="line-through">3000 грн</span>
              </p>
              <p className="text-2xl font-bold text-lime-400">
                Ти отримуєш його безкоштовно при купівлі тренінгу
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.5 }}
              className="pt-6"
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
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}