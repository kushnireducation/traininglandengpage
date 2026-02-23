import { motion } from 'motion/react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export function RealProblemSection() {
  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-12"
        >
          <span className="text-white">У чому проблема</span>{' '}
          <span className="text-lime-400">насправді?</span>
        </motion.h2>

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 md:p-12">
            <p className="text-2xl md:text-3xl font-bold text-white mb-6">
              Проблема НЕ в конкуренції
            </p>
            <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed mb-6">
              Ринок масажу — величезний. Клієнтів вистачить на всіх.
            </p>
            <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed">
              Проблема в <span className="text-lime-400 font-bold">мисленні</span>, в <span className="text-lime-400 font-bold">позиціонуванні</span> та у відсутності <span className="text-lime-400 font-bold">системи</span>.
            </p>
          </div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6"
          >
            <div className="bg-lime-400/10 border border-lime-500/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-lime-400 mb-3">Мислення</h3>
              <p className="text-zinc-400">Ти думаєш як виконавець, а не як підприємець</p>
            </div>
            <div className="bg-lime-400/10 border border-lime-500/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-lime-400 mb-3">Позиціонування</h3>
              <p className="text-zinc-400">Ти один з багатьох, а не єдиний для свого клієнта</p>
            </div>
            <div className="bg-lime-400/10 border border-lime-500/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-lime-400 mb-3">Система</h3>
              <p className="text-zinc-400">Кожен клієнт — випадковість, а не результат процесу</p>
            </div>
          </motion.div>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-center text-zinc-300 leading-relaxed pt-8"
          >
            Коли ти це змінюєш — <span className="text-lime-400 font-bold">все змінюється</span>.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
