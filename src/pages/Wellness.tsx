
import Header from '@/components/Header';
import WellnessHero from '@/components/wellness/WellnessHero';
import SpaExperiences from '@/components/wellness/SpaExperiences';
import WellnessTrails from '@/components/wellness/WellnessTrails';
import RelaxationTips from '@/components/wellness/RelaxationTips';
import WellnessContact from '@/components/wellness/WellnessContact';
import ChatbotButton from '@/components/ChatbotButton';

const Wellness = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <WellnessHero />
      <SpaExperiences />
      <WellnessTrails />
      <RelaxationTips />
      <WellnessContact />
      <ChatbotButton />
    </div>
  );
};

export default Wellness;
