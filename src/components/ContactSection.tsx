import React from 'react';
import { BUSINESS_INFO, createWhatsAppUrl } from '../data/travelData';
import { MapPin, Phone, MessageCircle, ExternalLink, Navigation, Building2, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const directWhatsAppUrl = createWhatsAppUrl(
    'Hello Tour and Travel Ventures, I would like to inquire about office timings and booking details.'
  );

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 bg-slate-900/60 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Lahore Office & Direct Contacts</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Connect With <span className="text-emerald-400">Our Travel Desk</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Visit our office in Lahore or reach out directly via call or WhatsApp. We are here to answer your tour questions and prepare personalized travel plans.
          </p>
        </div>

        {/* Contact Info & Interactive Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Official Contact Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-emerald-400 font-medium mb-4">
                <span>Verified Business Location</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">
                Tour and Travel Ventures
              </h3>
              <p className="text-sm font-semibold text-emerald-400 mb-6">
                A Project of Kiswah Business Solution
              </p>

              {/* Detail Items */}
              <div className="space-y-6 text-sm">
                
                {/* Physical Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Office Address
                    </div>
                    <div className="text-slate-200 font-medium leading-relaxed">
                      Office 703, Garden Heights Aibak, Aibak Block Town, Lahore, Pakistan
                    </div>
                    <div className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                      <span className="font-semibold text-amber-400">Google Plus Code:</span>
                      <code className="bg-slate-900 px-1.5 py-0.5 rounded text-emerald-300">
                        {BUSINESS_INFO.googleMapsPlusCode}
                      </code>
                    </div>
                  </div>
                </div>

                {/* Telephone link */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Direct Phone
                    </div>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneClean}`}
                      className="text-lg font-bold text-white hover:text-emerald-400 transition-colors inline-block"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                    <div className="text-xs text-slate-400 mt-0.5">
                      Click to call directly from your device
                    </div>
                  </div>
                </div>

                {/* WhatsApp Chat link */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <MessageCircle className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Official WhatsApp
                    </div>
                    <a
                      href={directWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-1"
                    >
                      <span>Chat on +92 304 6864612</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <div className="text-xs text-slate-400 mt-0.5">
                      Instant tour inquiries, itineraries & quote requests
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="flex-1 py-3 px-4 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call Now</span>
              </a>

              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 flex items-center justify-center gap-2 transition-colors shadow-lg shadow-emerald-500/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Message on WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Location View */}
          <div className="lg:col-span-7 flex flex-col rounded-3xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl">
            <div className="p-4 sm:p-5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <Navigation className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-200 truncate">
                  Garden Heights Aibak, Lahore (Plus Code: F8X9+V5)
                </span>
              </div>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold text-emerald-400 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/30 transition-colors shrink-0"
              >
                <span>Open Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Google Map iframe using Lahore Garden Heights coordinates / Plus Code search */}
            <div className="relative flex-1 min-h-[380px] w-full bg-slate-900">
              <iframe
                title="Tour and Travel Ventures Location - Garden Heights Aibak Lahore"
                src="https://maps.google.com/maps?q=Garden+Heights+Aibak+Lahore+Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 absolute inset-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-4 bg-slate-950 text-xs text-slate-400 flex flex-wrap items-center justify-between gap-2 border-t border-slate-900">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>In-person consultations available at Office 703, Garden Heights Aibak</span>
              </div>
              <span className="text-slate-500">Township / Garden Town vicinity, Lahore</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
