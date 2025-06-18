
import { Card } from '@/components/ui/card';
import { useTranslation } from '@/contexts/TranslationContext';
import { Link } from 'react-router-dom';

const NavigationCards = () => {
  const { t } = useTranslation();

  const cards = [
    {
      id: 'wellness',
      title: t('cards.wellness.title'),
      description: t('cards.wellness.description'),
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'bg-wellness-lightSage',
      route: '/wellness'
    },
    {
      id: 'culture',
      title: t('cards.culture.title'),
      description: t('cards.culture.description'),
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'bg-wellness-cream',
      route: '/culture'
    },
    {
      id: 'plan',
      title: t('cards.plan.title'),
      description: t('cards.plan.description'),
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'bg-wellness-lightSage',
      route: '/plan'
    },
    {
      id: 'booking',
      title: t('cards.booking.title'),
      description: t('cards.booking.description'),
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'bg-wellness-cream',
      route: '#'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-wellness-charcoal dark:text-white mb-6">
            {t('cards.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('cards.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <Link 
              key={card.id} 
              to={card.route}
              className="block"
            >
              <Card 
                className="card-hover cursor-pointer group overflow-hidden border-0 shadow-lg dark:bg-gray-800 h-full"
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
                  <h3 className="text-2xl font-bold text-wellness-charcoal dark:text-white mb-3 group-hover:text-wellness-sage dark:group-hover:text-wellness-lightSage transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                    {card.description}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NavigationCards;
