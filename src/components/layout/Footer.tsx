
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-myfarm-beige border-t mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <span className="text-myfarm-green font-bold text-2xl">My<span className="text-myfarm-brown">Farm</span></span>
            </Link>
            <p className="text-myfarm-brown text-sm">
              Growing your own food without the time, space, or knowledge. We make farming accessible to everyone.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-myfarm-brown mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-myfarm-brown hover:text-myfarm-green text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-myfarm-brown hover:text-myfarm-green text-sm">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/farms" className="text-myfarm-brown hover:text-myfarm-green text-sm">
                  Farms
                </Link>
              </li>
              <li>
                <Link to="/plants" className="text-myfarm-brown hover:text-myfarm-green text-sm">
                  Plants
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-myfarm-brown hover:text-myfarm-green text-sm">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-myfarm-brown mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-myfarm-brown hover:text-myfarm-green text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-myfarm-brown hover:text-myfarm-green text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-myfarm-brown mb-4">Contact</h4>
            <address className="not-italic text-sm">
              <p className="text-myfarm-brown mb-2">Email: <a href="mailto:info@myfarm.com" className="hover:text-myfarm-green">info@myfarm.com</a></p>
              <p className="text-myfarm-brown mb-2">Phone: +94 123 456 789</p>
              <p className="text-myfarm-brown">Address: Nuwara Eliya, Sri Lanka</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-myfarm-brown/20 mt-8 pt-8 text-center text-myfarm-brown text-sm">
          <p>&copy; {new Date().getFullYear()} MyFarm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
