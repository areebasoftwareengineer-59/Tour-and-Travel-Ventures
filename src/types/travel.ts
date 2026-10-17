export interface Destination {
  id: string;
  name: string;
  region: string;
  tagline: string;
  image: string;
  alt: string;
  description: string;
  highlights: string[];
  bestTimeToVisit: string;
  suitableFor: string[];
}

export interface TourPackage {
  id: string;
  title: string;
  destination: string;
  category: 'Kashmir' | 'Gilgit-Baltistan' | 'Khyber Pakhtunkhwa' | 'Punjab';
  duration: string;
  image: string;
  alt: string;
  description: string;
  sampleItinerary: {
    day: string;
    title: string;
    details: string;
  }[];
  includedHighlights: string[];
  priceNote: string;
}

export interface Review {
  id: string;
  clientType: string;
  tripName: string;
  rating: number;
  comment: string;
  keyHighlight: string;
  location: string;
}

export interface InquiryFormData {
  fullName: string;
  whatsappNumber: string;
  destination: string;
  travelDate: string;
  travelersCount: string;
  tripType: 'Family' | 'Friends' | 'Couple' | 'Group' | 'Customized';
  requirements: string;
}
