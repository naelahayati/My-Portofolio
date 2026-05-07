import { motion } from 'motion/react';
import { 
  Code2, Database, Sparkles, Layout, Smartphone, 
  Monitor, Cpu, Search, PenTool, Globe, Layers,
  FileCode, Terminal, Command, Palette, MousePointer2,
  Zap, Cloud, Github, Figma, Coffee
} from 'lucide-react';

const icons = [
  { Icon: Code2, size: 24, color: 'text-primary' },
  { Icon: Database, size: 20, color: 'text-secondary' },
  { Icon: Sparkles, size: 18, color: 'text-accent' },
  { Icon: Layout, size: 22, color: 'text-primary' },
  { Icon: Smartphone, size: 20, color: 'text-secondary' },
  { Icon: Monitor, size: 24, color: 'text-accent' },
  { Icon: Cpu, size: 20, color: 'text-primary' },
  { Icon: Search, size: 18, color: 'text-secondary' },
  { Icon: PenTool, size: 22, color: 'text-accent' },
  { Icon: Globe, size: 20, color: 'text-primary' },
  { Icon: Layers, size: 24, color: 'text-secondary' },
  { Icon: FileCode, size: 20, color: 'text-accent' },
  { Icon: Terminal, size: 18, color: 'text-primary' },
  { Icon: Command, size: 22, color: 'text-secondary' },
  { Icon: Palette, size: 24, color: 'text-accent' },
  { Icon: MousePointer2, size: 20, color: 'text-primary' },
  { Icon: Zap, size: 22, color: 'text-secondary' },
  { Icon: Cloud, size: 20, color: 'text-accent' },
  { Icon: Github, size: 24, color: 'text-primary' },
  { Icon: Figma, size: 20, color: 'text-secondary' },
  { Icon: Coffee, size: 18, color: 'text-accent' },
];

// Generate random positions
const floatingItems = Array.from({ length: 50 }).map((_, i) => ({
  id: i,
  iconData: icons[i % icons.length],
  top: `${Math.random() * 100}vh`,
  left: `${Math.random() * 100}vw`,
  duration: 10 + Math.random() * 20,
  delay: Math.random() * 5,
  moveX: Math.random() * 100 - 50,
  moveY: Math.random() * 100 - 50,
}));

export function FloatingIconsBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden select-none">
      {floatingItems.map((item) => (
        <motion.div
          key={item.id}
          className={`absolute ${item.iconData.color} pointer-events-auto cursor-default`}
          style={{ 
            top: item.top, 
            left: item.left,
          }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.4, 0.4, 0],
            y: [0, item.moveY, 0],
            x: [0, item.moveX, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: "linear"
          }}
          whileHover={{ 
            x: (Math.random() - 0.5) * 800,
            y: (Math.random() - 0.5) * 800,
            rotate: Math.random() * 720 - 360,
            scale: 0,
            opacity: 0,
            transition: { duration: 1.2, ease: "backOut" }
          }}
        >
          <item.iconData.Icon size={item.iconData.size} />
        </motion.div>
      ))}
    </div>
  );
}
