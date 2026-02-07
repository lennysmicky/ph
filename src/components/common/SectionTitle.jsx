const SectionTitle = ({ title, subtitle, center = true, light = false }) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : 'text-left'}`}>
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 ${
          light ? 'text-white' : 'text-text-dark'
        }`}
      >
        {title}
      </h2>
      <div className="w-20 h-1 bg-accent mx-auto mb-4 rounded-full" />
      {subtitle && (
        <p
          className={`text-lg max-w-2xl ${center ? 'mx-auto' : ''} ${
            light ? 'text-gray-200' : 'text-gray-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;