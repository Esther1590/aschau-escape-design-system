
const HeroSection = () => {
  return (
    <section className="relative h-96 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/WhatsApp Video 2025-04-25 at 22.33.10.mp4" type="video/mp4" />
      </video>
      
      {/* Static Background Image as fallback */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: 'url(/lovable-uploads/4fe3bebb-97e4-43da-acca-7b6e3ae2b103.png)'
        }}
      />
      
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gray-800 dark:text-white drop-shadow-lg">
          Cultural Heritage
        </h1>
        <p className="text-xl md:text-2xl font-light text-gray-700 dark:text-white drop-shadow-md">
          Discover the timeless traditions of Aschau im Chiemgau
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
