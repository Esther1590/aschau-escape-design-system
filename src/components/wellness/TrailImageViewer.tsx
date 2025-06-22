
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { useState } from 'react';

interface TrailImageViewerProps {
  selectedImage: string | null;
  onClose: () => void;
}

const TrailImageViewer = ({ selectedImage, onClose }: TrailImageViewerProps) => {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

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
    handleReset();
    onClose();
  };

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

        {/* Zoom Level Indicator */}
        <div className="absolute top-4 right-4 z-10 bg-black/50 text-white px-3 py-1 rounded text-sm">
          {Math.round(zoom * 100)}%
        </div>

        <div 
          className="relative flex items-center justify-center min-h-[60vh] overflow-hidden cursor-move"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Trail view"
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
            Drag to pan • Scroll to zoom
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default TrailImageViewer;
