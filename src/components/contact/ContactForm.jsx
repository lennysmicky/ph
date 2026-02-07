import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
} from '../../utils/constants';
import services from '../../data/services';

const ContactForm = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold text-text-dark mb-6">
        Envoyez-nous un message
      </h3>

      <div className="space-y-5">
        {/* Nom */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-text-dark mb-2"
          >
            Nom complet <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Votre nom complet"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 text-sm"
          />
        </div>

        {/* Email & Téléphone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-text-dark mb-2"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="votre@email.com"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-text-dark mb-2"
            >
              Téléphone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+228 XX XX XX XX"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 text-sm"
            />
          </div>
        </div>

        {/* Service */}
        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-text-dark mb-2"
          >
            Service souhaité <span className="text-red-500">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 text-sm bg-white"
          >
            <option value="">Sélectionnez un service</option>
            {services.map((service) => (
              <option key={service.id} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-text-dark mb-2"
          >
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Décrivez votre projet ou votre demande..."
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 text-sm resize-none"
          />
        </div>

        {/* Bouton */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-hover hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          {status === 'loading' ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              Envoi en cours...
            </>
          ) : (
            <>
              <Send size={18} />
              Envoyer la demande
            </>
          )}
        </button>

        {/* Status Messages */}
        {status === 'success' && (
          <motion.div
            className="flex items-center gap-3 p-4 bg-green-50 text-green-700 rounded-xl border border-green-200"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <CheckCircle size={20} />
            <p className="text-sm font-medium">
              Message envoyé avec succès ! Nous vous répondrons rapidement.
            </p>
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div
            className="flex items-center gap-3 p-4 bg-red-50 text-red-700 rounded-xl border border-red-200"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <AlertCircle size={20} />
            <p className="text-sm font-medium">
              Erreur lors de l&apos;envoi. Veuillez réessayer ou nous contacter
              par téléphone.
            </p>
          </motion.div>
        )}
      </div>
    </motion.form>
  );
};

export default ContactForm;