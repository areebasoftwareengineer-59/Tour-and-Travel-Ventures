import React from 'react';
import { REAL_ADVENTURES, createWhatsAppUrl } from '../data/travelData';
import { Compass, MessageCircle, Waves, Mountain, Camera, ShieldCheck } from 'lucide-react';

export const RealAdventures: React.FC = () => {
  const whatsappUrl = createWhatsAppUrl(
    'Hello Tour and Travel Ventures, I saw your adventure trip activities (river rafting and 4x4 jeep safari) and would like to arrange an adventure tour with my group.'
  );

  return (
    <section id="adventures" className="py-20 sm:py-28 px-4 sm:px-6 bg-slate-900/40 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Adventures & Group Experiences</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Real Trip <span className="text-emerald-400">Moments & Highlights</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            From the exhilaration of whitewater rafting on rapid mountain rivers to off-road 4x4 jeep safaris and peaceful lakeside evenings, experience the spirit of northern travel.
          </p>
        </div>

        {/* Feature Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REAL_ADVENTURES.map((item, idx) => {
            return (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300 shadow-xl"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-900/85 backdrop-blur-md text-[11px] font-semibold text-emerald-400 border border-emerald-500/30">
                    {item.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="text-[11px] font-medium text-amber-400 mb-1">
                      {item.location}
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-900 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1 text-slate-300 font-medium">
                      <Camera className="w-3.5 h-3.5 text-emerald-400" />
                      Guided Excursion
                    </span>
                    <span className="text-emerald-400 text-[11px]">Coordinated Activity</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Experience Highlights Banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">
                Family & Women-Friendly Group Coordination
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                We understand the importance of family comfort, respect, and peaceful travel. Whether you're traveling as a family, a group of friends, or a specialized women's group, our team prioritizes respectful and cooperative guidance at every stop.
              </p>
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-500/20 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Inquire About Adventures</span>
          </a>
        </div>

      </div>
    </section>
  );
};
