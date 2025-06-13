
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const SeasonalActivities = () => {
  const activities = [
    {
      season: 'Spring',
      title: 'Alpine Awakening',
      description: 'Witness nature\'s renewal with guided mountain hikes, wildflower meditation, and outdoor yoga sessions.',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      highlights: ['Mountain Hiking', 'Meditation Walks', 'Outdoor Yoga']
    },
    {
      season: 'Summer',
      title: 'Peak Wellness',
      description: 'Enjoy crystal-clear lake swimming, forest bathing, and alpine herb workshops in perfect weather.',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      highlights: ['Lake Swimming', 'Forest Bathing', 'Herb Workshops']
    },
    {
      season: 'Autumn',
      title: 'Golden Serenity',
      description: 'Experience the magical colors of fall with harvest wellness retreats and cozy spa treatments.',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      highlights: ['Harvest Retreats', 'Spa Treatments', 'Photography Tours']
    },
    {
      season: 'Winter',
      title: 'Alpine Tranquility',
      description: 'Find peace in snowy landscapes with thermal baths, winter wellness programs, and cozy relaxation.',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      highlights: ['Thermal Baths', 'Winter Wellness', 'Indoor Relaxation']
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-wellness-charcoal mb-6">
            Seasonal Wellness Experiences
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Each season brings unique opportunities for renewal and connection with nature. 
            Discover what awaits you throughout the year in Aschau.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <Card 
              key={activity.season}
              className="card-hover overflow-hidden border-0 shadow-lg group"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={`${activity.season} activities in Aschau`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-wellness-sage text-white px-3 py-1 rounded-full font-medium text-sm">
                    {activity.season}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-wellness-charcoal mb-3 group-hover:text-wellness-sage transition-colors">
                  {activity.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {activity.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  {activity.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-wellness-sage rounded-full mr-2"></div>
                      {highlight}
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full border-wellness-sage text-wellness-sage hover:bg-wellness-sage hover:text-white"
                >
                  Explore {activity.season}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeasonalActivities;
