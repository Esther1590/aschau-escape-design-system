import { useTranslation } from '@/contexts/TranslationContext';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Footer = () => {
  const { t } = useTranslation();

  const faqItems = [
    {
      question: "What makes Aschau ideal for wellness tourism?",
      answer: "Aschau im Chiemgau offers a unique combination of pristine Alpine air, natural thermal springs, peaceful mountain trails, and world-class spa facilities. Our location provides the perfect environment for relaxation and rejuvenation."
    },
    {
      question: "Are the wellness facilities accessible for seniors?",
      answer: "Yes, all our recommended wellness facilities are designed with accessibility in mind. We offer elevator access, comfortable seating areas, gentle therapy options, and professional staff trained to assist guests of all mobility levels."
    },
    {
      question: "What cultural attractions are available?",
      answer: "Visit the historic Schloss Hohenaschau castle, explore our local heritage museum, participate in traditional craft workshops, and enjoy intimate folk music evenings. All attractions offer comfortable, accessible experiences."
    },
    {
      question: "How do I plan my trip and book accommodations?",
      answer: "Use our trip planning page to explore accommodations, activities, and create a personalized itinerary. You can also contact us directly for assistance with bookings and special arrangements."
    },
    {
      question: "What is the best time to visit Aschau?",
      answer: "Aschau is beautiful year-round. Spring and summer offer hiking and outdoor activities, while autumn provides stunning foliage. Winter brings cozy spa experiences and peaceful snow-covered landscapes."
    }
  ];

  return (
    <footer className="bg-wellness-charcoal text-white">
      {/* FAQ Section */}
      <section className="py-16 px-4 border-b border-gray-600">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold text-center mb-8 text-wellness-sage">
            Frequently Asked Questions
          </h3>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-600 rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-wellness-sage">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 text-base leading-relaxed pt-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
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
      </div>
    </footer>
  );
};

export default Footer;
