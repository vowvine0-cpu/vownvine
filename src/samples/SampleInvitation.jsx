import React from 'react';
import './sample.css';
import OliveGarden from './olive/OliveGarden';
import SundayInCapri from './capri/SundayInCapri';
import MidnightToast from './night/MidnightToast';
import { oliveGarden, sundayInCapri, midnightToast } from './sampleData';

export const sampleTemplates = {
  '/samples/olive-garden': oliveGarden,
  '/samples/sunday-in-capri': sundayInCapri,
  '/samples/midnight-toast': midnightToast,
};

export function InvitationCard({ sample, showBack = true, showEnvelopeIntro = false }) {
  return (
    <main className={`sample-page ${sample.className}`}>
      {showBack && <a className="sample-back" href="/">← Vow &amp; Vine</a>}
      {sample.className === 'olive' && <OliveGarden sample={sample} showEnvelopeIntro={showEnvelopeIntro} />}
      {sample.className === 'capri' && <SundayInCapri sample={sample} />}
      {sample.className === 'night' && <MidnightToast sample={sample} />}
    </main>
  );
}

export function InvitationEditor({ path }) {
  const template = sampleTemplates[path] || oliveGarden;
  const [draft, setDraft] = React.useState(() => {
    const saved = localStorage.getItem(`vow-vine-${path}`);
    return saved ? { ...template, ...JSON.parse(saved), details: JSON.parse(saved).details || template.details } : template;
  });
  const update = (key, value) => setDraft((current) => ({ ...current, [key]: value }));
  const updateDetail = (index, value) => setDraft((current) => ({ ...current, details: current.details.map((item, itemIndex) => itemIndex === index ? value : item) }));

  return (
    <main className="editor-page">
      <div className="editor-toolbar"><a className="sample-back" href="/">← Vow &amp; Vine</a><div><strong>Edit your invitation</strong><span>Changes preview instantly</span></div><a className="button dark" href={`/#sample=${path.split('/').pop()}`}>Preview invitation <span>→</span></a></div>
      <div className="editor-layout">
        <section className="editor-panel">
          <p className="sample-eyebrow">Personalize your design</p><h1>Make it yours.</h1>
          <label>Names or monogram<input value={draft.monogram} onChange={(event) => update('monogram', event.target.value)} /></label>
          <label>Invitation title<input value={draft.title} onChange={(event) => update('title', event.target.value)} /></label>
          <label>Small heading<input value={draft.eyebrow} onChange={(event) => update('eyebrow', event.target.value)} /></label>
          <label>Main message<textarea rows="3" value={draft.message} onChange={(event) => update('message', event.target.value)} /></label>
          <label>Date or time<input value={draft.date} onChange={(event) => update('date', event.target.value)} /></label>
          <label>Venue<input value={draft.details[0]} onChange={(event) => updateDetail(0, event.target.value)} /></label>
          <label>Location<input value={draft.details[1]} onChange={(event) => updateDetail(1, event.target.value)} /></label>
          <label>Button text<input value={draft.action} onChange={(event) => update('action', event.target.value)} /></label>
          {draft.className === 'olive' && <div className="editor-extra-fields"><p className="editor-group-title">Olive Garden pages</p><label>Venue name<input value={draft.venueName || ''} onChange={(event) => update('venueName', event.target.value)} /></label><label>Venue tagline<input value={draft.venueTagline || ''} onChange={(event) => update('venueTagline', event.target.value)} /></label><label>Venue story<textarea rows="3" value={draft.venueStory || ''} onChange={(event) => update('venueStory', event.target.value)} /></label><label>Our love story<textarea rows="4" value={draft.story || ''} onChange={(event) => update('story', event.target.value)} /></label><label>Family note<textarea rows="4" value={draft.familyNote || ''} onChange={(event) => update('familyNote', event.target.value)} /></label><p className="editor-group-title">Photos</p>{(draft.photos || []).map((photo, index) => <label key={index}>Photo {index + 1}<input type="file" accept="image/*" onChange={(event) => { const [file] = event.target.files; if (!file) return; const reader = new FileReader(); reader.onload = () => update('photos', draft.photos.map((item, itemIndex) => itemIndex === index ? reader.result : item)); reader.readAsDataURL(file); }} /><input type="url" placeholder="https://example.com/photo.jpg" value={photo.startsWith('data:') ? '' : photo} onChange={(event) => update('photos', draft.photos.map((item, itemIndex) => itemIndex === index ? event.target.value : item))} />{photo && <img className="editor-photo-preview" src={photo} alt={`Selected photo ${index + 1}`} />}</label>)}<small className="editor-help">Upload a photo or paste an image URL. Photo 1 is used for the venue and story; photos 2–3 appear in the gallery.</small>{(draft.schedule || []).map(([time, title, description], index) => <div className="schedule-editor" key={index}><p className="schedule-editor-title">Schedule {index + 1}</p><label>Time<input value={time} onChange={(event) => update('schedule', draft.schedule.map((item, itemIndex) => itemIndex === index ? [event.target.value, item[1], item[2]] : item))} /></label><label>Title<input value={title} onChange={(event) => update('schedule', draft.schedule.map((item, itemIndex) => itemIndex === index ? [item[0], event.target.value, item[2]] : item))} /></label><label>Description<textarea rows="2" value={description} onChange={(event) => update('schedule', draft.schedule.map((item, itemIndex) => itemIndex === index ? [item[0], item[1], event.target.value] : item))} /></label></div>)}<label>Music title<input value={draft.musicName || ''} onChange={(event) => update('musicName', event.target.value)} /></label><label>Upload song<input type="file" accept="audio/*" onChange={(event) => { const [file] = event.target.files; if (file) { update('musicUrl', URL.createObjectURL(file)); update('musicName', file.name); } }} /></label><label>Song audio URL<input type="url" placeholder="https://example.com/song.mp3" value={draft.musicUrl?.startsWith('blob:') ? '' : (draft.musicUrl || '')} onChange={(event) => update('musicUrl', event.target.value)} /><small className="editor-help">Upload an audio file for this browser session, or use a direct .mp3/.wav link.</small></label></div>}
          <a className="button dark editor-save" href={`/#checkout=${path.split('/').pop()}`} onClick={() => localStorage.setItem(`vow-vine-${path}`, JSON.stringify(draft))}>Save &amp; continue to payment <span>→</span></a>
        </section>
        <div className="editor-preview"><p className="preview-label">LIVE PREVIEW</p><InvitationCard sample={draft} showBack={false} showEnvelopeIntro={true} /></div>
      </div>
    </main>
  );
}

export default function SampleInvitation({ path }) {
  const sample = sampleTemplates[path] || oliveGarden;
  const saved = localStorage.getItem(`vow-vine-${path}`);
  const slug = path.split('/').pop();
  return <><InvitationCard sample={saved ? JSON.parse(saved) : sample} /><a className="sample-customize" href={`/#edit=${slug}`}>Customize this design <span>→</span></a></>;
}
