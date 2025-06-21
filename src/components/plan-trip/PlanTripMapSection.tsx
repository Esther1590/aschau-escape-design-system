
import Map from '@/components/Map';

const PlanTripMapSection = () => {
  return (
    <section className="py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-wellness-charcoal dark:text-white mb-4">
            Explore Aschau
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Discover wellness spots and cultural sites on our interactive map
          </p>
        </div>
        <Map />
      </div>
    </section>
  );
};

export default PlanTripMapSection;
