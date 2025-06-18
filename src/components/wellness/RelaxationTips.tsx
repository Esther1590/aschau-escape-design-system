
import { Card } from '@/components/ui/card';
import { useTranslation } from '@/contexts/TranslationContext';

const RelaxationTips = () => {
  const { t } = useTranslation();

  const relaxationTips = [
    {
      title: t('wellness.tips.tip1.title'),
      text: t('wellness.tips.tip1.text')
    },
    {
      title: t('wellness.tips.tip2.title'),
      text: t('wellness.tips.tip2.text')
    },
    {
      title: t('wellness.tips.tip3.title'),
      text: t('wellness.tips.tip3.text')
    },
    {
      title: t('wellness.tips.tip4.title'),
      text: t('wellness.tips.tip4.text')
    }
  ];

  return (
    <section className="py-16 px-4 bg-white/50 dark:bg-gray-800/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-wellness-charcoal dark:text-white mb-6">
            {t('wellness.tips.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {t('wellness.tips.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {relaxationTips.map((tip, index) => (
            <Card key={index} className="p-8 border-0 shadow-lg bg-white/80 dark:bg-gray-700/80 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold text-wellness-charcoal dark:text-white mb-4">
                {tip.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg italic">
                "{tip.text}"
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelaxationTips;
