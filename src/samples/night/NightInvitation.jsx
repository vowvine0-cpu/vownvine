import React from 'react';

const gallery = [
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=85',
];

export default function NightInvitation({ sample }) {
  const [rsvpOpen, setRsvpOpen] = React.useState(false);
  const [galleryOpen, setGalleryOpen] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const [countdown, setCountdown] = React.useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  React.useEffect(() => {
    const target = new Date('2026-10-18T20:00:00-04:00').getTime();
    const update = () => { const distance = Math.max(0, target - Date.now()); setCountdown({ days: Math.floor(distance / 86400000), hours: Math.floor(distance / 3600000) % 24, minutes: Math.floor(distance / 60000) % 60, seconds: Math.floor(distance / 1000) % 60 }); };
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return <div className="microsite microsite-night wedding-theme sample-independent">
    <nav className="sample-nav wedding-nav"><a className="nav-mark" href="#night-home">{sample.monogram}</a><div><a href="#night-story">The story</a><a href="#night-details">Details</a><a href="#night-gallery">Photos</a><button onClick={() => setRsvpOpen(true)}>RSVP</button></div></nav>
    <section className="wedding-hero" id="night-home"><div className="hero-photo" /><div className="wedding-hero-copy"><div className="hero-monogram">{sample.monogram}</div><p className="sample-eyebrow">Come raise a glass</p><h1>{sample.title}</h1><p className="script-line">{sample.message}</p><p className="olive-date">{sample.date}</p><button className="sample-rsvp" onClick={() => setRsvpOpen(true)}>{sample.action} ↗</button></div></section>
    <section className="date-band"><span>18</span><i>·</i><span>10</span><i>·</i><span>2026</span><b>Friday</b></section>
    <section className="wedding-story" id="night-story"><div className="story-copy"><p className="sample-eyebrow">The story</p><h2>A little<br /><em>after dark</em></h2><p>One room, a hundred good stories, and a night made for dressing up. Join us for a midnight toast to another year around the sun.</p><button className="text-link" onClick={() => setGalleryOpen(true)}>See the mood ↗</button></div><img className="arch-photo" src={gallery[0]} alt="Night celebration" /></section>
    <section className="countdown-band"><p className="sample-eyebrow">Until the first toast</p><div className="countdown"><strong>{countdown.days}</strong><span>days</span><strong>{countdown.hours}</strong><span>hours</span><strong>{countdown.minutes}</strong><span>min</span><strong>{countdown.seconds}</strong><span>sec</span></div></section>
    <section className="details-section" id="night-details"><p className="sample-eyebrow">The evening</p><h2>Details worth<br /><em>staying late for.</em></h2><div className="details-grid"><article><span className="line-icon">◌</span><h3>Doors open</h3><p>8 PM at The Lantern Room. Come early for the first pour.</p></article><article><span className="line-icon">◇</span><h3>Dress up</h3><p>Black tie optional, velvet encouraged, dancing required.</p></article><article><span className="line-icon">✦</span><h3>Stay late</h3><p>There will be music, midnight snacks, and one last song.</p></article></div></section>
    <section className="gallery-section" id="night-gallery"><div className="section-line"><div><p className="sample-eyebrow">Scenes from the night</p><h2>Gallery</h2></div><button className="text-link" onClick={() => setGalleryOpen(true)}>Open gallery ↗</button></div><div className="photo-grid">{gallery.map((image, index) => <button key={image} onClick={() => setGalleryOpen(true)}><img src={image} alt={`Midnight moment ${index + 1}`} /></button>)}</div></section>
    <section className="gift-section"><p className="sample-eyebrow">No gifts, just good stories</p><h2>Bring your<br /><em>best toast.</em></h2><button onClick={() => setRsvpOpen(true)}>RSVP now →</button></section>
    <footer className="microsite-footer"><span>{sample.monogram}</span><p>Stay late. Make a memory.</p><button onClick={() => setRsvpOpen(true)}>RSVP now ↑</button></footer>
    {rsvpOpen && <div className="sample-modal" onClick={() => setRsvpOpen(false)}><form onClick={(event) => event.stopPropagation()} onSubmit={(event) => { event.preventDefault(); setSent(true); }}><button type="button" className="modal-close" onClick={() => setRsvpOpen(false)}>×</button>{sent ? <><h2>See you after dark.</h2><p>Your name is on the list.</p></> : <><p className="sample-eyebrow">Kindly reply</p><h2>Will you join us?</h2><label>Your name<input required /></label><label>Your response<select defaultValue="yes"><option value="yes">Joyfully, yes</option><option value="no">Regretfully, no</option></select></label><button className="sample-rsvp" type="submit">Send RSVP →</button></>}</form></div>}
    {galleryOpen && <div className="gallery-modal" onClick={() => setGalleryOpen(false)}><button className="modal-close" onClick={() => setGalleryOpen(false)}>×</button><div className="gallery-viewer">{gallery.map((image) => <img key={image} src={image} alt="Night gallery" />)}</div></div>}
  </div>;
}
