import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-bg-light relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-[150px] md:text-[200px] font-bold text-primary/10 leading-none select-none">
            404
          </h1>
        </motion.div>

        <motion.div
          className="-mt-16 md:-mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            Page introuvable
          </h2>
          <p className="text-gray-500 text-lg mb-10 max-w-md mx-auto">
            La page que vous recherchez n&apos;existe pas ou a été déplacée.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover hover:shadow-lg transition-all duration-300"
            >
              <Home size={18} />
              Retour à l&apos;accueil
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-text-dark font-semibold rounded-lg border border-gray-200 hover:border-primary hover:text-primary transition-all duration-300 cursor-pointer"
            >
              <ArrowLeft size={18} />
              Page précédente
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound;