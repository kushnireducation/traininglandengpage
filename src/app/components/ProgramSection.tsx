import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const lessons = [
  {
    number: '01',
    title: 'Ринок масажу без ілюзій',
    description: 'Розбір реального ринку: де насправді гроші, які ніші недооцінені, а які — перенасичені. Чому твої конкуренти заробляють більше і що вони роблять інакше.',
    results: [
      'Побачиш справжню картину ринку',
      'Зрозумієш свою нішу',
      'Знайдеш точки входу'
    ]
  },
  {
    number: '02',
    title: 'Моделі заробітку в ніші',
    description: 'Від роботи руками до масштабування: які моделі доходу існують, як їх комбінувати, що працює зараз, а що вже застаріло. Реальні цифри та приклади.',
    results: [
      'Дізнаєшся про 7+ моделей заробітку',
      'Зрозумієш як масштабуватись',
      'Побудуєш свій план дій'
    ]
  },
  {
    number: '03',
    title: 'Клієнти, мислення, масштаб',
    description: 'Як знаходити клієнтів системно, працювати з запитами, піднімати ціни без страху, будувати потік і розвиватися без вигорання.',
    results: [
      'Отримаєш систему залучення клієнтів',
      'Навчишся правильно позиціонуватись',
      'Зможеш піднімати ціни з впевненістю'
    ]
  }
];

export function ProgramSection() {
  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-16"
        >
          <span className="text-white">Що буде на</span>{' '}
          <span className="text-lime-400">тренінгу?</span>
        </motion.h2>

        <div className="space-y-8">
          {lessons.map((lesson, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-lime-500/50 transition-colors"
            >
              <div className="p-8 md:p-10">
                <div className="flex items-start gap-6">
                  <div className="text-5xl md:text-6xl font-bold text-lime-400/20">
                    {lesson.number}
                  </div>
                  <div className="flex-1 space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {lesson.title}
                    </h3>
                    <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
                      {lesson.description}
                    </p>
                    <div className="pt-4 space-y-3">
                      {lesson.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-lime-400 flex-shrink-0 mt-0.5" />
                          <span className="text-zinc-300">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-lime-400/10 border border-lime-500/30 rounded-xl p-8 md:p-10 text-center"
        >
          <p className="text-xl md:text-2xl text-zinc-300">
            <span className="text-lime-400 font-bold">Формат:</span> 3 онлайн-заняття в записі
          </p>
          <p className="text-xl md:text-2xl text-zinc-300 mt-4">
            <span className="text-lime-400 font-bold">Доступ:</span> 14 днів до навчальних матеріалів
          </p>
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.6 }}
          className="mt-12 flex justify-center"
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
    </section>
  );
}