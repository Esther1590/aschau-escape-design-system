
import { useTranslation } from '@/contexts/TranslationContext';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-96 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center overflow-hidden">
      {/* Image Background */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="/lovable-uploads/3f53e89b-14d8-4730-b4c1-e102821b9d00.png"
        alt="Cultural Heritage Background"
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white drop-shadow-2xl" style={{textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8)'}}>
          {t('culture.hero.title')}
        </h1>
        <p className="text-xl md:text-2xl font-light text-white drop-shadow-xl" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'}}>
          {t('culture.hero.subtitle')}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
