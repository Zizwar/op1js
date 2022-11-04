import { HandlerContext } from "$fresh/server.ts";




export const handler = (_req: Request, _ctx: HandlerContext): Response => {

  return Response.json({ ok: "ok" })

  //const body = JSON.stringify(cv);
  // return new Response(body);
};


