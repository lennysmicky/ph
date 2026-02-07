import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import navigation from '../../data/navigation';
import contactInfo from '../../data/contactInfo';

const Footer = () => {
  return (
    <footer className="bg-text-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img
                src="/logo.png"
                alt="SAPH Logo"
                className="w-12 h-12 object-contain"
              />
              <span className="text-xl font-bold text-white">SAPH</span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Système d&apos;Agronomie PHÉNIX HOSTIE — Solutions agronomiques
              complètes pour l&apos;élevage, l&apos;agriculture,
              l&apos;horticulture, le maraîchage et la foresterie.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Liens rapides
            </h3>
            <div className="w-12 h-0.5 bg-accent mb-4 rounded-full" />
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Nos services
            </h3>
            <div className="w-12 h-0.5 bg-accent mb-4 rounded-full" />
            <ul className="space-y-3">
              {['Élevage', 'Agriculture', 'Horticulture', 'Maraîchage', 'Foresterie'].map(
                (service) => (
                  <li key={service}>
                    <Link
                      to="/services"
                      className="text-gray-400 hover:text-primary transition-colors duration-300"
                    >
                      {service}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
            <div className="w-12 h-0.5 bg-accent mb-4 rounded-full" />
            <ul className="space-y-4">
              {contactInfo.phones.map((phone, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Phone size={16} className="text-primary flex-shrink-0" />
                  <a
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    {phone}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm break-all"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  {contactInfo.address}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <div className="text-gray-400 text-sm">
                  <p>{contactInfo.hours.weekdays}</p>
                  <p>{contactInfo.hours.saturday}</p>
                  <p>{contactInfo.hours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-sm">
            © 2026 SAPH – Système d&apos;Agronomie PHÉNIX HOSTIE. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;