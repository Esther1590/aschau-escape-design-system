
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, TrendingUp } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';

const WellnessTrails = () => {
  const { t } = useTranslation();

  const trails = [
    {
      name: 'Bankerlweg',
      description: 'A scenic wellness trail through the beautiful Chiemgau landscape, perfect for mindful walking and forest bathing.',
      distance: '3.2 km',
      duration: '45 min',
      difficulty: 'Easy',
      images: [
        '/lovable-uploads/f89c33b5-93e8-42f4-8a6e-881f1b32c192.png',
        '/lovable-uploads/0ea358f3-d819-4044-b3ba-ff524260fa7a.png',
        '/lovable-uploads/a72129e4-aa8f-4130-95b3-2906ef2d5fc7.png',
        '/lovable-uploads/a99c7156-68f2-4e3e-9f1f-18fd4a3c7f68.png',
        '/lovable-uploads/de107ea7-336e-4d25-a4a5-26dfe2f8e32b.png'
      ],
      highlights: [
        'Forest bathing experience',
        'Panoramic mountain views',
        'Meditation spots along the way',
        'Fresh mountain air',
        'Exercise stations along the trail',
        'Information boards about local nature'
      ]
    },
    {
      name: 'Chiemgau Meditation Path',
      description: 'A tranquil path designed for meditation and mindfulness, winding through peaceful forests and meadows.',
      distance: '2.8 km',
      duration: '35 min',
      difficulty: 'Easy',
      images: ['https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      highlights: [
        'Guided meditation points',
        'Peaceful forest setting',
        'Wellness information boards',
        'Stress relief zones'
      ]
    },
    {
      name: 'Alpine Wellness Circuit',
      description: 'An invigorating trail combining gentle hiking with wellness stations for a complete mind-body experience.',
      distance: '5.1 km',
      duration: '1h 15min',
      difficulty: 'Moderate',
      images: ['https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      highlights: [
        'Exercise stations',
        'Breathwork platforms',
        'Mountain summit views',
        'Natural spring stops'
      ]
    }
  ];

  return (
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
            <Card key={index} className="overflow-hidden shadow-xl border-0 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-gray-800">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={trail.images[0]} 
                  alt={trail.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-wellness-sage text-white px-3 py-1 rounded-full text-sm font-medium">
                  {trail.difficulty}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-wellness-charcoal dark:text-white mb-3">
                  {trail.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {trail.description}
                </p>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{trail.distance}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{trail.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    <span>{trail.difficulty}</span>
                  </div>
                </div>

                {trail.images.length > 1 && (
                  <div className="mb-4">
                    <div className="grid grid-cols-4 gap-2">
                      {trail.images.slice(1).map((image, imgIndex) => (
                        <img 
                          key={imgIndex}
                          src={image} 
                          alt={`${trail.name} view ${imgIndex + 2}`}
                          className="w-full h-16 object-cover rounded-md"
                        />
                      ))}
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <h4 className="font-semibold text-wellness-charcoal dark:text-white mb-3">Trail Highlights:</h4>
                  <ul className="space-y-2">
                    {trail.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                        <div className="w-2 h-2 bg-wellness-sage rounded-full mr-3"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full btn-wellness">
                  Get Trail Map
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WellnessTrails;
