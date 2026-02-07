import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import contactInfo from '../../data/contactInfo';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-green-700 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
        <div className="absolute bottom-10 left-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Prêt à transformer votre{' '}
          <span className="text-accent">projet agronomique</span> ?
        </motion.h2>

        <motion.p
          className="text-lg text-white/80 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Contactez notre équipe d&apos;experts pour discuter de vos besoins et
          découvrir comment SAPH peut vous accompagner.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 text-lg"
          >
            Demander un devis
            <ArrowRight size={20} />
          </Link>
          <a
            href={`tel:${contactInfo.phones[0].replace(/\s/g, '')}`}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-bold rounded-lg border-2 border-white/30 hover:bg-white/10 transition-all duration-300 text-lg"
          >
            <Phone size={20} />
            {contactInfo.phones[0]}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;