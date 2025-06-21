
import { useTranslation } from '@/contexts/TranslationContext';

const PlanTripHero = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-wellness-charcoal dark:text-white mb-6">
          {t('planTrip.hero.title')}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
          {t('planTrip.hero.subtitle')}
        </p>
      </div>
    </section>
  );
};

export default PlanTripHero;
