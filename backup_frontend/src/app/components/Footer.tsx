import { Heart, Code2, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground py-12 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      {/* Floating Icons */}
      <motion.div
        className="absolute top-4 left-10 text-accent/30"
        animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Code2 size={24} />
      </motion.div>
      <motion.div
        className="absolute bottom-4 right-10 text-accent/30"
        animate={{ y: [0, 10, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles size={24} />
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center gap-6">
          <motion.div
            className="flex items-center gap-2 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Made with
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart className="text-accent" size={20} fill="currentColor" />
            </motion.div>
            by D3 SI Student
          </motion.div>

          <motion.div
            className="h-px w-32 bg-gradient-to-r from-transparent via-accent to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />

          <motion.p
            className="text-sm opacity-80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} Portfolio. All rights reserved
          </motion.p>

          <motion.p
            className="text-xs opacity-60 flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Sparkles size={14} />
            Built with React, Tailwind & Motion
            <Sparkles size={14} />
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
