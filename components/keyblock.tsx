/** @jsx h */
import { h } from "preact";

export default function KeyBlock({ texto = [] }) {
  return (
    <div class="white-key-block">
      <div class="white-key">
        {texto && (
          <div class="buttons-two-elements">
            <p class="normal-18px">{texto.normal}</p>
            <p class="normal-12px orange">{texto.orange}</p>
          </div>
        )}
      </div>
    </div>
  );
}
