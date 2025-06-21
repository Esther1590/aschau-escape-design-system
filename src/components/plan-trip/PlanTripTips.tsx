
import { Card } from '@/components/ui/card';
import { MapPin, Train, CloudSun } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';

const PlanTripTips = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 px-4 bg-wellness-sage/5 dark:bg-gray-800/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-wellness-charcoal dark:text-white mb-6">
            {t('planTrip.tips.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 border-0 shadow-lg dark:bg-gray-800">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-wellness-sage mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-wellness-charcoal dark:text-white mb-4">
                {t('planTrip.tips.trails.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                {t('planTrip.tips.trails.description')}
              </p>
            </div>
          </Card>

          <Card className="p-6 border-0 shadow-lg dark:bg-gray-800">
            <div className="text-center">
              <Train className="w-12 h-12 text-wellness-sage mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-wellness-charcoal dark:text-white mb-4">
                {t('planTrip.tips.transport.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                {t('planTrip.tips.transport.description')}
              </p>
            </div>
          </Card>

          <Card className="p-6 border-0 shadow-lg dark:bg-gray-800">
            <div className="text-center">
              <CloudSun className="w-12 h-12 text-wellness-sage mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-wellness-charcoal dark:text-white mb-4">
                {t('planTrip.tips.weather.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                {t('planTrip.tips.weather.description')}
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PlanTripTips;
