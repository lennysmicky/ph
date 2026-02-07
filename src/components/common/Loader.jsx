const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-bg-light border-t-primary rounded-full animate-spin" />
        <p className="text-primary font-semibold text-lg">SAPH</p>
      </div>
    </div>
  );
};

export default Loader;