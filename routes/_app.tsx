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
        <title>Midino</title>
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
      
      </Head>
      <Component />
    </div>
  );
}
