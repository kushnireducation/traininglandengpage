import { motion } from 'motion/react';
import { Target, Lightbulb, Users, TrendingUp } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const results = [
  {
    icon: Target,
    title: 'Бачите ринок по-іншому',
    description: 'Розумієте, де реальні можливості, а де — ілюзії'
  },
  {
    icon: Lightbulb,
    title: 'Розумієте точки росту',
    description: 'Знаєте, що саме змінити, щоб дохід почав рости'
  },
  {
    icon: Users,
    title: 'Знаєте як знаходити клієнтів',
    description: 'Маєте систему залучення, а не випадкові замовлення'
  },
  {
    icon: TrendingUp,
    title: 'Перестаєте працювати "в мінус"',
    description: 'Правильно оцінюєте свою роботу та піднімаєте ціни без страху'
  }
];

export function ResultsSection() {
  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-12"
        >
          <span className="text-white">Після</span>{' '}
          <span className="text-lime-400">тренінгу ви:</span>
        </motion.h2>

        <motion.p
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-zinc-400 text-center mb-16 max-w-3xl mx-auto leading-relaxed"
        >
          Не просто отримаєте знання — ви <span className="text-lime-400 font-bold">змінитесь</span>
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {results.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-lime-500/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-lime-400/10 p-4 rounded-lg">
                    <Icon className="w-8 h-8 text-lime-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-lg text-zinc-400">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-lime-400/20 to-transparent border border-lime-500/50 rounded-xl p-8 md:p-10 text-center"
        >
          <p className="text-2xl md:text-3xl font-bold text-white mb-4">
            Це не магія — це система
          </p>
          <p className="text-xl text-zinc-300 leading-relaxed max-w-3xl mx-auto">
            Кожен масажист, який змінив підхід та почав працювати системно, 
            вийшов на новий рівень доходу. Тепер твоя черга.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
