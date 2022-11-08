/** @jsx h */
import { h } from "preact";
//
import NoteOrange from "../components/noteOrange.tsx";
const _octave = 3;

const _onclickAttaq = ({ note, octave }) => {
  const synth = new Tone.Synth().toDestination();

  if (!note) return;
  const noteAttaq = `${note}${octave + _octave}`;
  //alert(noteAttaq)
  const now = Tone.now();
  // trigger the attack immediately
  synth.triggerAttack(noteAttaq, now);
  // wait one second before triggering the release
  synth.triggerRelease(now + 1);
};

export default function KeyBlock({ texto, note, octave }) {
  return (
    <div
      class="white-key-block"
      onClick={() => _onclickAttaq({ note, octave })}
    >
      <div class="white-key">{note && <NoteOrange note={note} />}</div>
    </div>
  );
}
