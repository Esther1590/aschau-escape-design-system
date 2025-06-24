
import Header from '@/components/Header';
import PlanTripHero from '@/components/plan-trip/PlanTripHero';
import PlanTripMapSection from '@/components/plan-trip/PlanTripMapSection';
import PlanTripForm from '@/components/plan-trip/PlanTripForm';
import PlanTripTips from '@/components/plan-trip/PlanTripTips';
import PlanTripOffers from '@/components/plan-trip/PlanTripOffers';

const PlanTrip = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-wellness-sage/10 to-white dark:from-wellness-sage/5 dark:to-gray-900">
      <Header />
      <PlanTripHero />
      <PlanTripForm />
      <PlanTripMapSection />
      <PlanTripTips />
      <PlanTripOffers />
    </div>
  );
};

export default PlanTrip;
