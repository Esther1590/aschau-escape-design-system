
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';

const StickyBookingButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate('/plan-trip');
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-20'}`}>
      <Button 
        className="btn-wellness shadow-2xl text-lg px-8 py-4 rounded-full"
        onClick={handleBookingClick}
        aria-label="Book your wellness stay now"
      >
        <Calendar className="w-5 h-5 mr-2" />
        {t('stickyButton.bookNow')}
      </Button>
    </div>
  );
};

export default StickyBookingButton;
