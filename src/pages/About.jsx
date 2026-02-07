import { motion } from 'framer-motion';
import {
  Leaf,
  Target,
  Eye,
  Heart,
  Lightbulb,
  Shield,
  Users,
  HandHelping,
} from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import StatsSection from '../components/home/StatsSection';
import CTASection from '../components/home/CTASection';

const values = [
  {
    icon: Leaf,
    title: 'Durabilité',
    description:
      "Nous privilégions des pratiques respectueuses de l'environnement pour un avenir durable.",
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'Nous intégrons les dernières avancées technologiques et scientifiques dans nos solutions.',
  },
  {
    icon: Shield,
    title: 'Expertise',
    description:
      'Notre équipe possède une connaissance approfondie de chaque domaine agronomique.',
  },
  {
    icon: HandHelping,
    title: 'Accompagnement',
    description:
      'Nous restons à vos côtés à chaque étape de votre projet agronomique.',
  },
  {
    icon: Heart,
    title: "Respect de l'environnement",
    description:
      'Chaque action est pensée pour minimiser notre impact sur la nature.',
  },
];

const missions = [
  {
    icon: Target,
    title: 'Accompagnement',
    description: 'Guider nos clients vers la réussite de leurs projets agronomiques.',
  },
  {
    icon: Users,
    title: 'Formation',
    description: 'Transmettre notre savoir-faire à travers des formations adaptées.',
  },
  {
    icon: Leaf,
    title: 'Méthodes durables',
    description: 'Promouvoir des pratiques agricoles respectueuses et pérennes.',
  },
];

const About = () => {
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
            À Propos de SAPH
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Découvrez notre histoire, notre mission et nos valeurs
          </motion.p>
        </div>
      </section>

      {/* Présentation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-lg">
                  <img
                    src="/images/about.jpg"
                    alt="À propos de SAPH"
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-accent text-white px-6 py-3 rounded-xl font-bold text-lg shadow-lg">
                  Depuis 2024
                </div>
              </div>
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-bg-light rounded-full mb-4">
                <Eye size={14} className="text-primary" />
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  Qui sommes-nous
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6">
                Système d&apos;Agronomie{' '}
                <span className="text-primary">PHÉNIX HOSTIE</span>
              </h2>

              <p className="text-gray-500 leading-relaxed mb-6 text-lg">
                SAPH (Système d&apos;Agronomie PHÉNIX HOSTIE) est une entreprise
                spécialisée dans les solutions agronomiques complètes. Nous
                intervenons dans cinq domaines clés : l&apos;élevage,
                l&apos;agriculture, l&apos;horticulture, le maraîchage et la
                foresterie.
              </p>

              <p className="text-gray-500 leading-relaxed mb-8">
                Notre mission est d&apos;accompagner les agriculteurs, les
                éleveurs et tous les acteurs du secteur agronomique vers
                l&apos;excellence, en utilisant des méthodes innovantes et
                durables.
              </p>

              <div className="flex flex-wrap gap-3">
                {['Élevage', 'Agriculture', 'Horticulture', 'Maraîchage', 'Foresterie'].map(
                  (domain) => (
                    <span
                      key={domain}
                      className="px-4 py-2 bg-bg-light text-primary font-medium rounded-lg text-sm"
                    >
                      {domain}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Notre Mission"
            subtitle="Ce qui nous guide au quotidien"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missions.map((mission, index) => {
              const IconComponent = mission.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                >
                  <div className="w-16 h-16 bg-bg-light rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <IconComponent size={30} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark mb-3">
                    {mission.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {mission.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Valeurs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Nos Valeurs"
            subtitle="Les principes qui fondent notre engagement"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  className="group flex gap-5 p-6 rounded-2xl hover:bg-bg-light transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="w-12 h-12 bg-bg-light rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-all duration-300">
                    <IconComponent
                      size={22}
                      className="text-primary group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-dark mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default About;