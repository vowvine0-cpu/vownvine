import React from 'react';
import InteractiveInvitation from '../InteractiveInvitation';
import './olive.css';

export const oliveGarden = {
  path: '/samples/olive-garden',
  className: 'olive',
  title: 'Alexander & Daria',
  monogram: 'A & D',
  eyebrow: 'We are getting married',
  message: 'Together with our families, we invite you to celebrate our beginning.',
  date: '24 · 08 · 2025 — Saturday',
  details: ['Villa de Luce', 'Tuscany, Italy'],
  action: 'RSVP now',
  subject: 'RSVP Alexander and Daria',
};

export default function OliveGarden({ sample = oliveGarden }) {
  return <InteractiveInvitation sample={sample} variant="olive" />;
}
