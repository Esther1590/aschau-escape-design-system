
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Calendar, Camera, Building2 } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';
import Header from '@/components/Header';

const Culture = () => {
  const { t } = useTranslation();

  const culturalHighlights = [
    {
      name: t('culture.museum.name'),
      description: t('culture.museum.description'),
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      icon: Building2
    },
    {
      name: t('culture.events.name'),
      description: t('culture.events.description'),
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      icon: Calendar
    },
    {
      name: t('culture.cafe.name'),
      description: t('culture.cafe.description'),
      image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      icon: Camera
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-amber-100 to-orange-100 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: 'url(/lovable-uploads/4fe3bebb-97e4-43da-acca-7b6e3ae2b103.png)'
          }}
        />
        <div className="relative z-10 text-center text-wellness-charcoal">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-shadow-lg">
            {t('culture.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl font-light">
            {t('culture.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Castle History Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-wellness-charcoal mb-6">
              {t('culture.castle.title')}
            </h2>
            <div className="bg-white/80 p-8 rounded-2xl shadow-lg">
              <div className="mb-8">
                <img 
                  src="/lovable-uploads/4fe3bebb-97e4-43da-acca-7b6e3ae2b103.png" 
                  alt="Burg Hotel Aschau"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                {t('culture.castle.history')}
              </p>
              <div className="bg-amber-100 p-6 rounded-xl border-l-4 border-amber-500">
                <p className="text-lg text-gray-700 font-medium">
                  {t('culture.castle.accessibility')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Highlights Gallery */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-wellness-charcoal mb-6">
              {t('culture.highlights.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('culture.highlights.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {culturalHighlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <Card key={index} className="overflow-hidden shadow-xl border-0 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-64">
                    <img 
                      src={highlight.image} 
                      alt={highlight.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 p-3 rounded-full">
                      <IconComponent className="w-6 h-6 text-amber-600" />
                    </div>
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl text-wellness-charcoal mb-3">
                      {highlight.name}
                    </CardTitle>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {highlight.description}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white text-lg py-4">
                      {t('culture.learnMore')}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-12 border-0 shadow-2xl bg-gradient-to-r from-amber-50 to-orange-50">
            <div className="text-center">
              <blockquote className="text-2xl md:text-3xl font-light text-gray-700 italic leading-relaxed mb-6">
                "{t('culture.testimonial.text')}"
              </blockquote>
              <cite className="text-xl font-semibold text-wellness-charcoal">
                {t('culture.testimonial.author')}
              </cite>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Footer */}
      <footer className="bg-wellness-charcoal text-white py-16">
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
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Culture;
