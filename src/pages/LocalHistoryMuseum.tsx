import { useState } from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Euro, Phone, MapPin, Calendar, Users, Camera, Info } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';
import TrailImageViewer from '@/components/wellness/TrailImageViewer';
import ChatbotButton from '@/components/ChatbotButton';

const LocalHistoryMuseum = () => {
  const { t, language } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const museumGallery = [
    '/lovable-uploads/f3c9483b-7cba-456a-83b8-fa7c91fafe06.png'
  ];

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseViewer = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/lovable-uploads/f3c9483b-7cba-456a-83b8-fa7c91fafe06.png')`
          }}
        ></div>
        <div className="container mx-auto relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{textShadow: '6px 6px 16px rgba(0, 0, 0, 1), 4px 4px 12px rgba(0, 0, 0, 0.9), 2px 2px 8px rgba(0, 0, 0, 0.8), 1px 1px 4px rgba(0, 0, 0, 0.7)'}}>
            {language === 'EN' ? 'Local History Museum' : 'Heimatmuseum'}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed" style={{textShadow: '5px 5px 12px rgba(0, 0, 0, 1), 3px 3px 9px rgba(0, 0, 0, 0.9), 2px 2px 6px rgba(0, 0, 0, 0.8), 1px 1px 3px rgba(0, 0, 0, 0.6)'}}>
            {language === 'EN' 
              ? 'Discover the rich heritage and traditions of Aschau im Chiemgau'
              : 'Entdecken Sie das reiche Erbe und die Traditionen von Aschau im Chiemgau'
            }
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Visitor Information */}
            <div className="space-y-8">
              <Card className="shadow-xl border-0 dark:bg-gray-800">
                <CardHeader className="bg-blue-500 text-white">
                  <CardTitle className="flex items-center space-x-3 text-2xl">
                    <Clock className="w-8 h-8" />
                    <span>{language === 'EN' ? 'Opening Hours' : 'Öffnungszeiten'}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">
                        {language === 'EN' ? 'Tuesday - Sunday:' : 'Dienstag - Sonntag:'}
                      </span>
                      <span>10:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">
                        {language === 'EN' ? 'Monday:' : 'Montag:'}
                      </span>
                      <span>{language === 'EN' ? 'Closed' : 'Geschlossen'}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">
                        {language === 'EN' ? 'Last Entry:' : 'Letzter Einlass:'}
                      </span>
                      <span>16:30</span>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg">
                      <p className="text-sm text-blue-800 dark:text-blue-200">
                        <Info className="w-4 h-4 inline mr-2" />
                        {language === 'EN' 
                          ? 'Closed on public holidays and December 24-January 6'
                          : 'Geschlossen an Feiertagen und 24. Dezember - 6. Januar'
                        }
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-0 dark:bg-gray-800">
                <CardHeader className="bg-emerald-500 text-white">
                  <CardTitle className="flex items-center space-x-3 text-2xl">
                    <Euro className="w-8 h-8" />
                    <span>{language === 'EN' ? 'Admission Prices' : 'Eintrittspreise'}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">
                        {language === 'EN' ? 'Adults:' : 'Erwachsene:'}
                      </span>
                      <span className="text-lg font-bold">€4.50</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">
                        {language === 'EN' ? 'Students/Seniors:' : 'Studenten/Senioren:'}
                      </span>
                      <span className="text-lg font-bold">€3.50</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">
                        {language === 'EN' ? 'Children (6-14):' : 'Kinder (6-14):'}
                      </span>
                      <span className="text-lg font-bold">€2.00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">
                        {language === 'EN' ? 'Family Ticket:' : 'Familienkarte:'}
                      </span>
                      <span className="text-lg font-bold">€12.00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">
                        {language === 'EN' ? 'Under 6:' : 'Unter 6:'}
                      </span>
                      <span className="text-lg font-bold text-green-600">
                        {language === 'EN' ? 'FREE' : 'KOSTENLOS'}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-0 dark:bg-gray-800">
                <CardHeader className="bg-cyan-500 text-white">
                  <CardTitle className="flex items-center space-x-3 text-2xl">
                    <Users className="w-8 h-8" />
                    <span>{language === 'EN' ? 'Guided Tours' : 'Führungen'}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">
                        {language === 'EN' ? 'Group Tours (8+):' : 'Gruppenführungen (8+):'}
                      </span>
                      <span>€3.50 {language === 'EN' ? 'per person' : 'pro Person'}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">
                        {language === 'EN' ? 'Private Tours:' : 'Privatführungen:'}
                      </span>
                      <span>€45.00 ({language === 'EN' ? 'up to 10 people' : 'bis zu 10 Personen'})</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">
                        {language === 'EN' ? 'Duration:' : 'Dauer:'}
                      </span>
                      <span>45 {language === 'EN' ? 'minutes' : 'Minuten'}</span>
                    </div>
                    <div className="bg-cyan-50 dark:bg-cyan-900/30 p-3 rounded-lg">
                      <p className="text-sm text-cyan-800 dark:text-cyan-200">
                        <Calendar className="w-4 h-4 inline mr-2" />
                        {language === 'EN' 
                          ? 'Tours available in German and English by appointment'
                          : 'Führungen auf Deutsch und Englisch nach Vereinbarung'
                        }
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Gallery and Contact */}
            <div className="space-y-8">
              <Card className="shadow-xl border-0 dark:bg-gray-800">
                <CardHeader className="bg-violet-500 text-white">
                  <CardTitle className="flex items-center space-x-3 text-2xl">
                    <Camera className="w-8 h-8" />
                    <span>{language === 'EN' ? 'Museum Gallery' : 'Museum Galerie'}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 gap-3">
                    {museumGallery.map((galleryItem, idx) => (
                      <div 
                        key={idx} 
                        className="relative group overflow-hidden rounded-lg cursor-pointer"
                        onClick={() => handleImageClick(galleryItem)}
                      >
                        <img 
                          src={galleryItem} 
                          alt={`Local History Museum view ${idx + 1}`}
                          className="w-full h-48 object-cover transition-all duration-300 group-hover:scale-105 brightness-90 group-hover:brightness-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-0 dark:bg-gray-800">
                <CardHeader className="bg-rose-500 text-white">
                  <CardTitle className="flex items-center space-x-3 text-2xl">
                    <Phone className="w-8 h-8" />
                    <span>{language === 'EN' ? 'Contact & Location' : 'Kontakt & Standort'}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-red-600 mt-1" />
                      <div>
                        <p className="font-medium">{language === 'EN' ? 'Address:' : 'Adresse:'}</p>
                        <p className="text-gray-600 dark:text-gray-300">
                          Kampenwandstraße 2<br />
                          83229 Aschau im Chiemgau<br />
                          {language === 'EN' ? 'Germany' : 'Deutschland'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-red-600" />
                      <div>
                        <p className="font-medium">{language === 'EN' ? 'Phone:' : 'Telefon:'}</p>
                        <p className="text-gray-600 dark:text-gray-300">+49 8052 179757</p>
                      </div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded-lg">
                      <p className="text-sm text-green-800 dark:text-green-200">
                        ♿ {language === 'EN' 
                          ? 'Ground floor accessible for wheelchairs'
                          : 'Erdgeschoss rollstuhlgerecht zugänglich'
                        }
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-0 dark:bg-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                    {language === 'EN' ? 'Exhibition Highlights' : 'Ausstellungs-Highlights'}
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {language === 'EN' 
                        ? 'Traditional Alpine farming tools'
                        : 'Traditionelle alpine Landwirtschaftsgeräte'
                      }
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {language === 'EN' 
                        ? 'Historical clothing and textiles'
                        : 'Historische Kleidung und Textilien'
                      }
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {language === 'EN' 
                        ? 'Local craft demonstrations'
                        : 'Lokale Handwerksvorführungen'
                      }
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {language === 'EN' 
                        ? 'Interactive historical displays'
                        : 'Interaktive historische Ausstellungen'
                      }
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Booking Buttons */}
          <div className="mt-12 text-center space-y-4">
            <Button 
              size="lg" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg mr-4"
              onClick={() => window.open('tel:+49-8052-179757', '_self')}
            >
              <Phone className="w-5 h-5 mr-2" />
              {language === 'EN' ? 'Book by Phone' : 'Telefonisch buchen'}
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-4 text-lg"
              onClick={() => window.open('https://maps.google.com/?q=Heimatmuseum,+Aschau+im+Chiemgau', '_blank')}
            >
              <MapPin className="w-5 h-5 mr-2" />
              {language === 'EN' ? 'Get Directions' : 'Route anzeigen'}
            </Button>
          </div>
        </div>
      </section>

      <ChatbotButton />

      {/* Image Viewer */}
      <TrailImageViewer
        selectedImage={selectedImage}
        images={museumGallery}
        onClose={handleCloseViewer}
      />
    </div>
  );
};

export default LocalHistoryMuseum;
