import ytsr from "ytsr";
import type { RequestEvent } from "../$types";

export async function GET({ url }: RequestEvent) { 
  const contiunedata = url.searchParams.get("cd");
  if (contiunedata !== null) {
    const json = JSON.parse(atob(contiunedata));

    const search = await ytsr.continueReq(json);

    return new Response(JSON.stringify(search));
  }
  return new Response("null");
}