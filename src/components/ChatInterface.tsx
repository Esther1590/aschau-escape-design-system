
import React, { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, Bot, User } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface ChatInterfaceProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatInterface = ({ isOpen, onClose }: ChatInterfaceProps) => {
  const { t } = useTranslation();
  
  const [messages, setMessages] = useState<Message[]>(() => [
    {
      id: '1',
      text: t('chat.welcomeMessage'),
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  // Update welcome message when language changes
  React.useEffect(() => {
    setMessages(prev => {
      const updatedMessages = [...prev];
      if (updatedMessages.length > 0 && updatedMessages[0].id === '1') {
        updatedMessages[0] = {
          ...updatedMessages[0],
          text: t('chat.welcomeMessage')
        };
      }
      return updatedMessages;
    });
  }, [t]);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Simulate AI response after a short delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: t('chat.demoResponse'),
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Bot className="w-5 h-5 text-wellness-sage" />
            {t('chat.title')}
          </SheetTitle>
        </SheetHeader>
        
        <div className="flex flex-col h-full mt-6">
          <ScrollArea className="flex-1 pr-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {message.sender === 'ai' && (
                    <div className="w-8 h-8 rounded-full bg-wellness-sage/10 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-wellness-sage" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-wellness-sage text-white'
                        : 'bg-gray-100 dark:bg-gray-800'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <span className="text-xs opacity-70 mt-1 block">
                      {message.timestamp.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </span>
                  </div>
                  {message.sender === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-wellness-sage text-white flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>
          
          <div className="border-t pt-4 mt-4">
            <div className="flex gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={t('chat.placeholder')}
                className="flex-1"
              />
              <Button
                onClick={handleSendMessage}
                className="bg-wellness-sage hover:bg-wellness-sage/90"
                size="icon"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ChatInterface;
