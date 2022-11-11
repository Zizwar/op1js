
export default class WinoTone {
  constructor(props=[]) {
    this._octave = Number( props.octave) || 0;
    this.synth = new Tone.Synth().toDestination();
  }
  clickAttaq  ({ note, octave }) {


    if (!note) return;
    const noteAttaq = `${note}${octave + this._octave}`;
    //alert(noteAttaq)
    const now = Tone.now();
    // trigger the attack immediately
    this.synth.triggerAttack(noteAttaq, now);
    // wait one second before triggering the release
    this.synth.triggerRelease(now + 1);

  }
}
