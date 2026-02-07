import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Target, CheckCircle, Users } from 'lucide-react';
import stats from '../../data/stats';

const iconMap = {
  Target: Target,
  CheckCircle: CheckCircle,
  Users: Users,
};

const Counter = ({ end, suffix }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const current = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const duration = 2;
    const increment = end / (duration * 60);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [hasStarted, end]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-white">
      {count}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-green-800 to-green-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {stats.map((stat, index) => {
            const IconComponent = iconMap[stat.icon];
            return (
              <motion.div
                key={stat.id}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-5 border border-white/10">
                  <IconComponent size={30} className="text-accent" />
                </div>
                <Counter end={stat.number} suffix={stat.suffix} />
                <p className="text-gray-300 mt-3 text-lg font-medium">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;