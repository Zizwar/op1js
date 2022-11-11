/** @jsx h */
import { h } from "preact";

import Keyboard from "../components/keyboard.tsx";
import Controls from "../components/controls.tsx";
import RightSide from "../components/right-side.tsx";
import Transports from "../components/transports.tsx";
import Upper from "../components/upper.tsx";

export default function Home() {
  return (
    <div>
      <div class="op1-container-layer1">
        <div class="op1-container-layer2">
          <div class="inner-profile">
            <div class="dark-background">
              <Upper />
              <div class="transports-controls-keyboard">
                <Transports />
                <div class="controls-keyboard">
                  <Controls />
                  <Keyboard />
                </div>
              </div>
            </div>
          </div>
          <RightSide />
        </div>
      </div>
    </div>
  );
}
