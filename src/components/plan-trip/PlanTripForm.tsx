
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { CalendarIcon, Compass } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';
import { cn } from '@/lib/utils';
import ItineraryResults from './ItineraryResults';

const PlanTripForm = () => {
  const { t } = useTranslation();
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [guests, setGuests] = useState<string>('');
  const [travelStyle, setTravelStyle] = useState<string>('');
  const [showResults, setShowResults] = useState(false);

  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set to start of day for comparison

  const handleGenerateItinerary = () => {
    console.log('Generating itinerary...', { startDate, endDate, guests, travelStyle });
    
    // Validate that at least travel style is selected
    if (!travelStyle) {
      alert('Please select your travel style preference to generate your itinerary.');
      return;
    }
    
    setShowResults(true);
  };

  return (
    <>
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 shadow-xl border-0 dark:bg-gray-800">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl text-wellness-charcoal dark:text-white mb-4">
                {t('planTrip.form.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Start Date */}
                <div className="space-y-3">
                  <Label className="text-lg font-semibold text-wellness-charcoal dark:text-white">
                    {t('planTrip.form.startDate')}
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal text-lg py-6 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
                          !startDate && "text-muted-foreground dark:text-gray-400"
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
                        disabled={(date) => date < today}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* End Date */}
                <div className="space-y-3">
                  <Label className="text-lg font-semibold text-wellness-charcoal dark:text-white">
                    {t('planTrip.form.endDate')}
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal text-lg py-6 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
                          !endDate && "text-muted-foreground dark:text-gray-400"
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
                        disabled={(date) => date < (startDate || today)}
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
                  <Label className="text-lg font-semibold text-wellness-charcoal dark:text-white">
                    {t('planTrip.form.guests')}
                  </Label>
                  <Select value={guests} onValueChange={setGuests}>
                    <SelectTrigger className="text-lg py-6 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
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
                  <Label className="text-lg font-semibold text-wellness-charcoal dark:text-white">
                    {t('planTrip.form.travelStyle')}
                  </Label>
                  <Select value={travelStyle} onValueChange={setTravelStyle}>
                    <SelectTrigger className="text-lg py-6 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
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

      <ItineraryResults
        isOpen={showResults}
        onClose={() => setShowResults(false)}
        userPreferences={{
          startDate,
          endDate,
          guests,
          travelStyle
        }}
      />
    </>
  );
};

export default PlanTripForm;
