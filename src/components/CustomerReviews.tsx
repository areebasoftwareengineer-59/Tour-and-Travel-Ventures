import React from 'react';
import { CUSTOMER_REVIEWS, BUSINESS_INFO } from '../data/travelData';
import { Star, Quote, MapPin, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';

export const CustomerReviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 sm:py-28 px-4 sm:px-6 bg-slate-900/50 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with Official Rating Scorecard */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>Customer Feedback & Ratings</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Trusted by Travelers <span className="text-emerald-400">Across Pakistan</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Authentic customer experiences from travelers who explored the northern valleys with Tour and Travel Ventures.
          </p>
        </div>

        {/* Prominent Google Rating Scorecard Banner */}
        <div className="max-w-2xl mx-auto mb-14 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-amber-500/30 text-center shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            
            {/* Big Star Badge */}
            <div className="flex flex-col items-center">
              <div className="text-5xl font-black text-white flex items-center gap-2">
                <span>5.0</span>
                <span className="text-2xl text-slate-400 font-medium">/ 5.0</span>
              </div>
              <div className="flex items-center gap-1 mt-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-16 bg-slate-800" />

            {/* Description & Note */}
            <div className="text-left space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-base font-bold text-white">
                  Based on 15 Google Reviews
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  <ShieldCheck className="w-3 h-3" />
                  Verified Rating
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-normal max-w-md">
                {BUSINESS_INFO.ratingNote}. Verified travel agency based at Garden Heights Aibak, Lahore.
              </p>
              <div className="pt-1">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-4"
                >
                  <span>View Google Business Location & Reviews</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid matching the exact 3 feedbacks provided by the business */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {CUSTOMER_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="p-6 sm:p-7 rounded-2xl bg-slate-950 border border-slate-800 hover:border-emerald-500/30 transition-all duration-300 shadow-xl flex flex-col justify-between relative group"
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-800 group-hover:text-emerald-500/30 transition-colors" />
                </div>

                {/* Highlight Badge */}
                <div className="inline-block text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md mb-3">
                  {review.keyHighlight}
                </div>

                {/* Feedback Text */}
                <p className="text-sm text-slate-300 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Client Info footer */}
              <div className="pt-4 mt-6 border-t border-slate-900 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">
                    {review.clientType}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {review.tripName}
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-slate-400">
                  <MapPin className="w-3 h-3 text-emerald-400" />
                  <span>{review.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Authenticity */}
        <div className="mt-10 text-center text-xs text-slate-400 max-w-xl mx-auto">
          These testimonials reflect actual feedback provided directly from travelers on our tours and verified business records.
        </div>

      </div>
    </section>
  );
};
