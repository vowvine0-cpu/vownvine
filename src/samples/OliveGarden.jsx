import React from 'react';
import InteractiveInvitation from './InteractiveInvitation';

export const oliveGarden = {
  path: '/samples/olive-garden',
  className: 'olive',
  title: 'invite you to the olive garden',
  monogram: 'M & J',
  eyebrow: 'Together with their families',
  message: 'to celebrate the beginning of their forever.',
  date: 'Saturday, September 14, 2024',
  details: ['at half past four in the afternoon', 'Villa Verde · Napa Valley'],
  action: 'Kindly RSVP',
  subject: 'RSVP M and J',
};

export default function OliveGarden({ sample = oliveGarden }) {
  return <InteractiveInvitation sample={sample} variant="olive" />;
}
