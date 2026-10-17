import React, { useState } from 'react';
import { POPULAR_DESTINATIONS, createWhatsAppUrl } from '../data/travelData';
import { Destination } from '../types/travel';
import { MapPin, MessageCircle, ArrowUpRight, Calendar, Sparkles } from 'lucide-react';

interface PopularDestinationsProps {
  onSelectDestinationForInquiry: (destinationName: string) => void;
}

export const PopularDestinations: React.FC<PopularDestinationsProps> = ({
  onSelectDestinationForInquiry,
}) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [activeModalDest, setActiveModalDest] = useState<Destination | null>(null);

  const regions = ['All', 'Azad Kashmir', 'Gilgit-Baltistan', 'Khyber Pakhtunkhwa', 'Punjab & KP Border'];

  const filteredDestinations = selectedRegion === 'All'
    ? POPULAR_DESTINATIONS
    : POPULAR_DESTINATIONS.filter((d) => d.region === selectedRegion);

  const handleWhatsAppInquiry = (destName: string) => {
    const msg = `Hello Tour and Travel Ventures, I am interested in exploring a trip to ${destName}. Could you share sample itinerary possibilities and customized quote options?`;
    window.open(createWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="destinations" className="py-20 sm:py-28 px-4 sm:px-6 bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Destination Interests & Regions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Explore Pakistan’s <span className="text-emerald-400">Iconic Destinations</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Browse through some of our most requested travel corridors. These destinations represent travel interests for custom planning and organized tours from Lahore.
          </p>

          {/* Region Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {regions.map((region) => (
              <button
                key={region}
                type="button"
                onClick={() => setSelectedRegion(region)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  selectedRegion === region
                    ? 'bg-emerald-400 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                    : 'bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white border border-slate-700/60'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredDestinations.map((dest) => (
            <div
              key={dest.id}
              className="group flex flex-col bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-emerald-950/20"
            >
              {/* Image Container */}
              <div className="relative h-60 overflow-hidden bg-slate-900">
                <img
                  src={dest.image}
                  alt={dest.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                
                {/* Region Tag */}
                <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md text-[11px] font-semibold text-emerald-300 border border-emerald-500/30 shadow-md">
                  <MapPin className="w-3 h-3 text-emerald-400" />
                  <span>{dest.region}</span>
                </div>

                {/* Best Season Badge */}
                <div className="absolute bottom-3 left-3.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-[11px] text-slate-300 border border-slate-800">
                  <Calendar className="w-3 h-3 text-amber-400" />
                  <span>Season: {dest.bestTimeToVisit}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {dest.name}
                  </h3>
                  <div className="text-xs font-medium text-emerald-400 mt-1 mb-2.5">
                    {dest.tagline}
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {dest.description}
                  </p>
                </div>

                {/* Highlights preview */}
                <div className="pt-3 border-t border-slate-900 space-y-1.5">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Key Sights:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {dest.highlights.slice(0, 3).map((item, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {item}
                      </span>
                    ))}
                    {dest.highlights.length > 3 && (
                      <span className="text-[11px] px-1.5 py-0.5 text-slate-400">
                        +{dest.highlights.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-2 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveModalDest(dest)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-850 hover:text-white border border-slate-800 transition-colors cursor-pointer"
                  >
                    <span>View Highlights</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleWhatsAppInquiry(dest.name)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all cursor-pointer shadow-md shadow-emerald-500/15"
                    title={`Inquire about ${dest.name} on WhatsApp`}
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Informative Note */}
        <div className="mt-10 p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-center max-w-2xl mx-auto text-xs text-slate-400">
          <span className="text-amber-400 font-semibold">Note on Destination Interests: </span>
          These destinations illustrate our core tour regions. Travel schedules and private departures are customized to match seasonal road accessibility and traveler preferences.
        </div>
      </div>

      {/* Destination Detail Modal */}
      {activeModalDest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl relative">
            <div className="relative h-48 bg-slate-950">
              <img
                src={activeModalDest.image}
                alt={activeModalDest.alt}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              <button
                type="button"
                onClick={() => setActiveModalDest(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-950/80 text-white flex items-center justify-center hover:bg-slate-800 cursor-pointer text-sm"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                  {activeModalDest.region}
                </div>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {activeModalDest.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1">{activeModalDest.tagline}</p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {activeModalDest.description}
              </p>

              <div>
                <h4 className="text-xs font-semibold uppercase text-slate-400 tracking-wider mb-2">
                  Key Attractions & Activities:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                  {activeModalDest.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    const name = activeModalDest.name;
                    setActiveModalDest(null);
                    onSelectDestinationForInquiry(name);
                  }}
                  className="flex-1 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 transition-colors"
                >
                  Fill Inquiry Form
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handleWhatsAppInquiry(activeModalDest.name);
                    setActiveModalDest(null);
                  }}
                  className="flex-1 py-2.5 px-4 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Quote</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
