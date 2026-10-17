import { Destination, TourPackage, Review } from '../types/travel';

export const BUSINESS_INFO = {
  name: 'Tour and Travel Ventures',
  parentCompany: 'Kiswah Business Solution',
  category: 'Tour and Travel Agency',
  address: 'Office 703, Garden Heights Aibak, Aibak Block Town, Lahore, Pakistan',
  phone: '+92 304 6864612',
  phoneClean: '+923046864612',
  whatsappNumber: '923046864612',
  googleMapsPlusCode: 'F8X9+V5 Lahore, Pakistan',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Garden+Heights+Aibak+Lahore+Pakistan+F8X9%2BV5',
  googleRating: 5.0,
  googleReviewCount: 15,
  ratingNote: 'Based on 15 verified Google reviews, as provided in business records',
  services: [
    'Guided Tours Across Northern Pakistan',
    'Azad Jammu & Kashmir Expeditions',
    'Family Vacation & Leisure Tours',
    'Corporate & Student Group Travel',
    'Scenic Sightseeing & Adventure Excursions',
    'Tailored Customized Travel Planning'
  ]
};

export const createWhatsAppUrl = (message: string): string => {
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export const POPULAR_DESTINATIONS: Destination[] = [
  {
    id: 'kashmir',
    name: 'Azad Jammu & Kashmir',
    region: 'Azad Kashmir',
    tagline: 'Lush Pine Valleys & Glacial Rivers',
    image: '/src/assets/images/kashmir_neelum_valley_1792250823250.jpg',
    alt: 'Neelum Valley river and lush green mountains in Azad Kashmir Pakistan',
    description: 'Explore the heavenly scenery of Neelum Valley, Sharda, Arang Kel, and Keran with cool glacial breezes and terraced mountain orchards.',
    highlights: ['Neelum River Vistas', 'Historic Sharda Peeth', 'Scenic Arang Kel Village', 'Chitta Katha & Ratti Gali access'],
    bestTimeToVisit: 'May to October',
    suitableFor: ['Families', 'Couples', 'Group Tours']
  },
  {
    id: 'hunza',
    name: 'Hunza Valley',
    region: 'Gilgit-Baltistan',
    tagline: 'Land of High Peaks & Warm Hospitality',
    image: '/src/assets/images/hunza_valley_passu_1792250823330.jpg',
    alt: 'Majestic Passu Cones and winding Karakoram Highway in Hunza Valley Pakistan',
    description: 'Witness the iconic Passu Cones, turquoise Attabad Lake, ancient Baltit and Altit Forts, and the legendary hospitality of northern Pakistan.',
    highlights: ['Attabad Lake Boating', 'Passu Cathedral Peaks', 'Historic Baltit Fort', 'Eagle’s Nest Sunset View'],
    bestTimeToVisit: 'April to November',
    suitableFor: ['Adventure Seekers', 'Couples', 'Family Vacations']
  },
  {
    id: 'skardu',
    name: 'Skardu & Deosai',
    region: 'Gilgit-Baltistan',
    tagline: 'Gateway to Giants & Pristine Lakes',
    image: '/src/assets/images/skardu_deosai_lake_1792250824003.jpg',
    alt: 'Shangrila Resort on Lower Kachura Lake in Skardu Pakistan',
    description: 'Discover the world’s second-highest plateau at Deosai, majestic Shangrila Lake, Sarfaranga Cold Desert dunes, and Upper Kachura Lake.',
    highlights: ['Shangrila Lower Kachura', 'Deosai National Park & Sheosar Lake', 'Cold Desert Dunes', 'Manthoka Waterfall'],
    bestTimeToVisit: 'June to September',
    suitableFor: ['Explorers', 'Photography', 'Group Trips']
  },
  {
    id: 'naran-kaghan',
    name: 'Naran & Kaghan Valley',
    region: 'Khyber Pakhtunkhwa',
    tagline: 'Glacial Lakes, Meadows & Pine Forests',
    image: '/src/assets/images/naran_kaghan_lake_1792250824649.jpg',
    alt: 'Lake Saif-ul-Malook surrounded by Malika Parbat peak in Kaghan Valley Pakistan',
    description: 'Home to legendary Lake Saif-ul-Malook, Babusar Pass, Lulusar Lake, and lush pine plateaus of Shogran and Siri Paye.',
    highlights: ['Lake Saif-ul-Malook Boat Ride', 'Babusar Top (13,700 ft)', 'Shogran & Siri Paye Meadows', 'Kunhar River Rafting'],
    bestTimeToVisit: 'June to October',
    suitableFor: ['Families', 'Friends Groups', 'Nature Lovers']
  },
  {
    id: 'swat',
    name: 'Swat Valley',
    region: 'Khyber Pakhtunkhwa',
    tagline: 'The Switzerland of the East',
    image: '/src/assets/images/swat_malam_jabba_1792250846622.jpg',
    alt: 'Lush green valleys, rivers, and mountains of Swat Valley and Malam Jabba',
    description: 'Experience alpine meadows, ski chairlifts at Malam Jabba, serene Kalam valley, and crystal waters of Mahodand Lake.',
    highlights: ['Malam Jabba Ski Resort & Zipline', 'Kalam & Ushu Forest', 'Mahodand & Kundol Lakes', 'Fizagat Riverside'],
    bestTimeToVisit: 'Year-Round (Summer Scenery, Winter Snow)',
    suitableFor: ['Families', 'Corporate Groups', 'Couples']
  },
  {
    id: 'murree',
    name: 'Murree & Galiyat',
    region: 'Punjab & KP Border',
    tagline: 'Accessible Mountain Escapes & Pine Trails',
    image: '/src/assets/images/murree_galiyat_pine_1792250847928.jpg',
    alt: 'Misty pine-covered winding mountain road in Murree and Galiyat hills',
    description: 'The classic hill station retreat featuring cool pine breezes, scenic chairlifts, historic Mall Road, Bhurban, Nathia Gali, and Ayubia pipeline tracks.',
    highlights: ['Nathia Gali Forest Trails', 'Patriata Chairlift & Cable Car', 'Mukshpuri Top Trek', 'Mall Road Strolls'],
    bestTimeToVisit: 'All Seasons',
    suitableFor: ['Quick Weekend Getaways', 'Families', 'Relaxed Groups']
  }
];

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'pkg-kashmir-5d',
    title: '5-Day Kashmir Valley & Neelum Expedition',
    destination: 'Azad Jammu & Kashmir',
    category: 'Kashmir',
    duration: '5 Days / 4 Nights',
    image: '/src/assets/images/kashmir_neelum_valley_1792250823250.jpg',
    alt: 'Neelum valley river in Azad Kashmir',
    description: 'A curated journey through the picturesque Neelum Valley starting from Lahore, visiting Muzaffarabad, Keran, Sharda, and Arang Kel.',
    sampleItinerary: [
      { day: 'Day 1', title: 'Departure from Lahore to Muzaffarabad', details: 'Early departure via Motorway. Sightseeing at Kohala Bridge, Muzaffarabad Riverside, and transfer to hotel.' },
      { day: 'Day 2', title: 'Muzaffarabad to Keran & Neelum Valley', details: 'Scenic drive along the crystal Neelum River. Explore Keran viewpoints and riverside evening ambiance.' },
      { day: 'Day 3', title: 'Keran to Historic Sharda & Upper Neelum', details: 'Visit historic Sharda Peeth ruins, wooden suspension bridges, and traditional Kashmiri village life.' },
      { day: 'Day 4', title: 'Day Trip to Arang Kel & Hiking Trails', details: 'Chairlift ride and scenic trek to the pearl of Neelum Valley, Arang Kel. Alpine meadows and mountain photography.' },
      { day: 'Day 5', title: 'Return Journey to Lahore', details: 'Leisurely breakfast, scenic return drive with stops for local cuisine, arriving in Lahore by late night.' }
    ],
    includedHighlights: ['Private/Shared Coordinated Transport', 'Dedicated Friendly Tour Coordinator', 'Hotel Accommodations Guidance', 'Major Sightseeing Stops'],
    priceNote: 'Request a Quote'
  },
  {
    id: 'pkg-hunza-7d',
    title: '7-Day Hunza & Gilgit-Baltistan Discovery',
    destination: 'Hunza Valley & Gilgit',
    category: 'Gilgit-Baltistan',
    duration: '7 Days / 6 Nights',
    image: '/src/assets/images/hunza_valley_passu_1792250823330.jpg',
    alt: 'Passu cones mountain highway in Hunza Valley',
    description: 'An iconic overland expedition along the world-renowned Karakoram Highway up to Attabad Lake, Passu Cones, and Karimabad.',
    sampleItinerary: [
      { day: 'Day 1', title: 'Lahore to Chilas / Naran', details: 'Departure from Lahore, driving through the scenic passes or Hazara Motorway towards the northern gateway.' },
      { day: 'Day 2', title: 'Travel to Gilgit & Karimabad Hunza', details: 'Witness 3 Mountain Ranges junction, view Rakaposhi peak viewpoint, check-in at Hunza.' },
      { day: 'Day 3', title: 'Baltit & Altit Forts Exploration', details: 'Guided tour of the 800-year-old Baltit Fort, local Hunza bazaar, apricot gardens, and Eagle’s Nest.' },
      { day: 'Day 4', title: 'Attabad Lake & Passu Cathedral Cones', details: 'Boating on Attabad Lake, suspension bridges, Passu glacier viewpoints, and scenic photo sessions.' },
      { day: 'Day 5', title: 'Excursion towards Khunjerab Border', details: 'Scenic ride towards the high-altitude Pak-China border at Khunjerab Pass (subject to road conditions).' },
      { day: 'Day 6', title: 'Southbound Return towards Besham / Naran', details: 'Gradual descent with sightseeing stops and comfortable overnight stopover.' },
      { day: 'Day 7', title: 'Arrival back in Lahore', details: 'Smooth transit back to Lahore with cherished memories of the Karakoram.' }
    ],
    includedHighlights: ['Karakoram Highway Sightseeing', 'Attabad Lake Excursion', 'Fort Visits & Cultural Walk', 'Dedicated Group Guide'],
    priceNote: 'Request a Quote'
  },
  {
    id: 'pkg-naran-4d',
    title: '4-Day Naran, Kaghan & Shogran Escape',
    destination: 'Naran & Kaghan Valley',
    category: 'Khyber Pakhtunkhwa',
    duration: '4 Days / 3 Nights',
    image: '/src/assets/images/naran_kaghan_lake_1792250824649.jpg',
    alt: 'Lake Saif-ul-Malook Kaghan Valley',
    description: 'A popular mountain getaway visiting pine-clad Shogran plateau, famous Lake Saif-ul-Malook, and the high Babusar Pass.',
    sampleItinerary: [
      { day: 'Day 1', title: 'Lahore to Shogran Valley', details: 'Drive via Hazara Motorway and Balakot. 4x4 Jeep transfer to Shogran plateau for an alpine sunset.' },
      { day: 'Day 2', title: 'Siri Paye Meadows & Drive to Naran', details: 'Excursion to the green ridge of Siri Paye. Descend and continue towards vibrant Naran town along Kunhar River.' },
      { day: 'Day 3', title: 'Saif-ul-Malook Lake & Babusar Top', details: 'Morning 4x4 jeep safari to glacial Lake Saif-ul-Malook, followed by drive up to Babusar Top (13,700 ft).' },
      { day: 'Day 4', title: 'River Rafting & Return to Lahore', details: 'Optional Kunhar river rafting, Balakot stopover, and smooth evening drive back to Lahore.' }
    ],
    includedHighlights: ['Shogran & Siri Paye Jeep Ride', 'Saif-ul-Malook Lake Excursion', 'Kunhar Riverside Stops', 'Guided Coordination'],
    priceNote: 'Request a Quote'
  },
  {
    id: 'pkg-skardu-8d',
    title: '8-Day Skardu & Deosai Wilderness Journey',
    destination: 'Skardu & Shigar',
    category: 'Gilgit-Baltistan',
    duration: '8 Days / 7 Nights',
    image: '/src/assets/images/skardu_deosai_lake_1792250824003.jpg',
    alt: 'Shangrila Resort Lake in Skardu',
    description: 'Immerse yourself in dramatic desert dunes beneath snow caps, alpine plateaus, and pristine glacial lakes.',
    sampleItinerary: [
      { day: 'Day 1', title: 'Lahore to Chilas Stopover', details: 'Departure from Lahore via Hazara Motorway with overnight stay at Chilas.' },
      { day: 'Day 2', title: 'Scenic Skardu Highway Drive', details: 'Drive along the Indus River canyon on the newly built Skardu road, arriving at Skardu.' },
      { day: 'Day 3', title: 'Shangrila Lake & Upper Kachura', details: 'Visit Shangrila resort, tranquil Upper Kachura lake boat ride, and fresh trout experiences.' },
      { day: 'Day 4', title: 'Deosai National Park & Sheosar Lake', details: 'Full-day 4x4 safari onto the vast Deosai plains, Bara Pani, and crystal-clear Sheosar Lake.' },
      { day: 'Day 5', title: 'Cold Desert & Shigar Fort', details: 'Sunset at Sarfaranga Cold Desert sand dunes, followed by a heritage tour of Shigar Fort.' },
      { day: 'Day 6', title: 'Manthoka Waterfall & Khaplu Excursion', details: 'Scenic drive to Manthoka Waterfall and historic Khaplu Palace gardens.' },
      { day: 'Day 7', title: 'Return transit to Naran/Besham', details: 'Southward return drive through picturesque mountain passes.' },
      { day: 'Day 8', title: 'Arrival in Lahore', details: 'Final travel leg back to Lahore.' }
    ],
    includedHighlights: ['Deosai 4x4 Plateau Safari', 'Kachura Lakes Exploration', 'Sarfaranga Desert Dunes', 'Heritage Fort Coordination'],
    priceNote: 'Request a Quote'
  },
  {
    id: 'pkg-swat-3d',
    title: '3-Day Swat Valley & Malam Jabba Tour',
    destination: 'Swat Valley',
    category: 'Khyber Pakhtunkhwa',
    duration: '3 Days / 2 Nights',
    image: '/src/assets/images/swat_malam_jabba_1792250846622.jpg',
    alt: 'Swat Valley mountains and river',
    description: 'A refreshing retreat to the green hills of Swat, enjoying the mountain chairlifts at Malam Jabba and riverside relaxation.',
    sampleItinerary: [
      { day: 'Day 1', title: 'Lahore to Swat via Swat Motorway', details: 'Smooth highway drive to Mingora/Fizagat. Riverside stroll along Swat River.' },
      { day: 'Day 2', title: 'Malam Jabba Ski Resort & Chairlift', details: 'Ascend to Malam Jabba hilltop resort for panoramic pine views, chairlift, and zipline thrills.' },
      { day: 'Day 3', title: 'White Palace Marghazar & Return to Lahore', details: 'Visit the historic Marble White Palace at Marghazar and smooth afternoon return to Lahore.' }
    ],
    includedHighlights: ['Malam Jabba Hill Station', 'Swat River Front', 'White Palace Visit', 'Family-Friendly Pace'],
    priceNote: 'Request a Quote'
  },
  {
    id: 'pkg-murree-2d',
    title: '2-Day Murree Hills & Galiyat Weekend Retreat',
    destination: 'Murree & Galiyat',
    category: 'Punjab',
    duration: '2 Days / 1 Night',
    image: '/src/assets/images/murree_galiyat_pine_1792250847928.jpg',
    alt: 'Murree pine forests road',
    description: 'The ideal quick weekend rejuvenation from Lahore to escape the summer heat in the cool, breezy pine hills of Galiyat.',
    sampleItinerary: [
      { day: 'Day 1', title: 'Lahore to Murree & Patriata', details: 'Direct morning departure via M-2. Ride Patriata New Murree cable car and evening stroll on Mall Road.' },
      { day: 'Day 2', title: 'Nathia Gali Pipeline Walk & Return', details: 'Morning excursion to Nathia Gali, scenic forest trail walk, and pleasant evening drive back to Lahore.' }
    ],
    includedHighlights: ['Patriata Cable Car Stops', 'Nathia Gali Walkway', 'Quick Weekend Format', 'Coordinated Travel'],
    priceNote: 'Request a Quote'
  }
];

export const REAL_ADVENTURES = [
  {
    id: 'rafting',
    title: 'Whitewater River Rafting',
    category: 'Water Adventure',
    location: 'Kunhar & Neelum River Rapids',
    image: '/src/assets/images/pakistan_river_rafting_1792250848321.jpg',
    alt: 'Tour group enjoying river rafting in Kunhar River with life jackets and paddles',
    description: 'Feel the rush of pristine glacial torrents under the supervision of experienced river crews with certified safety gear.'
  },
  {
    id: 'jeep-safari',
    title: 'Rugged 4x4 Mountain Jeep Safaris',
    category: 'Off-Road Exploration',
    location: 'Saif-ul-Malook, Siri Paye & Babusar',
    image: '/src/assets/images/pakistan_jeep_safari_1792250847594.jpg',
    alt: 'Classic 4x4 mountain safari jeep crossing mountain stream with travelers',
    description: 'Traverse scenic streams, steep mountain trails, and rugged terrains to reach untouched viewpoints and alpine meadows.'
  },
  {
    id: 'alpine-lakes',
    title: 'High-Altitude Glacial Lakes',
    category: 'Scenic Sightseeing',
    location: 'Lake Saif-ul-Malook & Ratti Gali',
    image: '/src/assets/images/naran_kaghan_lake_1792250824649.jpg',
    alt: 'High altitude glacial alpine lake in Pakistan',
    description: 'Stand before turquoise waters cradled by snow-crested peaks, taking in unforgettable vistas and crisp mountain air.'
  },
  {
    id: 'valley-expeditions',
    title: 'Enchanting Neelum & Hunza Vistas',
    category: 'Cultural & Nature Tours',
    location: 'Kashmir & Karakoram Valleys',
    image: '/src/assets/images/kashmir_neelum_valley_1792250823250.jpg',
    alt: 'Green mountain valley and rivers in Kashmir',
    description: 'Immerse your family and friends in peaceful wooden villages, rushing streams, and the warmth of northern communities.'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Cooperative Tour Guidance',
    description: 'Friendly, courteous tour coordinators who support you throughout the journey, ensuring every traveler feels welcome, cared for, and informed.',
    iconName: 'Compass'
  },
  {
    title: 'Organized Itineraries',
    description: 'Thoughtfully planned route schedules that balance exciting sightseeing stops with comfortable rest and dining intervals.',
    iconName: 'CalendarCheck'
  },
  {
    title: 'Group & Family Trip Planning',
    description: 'Dedicated arrangements tailored specifically for families, couples, and group gatherings, with full consideration for privacy and comfort.',
    iconName: 'Users'
  },
  {
    title: 'Comfortable Travel Coordination',
    description: 'Carefully arranged vehicles, skilled mountain drivers, and checked accommodation options so you can relax and savor the landscapes.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Personalized Assistance',
    description: 'Direct communication from our Lahore office with quick WhatsApp assistance before, during, and after your trip.',
    iconName: 'Sparkles'
  }
];

export const CUSTOMER_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    clientType: 'Traveler from Lahore',
    tripName: 'Kashmir Scenic Valley Trip',
    rating: 5,
    keyHighlight: 'Guidance Throughout the Journey & Tour Operator Zain',
    comment: 'Praise for a wonderful Kashmir trip! The guidance provided throughout the entire journey was outstanding, with special appreciation for tour operator Zain who made sure every traveler was looked after with great care and attention.',
    location: 'Azad Kashmir'
  },
  {
    id: 'rev-2',
    clientType: 'Group Tour Traveler',
    tripName: 'Northern Pakistan Tour',
    rating: 5,
    keyHighlight: 'Smooth Organization & Multiple Attractions',
    comment: 'Appreciated the smooth organization and well-planned itinerary. We were able to visit multiple key attractions without feeling rushed, enjoying every viewpoint and valley in a relaxed, well-coordinated manner.',
    location: 'Northern Areas'
  },
  {
    id: 'rev-3',
    clientType: 'Women’s Group Trip',
    tripName: 'Guided Group Adventure',
    rating: 5,
    keyHighlight: 'Cooperative Guide & Comfortable Group Experience',
    comment: 'Highlighted the very cooperative guide, attentive trip management, and comfortable, secure experience provided for a group of women traveling together. Highly commended for respectful coordination.',
    location: 'Scenic Valleys'
  }
];

export const FREQUENT_QUESTIONS = [
  {
    question: 'How do I get an exact price quote for my trip?',
    answer: 'Because rates vary based on your selected dates, group size, vehicle preference (private vs. shared), and hotel tier, we provide personalized quotes on request. Simply submit our quick inquiry form or message us directly on WhatsApp with your details.'
  },
  {
    question: 'Where do your tours depart from?',
    answer: 'Our main office is located in Lahore (Garden Heights Aibak), and our regular group departures start from Lahore. We also coordinate pickups along the route for travelers joining from Islamabad and nearby cities upon prior arrangement.'
  },
  {
    question: 'Are your tours suitable for families and female travelers?',
    answer: 'Yes! We place the highest priority on a respectful, safe, and comfortable environment for families, elders, and women’s groups, as highlighted by our verified customer feedback.'
  },
  {
    question: 'Can you customize an itinerary for our private group?',
    answer: 'Absolutely. Whether you want a romantic honeymoon retreat, a family vacation with relaxed pacing, or an adventurous friends expedition, our team at Tour and Travel Ventures will tailor every stop to your preferences.'
  }
];
