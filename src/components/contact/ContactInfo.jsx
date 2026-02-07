import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import contactInfo from '../../data/contactInfo';

const infoItems = [
  {
    icon: Phone,
    title: 'Téléphone',
    content: contactInfo.phones,
    type: 'phones',
  },
  {
    icon: Mail,
    title: 'Email',
    content: [contactInfo.email],
    type: 'email',
  },
  {
    icon: MapPin,
    title: 'Adresse',
    content: [contactInfo.address],
    type: 'text',
  },
  {
    icon: Clock,
    title: 'Horaires',
    content: [
      contactInfo.hours.weekdays,
      contactInfo.hours.saturday,
      contactInfo.hours.sunday,
    ],
    type: 'hours',
  },
];

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-text-dark mb-2">
          Nos Coordonnées
        </h3>
        <p className="text-gray-500">
          N&apos;hésitez pas à nous contacter par le moyen qui vous convient le
          mieux.
        </p>
      </div>

      <div className="space-y-5">
        {infoItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className="flex gap-4 p-4 bg-bg-light rounded-xl hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <IconComponent size={22} className="text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-text-dark text-sm mb-1">
                  {item.title}
                </h4>
                {item.content.map((line, i) => {
                  if (item.type === 'phones') {
                    return (
                      <a
                        key={i}
                        href={`tel:${line.replace(/\s/g, '')}`}
                        className="block text-gray-600 hover:text-primary transition-colors duration-300 text-sm"
                      >
                        {line}
                      </a>
                    );
                  }
                  if (item.type === 'email') {
                    return (
                      <a
                        key={i}
                        href={`mailto:${line}`}
                        className="block text-gray-600 hover:text-primary transition-colors duration-300 text-sm break-all"
                      >
                        {line}
                      </a>
                    );
                  }
                  return (
                    <p key={i} className="text-gray-600 text-sm">
                      {line}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactInfo;