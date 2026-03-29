import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://linkedin.com/in/nishant-sharma-24b089285', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/Nishant28-sh', label: 'GitHub' },
    { icon: FaTwitter, href: 'https://x.com/er_Nishant_sh', label: 'Twitter' },
    { icon: FaEnvelope, href: 'mailto:ns87086sh@gmail.com', label: 'Email' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-20 px-6 border-t border-amber-400/10">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand / About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Nishant Sharma</h3>
            <p className="text-gray-400 text-sm">
              Full Stack Developer | React Specialist | Problem Solver
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-400 hover:text-amber-400 transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">
              Connect
            </h4>
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-amber-400/10 text-gray-400 hover:bg-amber-400 hover:text-black transition-all"
                  aria-label={social.label}
                  title={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-8"
        />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {currentYear} Nishant Sharma. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs mt-1">
              Crafted with <span className="text-amber-400">❤</span> using React, Tailwind CSS & Framer Motion
            </p>
          </div>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-gray-400 hover:bg-amber-400 hover:text-black transition-all"
            title="Scroll to top"
          >
            <FaArrowUp size={18} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
