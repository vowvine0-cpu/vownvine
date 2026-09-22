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

export function InvitationCard({ sample }) {
  return (
    <main className={`sample-page ${sample.className}`}>
      <a className="sample-back" href="/">← Vow &amp; Vine</a>
      {sample.className === 'olive' && <OliveGarden sample={sample} />}
      {sample.className === 'capri' && <SundayInCapri sample={sample} />}
      {sample.className === 'night' && <MidnightToast sample={sample} />}
    </main>
  );
}

export function InvitationEditor({ path }) {
  const template = sampleTemplates[path] || oliveGarden;
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
          <p className="sample-eyebrow">Personalize your design</p><h1>Make it yours.</h1>
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
  const sample = sampleTemplates[path] || oliveGarden;
  const saved = localStorage.getItem(`vow-vine-${path}`);
  const slug = path.split('/').pop();
  return <><InvitationCard sample={saved ? JSON.parse(saved) : sample} /><a className="sample-customize" href={`/#edit=${slug}`}>Customize this design <span>→</span></a></>;
}
