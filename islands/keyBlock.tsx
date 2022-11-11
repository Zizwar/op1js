/** @jsx h */
import { h } from "preact";
//
import { useEffect } from "preact/hooks";

import NoteOrange from "../components/note-orange.tsx";
import WinoTone from "../wino/tone.ts";
const _octave = 3;
let wino;



const _onclickAttaq = ({ note, octave }) => {
  wino = new WinoTone({ octave: _octave });
  wino.clickAttaq({ note, octave });
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
