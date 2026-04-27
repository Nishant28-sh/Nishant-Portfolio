import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaCertificate, FaUsers } from 'react-icons/fa';

const achievements = [
  { icon: FaTrophy, title: 'Winner - Geekathon 2024', desc: '200+ participants' },
  { icon: FaMedal, title: 'Top Performer - Corizo', desc: '4-Week Challenge "Carnival of Champions"' },
  { icon: FaUsers, title: 'Top 10 Finalist', desc: "Hack O'Clock 2025" },
  { icon: FaUsers, title: 'Organized & Led', desc: 'AI Summit 2025 & Deep Data Hack 2025' },
];

const certifications = [
  'Full Stack Web Development - IBM (NASSCOM FutureSkills)',
  'Full Stack Development Internship Certificate - Corizo',
  'Frontend Developer Program - Infosys Springboard',
];

const Achievements = () => {
  return (
    <section className="py-24 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 uppercase tracking-wider text-muted-foreground">
          Achievements & Certifications
        </h2>
        <h3 className="text-primary text-center text-lg mb-12">Recognition & Credentials</h3>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Achievements */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <FaTrophy className="text-primary" /> Achievements
            </h4>
            <div className="space-y-4">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 bg-secondary rounded-lg border border-border hover:border-amber-400 transition-all duration-300 hover-lift hover-glow"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  >
                  <div className="w-10 h-10 rounded-full bg-amber-400/20 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-amber-400/40">
                    <item.icon className="text-amber-400" />
                  </div>
                  </motion.div>
                  <div>
                    <h5 className="font-medium text-foreground">{item.title}</h5>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <FaCertificate className="text-primary" /> Certifications
            </h4>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 bg-secondary rounded-lg border border-border hover:border-amber-400 transition-all duration-300 hover-lift hover-glow group"
                >
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-amber-400/20 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-amber-400/40"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                  >
                    <FaCertificate className="text-amber-400" />
                  </motion.div>
                  <p className="text-muted-foreground text-sm">{cert}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements;
