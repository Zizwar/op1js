/** @jsx h */
import { h } from "preact";
//


const notes = ["E", "F", "G", "A", "B", "C", "D","E", "F", "G", "A", "B", "C", "D","E", "F", "G", "A", "B", "C", "D","E", "F", "G", "A", "B", "C", "D","E", "F", "G", "A", "B", "C", "D",];
const souNote = ["f", "g", "a", "c", "d"];
const _onclickAttaq = ({ index, octave = 4 }) => {
  const synth = new Tone.Synth().toDestination();
  const noteAttaq = notes[index];
  const _octave = parseInt( index / 7);

  if (!noteAttaq) return;
  const note = `${noteAttaq}${_octave+2}`;
  const now = Tone.now();
  // trigger the attack immediately
  synth.triggerAttack(note, now);
  // wait one second before triggering the release
  synth.triggerRelease(now + 1);
};

export default function KeyBlock({ texto = [], index, octave }) {
  return (
    <div
      class="white-key-block"
      onClick={() => _onclickAttaq({ index, octave })}
    >
      <div class="white-key">
        {texto && (
          <div class="buttons-two-elements">
            <p class="normal-18px">{texto.normal}</p>
            <p class="normal-12px orange">{index}</p>
          </div>
        )}
      </div>
    </div>
  );
}
