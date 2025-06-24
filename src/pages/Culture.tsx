
import { useState } from 'react';
import Header from '@/components/Header';
import TrailImageViewer from '@/components/wellness/TrailImageViewer';
import HeroSection from '@/components/culture/HeroSection';
import CulturalAttractions from '@/components/culture/CulturalAttractions';
import PracticalInfo from '@/components/culture/PracticalInfo';
import TestimonialSection from '@/components/culture/TestimonialSection';
import ContactFooter from '@/components/culture/ContactFooter';

const Culture = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    console.log('Image clicked:', imageSrc);
    setSelectedImage(imageSrc);
  };

  const handleCloseViewer = () => {
    console.log('Closing image viewer');
    setSelectedImage(null);
  };

  // Get gallery images for the image viewer
  const schlossGallery = [
    '/lovable-uploads/ad856991-3922-46d9-90a4-af3e6eb56779.png',
    '/lovable-uploads/53209aaa-0dba-4790-a6aa-64d5e3ad2c48.png',
    '/lovable-uploads/795a8580-c818-4526-b201-9d317cebb951.png',
    '/lovable-uploads/084081ca-c2e2-4431-82a0-3ee8f171543b.png',
    '/lovable-uploads/d9dc1eac-28e3-4a55-9cdd-d534ff12e097.png',
    '/20250417_123645_2.mp4'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <HeroSection />
      <CulturalAttractions onImageClick={handleImageClick} />
      <PracticalInfo />
      <TestimonialSection />
      <ContactFooter />

      {/* Image Viewer */}
      <TrailImageViewer
        selectedImage={selectedImage}
        images={schlossGallery}
        onClose={handleCloseViewer}
      />
    </div>
  );
};

export default Culture;
