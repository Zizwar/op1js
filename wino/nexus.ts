export const nexusIno = () => {
  const knobs = ["blue", "green", "orange", "white"];

  const Knobs = knobs.map((knob) => {
    const elmKnob = document.querySelector(`#imprint-${knob}`);

    const ondblclick = (arg) => alert(arg);
    elmKnob.ondblclick = () => ondblclick(knob);

    return ({
      [knob]: new Nexus.Dial(`#imprint-${knob}`).on("change", (value) => {
        document.querySelector("#display-circle-volume")
          .setAttribute("cy", 90 - (value * 90));
        document.querySelector(`.imprint-${knob}`).style.transform = `rotate(${
          value * 360
        }deg)`;
      }),
    });
  });

  const Piano = new Nexus.Piano("#keyboard", {
    "size": [1024, 180],
    "mode": "button", // 'button', 'toggle', or 'impulse'
    "lowNote": 29,
    "highNote": 53,
  });

  //
  const controls = "mixer,t1,t2,t3,t4,s1,s2,s3,s4,s5,s6,s7,s8,sequencer"
    .split(
      ",",
    );

  document.querySelectorAll(".controls .button-block").forEach((
    control,
    index,
  ) => (
    control.id = controls[index]
  ));

  const Controles = controls.map((control) => {
    const button = new Nexus.Add.Button(control, {
      "size": [44, 44],
      "mode": "button",
      "state": false,
    });
    button.parent.style.position = "absolute";
    button.parent.style.opacity = 0.12345;
    return { [control]: button };
  });
  setTimeout(() => {
    Knobs.orange.value = 0.2;
    Knobs.blue.max = 0.5;
    knobs.orange.value = 50;
  }, 5000);

  return ({ Controles, Piano, Knobs });
};
