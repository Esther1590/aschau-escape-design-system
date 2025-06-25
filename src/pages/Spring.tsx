
import Header from '@/components/Header';
import { useTranslation } from '@/contexts/TranslationContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Leaf, Sun, Flower, TreePine } from 'lucide-react';
import ChatbotButton from '@/components/ChatbotButton';

const Spring = () => {
  const { t } = useTranslation();

  const springActivities = [
    {
      icon: Leaf,
      title: t('seasonal.spring.activities.hiking.title'),
      description: t('seasonal.spring.activities.hiking.description'),
    },
    {
      icon: Sun,
      title: t('seasonal.spring.activities.meditation.title'),
      description: t('seasonal.spring.activities.meditation.description'),
    },
    {
      icon: Flower,
      title: t('seasonal.spring.activities.yoga.title'),
      description: t('seasonal.spring.activities.yoga.description'),
    },
    {
      icon: TreePine,
      title: t('seasonal.spring.activities.forestBathing.title'),
      description: t('seasonal.spring.activities.forestBathing.description'),
    },
  ];

  // Get weather and packing items as arrays
  const weatherItems = t('seasonal.spring.weatherItems') as string[];
  const packingItems = t('seasonal.spring.packingItems') as string[];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-green-800 dark:text-white mb-6">
              {t('seasonal.spring.title')}
            </h1>
            <p className="text-xl text-green-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('seasonal.spring.description')}
            </p>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden mb-16">
            <img 
              src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Spring in Aschau"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-3xl font-bold mb-4 text-white">{t('seasonal.spring.heroImageTitle')}</h2>
                <p className="text-xl text-gray-100">{t('seasonal.spring.heroImageSubtitle')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 px-4 bg-green-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-700 dark:text-white mb-6">
              {t('seasonal.spring.activitiesTitle')}
            </h2>
            <p className="text-xl text-green-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('seasonal.spring.activitiesSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {springActivities.map((activity, index) => (
              <Card key={activity.title} className="p-6 text-center hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 border-green-200 dark:border-gray-700">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center">
                    <activity.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-green-700 dark:text-white mb-3">
                  {activity.title}
                </h3>
                <p className="text-green-600 dark:text-gray-300">
                  {activity.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Weather & Tips Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-100 to-blue-100 dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-green-700 dark:text-white mb-6">
                {t('seasonal.spring.weatherTitle')}
              </h3>
              <div className="space-y-4">
                {weatherItems.map((item: string, index: number) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-green-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold text-green-700 dark:text-white mb-6">
                {t('seasonal.spring.packingTitle')}
              </h3>
              <div className="space-y-4">
                {packingItems.map((item: string, index: number) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-green-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-green-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{t('seasonal.spring.ctaTitle')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-green-100">
            {t('seasonal.spring.ctaSubtitle')}
          </p>
          <Button 
            size="lg" 
            className="bg-green-400 hover:bg-green-300 text-green-800 px-8 py-3 font-bold"
          >
            {t('seasonal.spring.ctaButton')}
          </Button>
        </div>
      </section>

      <ChatbotButton />
    </div>
  );
};

export default Spring;
