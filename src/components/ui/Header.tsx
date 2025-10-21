'use client';

import { Mail, Menu, Phone, Sparkles, Truck, X } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Loading Demo', href: '/loading-demo' },
  ];

  // Handle scroll effect for glass morphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on escape key and prevent body scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Glassmorphism Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'backdrop-blur-xl bg-white/90 shadow-2xl shadow-ghl-primary-600/10' 
          : 'backdrop-blur-md bg-white/80'
      }`}>
        {/* Gradient overlay for glass effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-ghl-primary-600/5 via-transparent to-ghl-secondary-400/5 pointer-events-none" />
        
        {/* Top bar with contact info - Hidden on mobile */}
        <div className="hidden md:block relative">
          <div className="bg-gradient-to-r from-ghl-primary-600/90 to-ghl-secondary-400/90 backdrop-blur-sm">
            <div className="container-custom">
              <div className="flex justify-between items-center py-2 text-sm">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2 text-white/90">
                    <Phone className="h-4 w-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white/90">
                    <Mail className="h-4 w-4" />
                    <span>info@globalharvestlogistics.com</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-white/90">
                  <Sparkles className="h-4 w-4" />
                  <span>24/7 Global Logistics Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="container-custom relative">
          <div className="flex justify-between items-center py-3 md:py-4">
            {/* Logo with glass effect */}
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-ghl-primary-600 to-ghl-secondary-400 rounded-xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-gradient-to-br from-ghl-primary-600 to-ghl-secondary-400 p-2 sm:p-2.5 rounded-xl shadow-lg">
                  <Truck className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-base sm:text-lg md:text-xl font-heading font-bold bg-gradient-to-r from-ghl-primary-600 to-ghl-secondary-400 bg-clip-text text-transparent">
                  Global Harvest
                </h1>
                <p className="text-xs sm:text-xs md:text-sm text-ghl-neutral-600 font-medium">Logistics</p>
              </div>
            </Link>

            {/* Desktop Navigation with glass effect */}
            <div className="hidden md:flex items-center space-x-2">
              <div className="flex items-center space-x-1 bg-white/40 backdrop-blur-sm rounded-full px-4 py-2 border border-white/50 shadow-lg">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-4 py-2 text-ghl-neutral-800 hover:text-ghl-primary-600 font-semibold transition-all duration-300 rounded-full hover:bg-white/50 relative group"
                  >
                    {item.name}
                    <span className="absolute inset-0 bg-gradient-to-r from-ghl-primary-600/30 to-ghl-secondary-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu button with glass effect */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative group"
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-ghl-primary-600/20 to-ghl-secondary-400/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-white/20 backdrop-blur-sm p-2.5 sm:p-3 rounded-xl border border-white/30 hover:bg-white/30 transition-all duration-300">
                <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                  <Menu className={`h-5 w-5 sm:h-6 sm:w-6 absolute transition-all duration-300 text-ghl-neutral-700 ${
                    isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                  }`} />
                  <X className={`h-5 w-5 sm:h-6 sm:w-6 absolute transition-all duration-300 text-ghl-neutral-700 ${
                    isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                  }`} />
                </div>
              </div>
            </button>
          </div>

          {/* Mobile Navigation with glassmorphism */}
          <div className={`md:hidden transition-all duration-500 ease-in-out ${
            isMenuOpen 
              ? 'max-h-96 opacity-100' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
            <div className="bg-white/40 backdrop-blur-xl rounded-2xl border border-white/50 shadow-2xl shadow-ghl-primary-600/10 p-4 sm:p-6 mb-4">
              <div className="space-y-1 sm:space-y-2">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2.5 sm:px-4 sm:py-3 text-ghl-neutral-800 hover:text-ghl-primary-600 font-semibold transition-all duration-300 rounded-xl hover:bg-white/50 relative group text-sm sm:text-base"
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: isMenuOpen ? 'slideInLeft 0.4s ease-out forwards' : 'none'
                    }}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-ghl-primary-600/20 to-ghl-secondary-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                ))}
                
                {/* Mobile contact info with glass effect */}
                <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-white/30 backdrop-blur-sm rounded-xl border border-white/40 shadow-lg">
                  <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                    <div className="flex items-center space-x-2 sm:space-x-3 text-ghl-neutral-700">
                      <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-ghl-primary-600 flex-shrink-0" />
                      <a href="tel:+15551234567" className="hover:text-ghl-primary-600 transition-colors font-medium">
                        +1 (555) 123-4567
                      </a>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3 text-ghl-neutral-700">
                      <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-ghl-primary-600 flex-shrink-0" />
                      <a href="mailto:info@globalharvestlogistics.com" className="hover:text-ghl-primary-600 transition-colors break-all font-medium">
                        info@globalharvestlogistics.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-16 sm:h-20 md:h-24" />
    </>
  );
};

export default Header;
