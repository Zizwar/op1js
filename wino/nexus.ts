export const nexusIno = () => {
  const dialsArr = ["blue", "green", "orange", "white"];

  dialsArr.forEach((item) =>
    new Nexus.Dial("#imprint-" + item).on("change", function (value) {
      document.querySelector("#display-circle-volume")
        .setAttribute("cy", 100 - (value * 100));

      /*    document.querySelector("#display-rect-volume")
        .setAttribute("y", 100 - (value * 100));
      */
      document.querySelector(".imprint-" + item).style.transform = `rotate(${
        value * 360
      }deg)`;
    })
  );

  const piano = new Nexus.Piano("#keyboard", {
    "size": [1024, 180],
    "mode": "button", // 'button', 'toggle', or 'impulse'
    "lowNote": 29,
    "highNote": 53,
  });
  ////////

  const controls_arr = "mixer,t1,t2,t3,t4,s1,s2,s3,s4,s5,s6,s7,s8,sequencer"
    .split(
      ",",
    );

  const elmControls = document.querySelectorAll(".controls .button-block");

  elmControls.forEach((control, index) => {
    control.id = controls_arr[index];
  });

  const Controles = [];
  elmControls.forEach((_, index) => {
    const idElement = controls_arr[index];
    const button = new Nexus.Add.Button(idElement, {
      "size": [44, 44],
      "mode": "button",
      "state": false,
    });
    button.parent.style.position = "absolute";
    button.parent.style.opacity = 0.5;
    Controles[idElement] = button;
  });
  setTimeout(() => {
    Controles.sequencer.parent.style.opacity = 1;

  },5000)
 
};
