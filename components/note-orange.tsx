/** @jsx h */
import { h } from "preact";
//

export default function NoteOrange({ note }) {
  return (
    <div class="buttons-two-elements">
      <p class="normal-12px orange">{note}</p>
    </div>
  );
}
