/** @jsx h */
import { h } from "preact";
//
import NoteOrange from "../components/noteOrange.tsx";
const _octave = 3;

const _onclickAttaq = ({ note, octave }) => {
  const synth = new Tone.Synth().toDestination();

  if (!note) return;
  const noteAttaq = `${note}#${octave + _octave}`;
  //alert(noteAttaq);
  const now = Tone.now();
  // trigger the attack immediately
  synth.triggerAttack(noteAttaq, now);
  // wait one second before triggering the release
  synth.triggerRelease(now + 1);
};

export default function KeyBlock({ note = [], octave, index }) {
 // alert(index)
  if (index === 1 || index === 3)
    return (
      <div class={`black-keys-${index}`}>
        <div
          class="black-key-block-long"
          onClick={() => _onclickAttaq({ note:note[0], octave })}
        >
          <div class="black-key-right">
            {note && <NoteOrange note={note[0]} />}
          </div>
        </div>
        <div
          class="black-key-block-short"
          onClick={() => _onclickAttaq({ note:note[1], octave })}
        >
          <div class="black-key">{note && <NoteOrange note={note[1]} />}</div>
        </div>
        <div
          class="black-key-block-long"
          onClick={() => _onclickAttaq({ note:note[2], octave })}
        >
          <div class="black-key-left">
            {note && <NoteOrange note={note[2]} />}
          </div>
        </div>
      </div>
    );
  return (
    <div class={`black-keys${index}`}>
      <div class="black-key-block-long">
        <div class="black-key-right">
          {note && <NoteOrange note={note[0]} />}
        </div>
      </div>
      <div class="black-key-block-long">
        <div class="black-key-left">
          {note && <NoteOrange note={note[1]} />}
        </div>
      </div>
    </div>
  );
}
