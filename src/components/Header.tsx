import { FaLinkedin, FaGithub, FaEnvelope, FaFileDownload, FaInstagram, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Header = () => {
  const socialLinks = [
    { icon: FaLinkedin, href: 'https://linkedin.com/in/nishant-sharma-24b089285', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/Nishant28-sh', label: 'GitHub' },
    { icon: FaInstagram, href: 'https://www.instagram.com/er_nishant_sharma_/', label: 'Instagram' },
    { icon: FaTwitter, href: 'https://x.com/er_Nishant_sh', label: 'Twitter' },
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/55 backdrop-blur-xl border-b border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
    >
      <div className="max-w-7xl mx-auto px-3 md:px-12 py-3 md:py-4 flex items-center justify-between">
        {/* Social Links - Left */}
        <div className="flex items-center gap-3 md:gap-6">
          {socialLinks.map((social) => (
            <motion.a 
              key={social.label}
              whileHover={{ scale: 1.15, color: '#fbbf24' }}
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
              title={social.label}
            >
              <social.icon className="w-[18px] h-[18px] md:w-5 md:h-5" />
            </motion.a>
          ))}
        </div>

        {/* Right Section - Resume & Contact */}
        <div className="flex items-center gap-2 md:gap-6">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/Nishant Sharma Software Developer Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 md:gap-2 text-gray-400 hover:text-amber-400 transition-colors duration-300 text-[10px] md:text-sm font-medium uppercase tracking-wider md:tracking-widest"
          >
            <FaFileDownload className="w-3 h-3 md:w-4 md:h-4" />
            Resume
          </motion.a>

          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-[10px] md:text-sm font-medium uppercase tracking-wider md:tracking-widest whitespace-nowrap"
          >
            Get In Touch
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
