import { motion } from 'framer-motion';
import { ChevronRight, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Image de fond */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Agriculture SAPH"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Particules feuilles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-primary/30"
          initial={{ y: -20, opacity: 0 }}
          animate={{
            y: [0, 800],
            x: [Math.random() * 100, Math.random() * 200],
            opacity: [0, 0.4, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 1.5,
            ease: 'linear',
          }}
          style={{ left: `${10 + i * 18}%` }}
        >
          <Leaf size={20 + Math.random() * 15} />
        </motion.div>
      ))}

      {/* Contenu principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Leaf size={16} className="text-primary" />
            <span className="text-white/90 text-sm font-medium">
              Système d&apos;Agronomie PHÉNIX HOSTIE
            </span>
          </motion.div>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Solutions{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">
            Agronomiques
          </span>
          <br />
          Complètes
        </motion.h1>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {['Élevage', 'Agriculture', 'Horticulture', 'Maraîchage', 'Foresterie'].map(
            (domain) => (
              <span
                key={domain}
                className="px-4 py-1.5 bg-white/10 backdrop-blur-sm text-white/90 rounded-full text-sm border border-white/10"
              >
                {domain}
              </span>
            )
          )}
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          SAPH vous accompagne dans tous vos projets agronomiques avec
          expertise et innovation pour un avenir durable.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 text-lg"
          >
            Découvrir nos solutions
            <ChevronRight size={20} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white hover:text-primary transition-all duration-300 text-lg"
          >
            Nous contacter
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator — EN DEHORS du conteneur de contenu */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;