/** @jsx h */
import { h } from "preact";

export default function KeyBlock({text=null}) {
  return (
    <div class="white-key-block">
      <div class="white-key">{text}</div>
    </div>
  );
}
