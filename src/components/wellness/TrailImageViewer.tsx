
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ZoomIn, ZoomOut, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface TrailImageViewerProps {
  selectedImage: string | null;
  images: string[];
  onClose: () => void;
}

const TrailImageViewer = ({ selectedImage, images, onClose }: TrailImageViewerProps) => {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    console.log('TrailImageViewer selectedImage changed:', selectedImage);
    if (selectedImage && images.length > 0) {
      const index = images.findIndex(img => img === selectedImage);
      setCurrentImageIndex(index !== -1 ? index : 0);
    }
  }, [selectedImage, images]);

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.25, 0.5));
  };

  const handleReset = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handlePreviousImage = () => {
    if (images.length > 1) {
      setCurrentImageIndex(prev => prev === 0 ? images.length - 1 : prev - 1);
      handleReset();
    }
  };

  const handleNextImage = () => {
    if (images.length > 1) {
      setCurrentImageIndex(prev => prev === images.length - 1 ? 0 : prev + 1);
      handleReset();
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleClose = () => {
    console.log('TrailImageViewer handleClose called');
    handleReset();
    onClose();
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      handlePreviousImage();
    } else if (e.key === 'ArrowRight') {
      handleNextImage();
    } else if (e.key === 'Escape') {
      handleClose();
    }
  };

  useEffect(() => {
    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedImage, currentImageIndex]);

  console.log('TrailImageViewer render, selectedImage:', selectedImage, 'open:', !!selectedImage);

  const currentImage = images[currentImageIndex];

  return (
    <Dialog open={!!selectedImage} onOpenChange={handleClose}>
      <DialogContent className="max-w-7xl p-2 bg-black/95 border-none">
        <DialogTitle className="sr-only">
          Trail Image Viewer
        </DialogTitle>
        <DialogDescription className="sr-only">
          Full size view of selected trail image with zoom functionality
        </DialogDescription>
        
        {/* Zoom Controls */}
        <div className="absolute top-4 left-4 z-10 flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleZoomIn}
            className="bg-black/50 border-white/20 text-white hover:bg-black/70"
          >
            <ZoomIn className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleZoomOut}
            className="bg-black/50 border-white/20 text-white hover:bg-black/70"
          >
            <ZoomOut className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleReset}
            className="bg-black/50 border-white/20 text-white hover:bg-black/70"
          >
            <RotateCcw className="w-4 h-4" />
          </Button>
        </div>

        {/* Navigation Controls */}
        {images.length > 1 && (
          <>
            <Button
              variant="outline"
              size="sm"
              onClick={handlePreviousImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 border-white/20 text-white hover:bg-black/70"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 border-white/20 text-white hover:bg-black/70"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute top-4 right-4 z-10 bg-black/50 text-white px-3 py-1 rounded text-sm">
            {currentImageIndex + 1} / {images.length}
          </div>
        )}

        {/* Zoom Level Indicator */}
        <div className="absolute top-12 right-4 z-10 bg-black/50 text-white px-3 py-1 rounded text-sm">
          {Math.round(zoom * 100)}%
        </div>

        <div 
          className="relative flex items-center justify-center min-h-[60vh] overflow-hidden cursor-move"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {currentImage && (
            <img 
              src={currentImage} 
              alt={`Trail view ${currentImageIndex + 1}`}
              className="max-h-[85vh] object-contain rounded-lg shadow-2xl transition-transform duration-200 select-none"
              style={{
                transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
                cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
              }}
              draggable={false}
            />
          )}
        </div>

        {zoom > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded text-sm">
            Drag to pan • Arrow keys to navigate • Scroll to zoom
          </div>
        )}

        {images.length > 1 && zoom === 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded text-sm">
            Use arrow keys or buttons to navigate • Click and drag to zoom
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default TrailImageViewer;
