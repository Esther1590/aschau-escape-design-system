
import { useState } from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Euro, Phone, MapPin, Calendar, Users, Camera, Info } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';
import TrailImageViewer from '@/components/wellness/TrailImageViewer';
import ChatbotButton from '@/components/ChatbotButton';

const SchlossHohenaschau = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const schlossGallery = [
    '/lovable-uploads/ad856991-3922-46d9-90a4-af3e6eb56779.png',
    '/lovable-uploads/53209aaa-0dba-4790-a6aa-64d5e3ad2c48.png',
    '/lovable-uploads/795a8580-c818-4526-b201-9d317cebb951.png',
    '/lovable-uploads/084081ca-c2e2-4431-82a0-3ee8f171543b.png',
    '/lovable-uploads/d9dc1eac-28e3-4a55-9cdd-d534ff12e097.png',
    '/20250417_123645_2.mp4'
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/lovable-uploads/1fb9ec77-eed2-446e-b4cf-bb8e60d0278b.png')`
          }}
        ></div>
        <div className="container mx-auto relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Schloss Hohenaschau
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            A magnificent 12th-century castle perched majestically above the village
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
                <CardHeader className="bg-amber-600 text-white">
                  <CardTitle className="flex items-center space-x-3 text-2xl">
                    <Clock className="w-8 h-8" />
                    <span>Opening Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">April - October:</span>
                      <span>Daily 9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">November - March:</span>
                      <span>Tue-Sun 10:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Last Entry:</span>
                      <span>30 minutes before closing</span>
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg">
                      <p className="text-sm text-amber-800 dark:text-amber-200">
                        <Info className="w-4 h-4 inline mr-2" />
                        Closed on Mondays (Nov-Mar) and December 24-26
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-0 dark:bg-gray-800">
                <CardHeader className="bg-green-600 text-white">
                  <CardTitle className="flex items-center space-x-3 text-2xl">
                    <Euro className="w-8 h-8" />
                    <span>Admission Prices</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Adults:</span>
                      <span className="text-lg font-bold">€8.50</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Students/Seniors:</span>
                      <span className="text-lg font-bold">€6.50</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Children (6-14):</span>
                      <span className="text-lg font-bold">€4.00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Family Ticket:</span>
                      <span className="text-lg font-bold">€22.00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Under 6:</span>
                      <span className="text-lg font-bold text-green-600">FREE</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-0 dark:bg-gray-800">
                <CardHeader className="bg-blue-600 text-white">
                  <CardTitle className="flex items-center space-x-3 text-2xl">
                    <Users className="w-8 h-8" />
                    <span>Guided Tours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Group Tours (10+):</span>
                      <span>€7.00 per person</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Private Tours:</span>
                      <span>€120.00 (up to 15 people)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Duration:</span>
                      <span>45-60 minutes</span>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg">
                      <p className="text-sm text-blue-800 dark:text-blue-200">
                        <Calendar className="w-4 h-4 inline mr-2" />
                        Tours available in German, English, and Italian
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
                    <span>Castle Gallery</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-3">
                    {schlossGallery.map((galleryItem, idx) => {
                      const isVideo = galleryItem.endsWith('.mp4');
                      return (
                        <div 
                          key={idx} 
                          className="relative group overflow-hidden rounded-lg cursor-pointer"
                          onClick={() => handleImageClick(galleryItem)}
                        >
                          {isVideo ? (
                            <video 
                              className="w-full h-24 object-cover transition-all duration-300 group-hover:scale-105 brightness-90 group-hover:brightness-100"
                              muted
                              playsInline
                            >
                              <source src={galleryItem} type="video/mp4" />
                            </video>
                          ) : (
                            <img 
                              src={galleryItem} 
                              alt={`Schloss Hohenaschau view ${idx + 1}`}
                              className="w-full h-24 object-cover transition-all duration-300 group-hover:scale-105 brightness-90 group-hover:brightness-100"
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          {isVideo && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="bg-white/80 rounded-full p-2">
                                <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                </svg>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-0 dark:bg-gray-800">
                <CardHeader className="bg-red-600 text-white">
                  <CardTitle className="flex items-center space-x-3 text-2xl">
                    <Phone className="w-8 h-8" />
                    <span>Contact & Location</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-red-600 mt-1" />
                      <div>
                        <p className="font-medium">Address:</p>
                        <p className="text-gray-600 dark:text-gray-300">
                          Schloßstraße 1<br />
                          83229 Aschau im Chiemgau<br />
                          Germany
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-red-600" />
                      <div>
                        <p className="font-medium">Phone:</p>
                        <p className="text-gray-600 dark:text-gray-300">+49 8052 904937</p>
                      </div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded-lg">
                      <p className="text-sm text-green-800 dark:text-green-200">
                        ♿ Wheelchair accessible via elevator to main floors
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-0 dark:bg-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Special Features</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                      Historic chapel with beautiful frescoes
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                      Knights' Hall with medieval artifacts
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                      Panoramic views of the Alps
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                      Gift shop with local crafts
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
              onClick={() => window.open('tel:+4980529049370', '_self')}
            >
              <Phone className="w-5 h-5 mr-2" />
              Book by Phone
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 text-lg"
              onClick={() => window.open('https://maps.google.com/?q=Schloss+Hohenaschau,+Aschau+im+Chiemgau', '_blank')}
            >
              <MapPin className="w-5 h-5 mr-2" />
              Get Directions
            </Button>
          </div>
        </div>
      </section>

      <ChatbotButton />

      {/* Image Viewer */}
      <TrailImageViewer
        selectedImage={selectedImage}
        images={schlossGallery}
        onClose={handleCloseViewer}
      />
    </div>
  );
};

export default SchlossHohenaschau;
