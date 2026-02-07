import { motion } from 'framer-motion';
import { Beef, Wheat, Flower2, Carrot, TreePine } from 'lucide-react';

const iconMap = {
  Beef: Beef,
  Wheat: Wheat,
  Flower2: Flower2,
  Carrot: Carrot,
  TreePine: TreePine,
};

const DomainCard = ({ domain, index }) => {
  const IconComponent = iconMap[domain.icon];
  const isReversed = index % 2 !== 0;

  return (
    <motion.div
      className={`flex flex-col ${
        isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
      } gap-8 lg:gap-12 items-center bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
    >
      {/* Image */}
      <div className="w-full lg:w-1/2 h-64 lg:h-96 overflow-hidden">
        <img
          src={domain.image}
          alt={domain.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Contenu */}
      <div className="w-full lg:w-1/2 p-8 lg:p-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-bg-light rounded-full mb-4">
          <IconComponent size={14} className="text-primary" />
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">
            Domaine {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <h3 className="text-3xl font-bold text-text-dark mb-4">
          {domain.title}
        </h3>

        <p className="text-gray-500 leading-relaxed mb-6">
          {domain.description}
        </p>

        <div>
          <h4 className="text-sm font-semibold text-text-dark mb-3 uppercase tracking-wider">
            Spécialités
          </h4>
          <div className="flex flex-wrap gap-2">
            {domain.specialties.map((spec, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-bg-light text-primary text-sm font-medium rounded-lg border border-primary/10 hover:bg-primary hover:text-white transition-all duration-300 cursor-default"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DomainCard;