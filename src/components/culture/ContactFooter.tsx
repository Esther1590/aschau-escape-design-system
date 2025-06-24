
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactFooter = () => {
  return (
    <footer className="bg-wellness-charcoal dark:bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-8 text-amber-300">
            Plan Your Cultural Journey
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
            <div className="flex items-center space-x-4">
              <Phone className="w-8 h-8 text-amber-300" />
              <div>
                <p className="text-xl font-semibold">Call Us</p>
                <p className="text-lg text-gray-300">+49 8052 1234</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-8 h-8 text-amber-300" />
              <div>
                <p className="text-xl font-semibold">Email</p>
                <p className="text-lg text-gray-300">culture@burg-aschau.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-8 h-8 text-amber-300" />
              <div>
                <p className="text-xl font-semibold">Visit Us</p>
                <p className="text-lg text-gray-300">Aschau im Chiemgau</p>
              </div>
            </div>
          </div>
          <div className="mt-8 p-4 bg-amber-900/30 rounded-lg">
            <p className="text-lg text-amber-200">
              All cultural experiences can be arranged with advance notice to ensure optimal accessibility and comfort.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
