
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, Camera, Palette, Music } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';

interface CulturalAttractionsProps {
  onImageClick: (imageSrc: string) => void;
}

const CulturalAttractions = ({ onImageClick }: CulturalAttractionsProps) => {
  const { t } = useTranslation();

  const culturalAttractions = [
    {
      name: "Schloss Hohenaschau",
      description: "A magnificent 12th-century castle perched majestically above the village, offering guided tours through historic chambers and breathtaking Alpine views. Wheelchair accessible elevator available.",
      image: '/lovable-uploads/1fb9ec77-eed2-446e-b4cf-bb8e60d0278b.png',
      icon: Building2,
      accessibility: "Elevator access to main floors, guided tours available",
      isSchloss: true,
      gallery: [
        '/lovable-uploads/ad856991-3922-46d9-90a4-af3e6eb56779.png',
        '/lovable-uploads/53209aaa-0dba-4790-a6aa-64d5e3ad2c48.png',
        '/lovable-uploads/795a8580-c818-4526-b201-9d317cebb951.png',
        '/lovable-uploads/084081ca-c2e2-4431-82a0-3ee8f171543b.png',
        '/lovable-uploads/d9dc1eac-28e3-4a55-9cdd-d534ff12e097.png',
        '/20250417_123645_2.mp4'
      ]
    },
    {
      name: t('culture.museum.name'),
      description: "Discover Aschau's rich heritage through carefully curated exhibits showcasing traditional Alpine life, local customs, and historical artifacts. Ground floor access with comfortable seating areas.",
      image: '/lovable-uploads/f3c9483b-7cba-456a-83b8-fa7c91fafe06.png',
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

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {culturalAttractions.map((attraction, index) => {
            const IconComponent = attraction.icon;
            return (
              <Card key={index} className="overflow-hidden shadow-xl border-0 hover:shadow-2xl transition-all duration-300 dark:bg-gray-800">
                <div className="relative h-64">
                  <img 
                    src={attraction.image} 
                    alt={attraction.name}
                    className={`w-full h-full ${attraction.isSchloss ? 'object-cover object-center' : 'object-cover'}`}
                  />
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 p-3 rounded-full">
                    <IconComponent className="w-6 h-6 text-amber-600" />
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-foreground dark:text-white mb-3">
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
                  {/* Gallery for Schloss Hohenaschau */}
                  {attraction.isSchloss && attraction.gallery && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-wellness-charcoal dark:text-white mb-3 text-lg">Gallery:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {attraction.gallery.map((galleryItem, idx) => {
                          const isVideo = galleryItem.endsWith('.mp4');
                          return (
                            <div 
                              key={idx} 
                              className="relative group overflow-hidden rounded-lg cursor-pointer"
                              onClick={() => onImageClick(galleryItem)}
                            >
                              {isVideo ? (
                                <video 
                                  className="w-full h-20 object-cover transition-all duration-300 group-hover:scale-105 brightness-90 group-hover:brightness-100"
                                  muted
                                  playsInline
                                >
                                  <source src={galleryItem} type="video/mp4" />
                                </video>
                              ) : (
                                <img 
                                  src={galleryItem} 
                                  alt={`${attraction.name} view ${idx + 1}`}
                                  className="w-full h-20 object-cover transition-all duration-300 group-hover:scale-105 brightness-90 group-hover:brightness-100"
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
                    </div>
                  )}
                  
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
  );
};

export default CulturalAttractions;
