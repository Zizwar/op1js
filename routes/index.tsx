/** @jsx h */
import { h } from "preact";
import Keyblock from "../islands/keyBlock.tsx";
import KeyblockDash from "../islands/keyBlockDash.tsx";
import { NOTES, NOTES_SHARP } from "../utils/notes.ts";

export default function Home() {
  return (
    <div>
      <div class="op1-container-layer1">
        <div class="op1-container-layer2">
          <div class="inner-profile">
            <div class="dark-background">
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
                  <div class="knob-block">
                    <div class="outer-knob">
                      <div class="knob-green">
                        <div class="imprint-green"></div>
                      </div>
                    </div>
                  </div>
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
              <div class="transports-controls-keyboard">
                <div class="transports">
                  <div class="button-block">
                    <div class="button">
                      <img
                        width="36"
                        alt="Synthesizer button icon"
                        src="https://pizzabreakfast.co/project-assets/web-op-1/synthesizer-icon.svg"
                      />
                    </div>
                  </div>
                  <div class="button-block">
                    <div class="button">
                      <img
                        width="36"
                        alt="Drum button icon"
                        src="https://pizzabreakfast.co/project-assets/web-op-1/drum-icon.svg"
                      />
                    </div>
                  </div>
                  <div class="button-block">
                    <div class="button">
                      <img
                        width="36"
                        alt="Tape button icon"
                        src="https://pizzabreakfast.co/project-assets/web-op-1/tape-icon.svg"
                      />
                    </div>
                  </div>
                  <div class="button-block">
                    <div class="button">
                      <div>
                        <img
                          width="16"
                          alt="Lift button icon"
                          src="https://pizzabreakfast.co/project-assets/web-op-1/lift-icon.svg"
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
                        src="https://pizzabreakfast.co/project-assets/web-op-1/drop-icon.svg"
                      />
                      <img
                        width="16"
                        alt="Dot icon"
                        src="https://pizzabreakfast.co/project-assets/web-op-1/dot-icon.svg"
                      />
                    </div>
                  </div>
                  <div class="button-block">
                    <div class="button">
                      <div>
                        <img
                          width="16"
                          alt="Split button icon"
                          src="https://pizzabreakfast.co/project-assets/web-op-1/split-icon.svg"
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
                        src="https://pizzabreakfast.co/project-assets/web-op-1/record-icon.svg"
                      />
                    </div>
                  </div>
                  <div class="button-block">
                    <div class="button">
                      <img
                        width="24"
                        alt="Play button icon"
                        src="https://pizzabreakfast.co/project-assets/web-op-1/play-icon.svg"
                      />
                    </div>
                  </div>
                  <div class="button-block">
                    <div class="button">
                      <img
                        width="24"
                        alt="Stop button icon"
                        src="https://pizzabreakfast.co/project-assets/web-op-1/stop-icon.svg"
                      />
                    </div>
                  </div>
                  <div class="button-block">
                    <div class="button">
                      <img
                        width="24"
                        alt="Back button icon"
                        src="https://pizzabreakfast.co/project-assets/web-op-1/back-icon.svg"
                      />
                    </div>
                  </div>
                  <div class="button-block">
                    <div class="button">
                      <img
                        width="24"
                        alt="Forward button icon"
                        src="https://pizzabreakfast.co/project-assets/web-op-1/forward-icon.svg"
                      />
                    </div>
                  </div>
                  <div class="button-block">
                    <div class="button">
                      <p>Shift</p>
                    </div>
                  </div>
                </div>

                <div class="controls-keyboard">
                  <div class="controls">
                    <div class="button-block">
                      <div class="button">
                        <img
                          width="36"
                          alt="Mixer button icon"
                          src="https://pizzabreakfast.co/project-assets/web-op-1/mixer-icon.svg"
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
                            src="https://pizzabreakfast.co/project-assets/web-op-1/loop-icon.svg"
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
                            src="https://pizzabreakfast.co/project-assets/web-op-1/break-icon.svg"
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
                            src="https://pizzabreakfast.co/project-assets/web-op-1/chop-icon.svg"
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
                          src="https://pizzabreakfast.co/project-assets/web-op-1/sequencer-icon.svg"
                        />
                      </div>
                    </div>
                  </div>
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
                </div>
              </div>
            </div>
          </div>
          <div class="right-side-part">
            <div class="microphone-vu-op1">
              <img
                width="16"
                alt="Inbuilt microphone image"
                src="https://pizzabreakfast.co/project-assets/web-op-1/microphone.svg"
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
        </div>
      </div>
    </div>
  );
}
