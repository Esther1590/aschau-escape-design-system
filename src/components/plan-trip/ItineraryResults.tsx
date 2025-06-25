
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
        features: [
          t('planTrip.itinerary.features.spatreatments'),
          t('planTrip.itinerary.features.gentleYoga'),
          t('planTrip.itinerary.features.thermalBaths'),
          t('planTrip.itinerary.features.alpineCuisine')
        ],
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
        features: [
          t('planTrip.itinerary.features.castleTours'),
          t('planTrip.itinerary.features.museumVisits'),
          t('planTrip.itinerary.features.craftWorkshops'),
          t('planTrip.itinerary.features.bavarianDining')
        ],
        link: 'https://www.chiemsee-gast.de/'
      },
      {
        id: 'combined-package',
        title: t('planTrip.itinerary.combinedPackage.title'),
        description: t('planTrip.itinerary.combinedPackage.description'),
        price: t('planTrip.itinerary.combinedPackage.price'),
        type: 'both',
        duration: 10,
        icon: Calendar,
        features: [
          t('planTrip.itinerary.features.allWellnessActivities'),
          t('planTrip.itinerary.features.culturalTours'),
          t('planTrip.itinerary.features.extendedSpaAccess'),
          t('planTrip.itinerary.features.personalConcierge')
        ],
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

  const getTravelStyleLabel = () => {
    switch (userPreferences.travelStyle) {
      case 'wellness':
        return t('planTrip.itinerary.wellnessFocus');
      case 'culture':
        return t('planTrip.itinerary.culturalFocus');
      case 'both':
        return t('planTrip.itinerary.wellnessAndCulture');
      default:
        return userPreferences.travelStyle;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-wellness-charcoal dark:text-white mb-4">
            {t('planTrip.itinerary.title')}
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
              {guestCount} {guestCount === 1 ? t('planTrip.itinerary.guest') : t('planTrip.itinerary.guests')}
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              {getTravelStyleLabel()}
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          <p className="text-gray-600 dark:text-gray-300">
            {t('planTrip.itinerary.subtitle')}
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
                        {t('planTrip.itinerary.packageIncludes')}
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
                      {t('planTrip.itinerary.bookExperience')}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="bg-wellness-sage/5 p-6 rounded-lg border border-wellness-sage/20">
            <h3 className="text-lg font-semibold text-wellness-charcoal dark:text-white mb-2">
              {t('planTrip.itinerary.needHelp')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {t('planTrip.itinerary.helpDescription')}
            </p>
            <Button 
              variant="outline" 
              onClick={() => window.open('https://www.chiemsee-gast.de/', '_blank')}
              className="border-wellness-sage text-wellness-sage hover:bg-wellness-sage hover:text-white"
            >
              {t('planTrip.itinerary.contactTourism')}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ItineraryResults;
