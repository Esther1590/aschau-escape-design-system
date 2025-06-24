
const HeroSection = () => {
  return (
    <section className="relative h-96 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        playsInline
      >
        <source src="/20250417_120330_1.mp4" type="video/mp4" />
      </video>
      
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
