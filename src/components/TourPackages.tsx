import React, { useState } from 'react';
import { TOUR_PACKAGES, createWhatsAppUrl } from '../data/travelData';
import { TourPackage } from '../types/travel';
import { Clock, MessageCircle, Info, ChevronDown, ChevronUp, CheckCircle, Sparkles } from 'lucide-react';

interface TourPackagesProps {
  onSelectPackageForInquiry: (packageName: string) => void;
}

export const TourPackages: React.FC<TourPackagesProps> = ({ onSelectPackageForInquiry }) => {
  const [expandedPackageId, setExpandedPackageId] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>('All');

  const categories = ['All', 'Kashmir', 'Gilgit-Baltistan', 'Khyber Pakhtunkhwa', 'Punjab'];

  const filteredPackages = categoryFilter === 'All'
    ? TOUR_PACKAGES
    : TOUR_PACKAGES.filter((p) => p.category === categoryFilter);

  const toggleExpand = (id: string) => {
    setExpandedPackageId(expandedPackageId === id ? null : id);
  };

  const handleInquirePackageWhatsApp = (pkg: TourPackage) => {
    const text = `Hello Tour and Travel Ventures, I am interested in your sample package "${pkg.title}" (${pkg.duration}). Could you please provide a customized quote and departure details?`;
    window.open(createWhatsAppUrl(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="packages" className="py-20 sm:py-28 px-4 sm:px-6 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Tour Options</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Sample <span className="text-emerald-400">Tour Packages</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Review our sample travel itineraries designed for families, friends, and organized groups. All itineraries can be adjusted to your preferred duration, dates, and group size.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategoryFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  categoryFilter === cat
                    ? 'bg-emerald-400 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                    : 'bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPackages.map((pkg) => {
            const isExpanded = expandedPackageId === pkg.id;

            return (
              <div
                key={pkg.id}
                className="flex flex-col bg-slate-900/90 rounded-2xl overflow-hidden border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 shadow-xl group"
              >
                {/* Image & Badges */}
                <div className="relative h-56 overflow-hidden bg-slate-950">
                  <img
                    src={pkg.image}
                    alt={pkg.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  
                  {/* Sample Itinerary Label */}
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-500/90 text-slate-950 font-extrabold text-[11px] shadow-lg">
                    Sample Itinerary
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-xs font-medium text-emerald-300 border border-emerald-500/30">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="text-xs font-semibold text-emerald-400 mb-1">
                      {pkg.destination}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {pkg.title}
                    </h3>
                    <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                      {pkg.description}
                    </p>
                  </div>

                  {/* Highlights checklist */}
                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Coordinated Features:
                    </div>
                    <ul className="space-y-1.5">
                      {pkg.includedHighlights.map((hl, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Day-by-Day Accordion Toggle */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => toggleExpand(pkg.id)}
                      className="w-full py-2 px-3 rounded-lg bg-slate-950 hover:bg-slate-850 border border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
                    >
                      <span>{isExpanded ? 'Hide Sample Itinerary' : 'View Sample Day-by-Day Schedule'}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {/* Accordion Details */}
                    {isExpanded && (
                      <div className="mt-3 p-3.5 rounded-xl bg-slate-950/90 border border-slate-800 space-y-3 text-xs animate-in fade-in">
                        <div className="text-[11px] font-semibold text-amber-400">
                          Day-by-Day Outline (Illustrative):
                        </div>
                        {pkg.sampleItinerary.map((dayItem, dIdx) => (
                          <div key={dIdx} className="border-l-2 border-emerald-500/40 pl-2.5 space-y-0.5">
                            <div className="font-bold text-slate-200">
                              <span className="text-emerald-400">{dayItem.day}: </span>
                              {dayItem.title}
                            </div>
                            <div className="text-slate-400 leading-normal">
                              {dayItem.details}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Price & Action Row */}
                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                        Pricing
                      </div>
                      <div className="text-sm font-extrabold text-amber-400">
                        {pkg.priceNote}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => onSelectPackageForInquiry(pkg.title)}
                        className="py-2 px-3 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 transition-colors"
                        title="Fill out form"
                      >
                        Inquire
                      </button>
                      <button
                        type="button"
                        onClick={() => handleInquirePackageWhatsApp(pkg)}
                        className="py-2 px-3 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 flex items-center gap-1.5 transition-all shadow-md shadow-emerald-500/15"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Transparency Disclaimer */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900 border border-slate-800/80 flex items-start gap-3 max-w-3xl mx-auto">
          <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-400 leading-relaxed">
            <strong className="text-slate-200">Pricing Transparency: </strong>
            Prices are provided upon inquiry ("Request a Quote") because costs depend strictly on travel dates, vehicle selection (APV, Grand Cabin, Coaster, or Prado/Jeep), hotel preference, and number of guests. Contact us directly for a clear, no-obligation breakdown.
          </p>
        </div>
      </div>
    </section>
  );
};
