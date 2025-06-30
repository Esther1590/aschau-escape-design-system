import { useState } from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Euro, Phone, MapPin, Calendar, Users, Camera, Info, Palette } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';
import TrailImageViewer from '@/components/wellness/TrailImageViewer';
import ChatbotButton from '@/components/ChatbotButton';

const TraditionalCraftWorkshops = () => {
  const { t, language } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const workshopGallery = [
    'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80'
  ];

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseViewer = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-100 dark:from-gray-900 dark:to-gray-800">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1452860606245-08befc0ff44b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80')`
          }}
        ></div>
        <div className="container mx-auto relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{textShadow: '3px 3px 8px rgba(0, 0, 0, 0.9), 1px 1px 4px rgba(0, 0, 0, 0.8)'}}>
            {language === 'EN' ? 'Traditional Craft Workshops' : 'Traditionelle Handwerkswerkstätten'}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed" style={{textShadow: '2px 2px 6px rgba(0, 0, 0, 0.8), 1px 1px 3px rgba(0, 0, 0, 0.7)'}}>
            {language === 'EN' 
              ? 'Experience authentic Bavarian craftsmanship with gentle hands-on workshops'
              : 'Erleben Sie authentisches bayerisches Handwerk mit sanften praktischen Workshops'
            }
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Workshop Information */}
            <div className="space-y-8">
              <Card className="shadow-xl border-0 dark:bg-gray-800">
                <CardHeader className="bg-orange-500 text-white">
                  <CardTitle className="flex items-center space-x-3 text-2xl">
                    <Clock className="w-8 h-8" />
                    <span>{language === 'EN' ? 'Workshop Schedule' : 'Workshop-Zeitplan'}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">
                        {language === 'EN' ? 'Wood Carving:' : 'Holzschnitzerei:'}
                      </span>
                      <span>{language === 'EN' ? 'Mon, Wed, Fri' : 'Mo, Mi, Fr'} 14:00-17:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">
                        {language === 'EN' ? 'Pottery:' : 'Töpferei:'}
                      </span>
                      <span>{language === 'EN' ? 'Tue, Thu' : 'Di, Do'} 10:00-13:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">
                        {language === 'EN' ? 'Traditional Textiles:' : 'Traditionelle Textilien:'}
                      </span>
                      <span>{language === 'EN' ? 'Saturdays' : 'Samstags'} 09:00-12:00</span>
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg">
                      <p className="text-sm text-amber-800 dark:text-amber-200">
                        <Info className="w-4 h-4 inline mr-2" />
                        {language === 'EN' 
                          ? 'All materials and tools provided. Advance booking required.'
                          : 'Alle Materialien und Werkzeuge werden bereitgestellt. Voranmeldung erforderlich.'
                        }
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-0 dark:bg-gray-800">
                <CardHeader className="bg-teal-500 text-white">
                  <CardTitle className="flex items-center space-x-3 text-2xl">
                    <Euro className="w-8 h-8" />
                    <span>{language === 'EN' ? 'Workshop Prices' : 'Workshop-Preise'}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">
                        {language === 'EN' ? 'Single Workshop:' : 'Einzelner Workshop:'}
                      </span>
                      <span className="text-lg font-bold">€25.00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">
                        {language === 'EN' ? '3-Day Package:' : '3-Tage-Paket:'}
                      </span>
                      <span className="text-lg font-bold">€65.00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">
                        {language === 'EN' ? 'Week Package:' : 'Wochenpaket:'}
                      </span>
                      <span className="text-lg font-bold">€120.00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">
                        {language === 'EN' ? 'Seniors (65+):' : 'Senioren (65+):'}
                      </span>
                      <span className="text-lg font-bold text-green-600">20% {language === 'EN' ? 'discount' : 'Rabatt'}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-0 dark:bg-gray-800">
                <CardHeader className="bg-indigo-500 text-white">
                  <CardTitle className="flex items-center space-x-3 text-2xl">
                    <Users className="w-8 h-8" />
                    <span>{language === 'EN' ? 'Group Sessions' : 'Gruppensitzungen'}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">
                        {language === 'EN' ? 'Max Group Size:' : 'Max. Gruppengröße:'}
                      </span>
                      <span>8 {language === 'EN' ? 'participants' : 'Teilnehmer'}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">
                        {language === 'EN' ? 'Private Groups:' : 'Private Gruppen:'}
                      </span>
                      <span>€200 ({language === 'EN' ? 'up to 6 people' : 'bis zu 6 Personen'})</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">
                        {language === 'EN' ? 'Duration:' : 'Dauer:'}
                      </span>
                      <span>3 {language === 'EN' ? 'hours' : 'Stunden'}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Gallery and Contact */}
            <div className="space-y-8">
              <Card className="shadow-xl border-0 dark:bg-gray-800">
                <CardHeader className="bg-pink-500 text-white">
                  <CardTitle className="flex items-center space-x-3 text-2xl">
                    <Camera className="w-8 h-8" />
                    <span>{language === 'EN' ? 'Workshop Gallery' : 'Workshop Galerie'}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 gap-3">
                    {workshopGallery.map((galleryItem, idx) => (
                      <div 
                        key={idx} 
                        className="relative group overflow-hidden rounded-lg cursor-pointer"
                        onClick={() => handleImageClick(galleryItem)}
                      >
                        <img 
                          src={galleryItem} 
                          alt={`Traditional Craft Workshop view ${idx + 1}`}
                          className="w-full h-48 object-cover transition-all duration-300 group-hover:scale-105 brightness-90 group-hover:brightness-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-0 dark:bg-gray-800">
                <CardHeader className="bg-emerald-500 text-white">
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
                          Dorfstraße 15<br />
                          83229 Aschau im Chiemgau<br />
                          {language === 'EN' ? 'Germany' : 'Deutschland'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-red-600" />
                      <div>
                        <p className="font-medium">{language === 'EN' ? 'Phone:' : 'Telefon:'}</p>
                        <p className="text-gray-600 dark:text-gray-300">+49 8052 904432</p>
                      </div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded-lg">
                      <p className="text-sm text-green-800 dark:text-green-200">
                        ♿ {language === 'EN' 
                          ? 'Comfortable seating and adjustable work surfaces available'
                          : 'Bequeme Sitzgelegenheiten und höhenverstellbare Arbeitsflächen verfügbar'
                        }
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-0 dark:bg-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white flex items-center">
                    <Palette className="w-6 h-6 mr-2 text-orange-500" />
                    {language === 'EN' ? 'What You\'ll Learn' : 'Was Sie lernen werden'}
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {language === 'EN' 
                        ? 'Traditional Bavarian wood carving techniques'
                        : 'Traditionelle bayerische Holzschnitztechniken'
                      }
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {language === 'EN' 
                        ? 'Pottery wheel and hand-building methods'
                        : 'Töpferscheibe und Handaufbautechniken'
                      }
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {language === 'EN' 
                        ? 'Traditional Alpine textile patterns'
                        : 'Traditionelle alpine Textilmuster'
                      }
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {language === 'EN' 
                        ? 'History and cultural significance of crafts'
                        : 'Geschichte und kulturelle Bedeutung des Handwerks'
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
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg mr-4"
              onClick={() => window.open('tel:+49805290443200', '_self')}
            >
              <Phone className="w-5 h-5 mr-2" />
              {language === 'EN' ? 'Book Workshop' : 'Workshop buchen'}
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 text-lg"
              onClick={() => window.open('https://maps.google.com/?q=Dorfstraße+15,+Aschau+im+Chiemgau', '_blank')}
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
        images={workshopGallery}
        onClose={handleCloseViewer}
      />
    </div>
  );
};

export default TraditionalCraftWorkshops;
