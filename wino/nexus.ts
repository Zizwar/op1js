export const nexusIno = () => {
  const dialsArr = ["blue", "green", "orange", "white"];

  const dials = dialsArr.map((item) =>
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
  /*
  dialsArr.forEach((item) => {

    dial = new Nexus.Dial("#imprint-" + dial)
    dial.on("change", (
        val,
      ) => {
        document.querySelector(".imprint-" + dial).style.transform = `rotate(${
          val * 360
        }deg)`;
      });

    dial = new Nexus.Dial("#imprint-" + item);.on("change", function (value) {
      document.querySelector(".imprint-" + item).style.transform = `rotate(${
        value * 360
      }deg)`;
    });
    dials.push({ name: item, dial });
  });
  */
  // code to run after render goes here
  // setTimeout(wino,5000)
};
