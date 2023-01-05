import { error, type LoadEvent } from "@sveltejs/kit";
import type { RequestEvent } from "../$types";
import ytdl from "ytdl-core";

export async function GET({ url }: RequestEvent) {
  const watchId = url.searchParams.get("w");

  if (watchId === null) {
    throw error(400, "Missing 'w' query parameter");
  }

  const result = await ytdl.getInfo(
    `https://www.youtube.com/watch?v=${watchId}`,
    {}
  );

  return new Response(JSON.stringify(result));
}
