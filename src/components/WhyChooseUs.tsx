import React from 'react';
import { WHY_CHOOSE_US, BUSINESS_INFO } from '../data/travelData';
import { Compass, CalendarCheck, Users, ShieldCheck, Sparkles, Star } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-emerald-400" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-6 h-6 text-teal-400" />;
      case 'Users':
        return <Users className="w-6 h-6 text-amber-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-blue-400" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section id="why-us" className="py-20 sm:py-28 px-4 sm:px-6 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
            <Star className="w-3.5 h-3.5 fill-emerald-400" />
            <span>Why Travel With Us</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Reliable Travel Planning <span className="text-emerald-400">From Lahore</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Planning a trip into the mountainous regions of northern Pakistan requires careful coordination. Here is how Tour and Travel Ventures supports you on your journey.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 shadow-lg hover:shadow-emerald-950/20 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center mb-5 shadow-inner">
                  {getIcon(item.iconName)}
                </div>
                <h3 className="text-lg font-bold text-white mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>Verified Standard</span>
                <span className="text-emerald-400 font-medium">Tour and Travel Ventures</span>
              </div>
            </div>
          ))}

          {/* Business Heritage Card */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-900 border border-emerald-500/30 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mb-5">
                <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2.5">
                A Project of Kiswah Business Solution
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Backed by Kiswah Business Solution, operating from Office 703, Garden Heights Aibak in Lahore. We are committed to honest communication, transparent terms, and genuine hospitality.
              </p>
            </div>

            <div className="pt-4 mt-6 border-t border-emerald-500/20 text-xs text-emerald-300 font-medium">
              Lahore Office • Direct Coordination
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
