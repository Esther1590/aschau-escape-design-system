
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { CalendarIcon, MapPin, Train, CloudSun, Gift, Users, Compass } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import Map from '@/components/Map';

const PlanTrip = () => {
  const { t } = useTranslation();
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [guests, setGuests] = useState<string>('');
  const [travelStyle, setTravelStyle] = useState<string>('');

  const handleGenerateItinerary = () => {
    console.log('Generating itinerary...', { startDate, endDate, guests, travelStyle });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-wellness-sage/10 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-wellness-charcoal mb-6">
            {t('planTrip.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            {t('planTrip.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-wellness-charcoal mb-4">
              Explore Aschau
            </h2>
            <p className="text-lg text-gray-600">
              Discover wellness spots and cultural sites on our interactive map
            </p>
          </div>
          <Map />
        </div>
      </section>

      {/* Planning Form */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 shadow-xl border-0">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl text-wellness-charcoal mb-4">
                {t('planTrip.form.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Start Date */}
                <div className="space-y-3">
                  <Label className="text-lg font-semibold text-wellness-charcoal">
                    {t('planTrip.form.startDate')}
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal text-lg py-6",
                          !startDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-4 h-5 w-5" />
                        {startDate ? format(startDate, "PPP") : t('planTrip.form.selectDate')}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={startDate}
                        onSelect={setStartDate}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* End Date */}
                <div className="space-y-3">
                  <Label className="text-lg font-semibold text-wellness-charcoal">
                    {t('planTrip.form.endDate')}
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal text-lg py-6",
                          !endDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-4 h-5 w-5" />
                        {endDate ? format(endDate, "PPP") : t('planTrip.form.selectDate')}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={endDate}
                        onSelect={setEndDate}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Number of Guests */}
                <div className="space-y-3">
                  <Label className="text-lg font-semibold text-wellness-charcoal">
                    {t('planTrip.form.guests')}
                  </Label>
                  <Select value={guests} onValueChange={setGuests}>
                    <SelectTrigger className="text-lg py-6">
                      <SelectValue placeholder={t('planTrip.form.selectGuests')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 {t('planTrip.form.guest')}</SelectItem>
                      <SelectItem value="2">2 {t('planTrip.form.guests')}</SelectItem>
                      <SelectItem value="3">3 {t('planTrip.form.guests')}</SelectItem>
                      <SelectItem value="4">4 {t('planTrip.form.guests')}</SelectItem>
                      <SelectItem value="5+">5+ {t('planTrip.form.guests')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Travel Style */}
                <div className="space-y-3">
                  <Label className="text-lg font-semibold text-wellness-charcoal">
                    {t('planTrip.form.travelStyle')}
                  </Label>
                  <Select value={travelStyle} onValueChange={setTravelStyle}>
                    <SelectTrigger className="text-lg py-6">
                      <SelectValue placeholder={t('planTrip.form.selectStyle')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wellness">{t('planTrip.form.wellness')}</SelectItem>
                      <SelectItem value="culture">{t('planTrip.form.culture')}</SelectItem>
                      <SelectItem value="both">{t('planTrip.form.both')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="text-center pt-6">
                <Button 
                  onClick={handleGenerateItinerary}
                  className="bg-wellness-sage hover:bg-wellness-sage/90 text-white text-xl px-12 py-6"
                  size="lg"
                >
                  <Compass className="mr-3 h-6 w-6" />
                  {t('planTrip.form.generateItinerary')}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-16 px-4 bg-wellness-sage/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-wellness-charcoal mb-6">
              {t('planTrip.tips.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 border-0 shadow-lg">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-wellness-sage mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-wellness-charcoal mb-4">
                  {t('planTrip.tips.trails.title')}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t('planTrip.tips.trails.description')}
                </p>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <div className="text-center">
                <Train className="w-12 h-12 text-wellness-sage mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-wellness-charcoal mb-4">
                  {t('planTrip.tips.transport.title')}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t('planTrip.tips.transport.description')}
                </p>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <div className="text-center">
                <CloudSun className="w-12 h-12 text-wellness-sage mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-wellness-charcoal mb-4">
                  {t('planTrip.tips.weather.title')}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t('planTrip.tips.weather.description')}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-r from-wellness-sage/10 to-wellness-sage/5 border-0 shadow-xl">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-4">
                <Gift className="w-16 h-16 text-wellness-sage" />
              </div>
              <CardTitle className="text-4xl font-bold text-wellness-charcoal mb-4">
                {t('planTrip.offers.title')}
              </CardTitle>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t('planTrip.offers.subtitle')}
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="text-xl font-semibold text-wellness-charcoal mb-3">
                    {t('planTrip.offers.wellness.title')}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {t('planTrip.offers.wellness.description')}
                  </p>
                  <p className="text-wellness-sage font-bold text-lg">
                    {t('planTrip.offers.wellness.price')}
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="text-xl font-semibold text-wellness-charcoal mb-3">
                    {t('planTrip.offers.cultural.title')}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {t('planTrip.offers.cultural.description')}
                  </p>
                  <p className="text-wellness-sage font-bold text-lg">
                    {t('planTrip.offers.cultural.price')}
                  </p>
                </div>
              </div>
              <div className="text-center pt-4">
                <Button className="bg-wellness-sage hover:bg-wellness-sage/90 text-white text-lg px-8 py-4">
                  {t('planTrip.offers.viewAll')}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default PlanTrip;
