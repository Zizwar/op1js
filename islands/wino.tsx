

  /** @jsx h */
import { h } from "preact";
import { useEffect } from "preact/hooks";
import {nexusIno} from "../wino/nexus.ts"


export default function Wino(props) {
  useEffect(() => {
    nexusIno(props)
  });
  return (<div></div>);
}