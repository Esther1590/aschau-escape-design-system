
import { useTranslation } from '@/contexts/TranslationContext';

const PlanTripMapSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-wellness-charcoal dark:text-white mb-4">
            {t('planTrip.map.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t('planTrip.map.subtitle')}
          </p>
        </div>
        <div className="w-full flex justify-center">
          <iframe 
            src="https://www.google.com/maps/d/embed?mid=1hdfCuEyO-o4RNsI3NNvHkUImk1_7jsk&ehbc=2E312F&noprof=1" 
            width="640" 
            height="480"
            className="rounded-lg shadow-lg border-0 max-w-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default PlanTripMapSection;
