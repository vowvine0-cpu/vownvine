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
};

export default function OliveGarden({ sample = oliveGarden }) {
  return <OliveWedding sample={sample} />;
}
