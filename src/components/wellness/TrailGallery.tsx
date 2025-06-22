import { MapPin, Clock, TrendingUp } from 'lucide-react';

interface Trail {
  name: string;
  description: string;
  distance: string;
  duration: string;
  difficulty: string;
  images: string[];
  highlights: string[];
}

interface TrailGalleryProps {
  trail: Trail;
  onImageClick: (image: string) => void;
}

const TrailGallery = ({ trail, onImageClick }: TrailGalleryProps) => {
  const handleImageClick = (image: string) => {
    console.log('TrailGallery image clicked:', image);
    onImageClick(image);
  };

  // Filter out the first four images (indices 0, 1, 2, and 3)
  const filteredImages = trail.images.filter((image, index) => index !== 0 && index !== 1 && index !== 2 && index !== 3);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredImages.map((image, imgIndex) => (
          <div key={imgIndex} className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
            <img 
              src={image} 
              alt={`${trail.name} view ${imgIndex + 1}`}
              className="w-full h-64 object-cover cursor-pointer transition-all duration-700 group-hover:scale-105 brightness-95 group-hover:brightness-100"
              onClick={() => handleImageClick(image)}
            />
            <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-sm font-medium bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                View {imgIndex + 1} of {filteredImages.length}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 p-6 bg-gradient-to-r from-wellness-lightSage/20 to-wellness-sage/10 dark:from-gray-800 dark:to-gray-700 rounded-xl border border-wellness-sage/20">
        <h4 className="font-bold text-xl text-wellness-charcoal dark:text-white mb-3">About this trail:</h4>
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{trail.description}</p>
        <div className="flex flex-wrap gap-6 text-sm">
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-wellness-sage" />
            <strong>Distance:</strong> {trail.distance}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-wellness-sage" />
            <strong>Duration:</strong> {trail.duration}
          </span>
          <span className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-wellness-sage" />
            <strong>Difficulty:</strong> {trail.difficulty}
          </span>
        </div>
      </div>
    </>
  );
};

export default TrailGallery;
