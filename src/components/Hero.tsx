import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-24 pb-16 px-4">
      {/* ================= SEO TEXT (INVISIBLE BUT GOOGLE-READABLE) ================= */}
      <h1 className="sr-only">Nishant Sharma</h1>
      <h2 className="sr-only">
        Software Engineer | Full Stack Developer
      </h2>
      <p className="sr-only">
        Nishant Sharma is a Full Stack Developer skilled in MERN Stack, 
        Java, and Spring Boot. This is his official portfolio website.
      </p>
      {/* =========================================================================== */}
      {/* Animated Circular Borders - Main Feature */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center z-10">
        {/* Outer rotating circle - Large */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[900px] h-[900px] rounded-full border-2 border-amber-500/30"
        />
        
        {/* Middle rotating circle */}
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[700px] h-[700px] rounded-full border border-amber-400/20"
        />
        
        {/* Inner rotating circle */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[500px] h-[500px] rounded-full border border-amber-300/15"
        />

        {/* Decorative dots around circles */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[800px] h-[800px] rounded-full"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-amber-400/40" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-amber-400/40" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-amber-400/40" />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-amber-400/40" />
        </motion.div>

        {/* Blinking dots in outer area */}
        <motion.div 
          className="absolute w-[1000px] h-[1000px] rounded-full"
        >
          <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }} className="absolute top-[5%] left-[10%] w-2 h-2 rounded-full bg-amber-300/60" />
          <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }} className="absolute top-[8%] right-[8%] w-2 h-2 rounded-full bg-amber-300/60" />
          <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2.2, repeat: Infinity, delay: 0.6 }} className="absolute right-[5%] top-[25%] w-2 h-2 rounded-full bg-amber-300/60" />
          <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2.4, repeat: Infinity, delay: 0.9 }} className="absolute right-[10%] bottom-[20%] w-2 h-2 rounded-full bg-amber-300/60" />
          <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2.1, repeat: Infinity, delay: 0.2 }} className="absolute bottom-[8%] right-[12%] w-2 h-2 rounded-full bg-amber-300/60" />
          <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2.3, repeat: Infinity, delay: 0.5 }} className="absolute bottom-[10%] left-[15%] w-2 h-2 rounded-full bg-amber-300/60" />
          <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2.2, repeat: Infinity, delay: 0.8 }} className="absolute left-[8%] bottom-[25%] w-2 h-2 rounded-full bg-amber-300/60" />
          <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2.4, repeat: Infinity, delay: 0.4 }} className="absolute left-[12%] top-[20%] w-2 h-2 rounded-full bg-amber-300/60" />
        </motion.div>
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center">
        {/* Software Engineer Label */}
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xs uppercase tracking-[0.3em] text-gray-400 font-semibold mb-8"
        >
          Software Engineer
        </motion.p>

        {/* Circular Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-40 h-40 rounded-full overflow-hidden border-4 border-amber-400/50 shadow-2xl shadow-amber-400/20 relative group"
          >
            <img 
              src="/profile image.jpg" 
              alt="Nishant Sharma"
              loading="eager"
              width="160"
              height="160"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              style={{ imageRendering: 'auto', backfaceVisibility: 'hidden' }}
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-amber-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        </motion.div>

        {/* Main Heading with Typewriter */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-8 h-16 flex items-center justify-center"
        >
          <span className="text-white leading-tight">
            <Typewriter
              words={["Hey, My name is Nishant Sharma", "Guy-who-loves-coffee.tsx", "<ButLovesToCodeMore/>"]}
              loop={true}
              cursor
              cursorStyle="|"
              cursorColor="#fbbf24"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </motion.h1>

        {/* Navigation Links - Below Name */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-12 text-sm font-medium uppercase tracking-wider text-gray-400"
        >
          {['About', 'Experience', 'Skills', 'Projects'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ color: '#fbbf24', scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 400 }}
              className="transition-colors duration-300 cursor-pointer hover:text-amber-400"
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll to Next Section Arrow - Bottom Center */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.button
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
          title="Scroll down"
        >
          <FaChevronDown size={28} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
