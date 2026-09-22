import React from 'react';
import InteractiveInvitation from './InteractiveInvitation';

export const sundayInCapri = {
  path: '/samples/sunday-in-capri',
  className: 'capri',
  title: 'Sunday in Capri',
  monogram: 'C & A',
  eyebrow: 'A weekend by the sea',
  message: 'Join us for a sunny little celebration of love, laughter, and the Mediterranean.',
  date: 'June 22 · 2025',
  details: ['The Villa San Michele', 'Anacapri, Italy'],
  action: 'Save your seat',
  subject: 'RSVP C and A',
};

export default function SundayInCapri({ sample = sundayInCapri }) {
  return <InteractiveInvitation sample={sample} variant="capri" />;
}
