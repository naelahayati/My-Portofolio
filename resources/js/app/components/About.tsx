import { motion } from 'motion/react';
import { GraduationCap, Code, Lightbulb, Rocket, Target, Zap } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: GraduationCap,
      title: 'Politeknik Negeri Subang',
      description: 'D3 Sistem Informasi (2024 - Sekarang) yang mendalami analisis kebutuhan sistem dan pengembangan web untuk menciptakan solusi digital yang efisien serta tepat sasaran.',
      gradient: 'from-blue-600 to-blue-400',
      delay: 0,
    },
    {
      icon: GraduationCap,
      title: 'SMA Negeri 4 Subang',
      description: 'Latar belakang pendidikan MIPA. Fokus pada disiplin ilmu eksakta yang membentuk pola pikir logis dan analitis sebagai landasan kuat dalam bidang teknologi informasi.',
      gradient: 'from-secondary to-accent',
      delay: 0.1,
    },
  ];

  const stats = [
    { icon: Rocket, label: 'Projects', value: '3+', color: 'text-secondary' },
    { icon: Target, label: 'Accuracy', value: '+50%', color: 'text-primary' },
    { icon: Zap, label: 'Skills', value: '12+', color: 'text-accent' },
  ];

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
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
            Pendidikan & Profil
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-12 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          ></motion.div>

          <motion.div
            className="bg-gradient-to-br from-card via-card to-secondary/5 border border-border rounded-3xl p-8 md:p-12 mb-12 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-center text-muted-foreground max-w-3xl mx-auto leading-relaxed text-lg">
            Saya adalah mahasiswa aktif <span className="text-primary font-semibold">D3 Sistem Informasi</span> di <span className="text-secondary font-semibold">Politeknik Negeri Subang</span> yang memiliki fokus tinggi pada analisis kebutuhan sistem dan desain pengalaman pengguna. Selama masa perkuliahan, saya aktif berkontribusi dalam pengembangan proyek <span className="italic">secara kolaboratif</span>, mulai dari tahap identifikasi masalah dan perancangan dokumentasi teknis hingga tahap mendesain antarmuka (UI/UX). Saya berkomitmen untuk mengimplementasikan hasil rancangan tersebut ke dalam solusi teknologi yang fungsional, estetik, dan tepat sasaran bagi pengguna.
          </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className={`${stat.color} mb-2 flex justify-center`}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <stat.icon size={32} />
                  </motion.div>
                  <div className="font-bold text-2xl text-foreground">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 ">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: feature.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -10, rotateZ: 2 }}
                className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-secondary/20 transition-all relative overflow-hidden group"
              >
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>

                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg relative z-10`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="text-white" size={28} />
                </motion.div>
                <h3 className="mb-2 relative z-10">{feature.title}</h3>
                <p className="text-muted-foreground relative z-10">{feature.description}</p>

                {/* Decorative Corner */}
                <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${feature.gradient} rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity`}></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
