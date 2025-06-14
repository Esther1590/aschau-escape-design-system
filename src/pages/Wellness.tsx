
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Spa, Mountain, Waves } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';
import Header from '@/components/Header';

const Wellness = () => {
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

  const spas = [
    {
      name: 'Residenz Heinz Winkler',
      description: 'Luxury spa hotel with world-class treatments and therapeutic wellness experiences',
      features: ['Luxury Spa Treatments', 'Therapeutic Massages', 'Beauty Wellness', 'Medical Spa'],
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      icon: Spa
    },
    {
      name: 'Burghotel Aschau',
      description: 'Traditional wellness with sauna, whirlpool, and peaceful relaxation zones',
      features: ['Finnish Sauna', 'Whirlpool', 'Quiet Zones', 'Relaxation Areas'],
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      icon: Waves
    },
    {
      name: 'Agrad Chalets',
      description: 'Private saunas with breathtaking mountain views and intimate wellness spaces',
      features: ['Private Saunas', 'Mountain Views', 'Intimate Wellness', 'Alpine Air'],
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      icon: Mountain
    }
  ];

  const relaxationTips = [
    {
      title: 'Breathe with Nature',
      text: 'Take deep breaths of fresh Alpine air and let the mountain energy restore your inner balance.'
    },
    {
      title: 'Mountain Meditation',
      text: 'Find a quiet spot with mountain views and practice mindfulness as you connect with the peaceful landscape.'
    },
    {
      title: 'Thermal Healing',
      text: 'Let the warm thermal waters ease your tensions while you gaze at snow-capped peaks.'
    },
    {
      title: 'Forest Bathing',
      text: 'Immerse yourself in the healing energy of ancient forests and feel stress melt away naturally.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-100 to-green-100 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800&q=80)'
          }}
        />
        <div className="relative z-10 text-center text-wellness-charcoal">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-shadow-lg">
            Wellness in Aschau
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Discover tranquility in the heart of the Bavarian Alps
          </p>
        </div>
      </section>

      {/* Spa Experiences Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-wellness-charcoal mb-6">
              Wellness Experiences
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose from our carefully selected wellness destinations, each offering unique experiences for body, mind, and soul.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {spas.map((spa, index) => {
              const IconComponent = spa.icon;
              return (
                <Card key={index} className="overflow-hidden shadow-xl border-0 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-64">
                    <img 
                      src={spa.image} 
                      alt={spa.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 p-3 rounded-full">
                      <IconComponent className="w-6 h-6 text-wellness-sage" />
                    </div>
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl text-wellness-charcoal mb-3">
                      {spa.name}
                    </CardTitle>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {spa.description}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="mb-6">
                      <h4 className="font-semibold text-wellness-charcoal mb-3 text-lg">Features:</h4>
                      <ul className="space-y-2">
                        {spa.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <div className="w-2 h-2 bg-wellness-sage rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full btn-wellness text-lg py-4">
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Relaxation Tips Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-wellness-charcoal mb-6">
              Relaxation Tips
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Simple wisdom for deeper wellness and lasting tranquility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {relaxationTips.map((tip, index) => (
              <Card key={index} className="p-8 border-0 shadow-lg bg-white/80 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-semibold text-wellness-charcoal mb-4">
                  {tip.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg italic">
                  "{tip.text}"
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer className="bg-wellness-charcoal text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-wellness-sage">
                Wellness Contact
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-lg text-gray-300 mb-2 block">
                    Name
                  </Label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-wellness-sage focus:border-transparent text-lg"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-lg text-gray-300 mb-2 block">
                    Email
                  </Label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-wellness-sage focus:border-transparent text-lg"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-lg text-gray-300 mb-2 block">
                    Message
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-wellness-sage focus:border-transparent text-lg resize-none"
                    placeholder="Tell us about your wellness needs..."
                    required
                  />
                </div>
                <Button type="submit" className="w-full btn-wellness text-lg py-4">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Support Information */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-wellness-sage">
                Support Hotline
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="w-8 h-8 text-wellness-sage" />
                  <div>
                    <p className="text-xl font-semibold">24/7 Wellness Support</p>
                    <p className="text-lg text-gray-300">+49 8052 123456</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-8 h-8 text-wellness-sage" />
                  <div>
                    <p className="text-xl font-semibold">Email Support</p>
                    <p className="text-lg text-gray-300">wellness@aschau-tourism.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-8 h-8 text-wellness-sage" />
                  <div>
                    <p className="text-xl font-semibold">Visit Us</p>
                    <p className="text-lg text-gray-300">Aschau im Chiemgau, Bavaria, Germany</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-wellness-sage/20 rounded-lg">
                <h4 className="text-xl font-semibold mb-3">Wellness Hours</h4>
                <div className="space-y-2 text-gray-300">
                  <p>Monday - Friday: 6:00 AM - 10:00 PM</p>
                  <p>Saturday - Sunday: 7:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Wellness;
