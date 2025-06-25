
import { Card } from '@/components/ui/card';
import { Heart, Bus, Users, Clock } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';

const PracticalInfo = () => {
  const { t } = useTranslation();

  const practicalInfo = [
    {
      title: t('culture.practicalInfo.walkingPaths.title'),
      description: t('culture.practicalInfo.walkingPaths.description'),
      icon: Heart,
      details: ["Paved surfaces", "Regular rest stops", "Handrails where needed"]
    },
    {
      title: t('culture.practicalInfo.shuttle.title'),
      description: t('culture.practicalInfo.shuttle.description'),
      icon: Bus,
      details: ["Hourly service", "Wheelchair accessible", "Door-to-door pickup"]
    },
    {
      title: t('culture.practicalInfo.guidedTours.title'),
      description: t('culture.practicalInfo.guidedTours.description'),
      icon: Users,
      details: ["Small groups (max 8)", "Flexible timing", "Expert local guides"]
    },
    {
      title: t('culture.practicalInfo.hours.title'),
      description: t('culture.practicalInfo.hours.description'),
      icon: Clock,
      details: ["9 AM - 4 PM daily", "Extended summer hours", "Advance booking available"]
    }
  ];

  return (
    <section className="py-16 px-4 bg-white/50 dark:bg-gray-800/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-wellness-charcoal dark:text-white mb-6">
            {t('culture.practicalInfo.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('culture.practicalInfo.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {practicalInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800">
                <div className="text-center">
                  <div className="bg-amber-100 dark:bg-amber-900/30 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {info.description}
                  </p>
                  <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                    {info.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center justify-center">
                        <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PracticalInfo;
