
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import NavigationCards from '@/components/NavigationCards';
import SeasonalActivities from '@/components/SeasonalActivities';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import Footer from '@/components/Footer';
import StickyBookingButton from '@/components/StickyBookingButton';
import ChatbotButton from '@/components/ChatbotButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <NavigationCards />
      <SeasonalActivities />
      <TestimonialsCarousel />
      <Footer />
      <StickyBookingButton />
      <ChatbotButton />
    </div>
  );
};

export default Index;
