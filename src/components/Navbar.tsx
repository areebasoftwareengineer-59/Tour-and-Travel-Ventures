import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { BUSINESS_INFO, createWhatsAppUrl } from '../data/travelData';
import { Phone, MessageCircle, Menu, X, Star, MapPin } from 'lucide-react';

interface NavbarProps {
  onPlanTripClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onPlanTripClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Destinations', href: '#destinations' },
    { label: 'Tour Packages', href: '#packages' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Trip Moments', href: '#adventures' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top verified business contact strip */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 text-xs py-1.5 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-slate-300">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate max-w-[230px] sm:max-w-none">
                  Office 703, Garden Heights Aibak, Lahore
                </span>
              </span>
              <span className="hidden md:inline-flex items-center gap-1 text-amber-400 font-medium">
                <Star className="w-3 h-3 fill-amber-400" />
                5.0/5 Google Rated ({BUSINESS_INFO.googleReviewCount} Reviews)
              </span>
            </div>

            <div className="flex items-center gap-4 ml-auto text-xs">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="flex items-center gap-1.5 text-slate-200 hover:text-emerald-400 transition-colors font-medium"
                aria-label={`Call ${BUSINESS_INFO.phone}`}
              >
                <Phone className="w-3 h-3 text-emerald-400" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
              <a
                href={createWhatsAppUrl('Hello Tour and Travel Ventures, I would like to inquire about your travel services.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
                aria-label="Direct WhatsApp Chat"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <nav
          className={`transition-all duration-300 px-4 sm:px-6 ${
            scrolled
              ? 'bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-black/40 py-3'
              : 'bg-gradient-to-b from-slate-950/90 to-transparent py-4'
          }`}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg p-1"
            >
              <Logo />
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-sm font-medium text-slate-200 hover:text-emerald-400 transition-colors focus:outline-none focus:text-emerald-400"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Header Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                type="button"
                onClick={onPlanTripClick}
                className="relative inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:from-emerald-300 hover:to-teal-200 rounded-full shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <span>Plan Your Trip</span>
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-200 hover:text-white bg-slate-900/80 border border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl lg:hidden flex flex-col pt-28 px-6 pb-8 overflow-y-auto animate-in fade-in duration-200">
          <div className="flex flex-col gap-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-lg font-semibold text-slate-200 hover:text-emerald-400 py-2 border-b border-slate-900"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-6 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onPlanTripClick();
                }}
                className="w-full py-3 px-6 text-base font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-lg shadow-emerald-500/25 active:scale-95 transition-all"
              >
                Plan Your Trip Now
              </button>

              <a
                href={createWhatsAppUrl('Hello Tour and Travel Ventures, I would like to inquire about your travel packages.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 flex items-center justify-center gap-2 text-base font-semibold text-white bg-emerald-700/80 hover:bg-emerald-600 rounded-xl border border-emerald-500/40"
              >
                <MessageCircle className="w-5 h-5 text-emerald-300" />
                <span>WhatsApp Instant Inquiry</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="w-full py-3 px-6 flex items-center justify-center gap-2 text-sm font-semibold text-slate-300 bg-slate-900 border border-slate-800 rounded-xl"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
