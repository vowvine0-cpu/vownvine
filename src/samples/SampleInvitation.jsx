import React from 'react';
import './sample.css';

export const sampleTemplates = {
  '/samples/olive-garden': {
    className: 'olive',
    title: 'invite you to the olive garden',
    monogram: 'M & J',
    eyebrow: 'Together with their families',
    message: 'to celebrate the beginning of their forever.',
    date: 'Saturday, September 14, 2024',
    details: ['at half past four in the afternoon', 'Villa Verde · Napa Valley'],
    action: 'Kindly RSVP',
    subject: 'RSVP M and J',
  },
  '/samples/sunday-in-capri': {
    className: 'capri',
    title: 'Sunday in Capri',
    monogram: 'C & A',
    eyebrow: 'A weekend by the sea',
    message: 'Join us for a sunny little celebration of love, laughter, and the Mediterranean.',
    date: 'June 22 · 2025',
    details: ['The Villa San Michele', 'Anacapri, Italy'],
    action: 'Save your seat',
    subject: 'RSVP C and A',
  },
  '/samples/midnight-toast': {
    className: 'night',
    title: 'Midnight Toast',
    monogram: '25',
    eyebrow: 'Come raise a glass',
    message: 'A birthday celebration under the stars. Dress up, stay late, and bring your best story.',
    date: 'Friday, October 18 · 8 PM',
    details: ['The Lantern Room', 'Brooklyn, New York'],
    action: 'RSVP by October 1',
    subject: 'RSVP Midnight Toast',
  },
};

export function InvitationCard({ sample }) {

  return (
    <main className={`sample-page ${sample.className}`}>
      <a className="sample-back" href="/">← Vow &amp; Vine</a>
      <section className="sample-card">
        <span className="sample-leaf sample-leaf-one">❧</span>
        <span className="sample-leaf sample-leaf-two">❧</span>
        <div className="sample-monogram">{sample.monogram}</div>
        <div className="sample-eyebrow">{sample.eyebrow}</div>
        <h1>{sample.title}</h1>
        <p>{sample.message}</p>
        <div className="sample-date">{sample.date}</div>
        <div className="sample-details">{sample.details[0]}<br />{sample.details[1]}</div>
        <a className="sample-rsvp" href={`mailto:rsvp@example.com?subject=${encodeURIComponent(sample.subject)}`}>{sample.action}</a>
      </section>
    </main>
  );
}

export function InvitationEditor({ path }) {
  const template = sampleTemplates[path] || sampleTemplates['/samples/olive-garden'];
  const [draft, setDraft] = React.useState(() => {
    const saved = localStorage.getItem(`vow-vine-${path}`);
    return saved ? JSON.parse(saved) : template;
  });
  const update = (key, value) => setDraft((current) => ({ ...current, [key]: value }));
  const updateDetail = (index, value) => setDraft((current) => ({ ...current, details: current.details.map((item, itemIndex) => itemIndex === index ? value : item) }));

  return (
    <main className="editor-page">
      <div className="editor-toolbar"><a className="sample-back" href="/">← Vow &amp; Vine</a><div><strong>Edit your invitation</strong><span>Changes preview instantly</span></div><a className="button dark" href={`/#sample=${path.split('/').pop()}`}>Preview invitation <span>→</span></a></div>
      <div className="editor-layout">
        <section className="editor-panel">
          <p className="sample-eyebrow">Personalize your design</p>
          <h1>Make it yours.</h1>
          <label>Names or monogram<input value={draft.monogram} onChange={(event) => update('monogram', event.target.value)} /></label>
          <label>Invitation title<input value={draft.title} onChange={(event) => update('title', event.target.value)} /></label>
          <label>Small heading<input value={draft.eyebrow} onChange={(event) => update('eyebrow', event.target.value)} /></label>
          <label>Main message<textarea rows="3" value={draft.message} onChange={(event) => update('message', event.target.value)} /></label>
          <label>Date or time<input value={draft.date} onChange={(event) => update('date', event.target.value)} /></label>
          <label>Venue<input value={draft.details[0]} onChange={(event) => updateDetail(0, event.target.value)} /></label>
          <label>Location<input value={draft.details[1]} onChange={(event) => updateDetail(1, event.target.value)} /></label>
          <label>Button text<input value={draft.action} onChange={(event) => update('action', event.target.value)} /></label>
          <a className="button dark editor-save" href={`/#checkout=${path.split('/').pop()}`} onClick={() => localStorage.setItem(`vow-vine-${path}`, JSON.stringify(draft))}>Save &amp; continue to payment <span>→</span></a>
        </section>
        <div className="editor-preview"><p className="preview-label">LIVE PREVIEW</p><InvitationCard sample={draft} /></div>
      </div>
    </main>
  );
}

export default function SampleInvitation({ path }) {
  const sample = sampleTemplates[path] || sampleTemplates['/samples/olive-garden'];
  const saved = localStorage.getItem(`vow-vine-${path}`);
  const slug = path.split('/').pop();
  return (
    <>
      <InvitationCard sample={saved ? JSON.parse(saved) : sample} />
      <a className="sample-customize" href={`/#edit=${slug}`}>Customize this design <span>→</span></a>
    </>
  );
}
