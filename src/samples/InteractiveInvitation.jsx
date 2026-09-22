import React from 'react';
import './sample.css';

export default function InteractiveInvitation({ sample, variant = 'olive' }) {
  const isOlive = variant === 'olive';
  const [rsvpOpen, setRsvpOpen] = React.useState(false);
  const [galleryOpen, setGalleryOpen] = React.useState(false);
  const [rsvpSent, setRsvpSent] = React.useState(false);
  const [language, setLanguage] = React.useState('en');
  const [rsvpChoice, setRsvpChoice] = React.useState('yes');
  const [countdown, setCountdown] = React.useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const gallery = isOlive ? [
    '/olive/couple.jpg',
    '/olive/table.jpg',
    '/olive/flowers.jpg',
  ] : [
    'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?auto=format&fit=crop&w=900&q=85',
  ];

  React.useEffect(() => {
    const target = new Date('2025-08-24T16:30:00').getTime();
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

  React.useEffect(() => {
    const sections = document.querySelectorAll('.wedding-theme .reveal');
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')), { threshold: 0.12 });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const russian = language === 'ru';
  const labels = russian ? { story: 'Наша история', details: 'Детали', gallery: 'Галерея', rsvp: 'Ответить', welcome: 'Веб-приглашение на свадьбу', storyTitle: 'С самого начала', detailsTitle: 'Важные детали', party: 'Наши люди', moments: 'Моменты', note: 'Ваше присутствие — лучший подарок', name: 'Ваше имя', yes: 'С радостью принимаю', no: 'К сожалению, не смогу', dietary: 'Пожелания по питанию', submit: 'Отправить ответ' } : { story: 'Our story', details: 'Details', gallery: 'Gallery', rsvp: 'RSVP', welcome: 'Wedding invitation', storyTitle: 'The beginning', detailsTitle: 'The details', party: 'Meet our people', moments: 'Moments', note: 'Your presence is the greatest gift of all', name: 'Your name', yes: 'Accepts with pleasure', no: 'Declines with regret', dietary: 'Dietary requirements', submit: 'Submit RSVP' };

  return (
    <div className={`microsite microsite-${variant} wedding-theme`}>
      <nav className="sample-nav wedding-nav"><a className="nav-mark" href="#welcome">{sample.monogram}</a><div><a href="#welcome">Home</a><a href="#story">{labels.story}</a><a href="#details">{labels.details}</a><a href="#gallery">{labels.gallery}</a><button className="language-toggle" onClick={() => setLanguage(russian ? 'en' : 'ru')}>{russian ? 'EN' : 'RU'}</button><button onClick={() => setRsvpOpen(true)}>{labels.rsvp}</button></div></nav>
      <section className="wedding-hero" id="welcome"><div className="hero-photo" /><span className="botanical botanical-left">❧</span><span className="botanical botanical-right">❧</span><div className="wedding-hero-copy"><div className="hero-monogram">{sample.monogram}</div><p className="sample-eyebrow">{russian ? 'Мы поженимся' : 'We are getting married'}</p><h1>{sample.title}</h1><p className="script-line">{russian ? 'вместе с нашими семьями...' : 'together with our families...'}</p><p>{sample.message}</p><button className="sample-rsvp" onClick={() => setRsvpOpen(true)}>{labels.rsvp} <span>↗</span></button></div><div className="hero-scroll">Scroll to explore <span>↓</span></div></section>
      <section className="date-band reveal"><span>24</span><i>·</i><span>08</span><i>·</i><span>2025</span><b>Saturday</b></section>
      <section className="venue-band reveal"><span className="botanical botanical-corner">❧</span><p className="script-line">Villa de Luce</p><p className="sample-eyebrow">Tuscany, Italy</p><p>Strada della Luce 14<br />53037 San Gimignano, Italy</p><button className="outline-button" onClick={() => window.open('https://maps.google.com/?q=San+Gimignano+Italy', '_blank')}>View map ↗</button></section>
      <section className="wedding-story reveal" id="story"><div className="story-copy"><p className="sample-eyebrow">{labels.story}</p><h2>{labels.storyTitle}</h2><p>We met beneath the late summer sun, when a shared table and an easy conversation turned an ordinary afternoon into the beginning of everything. Through long walks, family dinners, and a thousand small joys, we found our way home to one another.</p><p className="script-line closing-line">Forever &amp; always</p></div><div className="story-images"><img className="arch-photo" src={gallery[0]} alt="Alexander and Daria together" /><img className="note-photo" src={gallery[1]} alt="Wedding details" /><span className="photo-note">our favorite<br />kind of forever</span></div></section>
      <section className="details-section reveal" id="details"><p className="sample-eyebrow">{labels.details}</p><h2>{labels.detailsTitle}</h2><div className="details-grid"><article><span className="line-icon">✧</span><h3>Dress code</h3><p>Semi-formal<br />Come ready for a summer evening in the countryside.</p></article><article><span className="line-icon">⌂</span><h3>Accommodation</h3><p>We have reserved a small hotel block nearby. Mention our names when booking.</p></article><article><span className="line-icon">⌁</span><h3>Transportation</h3><p>Shuttles will leave from the hotel at 4:30 PM and return after dinner.</p></article></div></section>
      <section className="wedding-party reveal"><div className="section-intro"><p className="sample-eyebrow">{labels.party}</p><h2>Meet our<br /><em>people</em></h2></div><div className="party-list"><article><img src={gallery[1]} alt="Maid of honor" /><p className="sample-eyebrow">Maid of honor</p><h3>Elena Rossi</h3></article><article><img src={gallery[2]} alt="Best man" /><p className="sample-eyebrow">Best man</p><h3>Matteo Bellini</h3></article></div></section>
      <section className="gallery-section reveal" id="gallery"><div className="section-line"><div><p className="sample-eyebrow">{labels.moments}</p><h2>Little<br /><em>moments</em></h2></div><button className="text-link" onClick={() => setGalleryOpen(true)}>View all photos ↗</button></div><div className="photo-grid">{gallery.map((image, index) => <button key={image} onClick={() => setGalleryOpen(true)}><img src={image} alt={`Wedding moment ${index + 1}`} /></button>)}</div></section>
      <section className="note-section reveal"><span className="envelope">✉</span><p className="script-line">A little note</p><h2>{labels.note}</h2></section>
      <section className="rsvp-section reveal" id="rsvp"><div className="rsvp-card"><p className="sample-eyebrow">Kindly RSVP by July 1st, 2025</p><h2>Will you join us?</h2><form onSubmit={(event) => { event.preventDefault(); setRsvpSent(true); setRsvpOpen(true); }}><label>{labels.name}<input required name="name" /></label><fieldset><legend>Your response</legend><label><input type="radio" name="attendance" checked={rsvpChoice === 'yes'} onChange={() => setRsvpChoice('yes')} /> {labels.yes}</label><label><input type="radio" name="attendance" checked={rsvpChoice === 'no'} onChange={() => setRsvpChoice('no')} /> {labels.no}</label></fieldset><label>{labels.dietary}<input name="dietary" /></label><button className="sample-rsvp" type="submit">{labels.submit} <span>→</span></button></form></div></section>
      <footer className="microsite-footer"><span>{sample.monogram}</span><p>Made with love for our favorite people.</p><button onClick={() => setRsvpOpen(true)}>RSVP now ↑</button></footer>
      {rsvpOpen && <div className="sample-modal" onClick={() => setRsvpOpen(false)}><form onClick={(event) => event.stopPropagation()} onSubmit={(event) => { event.preventDefault(); setRsvpSent(true); }}><button type="button" className="modal-close" onClick={() => setRsvpOpen(false)}>×</button>{rsvpSent ? <div className="rsvp-success"><span>✦</span><h2>We’ll see you there.</h2><p>Thank you for letting us know. We cannot wait to celebrate with you.</p><button type="button" className="sample-rsvp" onClick={() => setRsvpOpen(false)}>Close</button></div> : <><p className="sample-eyebrow">Kindly reply</p><h2>Will you join us?</h2><label>Your name<input required placeholder="First and last name" /></label><label>Will you be there?<select defaultValue="yes"><option value="yes">Joyfully, yes</option><option value="no">Regretfully, no</option></select></label><label>Message<textarea rows="3" placeholder="A note for the happy couple (optional)" /></label><button className="sample-rsvp" type="submit">Send RSVP →</button></>}</form></div>}
      {galleryOpen && <div className="gallery-modal" onClick={() => setGalleryOpen(false)}><button className="modal-close" onClick={() => setGalleryOpen(false)}>×</button><div className="gallery-viewer" onClick={(event) => event.stopPropagation()}>{gallery.map((image) => <img key={image} src={image} alt="Gallery moment" />)}</div></div>}
    </div>
  );
}
