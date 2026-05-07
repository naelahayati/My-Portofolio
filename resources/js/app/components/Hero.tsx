import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Sparkles, Code2, Database, MessageCircle, Layout, Smartphone, Monitor, Cpu, Search, PenTool, Globe, Layers } from 'lucide-react';
import { useState, useEffect } from 'react';

function TypingText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayText(text.substring(0, i));
      i++;
      if (i > text.length) i = 0; // Loop the typing
    }, 150);
    
    return () => clearInterval(timer);
  }, [text]);
  
  return <span>{displayText}</span>;
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-start md:justify-center px-6 pt-32 md:pt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="mb-12 min-h-[120px] flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent inline-block">
                <TypingText text="Innovating Systems, Designing Experiences." />
              </span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-1.5 h-12 md:h-16 bg-accent ml-2 align-middle shadow-[0_0_15px_rgba(249,168,212,0.5)]"
              />
            </h2>
          </motion.div>

          <motion.div
            className="mb-12"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              className="relative w-40 h-40 mx-auto mb-10"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Outer Glow/Ring */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-secondary/20 to-accent/20 rounded-full blur-2xl animate-pulse" />
              
              {/* Profile Container */}
              <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-br from-primary via-secondary to-accent shadow-2xl shadow-primary/40 group overflow-hidden">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden border-4 border-white/50 relative">
                  <img 
                    src="/profil.png" 
                    alt="Profile" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Subtle Overlay on Hover */}
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              
              {/* Floating Badge (Optional decorative element) */}
              <motion.div 
                className="absolute -bottom-2 -right-2 bg-white p-2 rounded-lg shadow-lg border border-secondary/20"
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Sparkles className="text-accent" size={16} />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h1 className="mb-6">
              <motion.span
                className="block text-2xl text-muted-foreground mb-3 font-light"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Halo, Saya <span className="font-medium text-primary">Naela</span>
              </motion.span>
              <motion.span
                className="block text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight pb-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                System Analyst & <br className="hidden md:block" /> UI/UX Designer
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Mahasiswa aktif <span className="text-primary font-medium">D3 Sistem Informasi</span> di <span className="text-secondary font-medium">Politeknik Negeri Subang</span>. Berfokus pada perancangan solusi digital yang efisien, fungsional, dan memiliki estetika visual yang premium.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <motion.a
              href="mailto:naelahayatii@gmail.com"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "mailto:naelahayatii@gmail.com";
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
              Contact Me
            </motion.a>
            <motion.a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-secondary to-accent text-primary rounded-full shadow-lg shadow-secondary/30 hover:shadow-xl hover:shadow-accent/40 transition-all hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </motion.div>

          <motion.div
            className="flex gap-6 justify-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.a
              href="https://github.com/naelahayati"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/naela-hayati-684265288?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-card border border-border text-muted-foreground hover:text-accent hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="https://wa.me/6283116322755"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-card border border-border text-muted-foreground hover:text-secondary hover:border-secondary hover:shadow-lg hover:shadow-secondary/20 transition-all cursor-pointer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <MessageCircle size={24} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-2 bg-primary rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
