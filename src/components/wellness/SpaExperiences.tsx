
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Crown, Cable } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';

const SpaExperiences = () => {
  const { t } = useTranslation();

  const spas = [
    {
      name: 'Burghotel Aschau',
      description: 'A historic luxury hotel offering premium spa services with traditional Bavarian hospitality and modern wellness amenities.',
      features: [
        'Historic castle setting',
        'Premium spa treatments',
        'Traditional Bavarian wellness',
        'Luxury accommodations'
      ],
      icon: Crown,
      image: '/lovable-uploads/2198bc83-1831-44b3-9659-012bd6e423d7.png'
    },
    {
      name: 'Kampenwandbahn Station',
      description: 'Experience breathtaking panoramic views from the Kampenwand cable car station, offering a unique wellness perspective from above the clouds.',
      features: [
        'Panoramic mountain views',
        'Cable car experience',
        'Alpine fresh air',
        'Photography opportunities',
        'Mountain hiking access',
        'Scenic wellness spots'
      ],
      icon: Cable,
      image: '/lovable-uploads/0ec72996-7048-42eb-9eb8-f94e755d00fe.png'
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-wellness-charcoal dark:text-white mb-6">
            {t('wellness.experiences.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('wellness.experiences.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {spas.map((spa, index) => {
            const IconComponent = spa.icon;
            return (
              <Card key={index} className="overflow-hidden shadow-xl border-0 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-gray-800">
                <div className="relative h-32 bg-gradient-to-r from-wellness-sage to-wellness-lightSage flex items-center justify-center">
                  {spa.image ? (
                    <img 
                      src={spa.image} 
                      alt={spa.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <IconComponent className="w-12 h-12 text-white" />
                  )}
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-wellness-charcoal dark:text-white mb-3">
                    {spa.name}
                  </CardTitle>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                    {spa.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="mb-6">
                    <h4 className="font-semibold text-wellness-charcoal dark:text-white mb-3 text-lg">{t('wellness.features')}:</h4>
                    <ul className="space-y-2">
                      {spa.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
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
