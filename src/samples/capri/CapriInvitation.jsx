import React from 'react';

const gallery = [
  'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?auto=format&fit=crop&w=900&q=85',
];

export default function CapriInvitation({ sample }) {
  const [rsvpOpen, setRsvpOpen] = React.useState(false);
  const [galleryOpen, setGalleryOpen] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const [countdown, setCountdown] = React.useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  React.useEffect(() => {
    const target = new Date('2025-06-22T16:00:00+02:00').getTime();
    const update = () => { const distance = Math.max(0, target - Date.now()); setCountdown({ days: Math.floor(distance / 86400000), hours: Math.floor(distance / 3600000) % 24, minutes: Math.floor(distance / 60000) % 60, seconds: Math.floor(distance / 1000) % 60 }); };
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return <div className="microsite microsite-capri wedding-theme sample-independent">
    <nav className="sample-nav wedding-nav"><a className="nav-mark" href="#capri-home">{sample.monogram}</a><div><a href="#capri-story">Our story</a><a href="#capri-details">Details</a><a href="#capri-gallery">Gallery</a><button onClick={() => setRsvpOpen(true)}>RSVP</button></div></nav>
    <section className="wedding-hero" id="capri-home"><div className="hero-photo" /><div className="wedding-hero-copy"><div className="hero-monogram">{sample.monogram}</div><p className="sample-eyebrow">A weekend by the sea</p><h1>{sample.title}</h1><p className="script-line">{sample.message}</p><p className="olive-date">{sample.date}</p><button className="sample-rsvp" onClick={() => setRsvpOpen(true)}>{sample.action} ↗</button></div></section>
    <section className="date-band"><span>22</span><i>·</i><span>06</span><i>·</i><span>2025</span><b>Sunday</b></section>
    <section className="wedding-story" id="capri-story"><div className="story-copy"><p className="sample-eyebrow">Our story</p><h2>Sunshine,<br /><em>sea &amp; us</em></h2><p>Meet us on the island for a weekend of sun-warmed stone, bright blue water, and all the people we love most.</p><button className="text-link" onClick={() => setGalleryOpen(true)}>See the island ↗</button></div><img className="arch-photo" src={gallery[0]} alt="Capri coast" /></section>
    <section className="countdown-band"><p className="sample-eyebrow">Until our weekend</p><div className="countdown"><strong>{countdown.days}</strong><span>days</span><strong>{countdown.hours}</strong><span>hours</span><strong>{countdown.minutes}</strong><span>min</span><strong>{countdown.seconds}</strong><span>sec</span></div></section>
    <section className="details-section" id="capri-details"><p className="sample-eyebrow">The celebration</p><h2>Come as you are.</h2><div className="details-grid"><article><span className="line-icon">◌</span><h3>Welcome drinks</h3><p>Friday evening at the villa, just as the light turns gold.</p></article><article><span className="line-icon">◇</span><h3>Dress code</h3><p>Resort formal, comfortable shoes, and something blue.</p></article><article><span className="line-icon">✦</span><h3>Meet us there</h3><p>Shuttle details and local recommendations are waiting.</p></article></div></section>
    <section className="gallery-section" id="capri-gallery"><div className="section-line"><div><p className="sample-eyebrow">A few favorite moments</p><h2>Gallery</h2></div><button className="text-link" onClick={() => setGalleryOpen(true)}>Open gallery ↗</button></div><div className="photo-grid">{gallery.map((image, index) => <button key={image} onClick={() => setGalleryOpen(true)}><img src={image} alt={`Capri moment ${index + 1}`} /></button>)}</div></section>
    <section className="gift-section"><p className="sample-eyebrow">Your presence is enough</p><h2>Bring your<br /><em>favorite people.</em></h2><button onClick={() => setRsvpOpen(true)}>RSVP now →</button></section>
    <footer className="microsite-footer"><span>{sample.monogram}</span><p>Made for sunshine and slow Sundays.</p><button onClick={() => setRsvpOpen(true)}>RSVP now ↑</button></footer>
    {rsvpOpen && <div className="sample-modal" onClick={() => setRsvpOpen(false)}><form onClick={(event) => event.stopPropagation()} onSubmit={(event) => { event.preventDefault(); setSent(true); }}><button type="button" className="modal-close" onClick={() => setRsvpOpen(false)}>×</button>{sent ? <><h2>See you in Capri.</h2><p>We cannot wait to celebrate with you.</p></> : <><p className="sample-eyebrow">Kindly reply</p><h2>Will you join us?</h2><label>Your name<input required /></label><label>Your response<select defaultValue="yes"><option value="yes">Joyfully, yes</option><option value="no">Regretfully, no</option></select></label><button className="sample-rsvp" type="submit">Send RSVP →</button></>}</form></div>}
    {galleryOpen && <div className="gallery-modal" onClick={() => setGalleryOpen(false)}><button className="modal-close" onClick={() => setGalleryOpen(false)}>×</button><div className="gallery-viewer">{gallery.map((image) => <img key={image} src={image} alt="Capri gallery" />)}</div></div>}
  </div>;
}
