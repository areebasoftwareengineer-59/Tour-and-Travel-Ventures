/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { PopularDestinations } from './components/PopularDestinations';
import { TourPackages } from './components/TourPackages';
import { RealAdventures } from './components/RealAdventures';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CustomerReviews } from './components/CustomerReviews';
import { TripInquiryForm } from './components/TripInquiryForm';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [inquiryDestination, setInquiryDestination] = useState<string>('');
  const [inquiryPackage, setInquiryPackage] = useState<string>('');

  const scrollToInquiry = () => {
    const el = document.getElementById('inquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPackages = () => {
    const el = document.getElementById('packages');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDestinationSelect = (destName: string) => {
    setInquiryDestination(destName);
    setInquiryPackage('');
    scrollToInquiry();
  };

  const handlePackageSelect = (pkgTitle: string) => {
    setInquiryPackage(pkgTitle);
    setInquiryDestination('');
    scrollToInquiry();
  };

  const handleNavigation = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar onPlanTripClick={scrollToInquiry} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onExploreToursClick={scrollToPackages} />

        {/* About Us */}
        <AboutSection />

        {/* Popular Destinations */}
        <PopularDestinations onSelectDestinationForInquiry={handleDestinationSelect} />

        {/* Sample Tour Packages */}
        <TourPackages onSelectPackageForInquiry={handlePackageSelect} />

        {/* Real Adventures & Trip Highlights */}
        <RealAdventures />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Customer Reviews & Ratings */}
        <CustomerReviews />

        {/* Interactive Trip Inquiry Form */}
        <TripInquiryForm
          initialDestination={inquiryDestination}
          initialPackage={inquiryPackage}
        />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Contact & Location */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigation}
        onSelectDestination={handleDestinationSelect}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
