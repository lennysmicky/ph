import { MessageCircle } from 'lucide-react';
import contactInfo from '../../data/contactInfo';

const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp}?text=Bonjour%20SAPH%2C%20je%20souhaite%20avoir%20des%20informations.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-40 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300"
      aria-label="Contacter sur WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
};

export default WhatsAppButton;