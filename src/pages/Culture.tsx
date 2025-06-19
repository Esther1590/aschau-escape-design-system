import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Calendar, Camera, Building2, Music, Palette, Bus, Clock, Users, Heart } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';
import Header from '@/components/Header';

const Culture = () => {
  const { t } = useTranslation();

  const culturalAttractions = [
    {
      name: "Schloss Hohenaschau",
      description: "A magnificent 12th-century castle perched majestically above the village, offering guided tours through historic chambers and breathtaking Alpine views. Wheelchair accessible elevator available.",
      image: '/lovable-uploads/1fb9ec77-eed2-446e-b4cf-bb8e60d0278b.png',
      icon: Building2,
      accessibility: "Elevator access to main floors, guided tours available"
    },
    {
      name: t('culture.museum.name'),
      description: "Discover Aschau's rich heritage through carefully curated exhibits showcasing traditional Alpine life, local customs, and historical artifacts. Ground floor access with comfortable seating areas.",
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      icon: Camera,
      accessibility: "Ground floor access, seating areas throughout"
    },
    {
      name: "Traditional Craft Workshops",
      description: "Experience authentic Bavarian craftsmanship with gentle hands-on workshops in wood carving, pottery, and traditional textile arts. Expert artisans guide you at a comfortable pace.",
      image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      icon: Palette,
      accessibility: "Comfortable seating, adjustable work surfaces"
    },
    {
      name: "Folk Music Evenings",
      description: "Immerse yourself in the warm melodies of traditional Alpine folk music with intimate performances by local musicians in cozy, accessible venues throughout the village.",
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      icon: Music,
      accessibility: "Reserved seating, hearing assistance available"
    }
  ];

  const practicalInfo = [
    {
      title: "Gentle Walking Paths",
      description: "Well-maintained, paved paths with benches every 100 meters. Scenic routes through the village with minimal elevation changes.",
      icon: Heart,
      details: ["Paved surfaces", "Regular rest stops", "Handrails where needed"]
    },
    {
      title: "Shuttle Services",
      description: "Complimentary shuttle service connecting major cultural sites. Operates hourly with wheelchair-accessible vehicles.",
      icon: Bus,
      details: ["Hourly service", "Wheelchair accessible", "Door-to-door pickup"]
    },
    {
      title: "Guided Tours",
      description: "Expert local guides offer personalized tours at a relaxed pace, with flexible timing and comfortable group sizes.",
      icon: Users,
      details: ["Small groups (max 8)", "Flexible timing", "Expert local guides"]
    },
    {
      title: "Visiting Hours",
      description: "Most attractions open 9 AM - 4 PM with extended summer hours. Advanced booking recommended for guided experiences.",
      icon: Clock,
      details: ["9 AM - 4 PM daily", "Extended summer hours", "Advance booking available"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: 'url(/lovable-uploads/4fe3bebb-97e4-43da-acca-7b6e3ae2b103.png)'
          }}
        />
        <div className="relative z-10 text-center text-wellness-charcoal dark:text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-shadow-lg">
            Cultural Heritage
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Discover the timeless traditions of Aschau im Chiemgau
          </p>
        </div>
      </section>

      {/* Cultural Attractions */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-wellness-charcoal dark:text-white mb-6">
              Cultural Treasures
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore our carefully selected cultural experiences, designed with comfort and accessibility in mind for discerning travelers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {culturalAttractions.map((attraction, index) => {
              const IconComponent = attraction.icon;
              return (
                <Card key={index} className="overflow-hidden shadow-xl border-0 hover:shadow-2xl transition-all duration-300 dark:bg-gray-800">
                  <div className="relative h-64">
                    <img 
                      src={attraction.image} 
                      alt={attraction.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 p-3 rounded-full">
                      <IconComponent className="w-6 h-6 text-amber-600" />
                    </div>
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl text-foreground mb-3">
                      {attraction.name}
                    </CardTitle>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-4">
                      {attraction.description}
                    </p>
                    <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded-lg border-l-4 border-green-500">
                      <p className="text-sm font-medium text-green-800 dark:text-green-200">
                        ♿ Accessibility: {attraction.accessibility}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white text-lg py-4">
                      Learn More & Book
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Practical Information */}
      <section className="py-16 px-4 bg-white/50 dark:bg-gray-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-wellness-charcoal dark:text-white mb-6">
              Practical Information
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know for a comfortable and enriching cultural experience in Aschau.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practicalInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800">
                  <div className="text-center">
                    <div className="bg-amber-100 dark:bg-amber-900/30 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {info.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                      {info.description}
                    </p>
                    <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                      {info.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center justify-center">
                          <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Castle History Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-wellness-charcoal dark:text-white mb-6">
              Our Historic Burg Hotel
            </h2>
            <div className="bg-white/80 dark:bg-gray-800/80 p-8 rounded-2xl shadow-lg">
              <div className="mb-8">
                <img 
                  src="/lovable-uploads/4fe3bebb-97e4-43da-acca-7b6e3ae2b103.png" 
                  alt="Burg Hotel Aschau"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Our hotel itself is a piece of living history, carefully restored to maintain its authentic medieval character while providing modern comfort and accessibility for all our guests.
              </p>
              <div className="bg-amber-100 dark:bg-amber-900/30 p-6 rounded-xl border-l-4 border-amber-500">
                <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
                  The hotel features elevator access to all floors, wide corridors, and specially designed rooms for guests with mobility needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-12 border-0 shadow-2xl bg-white/90 dark:bg-gray-800/90">
            <div className="text-center">
              <blockquote className="text-2xl md:text-3xl font-light text-gray-700 dark:text-gray-300 italic leading-relaxed mb-6">
                "The cultural experiences in Aschau are thoughtfully designed for every visitor. From the accessible castle tours to the intimate folk music evenings, every detail shows genuine care for guest comfort."
              </blockquote>
              <cite className="text-xl font-semibold text-wellness-charcoal dark:text-white">
                — Margaret & James Thompson, Frequent Visitors
              </cite>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Footer */}
      <footer className="bg-wellness-charcoal dark:bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-8 text-amber-300">
              Plan Your Cultural Journey
            </h3>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
              <div className="flex items-center space-x-4">
                <Phone className="w-8 h-8 text-amber-300" />
                <div>
                  <p className="text-xl font-semibold">Call Us</p>
                  <p className="text-lg text-gray-300">+49 8052 1234</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-8 h-8 text-amber-300" />
                <div>
                  <p className="text-xl font-semibold">Email</p>
                  <p className="text-lg text-gray-300">culture@burg-aschau.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-8 h-8 text-amber-300" />
                <div>
                  <p className="text-xl font-semibold">Visit Us</p>
                  <p className="text-lg text-gray-300">Aschau im Chiemgau</p>
                </div>
              </div>
            </div>
            <div className="mt-8 p-4 bg-amber-900/30 rounded-lg">
              <p className="text-lg text-amber-200">
                All cultural experiences can be arranged with advance notice to ensure optimal accessibility and comfort.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Culture;
