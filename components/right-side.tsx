/** @jsx h */
import { h } from "preact";
//

export default function RightSide(props) {
  return (
    <div class="right-side-part">
      <div class="microphone-vu-op1">
        <img
          width="16"
          alt="Inbuilt microphone image"
          src="./svg/microphone.svg"
        />
        <div class="vu-meter">
          <div class="oval-4px"></div>
          <div class="oval-4px"></div>
          <div class="oval-4px"></div>
          <div class="oval-4px"></div>
          <div class="oval-4px"></div>
        </div>
        <h1 class="op1-label">OP-1</h1>
      </div>
    </div>
  );
}
