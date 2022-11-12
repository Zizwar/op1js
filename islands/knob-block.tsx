/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
//
const wino = () => {
    const dial = new Nexus.Dial('#dial')
  
  };    


export default function KnobBlock(props) {
    useEffect(() => {
        const dial = new Nexus.Dial('#dial')
       // alert(23)
        // code to run after render goes here
      // setTimeout(wino,5000)
      });
  return (
    <div class="knob-block">
   <div id="dial"></div>
    </div>
  );
}
