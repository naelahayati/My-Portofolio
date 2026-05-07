import { motion, AnimatePresence } from 'motion/react';
import { Database, GitGraph, Users, Expand, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function Modeling() {
  const [selectedModel, setSelectedModel] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const models = [
    {
      title: 'Entity Relationship Diagram (ERD)',
      description: 'Perancangan struktur database yang optimal untuk menjamin integritas data dan efisiensi query melalui pemodelan relasional yang terstruktur.',
      image: ['/images/modeling/erd.png', '/images/modeling/erd2.jpeg'],
      icon: Database,
      gradient: 'from-blue-500 to-cyan-500',
      tags: ['Database Design', 'Normalization', 'Relational Mapping']
    },
    {
      title: 'System Flowchart',
      description: 'Pemetaan alur kerja sistem secara detail untuk memvisualisasikan proses bisnis dari input hingga output secara logis.',
      image: ['/images/modeling/flowchart.png', '/images/modeling/flowchart2.png', '/images/modeling/flowchart3.png', '/images/modeling/flowchart4.png'],
      icon: GitGraph,
      gradient: 'from-orange-500 to-amber-500',
      tags: ['Process Mapping', 'Logic Flow', 'Business Rules']
    },
    {
      title: 'Use Case Diagram',
      description: 'Definisi interaksi antara aktor (pengguna) dengan sistem untuk menggambarkan fungsionalitas utama yang dibutuhkan.',
      image: ['/images/modeling/usecase.png'],
      icon: Users,
      gradient: 'from-purple-500 to-pink-500',
      tags: ['Actor Interaction', 'Requirement Analysis', 'System Scope']
    },
  ];

  const openLightbox = (model: any) => {
    const scrollY = window.scrollY;
    setSelectedModel(model);
    setCurrentImageIndex(0);
    
    // Lock scroll without jumping
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
  };

  const closeLightbox = () => {
    const scrollY = document.body.style.top;
    setSelectedModel(null);
    
    // Restore scroll
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedModel) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedModel.image.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedModel) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedModel.image.length) % selectedModel.image.length);
    }
  };

  return (
    <section id="modeling" className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
          >
            System Modeling & Analysis
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <p className="text-muted-foreground mb-16 max-w-2xl mx-auto">
            Berbekal latar belakang Sistem Informasi, saya fokus mendalami perancangan struktur sistem melalui pemodelan visual untuk menghasilkan solusi teknologi yang tepat guna dan efisien.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-card border border-border rounded-[2rem] overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer"
              onClick={() => openLightbox(model)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={Array.isArray(model.image) ? model.image[0] : model.image} 
                  alt={model.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity`} />
                
                {/* Icon Badge */}
                <div className={`absolute top-4 right-4 p-3 rounded-2xl bg-gradient-to-br ${model.gradient} text-white shadow-lg transform group-hover:rotate-12 transition-transform`}>
                  <model.icon size={24} />
                </div>

                {/* View Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-full shadow-2xl"
                  >
                    <Expand size={18} />
                    View Diagram
                  </motion.div>
                </div>

                {/* Multi Image Badge */}
                {Array.isArray(model.image) && model.image.length > 1 && (
                  <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold rounded-full border border-white/20">
                    {model.image.length} Images
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {model.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground bg-muted px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl mb-3 group-hover:text-primary transition-colors">
                  {model.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {model.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedModel && (
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
                    src={selectedModel.image[currentImageIndex]}
                    alt={selectedModel.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                  />
                </AnimatePresence>

                {/* Navigation Buttons */}
                {selectedModel.image.length > 1 && (
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

              {/* Modal Footer Info */}
              <motion.div 
                className="mt-8 text-center text-white max-w-2xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Image Counter Indicators */}
                {selectedModel.image.length > 1 && (
                  <div className="flex gap-2 justify-center">
                    {selectedModel.image.map((_: any, i: number) => (
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
