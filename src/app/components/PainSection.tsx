import { motion } from 'motion/react';
import { X } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const problems = [
  'Мало клієнтів і постійна тривога за завтрашній день',
  'Нестабільний дохід — то густо, то порожньо',
  'Страх піднімати ціну і втратити тих, хто вже є',
  'Робота «руками без системи» — кожен день з нуля',
  'Відчуття стелі — здається, що більше вже не заробити'
];

export function PainSection() {
  return (
    <section className="py-20 md:py-32 px-4 bg-zinc-950">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-16"
        >
          <span className="text-white">Знайоме?</span>
        </motion.h2>

        <div className="space-y-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 bg-zinc-900/50 border border-zinc-800 rounded-lg hover:border-red-500/50 transition-colors"
            >
              <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <p className="text-lg md:text-xl text-zinc-300">{problem}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          {...fadeInUp}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl text-zinc-400 text-center mt-16 leading-relaxed"
        >
          Ти працюєш, стараєшся, вкладаєшся — але результат не змінюється.
          <br />
          <span className="text-lime-400 font-bold">А проблема не в тобі.</span>
        </motion.p>
      </div>
    </section>
  );
}
