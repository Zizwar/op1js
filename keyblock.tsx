/** @jsx h */
import { h } from "preact";
//

const _octave = 4;

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

export default function KeyBlock({ texto = [], note, octave }) {
  return (
    <div
      class="white-key-block"
      onClick={() => _onclickAttaq({ note, octave })}
    >
      <div class="white-key">
        {texto && (
          <div class="buttons-two-elements">
            <p class="normal-18px">{octave}</p>
            <p class="normal-12px orange">{note}</p>
          </div>
        )}
      </div>
    </div>
  );
}
