import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Beef,
  Wheat,
  Flower2,
  Carrot,
  TreePine,
  ArrowRight,
} from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import domains from '../../data/domains';

const iconMap = {
  Beef: Beef,
  Wheat: Wheat,
  Flower2: Flower2,
  Carrot: Carrot,
  TreePine: TreePine,
};

const DomainsPreview = () => {
  return (
    <section className="py-20 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Domaines d'Expertise"
          subtitle="Nos spécialités au service de votre réussite"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain, index) => {
            const IconComponent = iconMap[domain.icon];
            return (
              <motion.div
                key={domain.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={domain.image}
                    alt={domain.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md">
                      <IconComponent size={20} className="text-primary" />
                    </div>
                    <h3 className="text-white font-bold text-lg">
                      {domain.title}
                    </h3>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {domain.description.substring(0, 100)}...
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {domain.specialties.map((spec, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-bg-light text-primary text-xs font-medium rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/domaines"
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-300"
                  >
                    Explorer
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DomainsPreview;