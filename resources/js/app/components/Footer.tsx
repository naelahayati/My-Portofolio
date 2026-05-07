import { Heart, Code2, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-white flex justify-center items-center">
      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} Naela Hayati. All rights reserved.
      </p>
    </footer>
  );
}
