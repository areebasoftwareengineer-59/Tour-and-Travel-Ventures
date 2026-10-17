import React from 'react';
import { BUSINESS_INFO, createWhatsAppUrl } from '../data/travelData';
import { CheckCircle2, MapPin, Users, Compass, Calendar, Sparkles, MessageCircle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const whatsappUrl = createWhatsAppUrl(
    'Hello Tour and Travel Ventures, I would like to learn more about your tour planning and upcoming travel schedules.'
  );

  const keyStrengths = [
    {
      title: 'Organized Travel Experiences',
      desc: 'Structured departure plans and coordinated hotel stays, ensuring each day flows comfortably without chaotic surprises.',
      icon: Calendar
    },
    {
      title: 'Friendly Tour Guidance',
      desc: 'Accompanied by cooperative coordinators and local guides who assist travelers with care, patience, and warmth.',
      icon: Users
    },
    {
      title: 'Carefully Planned Itineraries',
      desc: 'Balanced routes designed to let you enjoy spectacular mountain sights and photo opportunities at a pleasant pace.',
      icon: Compass
    },
    {
      title: 'Group and Family Travel',
      desc: 'Dedicated arrangements respecting family privacy, comfort, and the collective spirit of friend circles and groups.',
      icon: CheckCircle2
    },
    {
      title: 'Personalized Trip Planning',
      desc: 'Tailored itineraries for couples, private gatherings, or corporate groups who desire custom stops and flexible timelines.',
      icon: Sparkles
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 bg-slate-950 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase with real adventure context */}
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group">
              <img
                src="/images/kashmir_neelum_valley.jpg"
                alt="Scenic Neelum Valley river and lush green landscape in Kashmir"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-800">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Headquartered in Lahore</span>
                </div>
                <div className="text-sm font-semibold text-white">
                  Office 703, Garden Heights Aibak, Lahore
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  A Project of Kiswah Business Solution
                </div>
              </div>
            </div>

            {/* Small stats highlight card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-emerald-400">5.0 / 5.0 ★</div>
                <div className="text-xs text-slate-300 font-medium">15 Google Reviews</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Verified customer feedback</div>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/30 rounded-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Talk with Us</span>
              </a>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-4">
              <span>About Tour and Travel Ventures</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Travel Beyond <span className="text-emerald-400">the Ordinary</span>
            </h2>

            <div className="space-y-4 text-slate-300 text-base leading-relaxed mb-8">
              <p>
                <strong>Tour and Travel Ventures</strong> is a dedicated tour and travel agency operating as a specialized travel project of <strong>Kiswah Business Solution</strong>, based in Lahore, Pakistan.
              </p>
              <p>
                Serving travelers from Lahore and surrounding cities, we focus on curating memorable journeys across the awe-inspiring mountain corridors, glacial lakes, and verdant valleys of Pakistan. From the serene pine banks of Azad Kashmir to the majestic granite towers of Hunza and Skardu, our goal is to make every trip smooth, enjoyable, and well-managed.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800/80">
              {keyStrengths.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-100">{item.title}</h3>
                      <p className="text-xs text-slate-400 mt-1 leading-normal">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
