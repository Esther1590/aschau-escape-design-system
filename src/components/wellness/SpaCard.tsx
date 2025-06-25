
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/contexts/TranslationContext';

interface SpaCardProps {
  spa: {
    name: string;
    description: string;
    features: string[];
    icon: any;
    image?: string;
    gallery?: string[];
    hasVideo?: boolean;
    videoPath?: string;
  };
  onGalleryImageClick: (image: string, e: React.MouseEvent) => void;
  onVideoClick: (videoPath: string, e: React.MouseEvent) => void;
}

const SpaCard = ({ spa, onGalleryImageClick, onVideoClick }: SpaCardProps) => {
  const { t } = useTranslation();
  const IconComponent = spa.icon;

  return (
    <Card className="overflow-hidden shadow-xl border-0 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-gray-800">
      <div className="relative h-64 bg-gradient-to-r from-wellness-sage to-wellness-lightSage flex items-center justify-center">
        {spa.image ? (
          <img 
            src={spa.image} 
            alt={spa.name}
            className={`w-full h-full object-cover ${spa.name === 'Burghotel Aschau' ? 'object-[center_35%]' : ''}`}
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
          {spa.name === 'Kampenwandbahn Station' ? 'Reach alpine heights without the hike. ' : ''}{spa.description}
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
                  onClick={(e) => onGalleryImageClick(galleryImage, e)}
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
                  onClick={(e) => onVideoClick(spa.videoPath!, e)}
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

        {/* Gallery for Schloss Hohenaschau */}
        {spa.name === 'Schloss Hohenaschau' && spa.gallery && (
          <div className="mb-6">
            <h4 className="font-semibold text-wellness-charcoal dark:text-white mb-3 text-lg">Gallery:</h4>
            <div className="grid grid-cols-2 gap-2">
              {spa.gallery.map((galleryImage, idx) => (
                <div 
                  key={idx} 
                  className="relative group overflow-hidden rounded-lg cursor-pointer"
                  onClick={(e) => onGalleryImageClick(galleryImage, e)}
                >
                  <img 
                    src={galleryImage} 
                    alt={`${spa.name} view ${idx + 1}`}
                    className="w-full h-20 object-cover transition-all duration-300 group-hover:scale-105 brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        )}

        <Button className="w-full btn-wellness text-lg py-4">
          {spa.name === 'Kampenwandbahn Station' ? 'View Station Gallery' : spa.name === 'Schloss Hohenaschau' ? 'View Castle Gallery' : t('wellness.bookNow')}
        </Button>
      </CardContent>
    </Card>
  );
};

export default SpaCard;
