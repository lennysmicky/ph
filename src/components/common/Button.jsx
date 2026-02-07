import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Button = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon = false,
  className = '',
  type = 'button',
}) => {
  const baseStyles =
    'inline-flex items-center gap-2 font-semibold rounded-lg transition-all duration-300 cursor-pointer';

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-hover hover:shadow-lg',
    secondary:
      'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white',
    accent: 'bg-accent text-white hover:bg-orange-600 hover:shadow-lg',
    outline:
      'bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
        {icon && <ChevronRight size={18} />}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
        {icon && <ChevronRight size={18} />}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
      {icon && <ChevronRight size={18} />}
    </button>
  );
};

export default Button;