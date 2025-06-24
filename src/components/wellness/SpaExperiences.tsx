
import { useTranslation } from '@/contexts/TranslationContext';
import { useState } from 'react';
import TrailImageViewer from './TrailImageViewer';
import VideoDialog from './VideoDialog';
import SpaCard from './SpaCard';
import { spas } from '@/data/spaData';

const SpaExperiences = () => {
  const { t } = useTranslation();
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

  // Get all gallery items (images + video) for all spas
  const getGalleryItems = () => {
    const allItems: string[] = [];
    
    spas.forEach(spa => {
      if (spa.gallery) {
        allItems.push(...spa.gallery);
      }
      if (spa.hasVideo && spa.videoPath) {
        allItems.push(spa.videoPath);
      }
    });
    
    return allItems;
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

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {spas.map((spa, index) => (
            <SpaCard
              key={index}
              spa={spa}
              onGalleryImageClick={handleGalleryImageClick}
              onVideoClick={handleVideoClick}
            />
          ))}
        </div>

        {/* Video Dialog */}
        <VideoDialog selectedVideo={selectedVideo} onClose={closeVideo} />

        {/* Image Viewer for Gallery Images */}
        <TrailImageViewer
          selectedImage={selectedImage}
          images={getGalleryItems()}
          onClose={closeImageViewer}
        />
      </div>
    </section>
  );
};

export default SpaExperiences;
