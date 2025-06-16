
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Mountain, Waves } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';

const SpaExperiences = () => {
  const { t } = useTranslation();

  const spas = [
    {
      name: t('wellness.spa1.name'),
      description: t('wellness.spa1.description'),
      features: [
        t('wellness.spa1.feature1'),
        t('wellness.spa1.feature2'),
        t('wellness.spa1.feature3'),
        t('wellness.spa1.feature4')
      ],
      icon: Heart
    },
    {
      name: t('wellness.spa2.name'),
      description: t('wellness.spa2.description'),
      features: [
        t('wellness.spa2.feature1'),
        t('wellness.spa2.feature2'),
        t('wellness.spa2.feature3'),
        t('wellness.spa2.feature4')
      ],
      icon: Waves
    },
    {
      name: t('wellness.spa3.name'),
      description: t('wellness.spa3.description'),
      features: [
        t('wellness.spa3.feature1'),
        t('wellness.spa3.feature2'),
        t('wellness.spa3.feature3'),
        t('wellness.spa3.feature4')
      ],
      icon: Mountain
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-wellness-charcoal mb-6">
            {t('wellness.experiences.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('wellness.experiences.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {spas.map((spa, index) => {
            const IconComponent = spa.icon;
            return (
              <Card key={index} className="overflow-hidden shadow-xl border-0 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-32 bg-gradient-to-r from-wellness-sage to-wellness-lightSage flex items-center justify-center">
                  <IconComponent className="w-12 h-12 text-white" />
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-wellness-charcoal mb-3">
                    {spa.name}
                  </CardTitle>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {spa.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="mb-6">
                    <h4 className="font-semibold text-wellness-charcoal mb-3 text-lg">{t('wellness.features')}:</h4>
                    <ul className="space-y-2">
                      {spa.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-wellness-sage rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full btn-wellness text-lg py-4">
                    {t('wellness.bookNow')}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpaExperiences;
