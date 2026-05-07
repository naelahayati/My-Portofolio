import { motion } from 'motion/react';
import { ExternalLink, Github, ShoppingCart, GraduationCap, CheckSquare, Sparkles } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Platform e-commerce modern dengan fitur cart, payment gateway, dan admin dashboard.',
      tags: ['React', 'Node.js', 'MySQL'],
      gradient: 'from-blue-400 to-blue-600',
      icon: ShoppingCart,
      bgPattern: 'opacity-5',
    },
    {
      title: 'Student Portal System',
      description: 'Sistem informasi mahasiswa untuk mengelola data akademik dan jadwal kuliah.',
      tags: ['PHP', 'Laravel', 'Bootstrap'],
      gradient: 'from-purple-400 to-pink-600',
      icon: GraduationCap,
      bgPattern: 'opacity-5',
    },
    {
      title: 'Task Management App',
      description: 'Aplikasi manajemen tugas dengan fitur kolaborasi tim dan tracking progress.',
      tags: ['TypeScript', 'React', 'Tailwind'],
      gradient: 'from-pink-400 to-rose-600',
      icon: CheckSquare,
      bgPattern: 'opacity-5',
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website dengan design minimalis dan responsive.',
      tags: ['React', 'Tailwind', 'Motion'],
      gradient: 'from-blue-400 via-purple-400 to-pink-400',
      icon: Sparkles,
      bgPattern: 'opacity-5',
    },
  ];

  return (
    <section id="projects" className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-muted/30 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{ y: [0, 100, 0], x: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ y: [0, -100, 0], x: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-center mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          ></motion.div>

          <motion.p
            className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Beberapa project yang telah saya kerjakan dengan berbagai teknologi modern
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: 20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-card border border-border rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-secondary/30 transition-all"
              >
                {/* Gradient Header with Icon */}
                <div className={`relative h-40 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                  {/* Pattern Background */}
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}></div>

                  {/* Floating Icon */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <project.icon size={64} className="text-white/80" />
                  </motion.div>

                  {/* Animated Blob */}
                  <motion.div
                    className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-xl"
                    animate={{ scale: [1, 1.3, 1], x: [0, 20, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="mb-3 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        className="px-3 py-1 bg-muted/50 text-muted-foreground rounded-full border border-border hover:border-secondary transition-colors"
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <motion.button
                      className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-xl shadow-lg hover:shadow-xl transition-all`}
                      whileHover={{ scale: 1.05, x: 2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </motion.button>
                    <motion.button
                      className="flex items-center gap-2 px-4 py-2 border-2 border-border rounded-xl hover:border-secondary hover:bg-secondary/10 transition-all"
                      whileHover={{ scale: 1.05, x: 2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={18} />
                      <span>Demo</span>
                    </motion.button>
                  </div>
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-bl-3xl"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
