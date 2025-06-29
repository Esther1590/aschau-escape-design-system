
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyBookingButton from '@/components/StickyBookingButton';
import ChatbotButton from '@/components/ChatbotButton';
import { useTranslation } from '@/contexts/TranslationContext';

const Winter = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-blue-100 to-gray-100 dark:from-blue-900 dark:to-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)'
          }}
        />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-wellness-charcoal dark:text-white mb-6">
              {t('seasonal.winter.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Embrace the cozy season in the snow-covered Bavarian Alps
            </p>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-wellness-charcoal dark:text-white mb-6">
              Winter Activities
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover the perfect activities to embrace the winter season in Aschau
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-b from-blue-50 to-white dark:from-blue-900 dark:to-gray-800 p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-wellness-sage rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">♨️</span>
              </div>
              <h3 className="text-xl font-bold text-wellness-charcoal dark:text-white mb-3 text-center">
                Thermal Baths
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Relax in naturally heated Alpine thermal pools surrounded by snow.
              </p>
            </div>

            <div className="bg-gradient-to-b from-indigo-50 to-white dark:from-indigo-900 dark:to-gray-800 p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-wellness-sage rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🧘</span>
              </div>
              <h3 className="text-xl font-bold text-wellness-charcoal dark:text-white mb-3 text-center">
                Winter Wellness
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Experience traditional winter wellness practices and seasonal treatments.
              </p>
            </div>

            <div className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-gray-800 p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-wellness-sage rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-wellness-charcoal dark:text-white mb-3 text-center">
                Indoor Relaxation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Cozy indoor spaces for meditation, reading, and peaceful contemplation.
              </p>
            </div>

            <div className="bg-gradient-to-b from-purple-50 to-white dark:from-purple-900 dark:to-gray-800 p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-wellness-sage rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">❄️</span>
              </div>
              <h3 className="text-xl font-bold text-wellness-charcoal dark:text-white mb-3 text-center">
                Snow Walks
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Peaceful walks through snow-covered forests and mountain trails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Weather & Packing Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-wellness-charcoal dark:text-white mb-6">
                Winter Weather
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-wellness-sage rounded-full mr-3"></div>
                  Temperature: -5 to 5°C (23-41°F)
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-wellness-sage rounded-full mr-3"></div>
                  Snow-covered landscapes
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-wellness-sage rounded-full mr-3"></div>
                  Shorter daylight hours
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-wellness-sage rounded-full mr-3"></div>
                  Perfect for cozy indoor activities
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
                  Warm winter clothing
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-wellness-sage rounded-full mr-3"></div>
                  Waterproof boots
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-wellness-sage rounded-full mr-3"></div>
                  Swimwear for thermal baths
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-wellness-sage rounded-full mr-3"></div>
                  Cozy indoor wear for relaxation
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
            Ready to Experience Winter in Aschau?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your winter wellness retreat and embrace the cozy magic of the Alpine season
          </p>
          <button className="bg-white text-wellness-sage px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
            Plan Your Winter Visit
          </button>
        </div>
      </section>

      <Footer />
      <StickyBookingButton />
      <ChatbotButton />
    </div>
  );
};

export default Winter;
