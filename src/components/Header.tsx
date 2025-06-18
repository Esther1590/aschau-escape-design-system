
import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/contexts/TranslationContext';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useTranslation();
  const location = useLocation();

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'DE' : 'EN');
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/4fe3bebb-97e4-43da-acca-7b6e3ae2b103.png" 
              alt="Burg Hotel Aschau" 
              className="h-12 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-wellness-charcoal dark:text-white">
                Welcome to Aschau im Chiemgau
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Wellness & Culture
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors hover:text-wellness-sage ${
                isActive('/') ? 'text-wellness-sage' : 'text-gray-700 dark:text-gray-200'
              }`}
            >
              {language === 'EN' ? 'Home' : 'Startseite'}
            </Link>
            <Link 
              to="/wellness" 
              className={`font-medium transition-colors hover:text-wellness-sage ${
                isActive('/wellness') ? 'text-wellness-sage' : 'text-gray-700 dark:text-gray-200'
              }`}
            >
              {t('nav.wellness')}
            </Link>
            <Link 
              to="/culture" 
              className={`font-medium transition-colors hover:text-wellness-sage ${
                isActive('/culture') ? 'text-wellness-sage' : 'text-gray-700 dark:text-gray-200'
              }`}
            >
              {t('nav.culture')}
            </Link>
            <Link 
              to="/plan" 
              className={`font-medium transition-colors hover:text-wellness-sage ${
                isActive('/plan') ? 'text-wellness-sage' : 'text-gray-700 dark:text-gray-200'
              }`}
            >
              {t('nav.planTrip')}
            </Link>
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-gray-700 dark:text-gray-200 hover:text-wellness-sage"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{language}</span>
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700 pt-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`font-medium transition-colors hover:text-wellness-sage ${
                  isActive('/') ? 'text-wellness-sage' : 'text-gray-700 dark:text-gray-200'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {language === 'EN' ? 'Home' : 'Startseite'}
              </Link>
              <Link 
                to="/wellness" 
                className={`font-medium transition-colors hover:text-wellness-sage ${
                  isActive('/wellness') ? 'text-wellness-sage' : 'text-gray-700 dark:text-gray-200'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.wellness')}
              </Link>
              <Link 
                to="/culture" 
                className={`font-medium transition-colors hover:text-wellness-sage ${
                  isActive('/culture') ? 'text-wellness-sage' : 'text-gray-700 dark:text-gray-200'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.culture')}
              </Link>
              <Link 
                to="/plan" 
                className={`font-medium transition-colors hover:text-wellness-sage ${
                  isActive('/plan') ? 'text-wellness-sage' : 'text-gray-700 dark:text-gray-200'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.planTrip')}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
