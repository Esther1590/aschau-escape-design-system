
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
      title: 'Mountain Hiking',
      description: 'Explore awakening trails with fresh green landscapes and blooming wildflowers.',
    },
    {
      icon: Sun,
      title: 'Meditation Walks',
      description: 'Find inner peace while walking through nature as it comes back to life.',
    },
    {
      icon: Flower,
      title: 'Outdoor Yoga',
      description: 'Practice yoga in meadows surrounded by spring blossoms and fresh air.',
    },
    {
      icon: TreePine,
      title: 'Forest Bathing',
      description: 'Immerse yourself in the rejuvenating energy of awakening forests.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-wellness-charcoal dark:text-white mb-6">
              {t('seasonal.spring.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('seasonal.spring.description')}
            </p>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden mb-16">
            <img 
              src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Spring in Aschau"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-3xl font-bold mb-4">Experience Spring Awakening</h2>
                <p className="text-xl">Nature's renewal in the heart of Bavaria</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-wellness-charcoal dark:text-white mb-6">
              Spring Activities
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover the perfect activities to embrace the spring season in Aschau
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {springActivities.map((activity, index) => (
              <Card key={activity.title} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-wellness-sage rounded-full flex items-center justify-center">
                    <activity.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-wellness-charcoal dark:text-white mb-3">
                  {activity.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
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
              <h3 className="text-3xl font-bold text-wellness-charcoal dark:text-white mb-6">
                Spring Weather
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-wellness-sage rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Temperature: 10-20°C (50-68°F)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-wellness-sage rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Occasional spring showers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-wellness-sage rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Longer daylight hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-wellness-sage rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Fresh mountain air</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold text-wellness-charcoal dark:text-white mb-6">
                What to Bring
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-wellness-sage rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Light layers for changing weather</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-wellness-sage rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Waterproof jacket</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-wellness-sage rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Comfortable hiking boots</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-wellness-sage rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Camera for blooming landscapes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-wellness-charcoal text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Spring in Aschau?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your spring wellness retreat and immerse yourself in nature's awakening
          </p>
          <Button 
            size="lg" 
            className="bg-wellness-sage hover:bg-wellness-sage/90 text-white px-8 py-3"
          >
            Plan Your Spring Visit
          </Button>
        </div>
      </section>

      <ChatbotButton />
    </div>
  );
};

export default Spring;
