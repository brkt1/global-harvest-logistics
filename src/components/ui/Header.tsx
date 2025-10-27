'use client';

import { useAdmin } from '@/contexts/AdminContext';
import { CONTACT_INFO } from '@/lib/constants';
import { Edit3, LogOut, Mail, Menu, Phone, Save, Sparkles, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAdmin, isEditing, toggleEditing, logout } = useAdmin();
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
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
          ? 'bg-white shadow-2xl shadow-ghl-primary-600/10' 
          : 'bg-white'
      }`}>
        {/* Top bar with contact info - Hidden on mobile */}
        <div className="hidden md:block relative">
          <div className="bg-gradient-to-r from-ghl-primary-600/90 to-ghl-secondary-400/90 backdrop-blur-sm">
            <div className="container-custom">
              <div className="flex justify-between items-center py-2 text-sm">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2 text-white/90">
                    <Phone className="h-4 w-4" />
                    <span>{CONTACT_INFO.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white/90">
                    <Mail className="h-4 w-4" />
                    <span>{CONTACT_INFO.email}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-white/90">
                  <Sparkles className="h-4 w-4" />
                  <span>Premium Ethiopian Agricultural Exports</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="container-custom relative">
          <div className="flex justify-between items-center py-3 md:py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image
                src="/logo.png"
                alt="Global Harvest Logistics Logo"
                width={200}
                height={60}
                className="h-12 w-auto sm:h-16 md:h-20 object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation with glass effect */}
            <div className="hidden md:flex items-center space-x-2">
              <div className="flex items-center space-x-1 bg-white rounded-full px-4 py-2 border border-ghl-neutral-300 shadow-lg">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`px-4 py-2 font-semibold transition-all duration-300 rounded-full relative group ${
                        isActive 
                          ? 'text-ghl-primary-600 bg-ghl-primary-50 border border-ghl-primary-200' 
                          : 'text-ghl-neutral-800 hover:text-ghl-primary-600 hover:bg-white/50'
                      }`}
                    >
                      {item.name}
                      {!isActive && (
                        <span className="absolute inset-0 bg-gradient-to-r from-ghl-primary-600/30 to-ghl-secondary-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      )}
                    </Link>
                  );
                })}
              </div>
              
              {/* Admin Controls - Only show when logged in */}
              {isAdmin && (
                <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 border border-ghl-neutral-300 shadow-lg">
                  <button
                    onClick={toggleEditing}
                    className={`px-3 py-2 rounded-full transition-all duration-300 flex items-center gap-2 font-semibold ${
                      isEditing 
                        ? 'bg-green-600 text-white hover:bg-green-700' 
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    {isEditing ? (
                      <>
                        <Save className="h-4 w-4" />
                        Exit Edit
                      </>
                    ) : (
                      <>
                        <Edit3 className="h-4 w-4" />
                        Edit Mode
                      </>
                    )}
                  </button>
                  
                  <button
                    onClick={logout}
                    className="px-3 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all duration-300 flex items-center gap-2 font-semibold"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </button>
                </div>
              )}
            </div>

            {/* Mobile controls */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Mobile menu button with glass effect */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative group"
                aria-label="Toggle menu"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-ghl-primary-600/20 to-ghl-secondary-400/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-white p-2.5 sm:p-3 rounded-xl border border-ghl-neutral-300 hover:bg-ghl-neutral-50 transition-all duration-300 shadow-md">
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
          </div>

          {/* Mobile Navigation with glassmorphism */}
          <div className={`md:hidden transition-all duration-500 ease-in-out ${
            isMenuOpen 
              ? 'max-h-96 opacity-100' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
            <div className="bg-white rounded-2xl border border-ghl-neutral-300 shadow-2xl shadow-ghl-primary-600/10 p-4 sm:p-6 mb-4">
              <div className="space-y-1 sm:space-y-2">
                {navigation.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block px-3 py-2.5 sm:px-4 sm:py-3 font-semibold transition-all duration-300 rounded-xl relative group text-sm sm:text-base ${
                        isActive 
                          ? 'text-ghl-primary-600 bg-ghl-primary-50 border border-ghl-primary-200' 
                          : 'text-ghl-neutral-800 hover:text-ghl-primary-600 hover:bg-white/50'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animation: isMenuOpen ? 'slideInLeft 0.4s ease-out forwards' : 'none'
                      }}
                    >
                      <span className="relative z-10">{item.name}</span>
                      {!isActive && (
                        <div className="absolute inset-0 bg-gradient-to-r from-ghl-primary-600/20 to-ghl-secondary-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      )}
                    </Link>
                  );
                })}
                
                {/* Mobile Admin Controls - Only show when logged in */}
                {isAdmin && (
                  <>
                    <button
                      onClick={() => {
                        toggleEditing();
                        setIsMenuOpen(false);
                      }}
                      className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl transition-all duration-300 flex items-center gap-2 font-semibold text-sm sm:text-base ${
                        isEditing 
                          ? 'bg-green-600 text-white hover:bg-green-700' 
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                      style={{
                        animationDelay: `${navigation.length * 100}ms`,
                        animation: isMenuOpen ? 'slideInLeft 0.4s ease-out forwards' : 'none'
                      }}
                    >
                      {isEditing ? (
                        <>
                          <Save className="h-4 w-4" />
                          Exit Edit
                        </>
                      ) : (
                        <>
                          <Edit3 className="h-4 w-4" />
                          Edit Mode
                        </>
                      )}
                    </button>
                    
                    <button
                      onClick={() => {
                        logout();
                        setIsMenuOpen(false);
                      }}
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all duration-300 flex items-center gap-2 font-semibold text-sm sm:text-base"
                      style={{
                        animationDelay: `${(navigation.length + 1) * 100}ms`,
                        animation: isMenuOpen ? 'slideInLeft 0.4s ease-out forwards' : 'none'
                      }}
                    >
                      <LogOut className="h-4 w-4" />
                      Logout
                    </button>
                  </>
                )}
                
                {/* Mobile contact info with glass effect */}
                <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-ghl-neutral-50 rounded-xl border border-ghl-neutral-300 shadow-lg">
                  <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                    <div className="flex items-center space-x-2 sm:space-x-3 text-ghl-neutral-700">
                      <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-ghl-primary-600 flex-shrink-0" />
                      <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-ghl-primary-600 transition-colors font-medium">
                        {CONTACT_INFO.phone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3 text-ghl-neutral-700">
                      <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-ghl-primary-600 flex-shrink-0" />
                      <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-ghl-primary-600 transition-colors break-all font-medium">
                        {CONTACT_INFO.email}
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
