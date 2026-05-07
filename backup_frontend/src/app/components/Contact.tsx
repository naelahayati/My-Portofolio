import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'email@example.com',
      href: 'mailto:email@example.com',
      gradient: 'from-blue-400 to-blue-600',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+62 812-3456-7890',
      href: 'tel:+628123456789',
      gradient: 'from-purple-400 to-pink-600',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Indonesia',
      href: '#',
      gradient: 'from-pink-400 to-rose-600',
    },
  ];

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
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
            Get In Touch
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          ></motion.div>

          <motion.p
            className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <MessageCircle size={20} className="text-accent" />
            Tertarik untuk berkolaborasi atau memiliki pertanyaan? Mari terhubung!
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-gradient-to-br from-card via-card to-secondary/5 border border-border rounded-3xl p-8 mb-8 shadow-xl"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Contact Information
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Jangan ragu untuk menghubungi saya melalui salah satu channel di bawah ini
                </p>
              </motion.div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10, scale: 1.05 }}
                    className="flex items-center gap-4 group bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl hover:shadow-secondary/20 transition-all"
                  >
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${info.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <info.icon className="text-white" size={24} />
                    </motion.div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      <p className="text-foreground group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text group-hover:text-transparent transition-all">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-card via-card to-accent/5 border border-border rounded-3xl p-8 shadow-2xl relative overflow-hidden"
            >
              {/* Decorative Elements */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-secondary to-accent rounded-full blur-3xl opacity-20"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-primary to-secondary rounded-full blur-3xl opacity-20"></div>

              <form className="space-y-6 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block mb-2 text-foreground">Name</label>
                  <motion.input
                    type="text"
                    id="name"
                    onFocus={() => setFocusedInput('name')}
                    onBlur={() => setFocusedInput(null)}
                    className="w-full px-4 py-3 bg-input-background border-2 border-border rounded-xl focus:outline-none focus:border-secondary focus:shadow-lg focus:shadow-secondary/20 transition-all"
                    placeholder="Your name"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block mb-2 text-foreground">Email</label>
                  <motion.input
                    type="email"
                    id="email"
                    onFocus={() => setFocusedInput('email')}
                    onBlur={() => setFocusedInput(null)}
                    className="w-full px-4 py-3 bg-input-background border-2 border-border rounded-xl focus:outline-none focus:border-secondary focus:shadow-lg focus:shadow-secondary/20 transition-all"
                    placeholder="your@email.com"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block mb-2 text-foreground">Message</label>
                  <motion.textarea
                    id="message"
                    rows={5}
                    onFocus={() => setFocusedInput('message')}
                    onBlur={() => setFocusedInput(null)}
                    className="w-full px-4 py-3 bg-input-background border-2 border-border rounded-xl focus:outline-none focus:border-secondary focus:shadow-lg focus:shadow-secondary/20 transition-all resize-none"
                    placeholder="Your message..."
                    whileFocus={{ scale: 1.02 }}
                  ></motion.textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-primary via-secondary to-accent text-white rounded-xl shadow-lg hover:shadow-2xl hover:shadow-accent/40 transition-all relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                    style={{ opacity: 0.2 }}
                  />
                  <Send size={20} />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
