
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyBookingButton from '@/components/StickyBookingButton';
import ChatbotButton from '@/components/ChatbotButton';
import { useTranslation } from '@/contexts/TranslationContext';

const Summer = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-blue-50 to-green-50 dark:from-blue-900 dark:to-green-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)'
          }}
        />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-wellness-charcoal dark:text-white mb-6">
              {t('seasonal.summer.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Embrace the warmth of summer in the Bavarian Alps
            </p>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-wellness-charcoal dark:text-white mb-6">
              Summer Activities
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover the perfect activities to embrace the summer season in Aschau
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-b from-blue-50 to-white dark:from-blue-900 dark:to-gray-800 p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-wellness-sage rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🏊</span>
              </div>
              <h3 className="text-xl font-bold text-wellness-charcoal dark:text-white mb-3 text-center">
                Lake Swimming
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Refresh yourself in crystal-clear Alpine lakes surrounded by mountain peaks.
              </p>
            </div>

            <div className="bg-gradient-to-b from-green-50 to-white dark:from-green-900 dark:to-gray-800 p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-wellness-sage rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🌲</span>
              </div>
              <h3 className="text-xl font-bold text-wellness-charcoal dark:text-white mb-3 text-center">
                Forest Bathing
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Immerse yourself in the healing energy of ancient Alpine forests.
              </p>
            </div>

            <div className="bg-gradient-to-b from-yellow-50 to-white dark:from-yellow-900 dark:to-gray-800 p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-wellness-sage rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-bold text-wellness-charcoal dark:text-white mb-3 text-center">
                Herb Workshops
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Learn about Alpine herbs and create natural wellness remedies.
              </p>
            </div>

            <div className="bg-gradient-to-b from-orange-50 to-white dark:from-orange-900 dark:to-gray-800 p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-wellness-sage rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">☀️</span>
              </div>
              <h3 className="text-xl font-bold text-wellness-charcoal dark:text-white mb-3 text-center">
                Sun Meditation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Practice mindfulness under the warm Alpine summer sun.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Weather & Packing Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-yellow-50 to-orange-50 dark:from-yellow-900 dark:to-orange-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-wellness-charcoal dark:text-white mb-6">
                Summer Weather
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-wellness-sage rounded-full mr-3"></div>
                  Temperature: 20-28°C (68-82°F)
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-wellness-sage rounded-full mr-3"></div>
                  Long sunny days
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-wellness-sage rounded-full mr-3"></div>
                  Occasional afternoon thunderstorms
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-wellness-sage rounded-full mr-3"></div>
                  Perfect for outdoor activities
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
                  Light, breathable clothing
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-wellness-sage rounded-full mr-3"></div>
                  Swimming attire
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-wellness-sage rounded-full mr-3"></div>
                  Sun protection (hat, sunscreen)
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-wellness-sage rounded-full mr-3"></div>
                  Light rain jacket
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
            Ready to Experience Summer in Aschau?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your summer wellness retreat and immerse yourself in the warmth of the Alpine season
          </p>
          <button className="bg-white text-wellness-sage px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
            Plan Your Summer Visit
          </button>
        </div>
      </section>

      <Footer />
      <StickyBookingButton />
      <ChatbotButton />
    </div>
  );
};

export default Summer;
