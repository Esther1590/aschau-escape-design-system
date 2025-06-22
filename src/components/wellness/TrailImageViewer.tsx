
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';

interface TrailImageViewerProps {
  selectedImage: string | null;
  onClose: () => void;
}

const TrailImageViewer = ({ selectedImage, onClose }: TrailImageViewerProps) => {
  return (
    <Dialog open={!!selectedImage} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl p-2 bg-black/95 border-none">
        <DialogTitle className="sr-only">
          Trail Image Viewer
        </DialogTitle>
        <DialogDescription className="sr-only">
          Full size view of selected trail image
        </DialogDescription>
        <div className="relative flex items-center justify-center min-h-[60vh]">
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Trail view"
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TrailImageViewer;
