import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import navigation from '../../data/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const showWhiteBg = isScrolled || !isHome;
  const textColor = showWhiteBg ? 'text-text-dark' : 'text-white';
  const activeColor = showWhiteBg ? 'text-primary bg-bg-light' : 'text-accent bg-white/10';
  const hoverColor = showWhiteBg
    ? 'hover:text-primary hover:bg-bg-light'
    : 'hover:text-accent hover:bg-white/10';
  const logoColor = showWhiteBg ? 'text-primary' : 'text-white';
  const subLogoColor = showWhiteBg ? 'text-gray-500' : 'text-white/70';

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        showWhiteBg
          ? 'bg-white shadow-lg py-2'
          : 'bg-transparent py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="SAPH Logo"
              className="w-12 h-12 object-contain"
            />
            <div className="flex flex-col">
              <span className={`text-xl font-bold leading-tight transition-colors duration-300 ${logoColor}`}>
                SAPH
              </span>
              <span className={`hidden sm:block text-[10px] leading-tight transition-colors duration-300 ${subLogoColor}`}>
                Système d&apos;Agronomie PHÉNIX HOSTIE
              </span>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? activeColor
                    : `${textColor} ${hoverColor}`
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Desktop */}
          <Link
            to="/contact"
            className={`hidden md:inline-flex items-center px-5 py-2.5 font-semibold rounded-lg transition-all duration-300 ${
              showWhiteBg
                ? 'bg-primary text-white hover:bg-primary-hover'
                : 'bg-white text-primary hover:bg-gray-100'
            }`}
          >
            Nous contacter
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden w-10 h-10 flex items-center justify-center cursor-pointer transition-colors duration-300 ${textColor}`}
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Overlay sombre derrière le menu */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Navigation Mobile — Panel qui descend, pas plein écran */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-2xl rounded-b-2xl z-50 transition-all duration-300 overflow-hidden ${
          isOpen
            ? 'max-h-[500px] opacity-100 border-t border-gray-100'
            : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col p-4 gap-1">
          {navigation.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`px-4 py-3 rounded-lg font-medium text-base transition-all duration-300 ${
                location.pathname === item.path
                  ? 'text-primary bg-bg-light'
                  : 'text-text-dark hover:text-primary hover:bg-bg-light'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg text-center hover:bg-primary-hover transition-all duration-300"
          >
            Nous contacter
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;