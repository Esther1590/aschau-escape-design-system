
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';

const WellnessContact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission
  };

  return (
    <footer className="bg-wellness-charcoal text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-wellness-sage">
              {t('wellness.contact.title')}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-lg text-gray-300 mb-2 block">
                  {t('wellness.contact.name')}
                </Label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-wellness-sage focus:border-transparent text-lg"
                  placeholder={t('wellness.contact.namePlaceholder')}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-lg text-gray-300 mb-2 block">
                  {t('wellness.contact.email')}
                </Label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-wellness-sage focus:border-transparent text-lg"
                  placeholder={t('wellness.contact.emailPlaceholder')}
                  required
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-lg text-gray-300 mb-2 block">
                  {t('wellness.contact.message')}
                </Label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-wellness-sage focus:border-transparent text-lg resize-none"
                  placeholder={t('wellness.contact.messagePlaceholder')}
                  required
                />
              </div>
              <Button type="submit" className="w-full btn-wellness text-lg py-4">
                {t('wellness.contact.send')}
              </Button>
            </form>
          </div>

          {/* Support Information */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-wellness-sage">
              {t('wellness.support.title')}
            </h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="w-8 h-8 text-wellness-sage" />
                <div>
                  <p className="text-xl font-semibold">{t('wellness.support.phone.title')}</p>
                  <p className="text-lg text-gray-300">{t('wellness.support.phone.number')}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-8 h-8 text-wellness-sage" />
                <div>
                  <p className="text-xl font-semibold">{t('wellness.support.email.title')}</p>
                  <p className="text-lg text-gray-300">{t('wellness.support.email.address')}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-8 h-8 text-wellness-sage" />
                <div>
                  <p className="text-xl font-semibold">{t('wellness.support.visit.title')}</p>
                  <p className="text-lg text-gray-300">{t('wellness.support.visit.address')}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-wellness-sage/20 rounded-lg">
              <h4 className="text-xl font-semibold mb-3">{t('wellness.support.hours.title')}</h4>
              <div className="space-y-2 text-gray-300">
                <p>{t('wellness.support.hours.weekdays')}</p>
                <p>{t('wellness.support.hours.weekends')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default WellnessContact;
