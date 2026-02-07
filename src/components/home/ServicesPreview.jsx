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
import services from '../../data/services';

const iconMap = {
  Beef: Beef,
  Wheat: Wheat,
  Flower2: Flower2,
  Carrot: Carrot,
  TreePine: TreePine,
};

const ServicesPreview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Nos Services"
          subtitle="Des solutions adaptées à vos besoins agronomiques"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md">
                    <IconComponent size={20} className="text-primary" />
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-text-dark mb-2 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-500 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-1.5 mb-5">
                    {service.points.slice(0, 3).map((point, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-300"
                  >
                    En savoir plus
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover hover:shadow-lg transition-all duration-300"
          >
            Voir tous nos services
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;