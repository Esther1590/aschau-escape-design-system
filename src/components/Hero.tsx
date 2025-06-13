
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 195, 74, 0.1), rgba(38, 50, 56, 0.3)), url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Plan Your
          <span className="block text-wellness-sage">Peaceful Escape</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto leading-relaxed">
          Discover tranquility in the heart of the Bavarian Alps. Experience authentic wellness, 
          rich culture, and breathtaking nature in Aschau im Chiemgau.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="btn-wellness text-xl px-10 py-6"
            aria-label="Start planning your wellness journey"
          >
            Start Your Journey
          </Button>
          <Button 
            variant="outline" 
            className="btn-wellness-outline bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-wellness-charcoal text-xl px-10 py-6"
            aria-label="Learn more about Aschau"
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-wellness-lightSage rounded-full opacity-30 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-wellness-sage rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
    </section>
  );
};

export default Hero;
