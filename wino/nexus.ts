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
  //compatibe key style with piano nexus
  const idKey = [[2,4,6],[9,11],[14,16,18], [21,23],[1,3,5,7],[8,10,12],[13,15,17,19],[20,22,24]];
  const keyboard = document.querySelectorAll(".keyboard > div");
  keyboard.forEach((elms,ii)=>{
    if(!elms.id){
        const nameClass =  elms.className
        elms.querySelectorAll("."+nameClass+">div").forEach((elm,i)=>{
       if(idKey[ii][i]){
            elm.id='key'+idKey[ii][i]
            //console.log({id:idKey[ii][i],i})
       }
    })
 }
})

  return ({ Controls, Piano, Knobs });
};
