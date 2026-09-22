import React from 'react';
import InteractiveInvitation from '../InteractiveInvitation';
import './night.css';

export const midnightToast = {
  path: '/samples/midnight-toast',
  className: 'night',
  title: 'Midnight Toast',
  monogram: '25',
  eyebrow: 'Come raise a glass',
  message: 'A birthday celebration under the stars. Dress up, stay late, and bring your best story.',
  date: 'Friday, October 18 · 8 PM',
  details: ['The Lantern Room', 'Brooklyn, New York'],
  action: 'RSVP by October 1',
  subject: 'RSVP Midnight Toast',
};

export default function MidnightToast({ sample = midnightToast }) {
  return <InteractiveInvitation sample={sample} variant="night" />;
}
