import { motion } from 'motion/react';
import { Code2, Server, Wrench, Star } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: Code2,
      skills: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React', level: 80 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'TypeScript', level: 75 }
      ],
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-500',
    },
    {
      category: 'Backend',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 78 },
        { name: 'PHP', level: 82 },
        { name: 'MySQL', level: 85 },
        { name: 'REST API', level: 80 },
        { name: 'Express', level: 75 }
      ],
      color: 'from-purple-400 to-pink-600',
      bgColor: 'bg-purple-500',
    },
    {
      category: 'Tools & Others',
      icon: Wrench,
      skills: [
        { name: 'Git', level: 88 },
        { name: 'Figma', level: 82 },
        { name: 'VS Code', level: 92 },
        { name: 'Postman', level: 85 },
        { name: 'Linux', level: 70 }
      ],
      color: 'from-pink-400 to-rose-600',
      bgColor: 'bg-pink-500',
    },
  ];

  return (
    <section id="skills" className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #93C5FD 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Floating Shapes */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 border-4 border-secondary/30 rounded-full"
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-24 h-24 border-4 border-accent/30 rounded-lg"
        animate={{ rotate: -360, scale: [1, 1.3, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

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
            Skills & Expertise
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
            Teknologi dan tools yang saya kuasai untuk membangun solusi digital yang modern
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-card to-card/50 border border-border rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:shadow-secondary/20 transition-all relative overflow-hidden group"
              >
                {/* Gradient Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                {/* Header */}
                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <motion.div
                    className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <category.icon className="text-white" size={28} />
                  </motion.div>
                  <h3 className="bg-gradient-to-r ${category.color} bg-clip-text">{category.category}</h3>
                </div>

                {/* Skills with Progress Bars */}
                <div className="space-y-5 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.15 + skillIndex * 0.08 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-foreground flex items-center gap-2">
                          <Star size={12} className="text-accent fill-accent" />
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: categoryIndex * 0.15 + skillIndex * 0.08 + 0.3, ease: "easeOut" }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative Elements */}
                <motion.div
                  className={`absolute -bottom-8 -right-8 w-32 h-32 ${category.bgColor} rounded-full blur-3xl opacity-20`}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
