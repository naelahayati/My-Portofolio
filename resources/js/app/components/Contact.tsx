import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [isSent, setIsSent] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'naelahayatii@gmail.com',
      href: 'mailto:naelahayatii@gmail.com',
      gradient: 'from-blue-600 to-blue-400',
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '+62 831-1632-2755',
      href: 'https://wa.me/6283116322755',
      gradient: 'from-secondary to-accent',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Subang, Indonesia',
      href: '#',
      gradient: 'from-accent to-pink-500',
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
                    onClick={(e) => {
                      if (info.href.startsWith('mailto:')) {
                        e.preventDefault();
                        window.location.href = info.href;
                      }
                    }}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center gap-4 group bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl hover:shadow-secondary/20 transition-all cursor-pointer"
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

              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const name = formData.get('name');
                  const email = formData.get('email');
                  const message = formData.get('message');
                  
                  const mailtoUrl = `mailto:naelahayatii@gmail.com?subject=${encodeURIComponent(`Message from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
                  window.open(mailtoUrl, '_blank');
                  setIsSent(true);
                  setTimeout(() => setIsSent(false), 5000);
                }}
                className="space-y-6 relative z-10"
              >
                {isSent && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-secondary/20 border border-secondary/30 rounded-xl text-foreground text-center"
                  >
                    Mengarahkan ke aplikasi email...
                  </motion.div>
                )}
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
                    name="name"
                    required
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
                    name="email"
                    required
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
                    name="message"
                    required
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
