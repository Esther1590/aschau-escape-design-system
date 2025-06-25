
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ChatbotButton = () => {
  const handleChatClick = () => {
    console.log('Chatbot clicked - integrate with your preferred chat service');
    // This is where you would integrate with your chatbot service
    // For example: open chat widget, navigate to chat page, etc.
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <Button
        onClick={handleChatClick}
        className="w-14 h-14 rounded-full bg-wellness-sage hover:bg-wellness-sage/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        size="icon"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </Button>
    </div>
  );
};

export default ChatbotButton;
