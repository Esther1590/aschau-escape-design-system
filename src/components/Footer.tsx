
import { useState } from 'react';
import { useTranslation } from '@/contexts/TranslationContext';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Mail, Facebook, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: t('footer.newsletter.error'),
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    console.log('Newsletter signup for:', email);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Success!",
      description: t('footer.newsletter.success'),
    });
    
    setEmail('');
    setIsSubmitting(false);
  };

  return (
    <footer className="bg-wellness-charcoal text-white">
      {/* Newsletter Section */}
      <section className="py-12 px-4 border-b border-gray-600">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Mail className="w-8 h-8 text-wellness-sage" />
            <h3 className="text-2xl font-bold text-wellness-sage">
              {t('footer.newsletter.title')}
            </h3>
          </div>
          <p className="text-gray-300 mb-6 text-lg">
            {t('footer.newsletter.description')}
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder={t('footer.newsletter.placeholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-wellness-sage"
              disabled={isSubmitting}
            />
            <Button
              type="submit"
              className="bg-wellness-sage hover:bg-wellness-sage/90 text-white px-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? t('footer.newsletter.subscribing') : t('footer.newsletter.subscribe')}
            </Button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 border-b border-gray-600">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold text-center mb-8 text-wellness-sage">
            {t('footer.faq.title')}
          </h3>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="wellness" className="border border-gray-600 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-wellness-sage">
                {t('footer.faq.questions.wellness.question')}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base leading-relaxed pt-2">
                {t('footer.faq.questions.wellness.answer')}
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="accessibility" className="border border-gray-600 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-wellness-sage">
                {t('footer.faq.questions.accessibility.question')}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base leading-relaxed pt-2">
                {t('footer.faq.questions.accessibility.answer')}
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="culture" className="border border-gray-600 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-wellness-sage">
                {t('footer.faq.questions.culture.question')}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base leading-relaxed pt-2">
                {t('footer.faq.questions.culture.answer')}
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="planning" className="border border-gray-600 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-wellness-sage">
                {t('footer.faq.questions.planning.question')}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base leading-relaxed pt-2">
                {t('footer.faq.questions.planning.answer')}
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="timing" className="border border-gray-600 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-wellness-sage">
                {t('footer.faq.questions.timing.question')}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base leading-relaxed pt-2">
                {t('footer.faq.questions.timing.answer')}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Existing Footer Content */}
      <div className="py-16">
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
              
              {/* Social Media */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-3 text-wellness-sage">{t('footer.followUs')}</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/search/top?q=aschau%20im%20chiemgau"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-wellness-sage transition-colors"
                    aria-label="Follow us on Facebook"
                  >
                    <Facebook className="w-6 h-6" />
                    <span className="text-lg">Facebook</span>
                  </a>
                  <a
                    href="https://www.instagram.com/aschauimchiemgau?igsh=MXJtYmM1bncwOG1oZg=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-wellness-sage transition-colors"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                    <span className="text-lg">Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-wellness-sage">{t('footer.quickLinks')}</h4>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="/wellness" 
                    className="text-gray-300 hover:text-wellness-sage transition-colors text-lg"
                    onClick={() => console.log('Wellness link clicked')}
                  >
                    {t('nav.wellness')}
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/culture" 
                    className="text-gray-300 hover:text-wellness-sage transition-colors text-lg"
                    onClick={() => console.log('Culture link clicked')}
                  >
                    {t('nav.culture')}
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/plan-trip" 
                    className="text-gray-300 hover:text-wellness-sage transition-colors text-lg"
                    onClick={() => console.log('Plan Trip link clicked')}
                  >
                    {t('nav.planTrip')}
                  </Link>
                </li>
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
      </div>
    </footer>
  );
};

export default Footer;
