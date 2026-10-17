import React, { useState } from 'react';
import { Logo } from './Logo';
import { BUSINESS_INFO, POPULAR_DESTINATIONS, createWhatsAppUrl } from '../data/travelData';
import { MapPin, Phone, MessageCircle, Star, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (href: string) => void;
  onSelectDestination: (destName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectDestination }) => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const quickNav = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Destinations', href: '#destinations' },
    { label: 'Tour Packages', href: '#packages' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Real Trip Moments', href: '#adventures' },
    { label: 'Customer Reviews', href: '#reviews' },
    { label: 'Trip Inquiry Form', href: '#inquiry' },
    { label: 'Contact & Location', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-900">
          
          {/* Col 1: Brand & Parent Company */}
          <div className="lg:col-span-5 space-y-4">
            <Logo />
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm pt-2">
              Tour and Travel Ventures is a dedicated travel agency project of <strong>Kiswah Business Solution</strong>. Based in Lahore, we coordinate guided tours, family vacations, and group expeditions across northern Pakistan.
            </p>
            
            <div className="pt-2 flex items-center gap-2 text-xs text-amber-400">
              <Star className="w-4 h-4 fill-amber-400" />
              <span>5.0/5 Customer Rating ({BUSINESS_INFO.googleReviewCount} Google Reviews)</span>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={createWhatsAppUrl('Hello Tour and Travel Ventures, I have a quick question.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Desk</span>
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {quickNav.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => onNavigate(link.href)}
                    className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Popular Destinations */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Destinations
            </h4>
            <ul className="space-y-2 text-xs">
              {POPULAR_DESTINATIONS.map((dest) => (
                <li key={dest.id}>
                  <button
                    type="button"
                    onClick={() => onSelectDestination(dest.name)}
                    className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                  >
                    {dest.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Verified Office Address */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Lahore Office
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Office 703, Garden Heights Aibak, Aibak Block Town, Lahore, Pakistan</span>
              </div>
              <div className="text-[11px] text-slate-400 pl-6">
                Plus Code: <span className="text-emerald-300 font-mono">{BUSINESS_INFO.googleMapsPlusCode}</span>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="hover:text-emerald-300 font-semibold">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="pt-2 text-[11px] text-slate-400">
                Personalized consultations available by appointment and direct inquiry.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Tour and Travel Ventures — A Project of Kiswah Business Solution. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setActiveModal('privacy')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => setActiveModal('terms')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      {/* Policy Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 text-slate-300 text-xs space-y-4 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white">
                {activeModal === 'privacy' ? 'Privacy Policy' : 'Terms & Booking Policy'}
              </h3>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="w-7 h-7 rounded-full bg-slate-800 text-white flex items-center justify-center hover:bg-slate-700 cursor-pointer"
              >
                ✕
              </button>
            </div>

            {activeModal === 'privacy' ? (
              <div className="space-y-3 leading-relaxed">
                <p>
                  <strong>Tour and Travel Ventures</strong> (A Project of Kiswah Business Solution) values your privacy. Any personal information submitted through our inquiry forms (name, WhatsApp number, travel dates) is used solely to communicate regarding your trip inquiry and itinerary planning.
                </p>
                <p>
                  We do not sell, rent, or distribute traveler contact data to third parties. Communications are handled directly through authorized office coordinators.
                </p>
              </div>
            ) : (
              <div className="space-y-3 leading-relaxed">
                <p>
                  <strong>Trip Consultation & Quotes:</strong> Submitting an online inquiry form represents a quotation request and does not constitute a guaranteed reservation until trip terms, dates, and arrangements are mutually agreed upon.
                </p>
                <p>
                  <strong>Weather & Mountain Conditions:</strong> Northern road corridors and mountain passes in Pakistan are subject to seasonal weather and local highway administration guidelines. Itinerary stops may be adapted cooperatively for passenger comfort and security.
                </p>
              </div>
            )}

            <div className="pt-2 text-right">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 bg-emerald-400 text-slate-950 font-bold rounded-lg hover:bg-emerald-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
