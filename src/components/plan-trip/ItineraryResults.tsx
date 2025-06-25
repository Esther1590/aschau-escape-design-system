
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Users, Sparkles } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';

interface ItineraryResultsProps {
  isOpen: boolean;
  onClose: () => void;
  userPreferences: {
    startDate?: Date;
    endDate?: Date;
    guests: string;
    travelStyle: string;
  };
}

const ItineraryResults = ({ isOpen, onClose, userPreferences }: ItineraryResultsProps) => {
  const { t } = useTranslation();

  // Filter offers based on user preferences
  const getFilteredOffers = () => {
    const allOffers = [
      {
        id: 'wellness-retreat',
        title: t('planTrip.offers.wellness.title'),
        description: t('planTrip.offers.wellness.description'),
        price: t('planTrip.offers.wellness.price'),
        type: 'wellness',
        duration: 7,
        icon: Sparkles,
        features: ['Spa treatments', 'Gentle yoga', 'Thermal baths', 'Alpine cuisine'],
        link: 'https://www.chiemsee-gast.de/unterkuenfte/detail/113'
      },
      {
        id: 'cultural-experience',
        title: t('planTrip.offers.cultural.title'),
        description: t('planTrip.offers.cultural.description'),
        price: t('planTrip.offers.cultural.price'),
        type: 'culture',
        duration: 5,
        icon: MapPin,
        features: ['Castle tours', 'Museum visits', 'Craft workshops', 'Bavarian dining'],
        link: 'https://www.chiemsee-gast.de/'
      },
      {
        id: 'combined-package',
        title: '10-Day Complete Aschau Experience',
        description: 'The perfect blend of wellness and culture with extended stay benefits and senior-friendly amenities.',
        price: 'From €1,450 per person',
        type: 'both',
        duration: 10,
        icon: Calendar,
        features: ['All wellness activities', 'Cultural tours', 'Extended spa access', 'Personal concierge'],
        link: 'https://www.burghotel-aschau.de/'
      }
    ];

    return allOffers.filter(offer => {
      if (userPreferences.travelStyle === 'both') return true;
      return offer.type === userPreferences.travelStyle || offer.type === 'both';
    });
  };

  const filteredOffers = getFilteredOffers();
  const guestCount = parseInt(userPreferences.guests) || 1;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-wellness-charcoal dark:text-white mb-4">
            Your Personalized Aschau Itinerary
          </DialogTitle>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300 mb-6">
            {userPreferences.startDate && userPreferences.endDate && (
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {userPreferences.startDate.toLocaleDateString()} - {userPreferences.endDate.toLocaleDateString()}
              </div>
            )}
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              {guestCount} {guestCount === 1 ? 'Guest' : 'Guests'}
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              {userPreferences.travelStyle === 'wellness' ? 'Wellness Focus' : 
               userPreferences.travelStyle === 'culture' ? 'Cultural Focus' : 'Wellness & Culture'}
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          <p className="text-gray-600 dark:text-gray-300">
            Based on your preferences, here are the perfect packages for your Aschau experience:
          </p>

          <div className="grid gap-6">
            {filteredOffers.map((offer) => {
              const IconComponent = offer.icon;
              return (
                <Card key={offer.id} className="border-2 hover:border-wellness-sage transition-colors">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-wellness-sage/10 rounded-lg">
                          <IconComponent className="w-6 h-6 text-wellness-sage" />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-wellness-charcoal dark:text-white">
                            {offer.title}
                          </CardTitle>
                          <p className="text-wellness-sage font-semibold text-lg mt-1">
                            {offer.price}
                          </p>
                        </div>
                      </div>
                      <span className="bg-wellness-sage/20 text-wellness-sage px-3 py-1 rounded-full text-sm font-medium">
                        {offer.duration} days
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {offer.description}
                    </p>
                    <div className="mb-6">
                      <h4 className="font-semibold text-wellness-charcoal dark:text-white mb-2">
                        Package Includes:
                      </h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {offer.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                            <div className="w-2 h-2 bg-wellness-sage rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button 
                      className="w-full bg-wellness-sage hover:bg-wellness-sage/90 text-white"
                      onClick={() => window.open(offer.link, '_blank')}
                    >
                      Book This Experience
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="bg-wellness-sage/5 p-6 rounded-lg border border-wellness-sage/20">
            <h3 className="text-lg font-semibold text-wellness-charcoal dark:text-white mb-2">
              Need Help Planning?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our local experts are here to help you customize your perfect Aschau experience.
            </p>
            <Button 
              variant="outline" 
              onClick={() => window.open('https://www.chiemsee-gast.de/', '_blank')}
              className="border-wellness-sage text-wellness-sage hover:bg-wellness-sage hover:text-white"
            >
              Contact Local Tourism Office
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ItineraryResults;
