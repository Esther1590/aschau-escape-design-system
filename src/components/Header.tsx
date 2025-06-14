
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/contexts/TranslationContext';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useTranslation();
  const location = useLocation();

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'DE' : 'EN');
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-wellness-sage rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-wellness-charcoal">Aschau</h1>
              <p className="text-sm text-gray-600">Wellness Tourism</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/wellness" 
              className="text-wellness-charcoal hover:text-wellness-sage transition-colors font-medium text-lg"
            >
              {t('nav.wellness')}
            </Link>
            <Link 
              to="/culture" 
              className="text-wellness-charcoal hover:text-wellness-sage transition-colors font-medium text-lg"
            >
              {t('nav.culture')}
            </Link>
            <Link 
              to="/plan" 
              className="text-wellness-charcoal hover:text-wellness-sage transition-colors font-medium text-lg"
            >
              {t('nav.planTrip')}
            </Link>
            <a href="#booking" className="text-wellness-charcoal hover:text-wellness-sage transition-colors font-medium text-lg">
              {t('nav.booking')}
            </a>
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button 
              onClick={toggleLanguage}
              variant="outline"
              className="hidden sm:flex border-wellness-sage text-wellness-sage hover:bg-wellness-sage hover:text-white"
            >
              {language}
            </Button>
            
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              variant="ghost"
              size="icon"
              className="md:hidden text-wellness-charcoal"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/wellness" 
                className="text-wellness-charcoal hover:text-wellness-sage transition-colors font-medium text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.wellness')}
              </Link>
              <Link 
                to="/culture" 
                className="text-wellness-charcoal hover:text-wellness-sage transition-colors font-medium text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.culture')}
              </Link>
              <Link 
                to="/plan" 
                className="text-wellness-charcoal hover:text-wellness-sage transition-colors font-medium text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.planTrip')}
              </Link>
              <a href="#booking" className="text-wellness-charcoal hover:text-wellness-sage transition-colors font-medium text-lg">
                {t('nav.booking')}
              </a>
              <Button 
                onClick={toggleLanguage}
                variant="outline"
                className="self-start border-wellness-sage text-wellness-sage hover:bg-wellness-sage hover:text-white"
              >
                {language}
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
