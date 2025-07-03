
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
              {t('seasonal.summer.heroImageSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-wellness-charcoal dark:text-white mb-6">
              {t('seasonal.summer.activitiesTitle')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('seasonal.summer.activitiesSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-b from-blue-50 to-white dark:from-blue-900 dark:to-gray-800 p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-wellness-sage rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🏊</span>
              </div>
              <h3 className="text-xl font-bold text-wellness-charcoal dark:text-white mb-3 text-center">
                {t('seasonal.summer.activities.hiking.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {t('seasonal.summer.activities.hiking.description')}
              </p>
            </div>

            <div className="bg-gradient-to-b from-green-50 to-white dark:from-green-900 dark:to-gray-800 p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-wellness-sage rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🌲</span>
              </div>
              <h3 className="text-xl font-bold text-wellness-charcoal dark:text-white mb-3 text-center">
                {t('seasonal.summer.activities.meditation.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {t('seasonal.summer.activities.meditation.description')}
              </p>
            </div>

            <div className="bg-gradient-to-b from-yellow-50 to-white dark:from-yellow-900 dark:to-gray-800 p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-wellness-sage rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-bold text-wellness-charcoal dark:text-white mb-3 text-center">
                {t('seasonal.summer.activities.yoga.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {t('seasonal.summer.activities.yoga.description')}
              </p>
            </div>

            <div className="bg-gradient-to-b from-orange-50 to-white dark:from-orange-900 dark:to-gray-800 p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-wellness-sage rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">☀️</span>
              </div>
              <h3 className="text-xl font-bold text-wellness-charcoal dark:text-white mb-3 text-center">
                {t('seasonal.summer.activities.forestBathing.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {t('seasonal.summer.activities.forestBathing.description')}
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
                {t('seasonal.summer.weatherTitle')}
              </h3>
              <ul className="space-y-3">
                {(t('seasonal.summer.weatherItems') as unknown as string[]).map((item: string, index: number) => (
                  <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                    <div className="w-2 h-2 bg-wellness-sage rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-wellness-charcoal dark:text-white mb-6">
                {t('seasonal.summer.packingTitle')}
              </h3>
              <ul className="space-y-3">
                {(t('seasonal.summer.packingItems') as unknown as string[]).map((item: string, index: number) => (
                  <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                    <div className="w-2 h-2 bg-wellness-sage rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-wellness-sage text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('seasonal.summer.ctaTitle')}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('seasonal.summer.ctaSubtitle')}
          </p>
          <button className="bg-white text-wellness-sage px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
            {t('seasonal.summer.ctaButton')}
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
