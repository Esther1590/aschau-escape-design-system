
import { useTranslation } from '@/contexts/TranslationContext';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-wellness-charcoal text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-wellness-sage rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Aschau Wellness Tourism</h3>
                <p className="text-gray-300">{t('footer.tagline')}</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md text-lg">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-wellness-sage">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              <li><a href="#wellness" className="text-gray-300 hover:text-wellness-sage transition-colors text-lg">{t('nav.wellness')}</a></li>
              <li><a href="#culture" className="text-gray-300 hover:text-wellness-sage transition-colors text-lg">{t('nav.culture')}</a></li>
              <li><a href="#plan" className="text-gray-300 hover:text-wellness-sage transition-colors text-lg">{t('nav.planTrip')}</a></li>
              <li><a href="#booking" className="text-gray-300 hover:text-wellness-sage transition-colors text-lg">{t('nav.booking')}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-wellness-sage">{t('footer.contact')}</h4>
            <div className="space-y-3 text-gray-300 text-lg">
              <p>{t('footer.address')}</p>
              <p>{t('footer.phone')}</p>
              <p>{t('footer.email')}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 text-center">
          <p className="text-gray-300 text-lg">
            {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
