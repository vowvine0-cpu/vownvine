import React from 'react';

const photos = [
  '/olive/couple.jpg',
  '/olive/table.jpg',
  '/olive/flowers.jpg',
];

function useCountdown() {
  const [time, setTime] = React.useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  React.useEffect(() => {
    const target = new Date('2027-11-18T16:00:00+02:00').getTime();
    const update = () => {
      const distance = Math.max(0, target - Date.now());
      setTime({
        days: Math.floor(distance / 86400000),
        hours: Math.floor(distance / 3600000) % 24,
        minutes: Math.floor(distance / 60000) % 60,
        seconds: Math.floor(distance / 1000) % 60,
      });
    };
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return time;
}

export default function OliveWedding({ sample }) {
  const [opened, setOpened] = React.useState(false);
  const [rsvpOpen, setRsvpOpen] = React.useState(false);
  const [rsvpSent, setRsvpSent] = React.useState(false);
  const [galleryOpen, setGalleryOpen] = React.useState(false);
  const [musicOn, setMusicOn] = React.useState(false);
  const countdown = useCountdown();

  React.useEffect(() => {
    const reveal = document.querySelectorAll('.olive-suite .olive-reveal');
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')), { threshold: 0.12 });
    reveal.forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`olive-suite microsite microsite-olive ${opened ? 'is-open' : ''}`}>
      {!opened && <section className="envelope-intro" onClick={() => setOpened(true)}><div className="envelope-card"><div className="lace-lining" /><div className="envelope-flap"><p>The start of our forever</p><span>Camille &amp; Edward</span></div><div className="wax-seal">C<span>&amp;</span>E</div><button>Open invitation <span>↓</span></button></div><p className="envelope-hint">Click or scroll to open</p></section>}
      <nav className="olive-nav"><a href="#olive-home" className="olive-mark">C <i>&amp;</i> E</a><div><a href="#olive-story">Our story</a><a href="#olive-details">Details</a><a href="#olive-gallery">Gallery</a><button onClick={() => setRsvpOpen(true)}>RSVP</button></div><button className="music-toggle" onClick={() => setMusicOn(!musicOn)} aria-label="Toggle music">{musicOn ? '♫' : '♪'}</button></nav>
      <main>
        <section className="olive-hero" id="olive-home"><div className="olive-hero-wash" /><span className="olive-flower olive-flower-left">❧</span><span className="olive-flower olive-flower-right">❧</span><div className="olive-hero-content"><p className="olive-kicker">We invite you to the wedding of</p><div className="olive-monogram">C <span>&amp;</span> E</div><h1>Camille <em>&amp;</em><br />Edward</h1><p className="olive-script">together with our families</p><p className="olive-date">Mykonos, 18.11.2027</p><button className="olive-button" onClick={() => setRsvpOpen(true)}>Kindly RSVP <span>↗</span></button></div><div className="olive-postmark">MYKONOS<br /><small>18 · 11 · 27</small></div></section>
        <section className="countdown-card olive-reveal"><p className="olive-kicker">Counting down to forever</p><div className="olive-countdown">{Object.entries(countdown).map(([unit, value]) => <div key={unit}><strong>{String(value).padStart(2, '0')}</strong><span>{unit}</span></div>)}</div></section>
        <section className="venue-section olive-reveal"><div className="venue-copy"><p className="olive-kicker">The venue</p><h2>Kokkini,<br /><em>Mykonos</em></h2><p className="olive-script">Where the sea meets the sky</p><p className="olive-body">Kokkini is a little corner of the island we love most: whitewashed walls, salt in the air, and golden light that stays with you long after sunset.</p><p className="venue-address">Kokkini Beach House<br />Agios Ioannis, Mykonos<br />846 00 Greece</p><button className="olive-outline" onClick={() => window.open('https://maps.google.com/?q=Kokkini+Mykonos', '_blank')}>View map ↗</button></div><div className="venue-photo"><img src={photos[0]} alt="Wedding couple by the sea" /><span className="venue-tag">Kokkini<br /><small>MYKONOS</small></span></div></section>
        <section className="welcome-note olive-reveal"><span className="ornament">✦</span><p className="olive-kicker">A note for our favorite people</p><h2>Dear friends &amp; family,</h2><p className="olive-body">We feel incredibly lucky to have everything we need, and your love and support mean the world to us. Having you with us in Mykonos will make this day more beautiful than we could ever imagine. Thank you for being part of our story.</p><p className="olive-script">With all our love, Camille &amp; Edward</p><span className="corner-flourish">❧</span></section>
        <section className="timeline-section olive-reveal" id="olive-details"><p className="olive-kicker">The wedding day</p><h2>One beautiful<br /><em>day together</em></h2><div className="timeline"><article><time>4:00 PM</time><span className="timeline-icon">◌</span><div><h3>The ceremony</h3><p>Say “I do” with the Aegean glittering behind us.</p></div></article><article><time>5:30 PM</time><span className="timeline-icon">◇</span><div><h3>Cocktails</h3><p>Raise a glass as the sun begins to soften.</p></div></article><article><time>6:30 PM</time><span className="timeline-icon">♧</span><div><h3>Dinner</h3><p>Long tables, local flavors, and familiar faces.</p></div></article><article><time>8:00 PM</time><span className="timeline-icon">♡</span><div><h3>Wedding cake</h3><p>A little sweetness before the dancing begins.</p></div></article><article><time>9:00 PM</time><span className="timeline-icon">✦</span><div><h3>The party</h3><p>Stay late, dance freely, and make a memory.</p></div></article><article><time>11:00 PM</time><span className="timeline-icon">☾</span><div><h3>The last dance</h3><p>One final song beneath the island stars.</p></div></article></div></section>
        <section className="teal-details olive-reveal"><p className="olive-kicker">Good to know</p><h2>Before you<br /><em>arrive</em></h2><div className="teal-detail-grid"><article><span>⌂</span><h3>Accommodation</h3><p>We have reserved rooms at Kokkini House. Mention Camille &amp; Edward when booking.</p></article><article><span>✈</span><h3>Travel</h3><p>Mykonos airport is 20 minutes away. Ferries arrive daily from Athens and nearby islands.</p></article><article><span>♧</span><h3>Attire</h3><p>Island semi-formal. Light fabrics, comfortable shoes, and something blue if you like.</p></article><article><span>⇢</span><h3>Transport</h3><p>Shuttles will run from the hotel to the venue before and after the celebration.</p></article></div></section>
        <section className="moodboard-section olive-reveal" id="olive-gallery"><div className="moodboard-heading"><p className="olive-kicker">A few favorite things</p><h2>Our little<br /><em>mood board</em></h2><button className="olive-outline" onClick={() => setGalleryOpen(true)}>Open gallery ↗</button></div><div className="moodboard"><figure className="mood-photo mood-photo-one"><img src={photos[1]} alt="Vintage wedding table" /><figcaption>the little details</figcaption></figure><div className="mood-stamp">Wish you<br /><strong>were here</strong><small>MYKONOS · 2027</small></div><figure className="mood-photo mood-photo-two"><img src={photos[2]} alt="Wedding flowers" /><figcaption>softly, always</figcaption></figure><div className="vinyl">C<span>&amp;</span>E</div><div className="mood-note">Save the date<br /><strong>18.11.27</strong></div></div></section>
        <section className="love-story olive-reveal" id="olive-story"><div className="heart-photo"><img src={photos[0]} alt="Camille and Edward" /></div><div><p className="olive-kicker">Our love story</p><h2>Read<br /><em>here</em></h2><p className="olive-body">It started with a wrong turn, a borrowed map, and the best coffee on the island. Somewhere between a long summer afternoon and a last ferry home, Camille and Edward found the kind of love that feels like coming home.</p><button className="olive-button" onClick={() => setGalleryOpen(true)}>Read our story <span>→</span></button></div></section>
        <section className="olive-rsvp olive-reveal" id="olive-rsvp"><div className="olive-rsvp-card"><p className="olive-kicker">Kindly RSVP · 18.11.2027</p><h2>Will you<br /><em>join us?</em></h2><form onSubmit={(event) => { event.preventDefault(); setRsvpSent(true); setRsvpOpen(true); }}><label>Your name<input required name="name" placeholder="First and last name" /></label><fieldset><legend>Will you be there?</legend><label><input type="radio" name="attendance" defaultChecked /> Accepts with pleasure</label><label><input type="radio" name="attendance" /> Declines with regret</label></fieldset><label>Number of guests<select name="guests" defaultValue="2"><option>1 guest</option><option>2 guests</option><option>3 guests</option><option>4 guests</option></select></label><label>A message for the couple<textarea name="message" rows="3" placeholder="A little note (optional)" /></label><button className="wax-submit" type="submit">Press to RSVP <span>✦</span></button></form></div></section>
      </main>
      <footer className="olive-footer"><div className="olive-monogram">C <span>&amp;</span> E</div><p>We feel incredibly lucky to have everything we need,<br />and your love and support mean the world to us.</p><small>With love, always · A wishing-well note in lieu of gifts</small></footer>
      {rsvpOpen && <div className="olive-modal" onClick={() => setRsvpOpen(false)}><div className="olive-modal-card" onClick={(event) => event.stopPropagation()}><button className="olive-close" onClick={() => setRsvpOpen(false)}>×</button>{rsvpSent ? <><span className="wax-seal small">C<span>&amp;</span>E</span><h2>We’ll see you<br /><em>in Mykonos.</em></h2><p>Thank you for letting us know. We cannot wait to celebrate with you.</p><button className="olive-button" onClick={() => setRsvpOpen(false)}>Close</button></> : <><p className="olive-kicker">Kindly reply</p><h2>Will you join us?</h2><form onSubmit={(event) => { event.preventDefault(); setRsvpSent(true); }}><label>Your name<input required placeholder="First and last name" /></label><label>Your response<select defaultValue="yes"><option value="yes">Accepts with pleasure</option><option value="no">Declines with regret</option></select></label><label>A note<textarea rows="3" placeholder="A message for the couple" /></label><button className="wax-submit" type="submit">Send RSVP <span>✦</span></button></form></>}</div></div>}
      {galleryOpen && <div className="olive-gallery-modal" onClick={() => setGalleryOpen(false)}><button className="olive-close" onClick={() => setGalleryOpen(false)}>×</button><div>{photos.map((photo) => <img key={photo} src={photo} alt="Wedding gallery" />)}</div></div>}
    </div>
  );
}
