import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import ServiceCard from '../components/services/ServiceCard';
import CTASection from '../components/home/CTASection';
import services from '../data/services';

const Services = () => {
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
            Nos Services
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Des solutions agronomiques complètes adaptées à chacun de vos besoins
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Des Solutions Adaptées à Vos Besoins"
            subtitle="Nous couvrons l'ensemble de la chaîne agronomique avec expertise et professionnalisme"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Services;