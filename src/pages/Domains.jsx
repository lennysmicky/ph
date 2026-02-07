import { motion } from 'framer-motion';
import DomainCard from '../components/domains/DomainCard';
import CTASection from '../components/home/CTASection';
import domains from '../data/domains';

const Domains = () => {
  return (
    <>
      {/* Banner */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-green-900 to-green-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Domaines d&apos;Expertise
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Nos spécialités au service de votre réussite agronomique
          </motion.p>
        </div>
      </section>

      {/* Domains List */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {domains.map((domain, index) => (
              <DomainCard key={domain.id} domain={domain} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Domains;