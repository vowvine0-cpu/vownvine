import React from 'react';
import OliveWedding from './OliveWedding';
import './olive.css';

export const oliveGarden = {
  path: '/samples/olive-garden',
  className: 'olive',
  title: 'Camille & Edward',
  monogram: 'C & E',
  eyebrow: 'We are getting married',
  message: 'Together with our families, we invite you to celebrate our beginning.',
  date: '18 · 11 · 2027',
  details: ['Kokkini Beach House', 'Mykonos, Greece'],
  action: 'Kindly RSVP',
  subject: 'RSVP Camille and Edward',
  venueName: 'Kokkini',
  venueTagline: 'Where the sea meets the sky',
  venueStory: 'Kokkini is a little corner of the island we love most: whitewashed walls, salt in the air, and golden light that stays with you long after sunset.',
  story: 'It started with a wrong turn, a borrowed map, and the best coffee on the island. Somewhere between a long summer afternoon and a last ferry home, Camille and Edward found the kind of love that feels like coming home.',
  familyNote: 'We feel incredibly lucky to have everything we need, and your love and support mean the world to us. Having you with us in Mykonos will make this day more beautiful than we could ever imagine. Thank you for being part of our story.',
  musicUrl: '',
  musicName: 'MYKONOS MIX',
  schedule: [
    ['4:00 PM', 'The ceremony', 'Say “I do” with the Aegean glittering behind us.'],
    ['5:30 PM', 'Cocktails', 'Raise a glass as the sun begins to soften.'],
    ['6:30 PM', 'Dinner', 'Long tables, local flavors, and familiar faces.'],
  ],
};

export default function OliveGarden({ sample = oliveGarden }) {
  return <OliveWedding sample={sample} />;
}
