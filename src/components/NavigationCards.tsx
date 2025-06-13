
import { Card } from '@/components/ui/card';

const NavigationCards = () => {
  const cards = [
    {
      id: 'wellness',
      title: 'Wellness',
      description: 'Rejuvenate your body and mind with our premium spa treatments, thermal baths, and mindfulness experiences.',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'bg-wellness-lightSage'
    },
    {
      id: 'culture',
      title: 'Culture',
      description: 'Immerse yourself in Bavarian traditions, local crafts, and the rich heritage of the Alpine region.',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'bg-wellness-cream'
    },
    {
      id: 'plan',
      title: 'Plan Your Trip',
      description: 'Customize your perfect getaway with our expert recommendations and personalized itineraries.',
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'bg-wellness-lightSage'
    },
    {
      id: 'booking',
      title: 'Booking',
      description: 'Secure your stay at our carefully selected accommodations and wellness centers.',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'bg-wellness-cream'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-wellness-charcoal mb-6">
            Discover Your Perfect Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From rejuvenating wellness treatments to cultural discoveries, 
            we offer everything you need for an unforgettable Alpine retreat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <Card 
              key={card.id} 
              className="card-hover cursor-pointer group overflow-hidden border-0 shadow-lg"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 ${card.color} bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300`}></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-wellness-charcoal mb-3 group-hover:text-wellness-sage transition-colors">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {card.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NavigationCards;
