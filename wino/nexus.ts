export const nexusIno = () => {
  const $ = (q) => document.querySelector(q);
  const _knobs = ["blue", "green", "orange", "white"];

  const Knobs = [];
  _knobs.forEach((knob) => {
    $(`.imprint-${knob}`).style.transform = `rotate(0deg)`;
    Knobs[knob] = new Nexus.Dial(`#imprint-${knob}`).on("change", (value) => {
      $("#display-circle-volume")
        .setAttribute("cy", 100 - (value * 100));
      $(`.imprint-${knob}`).style.transform = `rotate(${value * 360}deg)`;
    });
  });

  const Piano = new Nexus.Piano("#keyboard", {
    "size": [1024, 180],
    "mode": "button", // 'button', 'toggle', or 'impulse'
    "lowNote": 29,
    "highNote": 53,
  });

  //
  const _controls = "mixer,t1,t2,t3,t4,s1,s2,s3,s4,s5,s6,s7,s8,sequencer"
    .split(
      ",",
    );

  document.querySelectorAll(".controls .button-block").forEach((
    control,
    index,
  ) => (
    control.id = _controls[index]
  ));

  const Controls = [];
  _controls.forEach((control) => {
    const button = new Nexus.Add.Button(control, {
      "size": [44, 44],
      "mode": "button",
      "state": false,
    });
    button.parent.style.position = "absolute";
    button.parent.style.opacity = 0.12345;

    Controls[control] = button;
  });

  return ({ Controls, Piano, Knobs });
};
