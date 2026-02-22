import { motion } from 'motion/react';
import { TrendingUp, Users, Laptop, GraduationCap, Building2 } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const opportunities = [
  {
    icon: TrendingUp,
    title: 'Робота руками',
    income: 'від 30 000 грн/міс',
    description: 'Класичні сеанси з правильною ціною та позиціонуванням'
  },
  {
    icon: Building2,
    title: 'Власний кабінет',
    income: 'від 50 000 грн/міс',
    description: 'Постійний потік клієнтів через систему залучення'
  },
  {
    icon: Users,
    title: 'Салон / команда',
    income: 'від 100 000 грн/міс',
    description: 'Масштабування через інших спеціалістів'
  },
  {
    icon: Laptop,
    title: 'Онлайн-продукти',
    income: 'від 70 000 грн/міс',
    description: 'Курси, марафони, консультації для масажистів'
  },
  {
    icon: GraduationCap,
    title: 'Наставництво',
    income: 'від 80 000 грн/міс',
    description: 'Менторство для початківців та практиків'
  }
];

export function OpportunitiesSection() {
  return (
    <section className="py-20 md:py-32 px-4 bg-zinc-950">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-12"
        >
          <span className="text-white">У ніші масажу</span>{' '}
          <span className="text-lime-400">немає стелі</span>
        </motion.h2>

        <motion.p
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-zinc-400 text-center mb-16 max-w-3xl mx-auto leading-relaxed"
        >
          Ти можеш обрати свій шлях — або комбінувати декілька. 
          Головне — знати <span className="text-lime-400 font-bold">як</span>.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {opportunities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-lime-500/50 transition-all hover:shadow-lg hover:shadow-lime-500/10"
              >
                <Icon className="w-10 h-10 text-lime-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-2xl font-bold text-lime-400 mb-3">{item.income}</p>
                <p className="text-zinc-400">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-lime-400/10 to-transparent border border-lime-500/30 rounded-xl p-8 md:p-10"
        >
          <p className="text-2xl md:text-3xl font-bold text-white mb-4">
            Вибір за тобою
          </p>
          <p className="text-xl text-zinc-300 leading-relaxed">
            Але без розуміння ринку, системи та правильного мислення — 
            жодна з цих моделей не спрацює на повну.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
