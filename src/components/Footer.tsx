
const Footer = () => {
  return (
    <footer className="bg-wellness-charcoal text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-wellness-sage rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Aschau Wellness Tourism</h3>
                <p className="text-gray-300">Your peaceful Alpine escape</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md text-lg">
              Discover tranquility and rejuvenation in the heart of the Bavarian Alps. 
              Experience authentic wellness tourism designed for your comfort and peace of mind.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-wellness-sage">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#wellness" className="text-gray-300 hover:text-wellness-sage transition-colors text-lg">Wellness</a></li>
              <li><a href="#culture" className="text-gray-300 hover:text-wellness-sage transition-colors text-lg">Culture</a></li>
              <li><a href="#plan" className="text-gray-300 hover:text-wellness-sage transition-colors text-lg">Plan Trip</a></li>
              <li><a href="#booking" className="text-gray-300 hover:text-wellness-sage transition-colors text-lg">Booking</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-wellness-sage">Contact</h4>
            <div className="space-y-3 text-gray-300 text-lg">
              <p>Aschau im Chiemgau</p>
              <p>Bavaria, Germany</p>
              <p>+49 (0) 8052 123456</p>
              <p>info@aschau-wellness.de</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 text-center">
          <p className="text-gray-300 text-lg">
            © 2024 Aschau Wellness Tourism. All rights reserved. | 
            <span className="text-wellness-sage"> Accessibility-first design</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
