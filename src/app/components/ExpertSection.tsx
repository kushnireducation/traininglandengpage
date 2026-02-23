import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const expertInfo = [
  '12+ років практики в масажній терапії',
  'Пройшов шлях від кабінету на 15 м² до власної студії',
  'Навчив 700+ масажистів виходити на стабільний дохід',
  'Без "успішного успіху" — тільки реальні кейси та досвід',
];

export function ExpertSection() {
  return (
    <section className="py-20 md:py-32 px-4 bg-zinc-950">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-16"
        >
          <span className="text-white">Хто проводить</span>{' '}
          <span className="text-lime-400">тренінг?</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-lime-500/30 shadow-2xl shadow-lime-500/10">
              <ImageWithFallback
                src="https://i.postimg.cc/m2yKKgJk/IMG-0553-(2)-(2).jpg' border='0' alt='IMG-0553-(2)-(2)"
                alt="Михайло Кушнір"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Михайло Кушнір
            </h3>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Практикуючий масажист і бізнес-наставник для бьюті-спеціалістів.
            </p>

            <div className="space-y-4">
              {expertInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 bg-lime-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-zinc-300">{item}</p>
                </motion.div>
              ))}
            </div>

            <div className="pt-6 border-t border-zinc-800">
              <p className="text-lg text-zinc-400 italic">
                "Я знаю, як це — починати з нуля і думати, що ринок перенасичений. 
                Але коли ти змінюєш підхід — відкривається багато можливостей."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}