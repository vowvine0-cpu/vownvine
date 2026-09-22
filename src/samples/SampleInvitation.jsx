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
      <InteractiveInvitation sample={sample} />
    </main>
  );
}

function InteractiveInvitation({ sample }) {
  const [rsvpOpen, setRsvpOpen] = React.useState(false);
  const [galleryOpen, setGalleryOpen] = React.useState(false);
  const [rsvpSent, setRsvpSent] = React.useState(false);
  const [countdown, setCountdown] = React.useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const gallery = [
    'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?auto=format&fit=crop&w=900&q=85',
  ];

  React.useEffect(() => {
    const target = new Date('2026-12-14T16:30:00').getTime();
    const tick = () => {
      const distance = Math.max(0, target - Date.now());
      setCountdown({
        days: Math.floor(distance / 86400000),
        hours: Math.floor(distance / 3600000) % 24,
        minutes: Math.floor(distance / 60000) % 60,
        seconds: Math.floor(distance / 1000) % 60,
      });
    };
    tick();
    const timer = window.setInterval(tick, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="microsite">
      <nav className="sample-nav"><a href="#welcome">Welcome</a><a href="#details">Details</a><a href="#story">Our story</a><a href="#photos">Photos</a><button onClick={() => setRsvpOpen(true)}>RSVP</button></nav>
      <section className="microsite-hero" id="welcome">
        <div className="sample-card hero-card-sample"><span className="sample-leaf sample-leaf-one">❧</span><span className="sample-leaf sample-leaf-two">❧</span><div className="sample-monogram">{sample.monogram}</div><div className="sample-eyebrow">{sample.eyebrow}</div><h1>{sample.title}</h1><p>{sample.message}</p><div className="sample-date">{sample.date}</div><div className="sample-details">{sample.details[0]}<br />{sample.details[1]}</div><button className="sample-rsvp" onClick={() => setRsvpOpen(true)}>{sample.action}</button></div>
        <div className="countdown"><p className="sample-eyebrow">Counting down to our day</p><div><strong>{countdown.days}</strong><span>days</span><strong>{countdown.hours}</strong><span>hrs</span><strong>{countdown.minutes}</strong><span>min</span><strong>{countdown.seconds}</strong><span>sec</span></div></div>
      </section>
      <section className="microsite-section detail-section" id="details"><p className="sample-eyebrow">The celebration</p><h2>A day to remember.</h2><div className="detail-grid"><article><span>01</span><h3>Ceremony</h3><p>4:30 in the afternoon<br />The Olive Garden</p><button onClick={() => window.open('https://maps.google.com', '_blank')}>View map ↗</button></article><article><span>02</span><h3>Dinner &amp; dancing</h3><p>6:00 in the evening<br />Under the old oak trees</p><button onClick={() => setRsvpOpen(true)}>See you there →</button></article><article><span>03</span><h3>Dress code</h3><p>Garden formal<br />Wear something joyful</p><button onClick={() => setGalleryOpen(true)}>Find inspiration →</button></article></div></section>
      <section className="microsite-section story-section-sample" id="story"><div><p className="sample-eyebrow">How it began</p><h2>It was always<br /><em>you and me.</em></h2><p>Somewhere between a shared table and a long walk home, we found our favorite person. We cannot wait to celebrate with the people who made our story possible.</p><button className="sample-rsvp secondary" onClick={() => setGalleryOpen(true)}>View our story <span>→</span></button></div><div className="story-quote">“The best is<br />yet to come.”</div></section>
      <section className="microsite-section photos-section" id="photos"><div className="section-line"><p className="sample-eyebrow">A few favorite moments</p><button onClick={() => setGalleryOpen(true)}>Open gallery ↗</button></div><div className="photo-grid">{gallery.map((image, index) => <button key={image} onClick={() => setGalleryOpen(true)}><img src={image} alt={`Celebration moment ${index + 1}`} /></button>)}</div></section>
      <section className="gift-section"><p className="sample-eyebrow">Your presence is enough</p><h2>But if you’d like<br /><em>to gift a little...</em></h2><button onClick={() => alert('Registry details can be connected here.')}>View registry →</button></section>
      <footer className="microsite-footer"><span>{sample.monogram}</span><p>Made with love for our favorite people.</p><button onClick={() => setRsvpOpen(true)}>RSVP now ↑</button></footer>
      {rsvpOpen && <div className="sample-modal" onClick={() => setRsvpOpen(false)}><form onClick={(event) => event.stopPropagation()} onSubmit={(event) => { event.preventDefault(); setRsvpSent(true); }}><button type="button" className="modal-close" onClick={() => setRsvpOpen(false)}>×</button>{rsvpSent ? <div className="rsvp-success"><span>✦</span><h2>We’ll see you there.</h2><p>Thank you for letting us know. We cannot wait to celebrate with you.</p><button type="button" className="sample-rsvp" onClick={() => setRsvpOpen(false)}>Close</button></div> : <><p className="sample-eyebrow">Kindly reply</p><h2>Will you join us?</h2><label>Your name<input required placeholder="First and last name" /></label><label>Will you be there?<select defaultValue="yes"><option value="yes">Joyfully, yes</option><option value="no">Regretfully, no</option></select></label><label>Message<textarea rows="3" placeholder="A note for the happy couple (optional)" /></label><button className="sample-rsvp" type="submit">Send RSVP →</button></>}</form></div>}
      {galleryOpen && <div className="gallery-modal" onClick={() => setGalleryOpen(false)}><button className="modal-close" onClick={() => setGalleryOpen(false)}>×</button><div className="gallery-viewer" onClick={(event) => event.stopPropagation()}>{gallery.map((image) => <img key={image} src={image} alt="Gallery moment" />)}</div></div>}
    </div>
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
