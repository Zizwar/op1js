/** @jsx h */
import { h } from "preact";
//
import KnobBlock from "../islands/knob-block.tsx";
export default function Upper(props) {
  return (
    <div class="upper-part">
      <div class="speaker-block">
        <div class="speaker"></div>
      </div>
      <div class="button-group-1">
        <div class="long-button-block">
          <div class="vol-knob">
            <div class="knob-dot"></div>
          </div>
        </div>
        <div class="button-block">
          <div class="button">
            <img
              width="36"
              alt="Help button icon"
              src="https://pizzabreakfast.co/project-assets/web-op-1/help-icon.svg"
            />
          </div>
        </div>
        <div class="button-block">
          <div class="button">
            <img
              width="36"
              alt="Tempo button icon"
              src="https://pizzabreakfast.co/project-assets/web-op-1/tempo-icon.svg"
            />
          </div>
        </div>
      </div>
      <div class="op-screen">
        <img
          class="op-screen-background"
          width="268"
          alt="op1-display-background"
          src="https://pizzabreakfast.co/project-assets/web-op-1/op1-display-background.svg"
        />
        <div class="tape-rolls">
          <img
            class="roll-1 rotate-center"
            width="60"
            alt="roll-1"
            src="https://pizzabreakfast.co/project-assets/web-op-1/roll-1.svg"
          />
          <img
            class="rotate-center"
            width="60"
            alt="roll-2"
            src="https://pizzabreakfast.co/project-assets/web-op-1/roll-2.svg"
          />
        </div>
        <img
          class="gloss"
          width="268"
          alt="Display gloss image"
          src="https://pizzabreakfast.co/project-assets/web-op-1/gloss.svg"
        />
      </div>
      <div class="knobs">
        <div class="knob-block">
          <div class="outer-knob">
            <div class="knob-blue">
              <div class="imprint-blue"></div>
            </div>
          </div>
        </div>

        <KnobBlock />
         
  

        <div class="knob-block">
          <div class="outer-knob">
            <div class="knob-white">
              <div class="imprint-white"></div>
            </div>
          </div>
        </div>
        <div class="knob-block">
          <div class="outer-knob">
            <div class="knob-orange">
              <div class="imprint-orange"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="top-right">
        <div class="button-block">
          <div class="button">
            <img
              width="36"
              alt="Microphone button icon"
              src="https://pizzabreakfast.co/project-assets/web-op-1/mic-icon.svg"
            />
          </div>
        </div>
        <div class="button-block">
          <div class="button">
            <div>
              <img
                width="16"
                alt="Album button icon"
                src="https://pizzabreakfast.co/project-assets/web-op-1/album-icon.svg"
              />
              <p class="condensed-10px">COM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
