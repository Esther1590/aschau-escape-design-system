
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';

interface VideoDialogProps {
  selectedVideo: string | null;
  onClose: () => void;
}

const VideoDialog = ({ selectedVideo, onClose }: VideoDialogProps) => {
  return (
    <Dialog open={!!selectedVideo} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-2 bg-black/95 border-none">
        <DialogTitle className="sr-only">
          Cable Car Experience Video
        </DialogTitle>
        <DialogDescription className="sr-only">
          Video player for cable car experience
        </DialogDescription>
        <div className="relative flex items-center justify-center min-h-[60vh]">
          {selectedVideo && (
            <video 
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              controls
              autoPlay
              preload="metadata"
            >
              <source src={selectedVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoDialog;
