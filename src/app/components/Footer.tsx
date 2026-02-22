import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="py-12 px-4 bg-zinc-950 border-t border-zinc-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white"
          >
            Тренінг Михайла Кушніра
          </motion.h3>
          <p className="text-zinc-500">
            Як масажисту заробляти більше
          </p>
          <div className="pt-6 text-sm text-zinc-600">
            <p>© 2026 Всі права захищені</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
