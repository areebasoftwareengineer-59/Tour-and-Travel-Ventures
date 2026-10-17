import React from 'react';
import { BUSINESS_INFO, createWhatsAppUrl } from '../data/travelData';
import { MessageCircle, Compass, Star, MapPin, Shield, Users, ArrowRight } from 'lucide-react';

interface HeroProps {
  onExploreToursClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreToursClick }) => {
  const whatsappHeroUrl = createWhatsAppUrl(
    'Hello Tour and Travel Ventures, I am interested in planning a trip to northern Pakistan. Could you please share tour details and quote information?'
  );

  return (
    <section id="home" className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden">
      {/* Background Hero Image with dark cinematic gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_pakistan_mountains_1792250822737.jpg"
          alt="Majestic Karakoram and Himalayan peaks and glacial lake in Pakistan"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-fade-in"
          referrerPolicy="no-referrer"
        />
        {/* Cinematic Multi-layered Vignette & Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-slate-950/45" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-slate-950/40 to-slate-950/90" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Verification & Trust Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur-md border border-emerald-500/30 text-xs sm:text-sm text-emerald-300 mb-6 shadow-xl">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold tracking-wide text-slate-100">
            Tour and Travel Ventures
          </span>
          <span className="text-slate-500">•</span>
          <span className="text-emerald-400 font-medium">A Project of Kiswah Business Solution</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.12]">
          Discover Pakistan.
          <span className="block mt-1 bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200 bg-clip-text text-transparent">
            Experience the Extraordinary.
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="max-w-3xl text-lg sm:text-xl text-slate-200/90 font-normal mb-10 leading-relaxed drop-shadow-sm">
          From breathtaking mountain valleys to unforgettable group adventures, let us help you plan your next memorable journey.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14">
          <button
            type="button"
            onClick={onExploreToursClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-200 active:scale-95 cursor-pointer group"
          >
            <Compass className="w-5 h-5 text-slate-950 group-hover:rotate-45 transition-transform" />
            <span>Explore Our Tours</span>
            <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={whatsappHeroUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-slate-900/90 hover:bg-slate-800/90 border border-emerald-500/40 rounded-xl shadow-xl backdrop-blur-md transition-all duration-200 active:scale-95 group"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span>Plan Your Trip on WhatsApp</span>
          </a>
        </div>

        {/* Trust & Transparency Feature Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl text-left">
          <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800/80 rounded-xl p-3.5 sm:p-4 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
            </div>
            <div>
              <div className="text-base font-extrabold text-white">5.0 / 5.0</div>
              <div className="text-xs text-slate-400">15 Google Reviews</div>
            </div>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800/80 rounded-xl p-3.5 sm:p-4 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <div className="text-base font-extrabold text-white">Lahore Office</div>
              <div className="text-xs text-slate-400">Garden Heights Aibak</div>
            </div>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800/80 rounded-xl p-3.5 sm:p-4 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-teal-500/20 border border-teal-500/30 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 text-teal-400" />
            </div>
            <div>
              <div className="text-base font-extrabold text-white">Group & Family</div>
              <div className="text-xs text-slate-400">Comfortable Planning</div>
            </div>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800/80 rounded-xl p-3.5 sm:p-4 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <div className="text-base font-extrabold text-white">Friendly Guides</div>
              <div className="text-xs text-slate-400">Cooperative Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
