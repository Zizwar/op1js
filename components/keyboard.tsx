/** @jsx h */
import { h } from "preact";
//
import Keyblock from "../islands/keyBlock.tsx";
import KeyblockDash from "../islands/keyBlockDash.tsx";
import { NOTES, NOTES_SHARP } from "../utils/notes.ts";
export default function Keyboard(props) {
  return (
    <div class="keyboard">
    <KeyblockDash
      octave={0}
      index={1}
      note={[NOTES_SHARP[0], NOTES_SHARP[1], NOTES_SHARP[2]]}
    />

    <KeyblockDash
      octave={0}
      index={2}
      note={[NOTES_SHARP[3], NOTES_SHARP[5]]}
    />
    <KeyblockDash
      octave={1}
      index={3}
      note={[NOTES_SHARP[0], NOTES_SHARP[1], NOTES_SHARP[2]]}
    />

    <KeyblockDash
      octave={1}
      index={4}
      note={[NOTES_SHARP[3], NOTES_SHARP[5]]}
    />
    <div class="white-keys-1">
      {Array.from([0, 1, 2, 3]).map((arr) => (
        <Keyblock
          octave={0}
          index={arr}
          note={NOTES[arr]}
          //texto={{ normal: arr, orange: arr + 2 }}
        />
      ))}
    </div>
    <div class="white-keys-2">
      {Array.from([4, 5, 6]).map((arr) => (
        <Keyblock note={NOTES[arr]} octave={0} index={arr} />
      ))}
    </div>
    <div class="white-keys-3">
      {Array.from([0, 1, 2, 3]).map((arr) => (
        <Keyblock note={NOTES[arr]} octave={1} index={arr} />
      ))}
    </div>
    <div class="white-keys-4">
      {Array.from([4, 5, 6]).map((arr) => (
        <Keyblock note={NOTES[arr]} octave={1} index={arr} />
      ))}
    </div>
  </div>
  );
 
}