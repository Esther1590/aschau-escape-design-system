import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { MapPin, Clock, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import TrailGallery from './TrailGallery';

interface Trail {
  name: string;
  description: string;
  distance: string;
  duration: string;
  difficulty: string;
  images: string[];
  highlights: string[];
}

interface TrailCardProps {
  trail: Trail;
  onImageClick: (image: string) => void;
}

const TrailCard = ({ trail, onImageClick }: TrailCardProps) => {
  return (
    <Card className="overflow-hidden shadow-xl border-0 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-gray-800">
      <div className="relative h-64 overflow-hidden group">
        <img 
          src={trail.images[0]} 
          alt={trail.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 cursor-pointer brightness-90 group-hover:brightness-100"
          onClick={() => onImageClick(trail.images[0])}
        />
        <div className="absolute top-4 right-4 bg-wellness-sage/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
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
          <div className="mb-6">
            <div className="grid grid-cols-4 gap-3">
              {trail.images.slice(1).map((image, imgIndex) => (
                <div key={imgIndex} className="relative group overflow-hidden rounded-lg">
                  <img 
                    src={image} 
                    alt={`${trail.name} view ${imgIndex + 2}`}
                    className="w-full h-20 object-cover cursor-pointer transition-all duration-500 group-hover:scale-110 brightness-90 group-hover:brightness-100 shadow-md"
                    onClick={() => onImageClick(image)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-wellness-sage/50 rounded-lg transition-all duration-300"></div>
                </div>
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

        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full btn-wellness shadow-lg hover:shadow-xl">
              View Trail Gallery
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold text-wellness-charcoal dark:text-white">
                {trail.name} - Trail Gallery
              </DialogTitle>
            </DialogHeader>
            <TrailGallery trail={trail} onImageClick={onImageClick} />
          </DialogContent>
        </Dialog>
      </div>
    </Card>
  );
};

export default TrailCard;
