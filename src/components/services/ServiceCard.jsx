import { motion } from 'framer-motion';
import { Beef, Wheat, Flower2, Carrot, TreePine } from 'lucide-react';

const iconMap = {
  Beef: Beef,
  Wheat: Wheat,
  Flower2: Flower2,
  Carrot: Carrot,
  TreePine: TreePine,
};

const ServiceCard = ({ service, index }) => {
  const IconComponent = iconMap[service.icon];

  return (
    <motion.div
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
          <IconComponent size={24} className="text-primary" />
        </div>
      </div>

      {/* Contenu */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-text-dark mb-3 group-hover:text-primary transition-colors duration-300">
          {service.title}
        </h3>

        <p className="text-gray-500 mb-5 text-sm leading-relaxed">
          {service.description}
        </p>

        <ul className="space-y-2">
          {service.points.map((point, i) => (
            <li key={i} className="flex items-center gap-3 text-gray-600">
              <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
              <span className="text-sm">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ServiceCard;