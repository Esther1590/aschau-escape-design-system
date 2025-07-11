
import { Phone, Mail, MapPin } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';

const ContactFooter = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-wellness-charcoal dark:bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-8 text-amber-300">
            {t('culture.contact.title')}
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
            <div className="flex items-center space-x-4">
              <Phone className="w-8 h-8 text-amber-300" />
              <div>
                <p className="text-xl font-semibold">{t('culture.contact.phone.title')}</p>
                <p className="text-lg text-gray-300">{t('culture.contact.phone.number')}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-8 h-8 text-amber-300" />
              <div>
                <p className="text-xl font-semibold">{t('culture.contact.email.title')}</p>
                <p className="text-lg text-gray-300">{t('culture.contact.email.address')}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-8 h-8 text-amber-300" />
              <div>
                <p className="text-xl font-semibold">{t('culture.contact.visit.title')}</p>
                <p className="text-lg text-gray-300">{t('culture.contact.visit.address')}</p>
              </div>
            </div>
          </div>
          <div className="mt-8 p-4 bg-amber-900/30 rounded-lg">
            <p className="text-lg text-amber-200">
              {t('culture.contact.accessibility')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
