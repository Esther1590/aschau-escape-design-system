
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyBookingButton from '@/components/StickyBookingButton';
import ChatbotButton from '@/components/ChatbotButton';
import { useTranslation } from '@/contexts/TranslationContext';

const Autumn = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-orange-50 to-yellow-50 dark:from-orange-900 dark:to-yellow-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)'
          }}
        />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-wellness-charcoal dark:text-white mb-6">
              {t('seasonal.autumn.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Find peace in the golden landscapes of the Bavarian Alps
            </p>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-wellness-charcoal dark:text-white mb-6">
              Autumn Activities
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover the perfect activities to embrace the autumn season in Aschau
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-b from-orange-50 to-white dark:from-orange-900 dark:to-gray-800 p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-wellness-sage rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🍂</span>
              </div>
              <h3 className="text-xl font-bold text-wellness-charcoal dark:text-white mb-3 text-center">
                Harvest Retreats
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Experience traditional harvest ceremonies and seasonal wellness practices.
              </p>
            </div>

            <div className="bg-gradient-to-b from-yellow-50 to-white dark:from-yellow-900 dark:to-gray-800 p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-wellness-sage rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🧘</span>
              </div>
              <h3 className="text-xl font-bold text-wellness-charcoal dark:text-white mb-3 text-center">
                Spa Treatments
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Indulge in seasonal spa treatments with autumn herbs and warming therapies.
              </p>
            </div>

            <div className="bg-gradient-to-b from-red-50 to-white dark:from-red-900 dark:to-gray-800 p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-wellness-sage rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">📸</span>
              </div>
              <h3 className="text-xl font-bold text-wellness-charcoal dark:text-white mb-3 text-center">
                Photography Tours
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Capture the golden beauty of autumn landscapes in the Alps.
              </p>
            </div>

            <div className="bg-gradient-to-b from-amber-50 to-white dark:from-amber-900 dark:to-gray-800 p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-wellness-sage rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🌰</span>
              </div>
              <h3 className="text-xl font-bold text-wellness-charcoal dark:text-white mb-3 text-center">
                Forest Walks
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Peaceful walks through colorful autumn forests and mountain trails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Weather & Packing Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-orange-50 to-red-50 dark:from-orange-900 dark:to-red-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-wellness-charcoal dark:text-white mb-6">
                Autumn Weather
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-wellness-sage rounded-full mr-3"></div>
                  Temperature: 8-18°C (46-64°F)
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-wellness-sage rounded-full mr-3"></div>
                  Crisp, clear days
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-wellness-sage rounded-full mr-3"></div>
                  Beautiful fall foliage
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-wellness-sage rounded-full mr-3"></div>
                  Perfect for hiking and photography
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-wellness-charcoal dark:text-white mb-6">
                What to Bring
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-wellness-sage rounded-full mr-3"></div>
                  Warm layers for cooler temperatures
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-wellness-sage rounded-full mr-3"></div>
                  Comfortable hiking boots
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-wellness-sage rounded-full mr-3"></div>
                  Camera for autumn scenery
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-wellness-sage rounded-full mr-3"></div>
                  Light jacket for evening walks
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-wellness-sage text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience Autumn in Aschau?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your autumn wellness retreat and immerse yourself in the golden beauty of the Alpine season
          </p>
          <button className="bg-white text-wellness-sage px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
            Plan Your Autumn Visit
          </button>
        </div>
      </section>

      <Footer />
      <StickyBookingButton />
      <ChatbotButton />
    </div>
  );
};

export default Autumn;
