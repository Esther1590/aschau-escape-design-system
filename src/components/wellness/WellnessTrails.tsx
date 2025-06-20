
import { useTranslation } from '@/contexts/TranslationContext';
import { useState } from 'react';
import TrailCard from './TrailCard';
import TrailImageViewer from './TrailImageViewer';

const WellnessTrails = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const trails = [
    {
      name: 'Bankerlweg',
      description: 'A scenic wellness trail through the beautiful Chiemgau landscape, perfect for mindful walking and forest bathing.',
      distance: '3.2 km',
      duration: '45 min',
      difficulty: 'Easy',
      images: [
        '/lovable-uploads/3e728932-0d57-4b50-a4b6-4a8946d51c0b.png',
        '/lovable-uploads/0ea358f3-d819-4044-b3ba-ff524260fa7a.png',
        '/lovable-uploads/a72129e4-aa8f-4130-95b3-2906ef2d5fc7.png',
        '/lovable-uploads/a99c7156-68f2-4e3e-9f1f-18fd4a3c7f68.png',
        '/lovable-uploads/de107ea7-336e-4d25-a4a5-26dfe2f8e32b.png',
        '/lovable-uploads/4cea2c23-76e4-4862-905b-6625a78a0612.png',
        '/lovable-uploads/4ea7854d-3134-4de1-8df6-44278fd8826d.png'
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
                onImageClick={setSelectedImage}
              />
            ))}
          </div>
        </div>
      </section>

      <TrailImageViewer 
        selectedImage={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
};

export default WellnessTrails;
