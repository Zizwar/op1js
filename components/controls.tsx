/** @jsx h */
import { h } from "preact";
//

export default function Controls(props) {
  return (
    <div class="controls">
      <div class="button-block">
        <div class="button">
          <img
            width="36"
            alt="Mixer button icon"
            src="./svg/mixer-icon.svg"
          />
        </div>
      </div>
      <div class="button-block">
        <div class="button">
          <p class="light-32px">1</p>
        </div>
      </div>
      <div class="button-block">
        <div class="button">
          <p class="light-32px">2</p>
        </div>
      </div>
      <div class="button-block">
        <div class="button">
          <p class="light-32px">3</p>
        </div>
      </div>
      <div class="button-block">
        <div class="button">
          <p class="light-32px">4</p>
        </div>
      </div>
      <div class="button-block">
        <div class="button">
          <div class="buttons-two-elements">
            <p class="normal-18px">1</p>
            <p class="condensed-12px green">IN</p>
          </div>
        </div>
      </div>
      <div class="button-block">
        <div class="button">
          <div class="buttons-two-elements">
            <p class="normal-18px">2</p>
            <p class="condensed-12px green">OUT</p>
          </div>
        </div>
      </div>
      <div class="button-block">
        <div class="button">
          <div class="buttons-two-elements">
            <p class="normal-18px">3</p>
            <img
              width="24"
              alt="Loop button icon"
              src="./svg/loop-icon.svg"
            />
          </div>
        </div>
      </div>
      <div class="button-block">
        <div class="button">
          <div class="buttons-two-elements">
            <p class="normal-18px">4</p>
            <img
              width="24"
              alt="Break button icon"
              src="./svg/break-icon.svg"
            />
          </div>
        </div>
      </div>
      <div class="button-block">
        <div class="button">
          <div class="buttons-two-elements">
            <p class="normal-18px">5</p>
            <p class="normal-12px orange">Я</p>
          </div>
        </div>
      </div>
      <div class="button-block">
        <div class="button">
          <div class="buttons-two-elements">
            <p class="normal-18px">6</p>
            <img
              width="24"
              alt="Chop button icon"
              src="./svg/chop-icon.svg"
            />
          </div>
        </div>
      </div>
      <div class="button-block">
        <div class="button">
          <div class="buttons-two-elements">
            <p class="normal-18px">7</p>
            <p class="condensed-12px">M1</p>
          </div>
        </div>
      </div>
      <div class="button-block">
        <div class="button">
          <div class="buttons-two-elements">
            <p class="normal-18px">8</p>
            <p class="condensed-12px">M2</p>
          </div>
        </div>
      </div>
      <div class="button-block">
        <div class="button">
          <img
            width="36"
            alt="Sequencer button icon"
            src="./svg/sequencer-icon.svg"
          />
        </div>
      </div>
    </div>
  );
}
