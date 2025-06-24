import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { Crown, Cable } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';
import { useState } from 'react';
import TrailImageViewer from './TrailImageViewer';

const SpaExperiences = () => {
  const { t } = useTranslation();
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const spas = [
    {
      name: 'Burghotel Aschau',
      description: 'A historic luxury hotel offering premium spa services with traditional Bavarian hospitality and modern wellness amenities.',
      features: [
        'Historic castle setting',
        'Premium spa treatments',
        'Traditional Bavarian wellness',
        'Luxury accommodations'
      ],
      icon: Crown,
      image: '/lovable-uploads/a6359873-ec9a-46a0-9b93-282b17b3e212.png'
    },
    {
      name: 'Kampenwandbahn Station',
      description: 'Experience breathtaking panoramic views from the Kampenwand cable car station, offering a unique wellness perspective from above the clouds.',
      features: [
        'Panoramic mountain views',
        'Cable car experience',
        'Alpine fresh air',
        'Photography opportunities',
        'Mountain hiking access',
        'Scenic wellness spots'
      ],
      icon: Cable,
      image: '/lovable-uploads/49af8508-04ae-4e4d-b719-df70603aa097.png',
      gallery: [
        '/lovable-uploads/4a4cdf52-cc7e-49a5-b473-0fe47892ffc8.png',
        '/lovable-uploads/49af8508-04ae-4e4d-b719-df70603aa097.png',
        '/lovable-uploads/79e4246e-60b4-4927-a39e-ad18e8e8f92c.png'
      ],
      hasVideo: true,
      videoPath: '/WhatsApp Video 2025-04-25 at 22.33.05.mp4'
    }
  ];

  const handleCardClick = (spa: any) => {
    if (spa.hasVideo) {
      setSelectedVideo(spa.videoPath);
    }
  };

  const handleGalleryImageClick = (image: string, e: React.MouseEvent) => {
    console.log('Gallery image clicked:', image);
    e.preventDefault();
    e.stopPropagation();
    setSelectedImage(image);
  };

  const handleVideoClick = (videoPath: string, e: React.MouseEvent) => {
    console.log('Video thumbnail clicked:', videoPath);
    e.preventDefault();
    e.stopPropagation();
    setSelectedVideo(videoPath);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  const closeImageViewer = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-wellness-charcoal dark:text-white mb-6">
            {t('wellness.experiences.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('wellness.experiences.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {spas.map((spa, index) => {
            const IconComponent = spa.icon;
            return (
              <Card 
                key={index} 
                className="overflow-hidden shadow-xl border-0 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-gray-800"
              >
                <div className="relative h-64 bg-gradient-to-r from-wellness-sage to-wellness-lightSage flex items-center justify-center">
                  {spa.image ? (
                    <img 
                      src={spa.image} 
                      alt={spa.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <IconComponent className="w-12 h-12 text-white" />
                  )}
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-wellness-charcoal dark:text-white mb-3">
                    {spa.name}
                  </CardTitle>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                    {spa.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="mb-6">
                    <h4 className="font-semibold text-wellness-charcoal dark:text-white mb-3 text-lg">{t('wellness.features')}:</h4>
                    <ul className="space-y-2">
                      {spa.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                          <div className="w-2 h-2 bg-wellness-sage rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Gallery for Kampenwandbahn with Video */}
                  {spa.name === 'Kampenwandbahn Station' && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-wellness-charcoal dark:text-white mb-3 text-lg">Gallery:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {/* Gallery Images */}
                        {spa.gallery && spa.gallery.map((galleryImage, idx) => (
                          <div 
                            key={idx} 
                            className="relative group overflow-hidden rounded-lg cursor-pointer"
                            onClick={(e) => handleGalleryImageClick(galleryImage, e)}
                          >
                            <img 
                              src={galleryImage} 
                              alt={`${spa.name} view ${idx + 1}`}
                              className="w-full h-20 object-cover transition-all duration-300 group-hover:scale-105 brightness-90 group-hover:brightness-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                        ))}
                        
                        {/* Video Thumbnail */}
                        {spa.hasVideo && (
                          <div 
                            className="relative group overflow-hidden rounded-lg cursor-pointer"
                            onClick={(e) => handleVideoClick(spa.videoPath, e)}
                          >
                            <div className="w-full h-20 bg-gradient-to-r from-wellness-sage to-wellness-lightSage flex items-center justify-center">
                              <div className="w-8 h-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                                <div className="w-0 h-0 border-l-[8px] border-l-black border-y-[6px] border-y-transparent ml-0.5"></div>
                              </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  <Button className="w-full btn-wellness text-lg py-4">
                    {spa.name === 'Kampenwandbahn Station' ? 'View Station Gallery' : t('wellness.bookNow')}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Video Dialog */}
        <Dialog open={!!selectedVideo} onOpenChange={closeVideo}>
          <DialogContent className="max-w-4xl p-2 bg-black/95 border-none">
            <DialogTitle className="sr-only">
              Cable Car Experience Video
            </DialogTitle>
            <DialogDescription className="sr-only">
              Video player for cable car experience
            </DialogDescription>
            <div className="relative flex items-center justify-center min-h-[60vh]">
              {selectedVideo && (
                <video 
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                  controls
                  autoPlay
                  preload="metadata"
                >
                  <source src={selectedVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </DialogContent>
        </Dialog>

        {/* Image Viewer for Gallery Images */}
        <TrailImageViewer
          selectedImage={selectedImage}
          images={spas.find(spa => spa.gallery)?.gallery || []}
          onClose={closeImageViewer}
        />
      </div>
    </section>
  );
};

export default SpaExperiences;
