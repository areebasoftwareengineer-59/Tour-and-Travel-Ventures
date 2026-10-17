import React, { useState, useEffect } from 'react';
import { InquiryFormData } from '../types/travel';
import { BUSINESS_INFO, createWhatsAppUrl } from '../data/travelData';
import { Send, MessageCircle, AlertCircle, CheckCircle, Sparkles, Calendar, Users, MapPin, User, Phone } from 'lucide-react';

interface TripInquiryFormProps {
  initialDestination?: string;
  initialPackage?: string;
}

export const TripInquiryForm: React.FC<TripInquiryFormProps> = ({
  initialDestination = '',
  initialPackage = '',
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    whatsappNumber: '',
    destination: initialDestination || (initialPackage ? `Package: ${initialPackage}` : 'Azad Jammu & Kashmir'),
    travelDate: '',
    travelersCount: '2',
    tripType: 'Family',
    requirements: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState('');

  // Update destination if external props change
  useEffect(() => {
    if (initialDestination) {
      setFormData((prev) => ({ ...prev, destination: initialDestination }));
    } else if (initialPackage) {
      setFormData((prev) => ({ ...prev, destination: `Package: ${initialPackage}` }));
    }
  }, [initialDestination, initialPackage]);

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Name should be at least 3 characters.';
    }

    if (!formData.whatsappNumber.trim()) {
      newErrors.whatsappNumber = 'Please enter your WhatsApp contact number.';
    } else if (formData.whatsappNumber.trim().replace(/\D/g, '').length < 8) {
      newErrors.whatsappNumber = 'Please enter a valid phone number (e.g. 03001234567 or +92304...)';
    }

    if (!formData.travelDate) {
      newErrors.travelDate = 'Please select your estimated travel date.';
    }

    if (!formData.travelersCount || parseInt(formData.travelersCount, 10) < 1) {
      newErrors.travelersCount = 'Please indicate at least 1 traveler.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Build the formatted WhatsApp message
    const formattedMessage = `*New Trip Inquiry — Tour and Travel Ventures*
---------------------------------------
👤 *Name:* ${formData.fullName.trim()}
📱 *WhatsApp:* ${formData.whatsappNumber.trim()}
📍 *Destination / Tour:* ${formData.destination}
📅 *Estimated Date:* ${formData.travelDate}
👥 *Number of Travelers:* ${formData.travelersCount}
🎒 *Trip Type:* ${formData.tripType}
${formData.requirements.trim() ? `📝 *Requirements:* ${formData.requirements.trim()}` : ''}
---------------------------------------
_Sent via Tour and Travel Ventures inquiry form (Kiswah Business Solution)_`;

    const waUrl = createWhatsAppUrl(formattedMessage);
    setGeneratedWhatsAppUrl(waUrl);

    // Provide visual feedback, then open WhatsApp window
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionSuccess(true);
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  return (
    <section id="inquiry" className="py-20 sm:py-28 px-4 sm:px-6 bg-slate-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Plan Your Journey</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Request a <span className="text-emerald-400">Customized Trip Quote</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Fill in your preferred travel details below. We will format your inquiry and instantly connect you with our Lahore team on WhatsApp for a personalized itinerary.
          </p>
        </div>

        {/* Main Form Container */}
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl relative">
          
          {submissionSuccess ? (
            <div className="p-6 sm:p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-4 animate-in fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold text-white">
                Inquiry Form Prepared!
              </h3>

              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Your travel inquiry for <strong>{formData.destination}</strong> has been generated. If WhatsApp did not open automatically, click the button below to connect with our desk directly:
              </p>

              <div className="pt-2">
                <a
                  href={generatedWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-lg shadow-emerald-500/25 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Send Inquiry on WhatsApp</span>
                </a>
              </div>

              <div className="pt-4 text-xs text-slate-400">
                <span>Please note: Submitting an inquiry starts a consultation with our coordinator; bookings are finalized after mutual confirmation.</span>
              </div>

              <button
                type="button"
                onClick={() => setSubmissionSuccess(false)}
                className="text-xs text-slate-400 hover:text-white underline underline-offset-4 pt-2 block mx-auto cursor-pointer"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              {/* Row 1: Full Name & WhatsApp Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Full Name <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Muhammad Ahmad"
                      className={`w-full pl-10 pr-4 py-3 bg-slate-950 border rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                        errors.fullName ? 'border-rose-500' : 'border-slate-800'
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    WhatsApp Number <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      value={formData.whatsappNumber}
                      onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                      placeholder="e.g. 0304 6864612"
                      className={`w-full pl-10 pr-4 py-3 bg-slate-950 border rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                        errors.whatsappNumber ? 'border-rose-500' : 'border-slate-800'
                      }`}
                    />
                  </div>
                  {errors.whatsappNumber && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.whatsappNumber}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Destination & Estimated Travel Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Preferred Destination or Tour <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
                    >
                      <option value="Azad Jammu & Kashmir">Azad Jammu & Kashmir (Neelum, Sharda)</option>
                      <option value="Hunza Valley">Hunza Valley (Passu, Attabad, Karimabad)</option>
                      <option value="Skardu & Deosai">Skardu & Deosai (Shangrila, Cold Desert)</option>
                      <option value="Naran & Kaghan Valley">Naran & Kaghan Valley (Saif-ul-Malook)</option>
                      <option value="Swat Valley & Malam Jabba">Swat Valley & Malam Jabba</option>
                      <option value="Murree & Galiyat">Murree & Galiyat Weekend Retreat</option>
                      <option value="Package: 5-Day Kashmir Valley & Neelum Expedition">Package: 5-Day Kashmir Expedition</option>
                      <option value="Package: 7-Day Hunza & Gilgit-Baltistan Discovery">Package: 7-Day Hunza Discovery</option>
                      <option value="Package: 4-Day Naran, Kaghan & Shogran Escape">Package: 4-Day Naran Kaghan Escape</option>
                      <option value="Package: 8-Day Skardu & Deosai Wilderness Journey">Package: 8-Day Skardu Wilderness</option>
                      <option value="Other / Customized Northern Route">Other / Customized Northern Route</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Estimated Travel Date <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="date"
                      value={formData.travelDate}
                      onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                      className={`w-full pl-10 pr-4 py-3 bg-slate-950 border rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                        errors.travelDate ? 'border-rose-500' : 'border-slate-800'
                      }`}
                    />
                  </div>
                  {errors.travelDate && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.travelDate}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 3: Travelers Count & Trip Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Number of Travelers <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="number"
                      min="1"
                      max="150"
                      value={formData.travelersCount}
                      onChange={(e) => setFormData({ ...formData, travelersCount: e.target.value })}
                      placeholder="e.g. 4"
                      className={`w-full pl-10 pr-4 py-3 bg-slate-950 border rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                        errors.travelersCount ? 'border-rose-500' : 'border-slate-800'
                      }`}
                    />
                  </div>
                  {errors.travelersCount && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.travelersCount}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Trip Type <span className="text-rose-400">*</span>
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5">
                    {(['Family', 'Friends', 'Couple', 'Group', 'Customized'] as const).map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, tripType: type })}
                        className={`py-2 px-1 text-xs rounded-lg font-semibold transition-all cursor-pointer ${
                          formData.tripType === type
                            ? 'bg-emerald-400 text-slate-950 shadow-md shadow-emerald-500/20'
                            : 'bg-slate-950 text-slate-300 hover:text-white border border-slate-800'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Row 4: Requirements & Notes */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Additional Requirements or Preferences (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  placeholder="e.g., Looking for a private Grand Cabin, river rafting session, 4-star hotels in Keran, or relaxed schedule for elderly parents."
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl font-bold text-base text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:from-emerald-300 hover:to-teal-200 transition-all shadow-xl shadow-emerald-500/25 active:scale-98 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <MessageCircle className="w-5 h-5 text-slate-950" />
                  <span>
                    {isSubmitting ? 'Formatting WhatsApp Inquiry...' : 'Submit & Inquire on WhatsApp'}
                  </span>
                </button>
              </div>

              {/* Disclaimer */}
              <div className="text-center text-xs text-slate-400 pt-1">
                Notice: Submitting this form prepares your inquiry directly for our WhatsApp coordinator at <span className="text-slate-300 font-semibold">{BUSINESS_INFO.phone}</span>. No advance payments or automatic confirmations take place without mutual review.
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
