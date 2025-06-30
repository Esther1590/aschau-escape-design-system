
import { useState } from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Euro, Phone, MapPin, Calendar, Users, Camera, Info, Music, Volume2 } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';
import TrailImageViewer from '@/components/wellness/TrailImageViewer';
import ChatbotButton from '@/components/ChatbotButton';

const FolkMusicEvenings = () => {
  const { t, language } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const musicGallery = [
    'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80'
  ];

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseViewer = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80')`
          }}
        ></div>
        <div className="container mx-auto relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{textShadow: '3px 3px 8px rgba(0, 0, 0, 0.9), 1px 1px 4px rgba(0, 0, 0, 0.8)'}}>
            {language === 'EN' ? 'Folk Music Evenings' : 'Volksmusikabende'}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed" style={{textShadow: '2px 2px 6px rgba(0, 0, 0, 0.8), 1px 1px 3px rgba(0, 0, 0, 0.7)'}}>
            {language === 'EN' 
              ? 'Immerse yourself in the warm melodies of traditional Alpine folk music'
              : 'Tauchen Sie ein in die warmen Melodien traditioneller Alpenvolksmusik'
            }
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Event Information */}
            <div className="space-y-8">
              <Card className="shadow-xl border-0 dark:bg-gray-800">
                <CardHeader className="bg-amber-600 text-white">
                  <CardTitle className="flex items-center space-x-3 text-2xl">
                    <Clock className="w-8 h-8" />
                    <span>{language === 'EN' ? 'Event Schedule' : 'Veranstaltungsplan'}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">
                        {language === 'EN' ? 'Regular Evenings:' : 'Regelmäßige Abende:'}
                      </span>
                      <span>{language === 'EN' ? 'Fridays' : 'Freitags'} 19:30-22:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">
                        {language === 'EN' ? 'Special Concerts:' : 'Sonderkonzerte:'}
                      </span>
                      <span>{language === 'EN' ? 'First Saturday/month' : 'Erster Samstag/Monat'} 20:00-23:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">
                        {language === 'EN' ? 'Sunday Matinee:' : 'Sonntags-Matinee:'}
                      </span>
                      <span>{language === 'EN' ? 'Sundays' : 'Sonntags'} 15:00-17:00</span>
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg">
                      <p className="text-sm text-amber-800 dark:text-amber-200">
                        <Info className="w-4 h-4 inline mr-2" />
                        {language === 'EN' 
                          ? 'Includes traditional Alpine instruments and local musicians'
                          : 'Beinhaltet traditionelle Alpeninstrumente und lokale Musiker'
                        }
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-0 dark:bg-gray-800">
                <CardHeader className="bg-green-600 text-white">
                  <CardTitle className="flex items-center space-x-3 text-2xl">
                    <Euro className="w-8 h-8" />
                    <span>{language === 'EN' ? 'Ticket Prices' : 'Ticketpreise'}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">
                        {language === 'EN' ? 'Regular Evening:' : 'Regelmäßiger Abend:'}
                      </span>
                      <span className="text-lg font-bold">€12.00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">
                        {language === 'EN' ? 'Special Concert:' : 'Sonderkonzert:'}
                      </span>
                      <span className="text-lg font-bold">€18.00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">
                        {language === 'EN' ? 'Sunday Matinee:' : 'Sonntags-Matinee:'}
                      </span>
                      <span className="text-lg font-bold">€10.00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">
                        {language === 'EN' ? 'Seniors (65+):' : 'Senioren (65+):'}
                      </span>
                      <span className="text-lg font-bold text-green-600">€8.00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">
                        {language === 'EN' ? 'Season Pass:' : 'Saisonkarte:'}
                      </span>
                      <span className="text-lg font-bold">€95.00</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-0 dark:bg-gray-800">
                <CardHeader className="bg-blue-600 text-white">
                  <CardTitle className="flex items-center space-x-3 text-2xl">
                    <Users className="w-8 h-8" />
                    <span>{language === 'EN' ? 'Venue Information' : 'Veranstaltungsort'}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">
                        {language === 'EN' ? 'Seating Capacity:' : 'Sitzplätze:'}
                      </span>
                      <span>80 {language === 'EN' ? 'seats' : 'Plätze'}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">
                        {language === 'EN' ? 'Reserved Seating:' : 'Reservierte Plätze:'}
                      </span>
                      <span>{language === 'EN' ? 'Available' : 'Verfügbar'}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">
                        {language === 'EN' ? 'Refreshments:' : 'Erfrischungen:'}
                      </span>
                      <span>{language === 'EN' ? 'Local beer & wine' : 'Lokales Bier & Wein'}</span>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg">
                      <p className="text-sm text-blue-800 dark:text-blue-200">
                        <Volume2 className="w-4 h-4 inline mr-2" />
                        {language === 'EN' 
                          ? 'Hearing assistance devices available upon request'
                          : 'Hörgeräte auf Anfrage erhältlich'
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
                <CardHeader className="bg-purple-600 text-white">
                  <CardTitle className="flex items-center space-x-3 text-2xl">
                    <Camera className="w-8 h-8" />
                    <span>{language === 'EN' ? 'Music Evening Gallery' : 'Musikabend Galerie'}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 gap-3">
                    {musicGallery.map((galleryItem, idx) => (
                      <div 
                        key={idx} 
                        className="relative group overflow-hidden rounded-lg cursor-pointer"
                        onClick={() => handleImageClick(galleryItem)}
                      >
                        <img 
                          src={galleryItem} 
                          alt={`Folk Music Evening view ${idx + 1}`}
                          className="w-full h-48 object-cover transition-all duration-300 group-hover:scale-105 brightness-90 group-hover:brightness-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-0 dark:bg-gray-800">
                <CardHeader className="bg-red-600 text-white">
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
                          Kulturhaus Aschau<br />
                          Bernauer Straße 5<br />
                          83229 Aschau im Chiemgau<br />
                          {language === 'EN' ? 'Germany' : 'Deutschland'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-red-600" />
                      <div>
                        <p className="font-medium">{language === 'EN' ? 'Phone:' : 'Telefon:'}</p>
                        <p className="text-gray-600 dark:text-gray-300">+49 8052 957710</p>
                      </div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded-lg">
                      <p className="text-sm text-green-800 dark:text-green-200">
                        ♿ {language === 'EN' 
                          ? 'Reserved seating for wheelchairs, hearing assistance available'
                          : 'Reservierte Plätze für Rollstühle, Hörunterstützung verfügbar'
                        }
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-0 dark:bg-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white flex items-center">
                    <Music className="w-6 h-6 mr-2 text-amber-600" />
                    {language === 'EN' ? 'What to Expect' : 'Was Sie erwartet'}
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                      {language === 'EN' 
                        ? 'Traditional Bavarian folk songs and melodies'
                        : 'Traditionelle bayerische Volkslieder und Melodien'
                      }
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                      {language === 'EN' 
                        ? 'Authentic Alpine instruments (zither, accordion, alpine horn)'
                        : 'Authentische Alpeninstrumente (Zither, Akkordeon, Alphorn)'
                      }
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                      {language === 'EN' 
                        ? 'Stories and history behind the music'
                        : 'Geschichten und Geschichte hinter der Musik'
                      }
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                      {language === 'EN' 
                        ? 'Interactive sing-along opportunities'
                        : 'Interaktive Mitsingmöglichkeiten'
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
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg mr-4"
              onClick={() => window.open('tel:+4980529577100', '_self')}
            >
              <Phone className="w-5 h-5 mr-2" />
              {language === 'EN' ? 'Reserve Tickets' : 'Tickets reservieren'}
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 text-lg"
              onClick={() => window.open('https://maps.google.com/?q=Kulturhaus+Aschau,+Bernauer+Straße+5,+Aschau+im+Chiemgau', '_blank')}
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
        images={musicGallery}
        onClose={handleCloseViewer}
      />
    </div>
  );
};

export default FolkMusicEvenings;
