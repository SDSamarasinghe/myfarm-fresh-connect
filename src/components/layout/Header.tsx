
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="border-b bg-white/80 backdrop-blur-sm fixed w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-myfarm-green font-bold text-2xl">My<span className="text-myfarm-brown">Farm</span></span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-myfarm-brown-dark hover:text-myfarm-green font-medium">Home</Link>
            <Link to="/how-it-works" className="text-myfarm-brown-dark hover:text-myfarm-green font-medium">How It Works</Link>
            <Link to="/farms" className="text-myfarm-brown-dark hover:text-myfarm-green font-medium">Farms</Link>
            <Link to="/plants" className="text-myfarm-brown-dark hover:text-myfarm-green font-medium">Plants</Link>
            <Link to="/pricing" className="text-myfarm-brown-dark hover:text-myfarm-green font-medium">Pricing</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" className="border-myfarm-green text-myfarm-green hover:bg-myfarm-green hover:text-white">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-myfarm-green text-white hover:bg-myfarm-green-dark">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-myfarm-brown-dark p-2 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4 py-4">
              <Link to="/" className="text-myfarm-brown-dark hover:text-myfarm-green font-medium" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link to="/how-it-works" className="text-myfarm-brown-dark hover:text-myfarm-green font-medium" onClick={() => setMobileMenuOpen(false)}>How It Works</Link>
              <Link to="/farms" className="text-myfarm-brown-dark hover:text-myfarm-green font-medium" onClick={() => setMobileMenuOpen(false)}>Farms</Link>
              <Link to="/plants" className="text-myfarm-brown-dark hover:text-myfarm-green font-medium" onClick={() => setMobileMenuOpen(false)}>Plants</Link>
              <Link to="/pricing" className="text-myfarm-brown-dark hover:text-myfarm-green font-medium" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
              <div className="flex flex-col space-y-2 pt-2">
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full border-myfarm-green text-myfarm-green hover:bg-myfarm-green hover:text-white">
                    Login
                  </Button>
                </Link>
                <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-myfarm-green text-white hover:bg-myfarm-green-dark">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
