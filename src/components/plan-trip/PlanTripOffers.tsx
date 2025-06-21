
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gift } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';

const PlanTripOffers = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="bg-gradient-to-r from-wellness-sage/10 to-wellness-sage/5 dark:from-wellness-sage/5 dark:to-wellness-sage/10 border-0 shadow-xl dark:bg-gray-800">
          <CardHeader className="text-center pb-6">
            <div className="flex justify-center mb-4">
              <Gift className="w-16 h-16 text-wellness-sage" />
            </div>
            <CardTitle className="text-4xl font-bold text-wellness-charcoal dark:text-white mb-4">
              {t('planTrip.offers.title')}
            </CardTitle>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('planTrip.offers.subtitle')}
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
                <h4 className="text-xl font-semibold text-wellness-charcoal dark:text-white mb-3">
                  {t('planTrip.offers.wellness.title')}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t('planTrip.offers.wellness.description')}
                </p>
                <p className="text-wellness-sage font-bold text-lg">
                  {t('planTrip.offers.wellness.price')}
                </p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
                <h4 className="text-xl font-semibold text-wellness-charcoal dark:text-white mb-3">
                  {t('planTrip.offers.cultural.title')}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t('planTrip.offers.cultural.description')}
                </p>
                <p className="text-wellness-sage font-bold text-lg">
                  {t('planTrip.offers.cultural.price')}
                </p>
              </div>
            </div>
            <div className="text-center pt-4">
              <Button className="bg-wellness-sage hover:bg-wellness-sage/90 text-white text-lg px-8 py-4">
                {t('planTrip.offers.viewAll')}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PlanTripOffers;
