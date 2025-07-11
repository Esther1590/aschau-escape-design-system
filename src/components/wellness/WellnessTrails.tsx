import { useTranslation } from '@/contexts/TranslationContext';
import { useState } from 'react';
import TrailCard from './TrailCard';
import TrailImageViewer from './TrailImageViewer';

const WellnessTrails = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    console.log('Opening image viewer with:', image);
    setSelectedImage(image);
  };

  const handleCloseViewer = () => {
    console.log('Closing image viewer');
    setSelectedImage(null);
  };

  const trails = [
    {
      name: 'Bankerlweg',
      description: 'Designed for comfort and calm, this scenic walking route features frequent benches and gentle terrain, ideal for reflective strolls.',
      distance: '3.2 km',
      duration: '45 min',
      difficulty: 'Easy',
      images: [
        '/lovable-uploads/f8eb4bf3-1892-4f49-88e9-79e4e3884c13.png',
        '/lovable-uploads/a72129e4-aa8f-4130-95b3-2906ef2d5fc7.png',
        '/lovable-uploads/a99c7156-68f2-4e3e-9f1f-18fd4a3c7f68.png',
        '/lovable-uploads/de107ea7-336e-4d25-a4a5-26dfe2f8e32b.png',
        '/lovable-uploads/4cea2c23-76e4-4862-905b-6625a78a0612.png',
        '/lovable-uploads/4ea7854d-3134-4de1-8df6-44278fd8826d.png',
        '/lovable-uploads/29babfc4-8f66-47f3-8a37-4cbb61c67856.png',
        '/WhatsApp Video 2025-04-25 at 22.33.10.mp4'
      ],
      highlights: [
        'Forest bathing experience',
        'Panoramic mountain views',
        'Meditation spots along the way',
        'Fresh mountain air',
        'Exercise stations along the trail',
        'Information boards about local nature'
      ]
    }
  ];

  return (
    <>
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-wellness-charcoal dark:text-white mb-6">
              Wellness Trails & Nature Walks
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover therapeutic hiking trails that combine the healing power of nature with mindful movement and meditation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {trails.map((trail, index) => (
              <TrailCard 
                key={index} 
                trail={trail} 
                onImageClick={handleImageClick}
              />
            ))}
          </div>
        </div>
      </section>

      <TrailImageViewer 
        selectedImage={selectedImage}
        images={trails[0]?.images || []}
        onClose={handleCloseViewer}
      />
    </>
  );
};

export default WellnessTrails;
