
import { ArrowLeft } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/contexts/TranslationContext';

const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { language } = useTranslation();

  // Don't show back button on home page
  if (location.pathname === '/') {
    return null;
  }

  const handleBackClick = () => {
    console.log('Back button clicked, navigating back');
    navigate(-1);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleBackClick}
      className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-wellness-sage"
    >
      <ArrowLeft className="w-4 h-4" />
      <span className="text-sm font-medium">
        {language === 'EN' ? 'Back' : 'Zurück'}
      </span>
    </Button>
  );
};

export default BackButton;
