/** @jsx h */
import { h } from "preact";
//

export default function Transports(props) {
  return (
    <div class="transports">
      <div class="button-block">
        <div class="button">
          <img
            width="36"
            alt="Synthesizer button icon"
            src="./svg/synthesizer-icon.svg"
          />
        </div>
      </div>
      <div class="button-block">
        <div class="button">
          <img
            width="36"
            alt="Drum button icon"
            src="./svg/drum-icon.svg"
          />
        </div>
      </div>
      <div class="button-block">
        <div class="button">
          <img
            width="36"
            alt="Tape button icon"
            src="./svg/tape-icon.svg"
          />
        </div>
      </div>
      <div class="button-block">
        <div class="button">
          <div>
            <img
              width="16"
              alt="Lift button icon"
              src="./svg/lift-icon.svg"
            />
            <p class="normal-10px">1–4</p>
          </div>
        </div>
      </div>
      <div class="button-block">
        <div class="button">
          <img
            width="16"
            alt="Drop button icon"
            src="./svg/drop-icon.svg"
          />
          <img
            width="16"
            alt="Dot icon"
            src="./svg/dot-icon.svg"
          />
        </div>
      </div>
      <div class="button-block">
        <div class="button">
          <div>
            <img
              width="16"
              alt="Split button icon"
              src="./svg/split-icon.svg"
            />
            <p class="condensed-10px">JOIN</p>
          </div>
        </div>
      </div>
      <div class="button-block">
        <div class="button">
          <img
            width="36"
            alt="Record button icon"
            src="./svg/record-icon.svg"
          />
        </div>
      </div>
      <div class="button-block">
        <div class="button">
          <img
            width="24"
            alt="Play button icon"
            src="./svg/play-icon.svg"
          />
        </div>
      </div>
      <div class="button-block">
        <div class="button">
          <img
            width="24"
            alt="Stop button icon"
            src="./svg/stop-icon.svg"
          />
        </div>
      </div>
      <div class="button-block">
        <div class="button">
          <img
            width="24"
            alt="Back button icon"
            src="./svg/back-icon.svg"
          />
        </div>
      </div>
      <div class="button-block">
        <div class="button">
          <img
            width="24"
            alt="Forward button icon"
            src="./svg/forward-icon.svg"
          />
        </div>
      </div>
      <div class="button-block">
        <div class="button">
          <p>Shift</p>
        </div>
      </div>
    </div>
  );
}
