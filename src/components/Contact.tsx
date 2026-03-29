import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaPaperPlane } from 'react-icons/fa';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:ns87086sh@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'ns87086sh@gmail.com',
      href: 'mailto:ns87086sh@gmail.com',
      color: '#FF6B6B'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91-8708639550',
      href: 'tel:+918708639550',
      color: '#4ECDC4'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Haryana, India',
      href: '#',
      color: '#95E1D3'
    }
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://linkedin.com/in/nishant-sharma-24b089285', label: 'LinkedIn', color: '#0A66C2' },
    { icon: FaGithub, href: 'https://github.com/Nishant28-sh', label: 'GitHub', color: '#ffffff' },
    { icon: FaTwitter, href: 'https://x.com/er_Nishant_sh', label: 'Twitter', color: '#1DA1F2' },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.p 
            variants={itemVariants}
            className="text-sm uppercase tracking-widest text-muted-foreground font-medium mb-4"
          >
            Get In Touch
          </motion.p>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4 text-amber-400"
          >
            CONTACT
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-muted-foreground max-w-2xl mx-auto text-lg font-medium"
          >
            I have got just what you need. Let's talk.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
            </div>

            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                variants={itemVariants}
                href={info.href}
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-all group"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `${info.color}20`,
                    border: `2px solid ${info.color}40`
                  }}
                >
                  <info.icon className="text-xl" style={{ color: info.color }} />
                </motion.div>
                <div>
                  <p className="text-muted-foreground text-sm font-semibold uppercase tracking-wider mb-1">
                    {info.label}
                  </p>
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                    {info.value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="pt-8 border-t border-primary/10"
            >
              <p className="text-muted-foreground text-sm font-semibold uppercase tracking-wider mb-6">
                Follow Me
              </p>
              <div className="flex gap-4 flex-wrap">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-lg flex items-center justify-center transition-all"
                    style={{
                      background: `${social.color}15`,
                      border: `2px solid ${social.color}40`,
                    }}
                    aria-label={social.label}
                    title={social.label}
                  >
                    <social.icon className="text-lg" style={{ color: social.color }} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
            />
            
            <form onSubmit={handleSubmit} className="relative space-y-6 p-8 rounded-2xl bg-secondary/40 border border-primary/10 hover:border-primary/20 backdrop-blur-sm transition-all">
              <h3 className="text-xl font-bold text-foreground mb-6">Send me a message</h3>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <label className="text-sm font-semibold text-foreground mb-2 block">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-background/50 border border-primary/10 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                viewport={{ once: true }}
              >
                <label className="text-sm font-semibold text-foreground mb-2 block">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-background/50 border border-primary/10 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label className="text-sm font-semibold text-foreground mb-2 block">Subject</label>
                <input
                  type="text"
                  placeholder="Project Discussion"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-background/50 border border-primary/10 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                viewport={{ once: true }}
              >
                <label className="text-sm font-semibold text-foreground mb-2 block">Message</label>
                <textarea
                  placeholder="Tell me about your project or idea..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-background/50 border border-primary/10 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="w-full bg-gradient-to-r from-primary to-blue-500 text-primary-foreground py-3 rounded-lg font-semibold uppercase tracking-wider hover:shadow-lg hover:shadow-primary/50 transition-all flex items-center justify-center gap-2"
              >
                <FaPaperPlane size={16} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
