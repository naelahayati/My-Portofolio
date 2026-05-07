import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, ShoppingCart, GraduationCap, CheckSquare, Sparkles, Expand, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      title: 'Sistem Layanan Terpadu & Marketplace di Naz Hidrofarm',
      description: 'Platform digital satu pintu yang memudahkan operasional bisnis melalui otomatisasi transaksi dan manajemen stok akurat. Dilengkapi fitur reservasi layanan terintegrasi yang dirancang untuk memberikan kemudahan akses bagi pengguna dan efisiensi kerja bagi admin.',
      tags: ['PHP', 'Laravel', 'Bootstrap', 'CSS', 'javaScript', 'MySQL', 'Midtrans'],
      image: ['/images/projects/3/1.png', '/images/projects/3/2.png', '/images/projects/3/3.png', '/images/projects/3/4.png', '/images/projects/3/5.png', '/images/projects/3/6.png', '/images/projects/3/7.png', '/images/projects/3/8.png'],
      gradient: 'from-green-400 to-blue-600',
      icon: Sparkles,
      bgPattern: 'opacity-5',
    },
    {
      title: 'Sistem Penjualan dan Manajemen Kebab Aba Zaid',
      description: 'Platform digital yang memudahkan operasional harian melalui manajemen stok bahan baku yang terintegrasi. Sistem ini menyederhanakan rantai pasok dan mempercepat proses transaksi menggunakan modul kasir (POS) yang responsif untuk hasil laporan penjualan yang lebih akurat',
      tags: ['PHP', 'MySQL', 'Bootstrap', 'javaScript', 'CSS', 'HTML'],
      image: ['/images/projects/2/a1.png', '/images/projects/2/a2.png', '/images/projects/2/a3.png', '/images/projects/2/a4.png', '/images/projects/2/a5.png', '/images/projects/2/a6.png', '/images/projects/2/a7.png', '/images/projects/2/a8.png'],
      gradient: 'from-orange-400 to-red-600',
      icon: ShoppingCart,
      bgPattern: 'opacity-5',
    },
    {
      title: 'Sistem Pencatatan Stok Masuk-Keluar dan Keuntungan Usaha Berbasis VBA',
      description: 'Sistem pencatatan stok otomatis berbasis VBA yang dirancang untuk mendigitalisasi seluruh alur manajemen transaksi dan persediaan barang secara real-time. Solusi ini menggantikan pencatatan manual yang rawan kesalahan menjadi proses yang terstruktur, sehingga memungkinkan pemilik usaha untuk memantau pergerakan stok secara akurat serta melakukan evaluasi keuntungan usaha secara otomatis melalui integrasi data yang sistematis.',
      tags: ['VBA', 'Excel', 'Data Analysis'],
      image: ['/images/projects/1/11.png', '/images/projects/1/00.png', '/images/projects/1/22.png', '/images/projects/1/33.png', '/images/projects/1/44.png', '/images/projects/1/55.png', '/images/projects/1/66.png', '/images/projects/1/77.png', '/images/projects/1/88.png', '/images/projects/1/99.png', '/images/projects/1/a11.png', '/images/projects/1/a22.png', '/images/projects/1/a33.png', '/images/projects/1/a44.png'
      ], // Placeholder
      gradient: 'from-primary via-secondary to-accent',
      icon: CheckSquare,
      bgPattern: 'opacity-5',
    },
  ];

  const openLightbox = (project: any) => {
    if (project.image && project.image.length > 0) {
      const scrollY = window.scrollY;
      setSelectedProject(project);
      setCurrentImageIndex(0);
      
      // Lock scroll without jumping
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    }
  };

  const closeLightbox = () => {
    const scrollY = document.body.style.top;
    setSelectedProject(null);
    
    // Restore scroll
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.image.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.image.length) % selectedProject.image.length);
    }
  };

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
                className="group relative bg-card border border-border rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-secondary/30 transition-all cursor-pointer"
                onClick={() => openLightbox(project)}
              >
                {/* Image / Gradient Header */}
                <div className={`relative h-60 overflow-hidden`}>
                  {project.image ? (
                    <>
                      <img 
                        src={project.image[0]} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    </>
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                  )}

                  {/* Icon Badge Overlay */}
                  <div className={`absolute top-4 right-4 p-3 rounded-2xl bg-gradient-to-br ${project.gradient} text-white shadow-lg transform group-hover:rotate-12 transition-transform`}>
                    <project.icon size={24} />
                  </div>

                  {/* View Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-full shadow-2xl"
                    >
                      <Expand size={18} />
                      View Project
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="mb-3 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        className="px-3 py-1 bg-muted/50 text-muted-foreground rounded-full border border-border hover:border-secondary transition-colors text-xs"
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4" onClick={(e) => e.stopPropagation()}>
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
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-bl-3xl pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-xl"
            onClick={closeLightbox}
          >
            <motion.button
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-10"
              onClick={closeLightbox}
              whileHover={{ rotate: 90 }}
            >
              <X size={24} />
            </motion.button>

            <div className="relative w-full max-w-5xl h-full flex flex-col items-center justify-center">
              <motion.div 
                className="relative w-full h-[70vh] flex items-center justify-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                onClick={(e) => e.stopPropagation()}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={selectedProject.image[currentImageIndex]}
                    alt={selectedProject.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                  />
                </AnimatePresence>

                {/* Navigation Buttons */}
                {selectedProject.image.length > 1 && (
                  <>
                    <button
                      className="absolute left-0 p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors -translate-x-1/2 md:translate-x-0"
                      onClick={prevImage}
                    >
                      <ChevronLeft size={32} />
                    </button>
                    <button
                      className="absolute right-0 p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors translate-x-1/2 md:translate-x-0"
                      onClick={nextImage}
                    >
                      <ChevronRight size={32} />
                    </button>
                  </>
                )}
              </motion.div>

              {/* Modal Dots */}
              <motion.div 
                className="mt-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                onClick={(e) => e.stopPropagation()}
              >
                {selectedProject.image.length > 1 && (
                  <div className="flex gap-2 justify-center">
                    {selectedProject.image.map((_: any, i: number) => (
                      <div 
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          i === currentImageIndex ? 'w-8 bg-primary' : 'bg-white/20'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
