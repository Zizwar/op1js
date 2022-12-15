/** @jsx h */
/** @jsxFrag Fragment */
import { h } from "preact";
import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function App({ Component }: AppProps) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />

        <meta charset="UTF-8" />
        <title>OP-1 JS</title>

        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Midino" />
        <meta property="og:title" content="Midino" />
        <meta property="og:description" content="Midino" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="midi, controle, Deno, DenoLand, Development, JavaScript, TypeScript"
        />
        <link rel="stylesheet" href="./css/style.css"></link>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.49/Tone.min.js"
          integrity="sha512-Siyxh4gyNM5SaERNa9BOZSPcu/auHyFUWn9OVFD7MxI3/dVPQklE7tfqS+pLmPHF1zo6UdDaJAp/thihrf0c7w=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        >
        </script>
        <script src="./vanilla/nexusUI.js">
        </script>
      </Head>
      <Component />
    </div>
  );
}
