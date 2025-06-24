
import { Card } from '@/components/ui/card';

const TestimonialSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto max-w-4xl">
        <Card className="p-12 border-0 shadow-2xl bg-white/90 dark:bg-gray-800/90">
          <div className="text-center">
            <blockquote className="text-2xl md:text-3xl font-light text-gray-700 dark:text-gray-300 italic leading-relaxed mb-6">
              "The cultural experiences in Aschau are thoughtfully designed for every visitor. From the accessible castle tours to the intimate folk music evenings, every detail shows genuine care for guest comfort."
            </blockquote>
            <cite className="text-xl font-semibold text-wellness-charcoal dark:text-white">
              — Margaret & James Thompson, Frequent Visitors
            </cite>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default TestimonialSection;
