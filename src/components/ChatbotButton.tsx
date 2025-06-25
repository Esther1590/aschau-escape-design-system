
import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ChatInterface from './ChatInterface';

const ChatbotButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatClick = () => {
    console.log('Opening chatbot interface...');
    setIsChatOpen(true);
  };

  return (
    <>
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          onClick={handleChatClick}
          className="w-14 h-14 rounded-full bg-wellness-sage hover:bg-wellness-sage/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          size="icon"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </Button>
      </div>
      
      <ChatInterface 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
      />
    </>
  );
};

export default ChatbotButton;
