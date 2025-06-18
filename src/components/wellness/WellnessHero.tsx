
import { useTranslation } from '@/contexts/TranslationContext';

const WellnessHero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-96 bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-900 dark:to-green-900 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 dark:opacity-20"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800&q=80)'
        }}
      />
      <div className="relative z-10 text-center text-wellness-charcoal dark:text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-shadow-lg">
          {t('wellness.hero.title')}
        </h1>
        <p className="text-xl md:text-2xl font-light">
          {t('wellness.hero.subtitle')}
        </p>
      </div>
    </section>
  );
};

export default WellnessHero;
