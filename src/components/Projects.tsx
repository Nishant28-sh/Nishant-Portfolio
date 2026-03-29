import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiMongodb, SiSocketdotio, SiSpringboot } from 'react-icons/si';
import { useRef } from 'react';

const projects = [
  {
    number: '1 of 3',
    title: 'TradeTogether',
    description: 'A real-time barter platform enabling users to trade items with live chat and negotiation features. Built with modern web technologies using React, Node.js, and Socket.io for real-time communication. Cloud deployment on Render ensures reliability and scalability.',
    image: '/Tradetogether_img.png',
    github: 'https://github.com/Nishant28-sh/TradeTogether',
    live: 'https://tradetogether-frontend.onrender.com/',
    featured: true,
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    features: [
      'Real-time chat & barter negotiation using Socket.io',
      'Cloud deployment using Render & MongoDB Atlas',
      'User authentication and profile management'
    ]
  },
  {
    number: '2 of 3',
    title: 'JobNest',
    description: 'A comprehensive job portal connecting recruiters with job seekers through role-based authentication and authorization. Features a robust system for job listings, applications, and recruiter management. Designed with scalability and security in mind for enterprise-level functionality.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=700&fit=crop',
    github: 'https://github.com/Nishant28-sh/JobNest',
    live: 'https://jobnest-1-2y4x.onrender.com/',
    featured: true,
    tech: ['React', 'Node.js', 'MongoDB', 'JWT'],
    features: [
      'Role-based authentication using JWT for secure access',
      'Designed login & authorization for recruiters & students',
      'Job listing and application management system'
    ]
  },
  {
    number: '3 of 3',
    title: 'Personal Portfolio',
    description: 'A modern and interactive portfolio website showcasing my projects, skills, and professional journey. Built with cutting-edge technologies including React, TypeScript, and Framer Motion for smooth animations. Features responsive design, custom cursor effects, and optimized performance.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=700&fit=crop',
    github: 'https://github.com/Nishant28-sh/Nishant-Portfolio',
    live: 'https://www.nishantsharmaa.in',
    featured: true,
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Smooth animations and transitions using Framer Motion',
      'Custom cursor effects for enhanced user experience',
      'Fully responsive design with modern UI components',
      'SEO optimized with sitemap and robots.txt'
    ]
  }
];

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="projects" className="py-32 px-6 overflow-hidden relative" ref={containerRef}>
      {/* Animated background diagonal stripe */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-amber-500/5 via-transparent to-transparent transform -skew-y-12" />
      </div>

      <motion.div 
        style={{ opacity }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.p 
            className="text-sm uppercase tracking-[0.3em] text-gray-400 font-semibold mb-4"
          >
            My Work
          </motion.p>
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight"
          >
            P R O J E C T S
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto"
          />
        </motion.div>

        {/* Projects Display - Single Column */}
        <div className="space-y-40">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative group"
            >
              {/* Diagonal background stripe for each project */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-transparent transform skew-y-2 -z-10 rounded-2xl" />

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Project Image - Large and prominent */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`relative group ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-amber-400/20">
                    <img 
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      width="1200"
                      height="700"
                      className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    {/* Links Overlay */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex items-center justify-center gap-8 bg-black/50 backdrop-blur-sm"
                    >
                      <motion.a 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                        className="w-20 h-20 bg-amber-400 hover:bg-amber-300 text-black rounded-full flex items-center justify-center transition-all shadow-2xl font-bold"
                      >
                        <FaGithub size={32} />
                      </motion.a>
                      <motion.a 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.title} live site`}
                        className="w-20 h-20 bg-amber-400 hover:bg-amber-300 text-black rounded-full flex items-center justify-center transition-all shadow-2xl font-bold"
                      >
                        <FaExternalLinkAlt size={28} />
                      </motion.a>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Project Details */}
                <motion.div
                  className={`space-y-8 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}
                  initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Project Number */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-sm uppercase tracking-[0.2em] text-amber-400/70 font-bold">
                      Project {project.number}
                    </p>
                  </motion.div>

                  {/* Title with underline */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.35 }}
                    viewport={{ once: true }}
                    className="space-y-3"
                  >
                    <h3 className="text-4xl md:text-5xl font-bold text-white">
                      {project.title}
                    </h3>
                    <div className="w-32 h-1 bg-amber-400" />
                  </motion.div>

                  {/* Tech Stack */}
                  <motion.div 
                    className="flex flex-wrap gap-3 pt-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {project.tech.map((tech, i) => (
                      <motion.span 
                        key={i}
                        whileHover={{ scale: 1.1, y: -3 }}
                        className="px-5 py-2.5 bg-amber-400/15 border border-amber-400/40 text-amber-400 rounded-lg text-sm font-semibold uppercase tracking-wider hover:bg-amber-400/25 hover:border-amber-400/60 transition-all cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Description */}
                  <motion.p 
                    className="text-gray-300 leading-relaxed text-lg"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.45 }}
                    viewport={{ once: true }}
                  >
                    {project.description}
                  </motion.p>

                  {/* Features List */}
                  <motion.ul 
                    className="space-y-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {project.features.map((feature, i) => (
                      <motion.li 
                        key={i}
                        className="text-gray-300 flex items-start gap-3 text-base"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.55 + i * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-amber-400 text-2xl leading-none mt-1 flex-shrink-0">▪</span>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </div>

              {/* Vertical separator line on the right for aesthetic */}
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400/60 via-amber-400/30 to-transparent" />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-32"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.08, backgroundColor: 'rgba(251, 191, 36, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-4 bg-amber-400/10 border-2 border-amber-400/60 text-amber-400 rounded-xl font-bold uppercase tracking-[0.2em] text-base hover:border-amber-400 transition-all"
          >
            Want to see more?
            <span className="text-2xl">→</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;