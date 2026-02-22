import { motion } from 'motion/react';
import { CheckCircle2, X } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const forWhom = [
  'Масажисти-початківці, які хочуть правильно розпочати кар\'єру',
  'Практикуючі спеціалісти з нестабільним доходом',
  'Масажисти, які боятся піднімати ціни',
  'Ті, хто хоче масштабувати бізнес без вигорання',
  'Спеціалісти, які розглядають масаж як основну професію'
];

const notForWhom = [
  'Тих, хто шукає "магічну таблетку" без дій',
  'Людей, які не готові змінювати підхід до роботи',
  'Тих, хто вважає, що "все вже зайнято"',
  'Масажистів, яких влаштовує поточний рівень доходу'
];

export function ForWhoSection() {
  return (
    <section className="py-20 md:py-32 px-4 bg-zinc-950">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-16"
        >
          <span className="text-white">Для кого цей</span>{' '}
          <span className="text-lime-400">тренінг?</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-900 border border-lime-500/50 rounded-xl p-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-lime-400 mb-8">
              ✓ Підходить для вас
            </h3>
            <div className="space-y-4">
              {forWhom.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-lime-400 flex-shrink-0 mt-0.5" />
                  <p className="text-lg text-zinc-300">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-900 border border-zinc-700 rounded-xl p-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-zinc-400 mb-8">
              ✗ Не підходить для вас
            </h3>
            <div className="space-y-4">
              {notForWhom.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <X className="w-6 h-6 text-zinc-600 flex-shrink-0 mt-0.5" />
                  <p className="text-lg text-zinc-500">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-lime-400/10 border border-lime-500/30 rounded-xl p-8 text-center"
        >
          <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed">
            Цей тренінг — для тих, хто готовий <span className="text-lime-400 font-bold">діяти</span> та <span className="text-lime-400 font-bold">змінюватись</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
