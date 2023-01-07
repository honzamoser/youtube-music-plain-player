import { error, type RequestEvent } from "@sveltejs/kit";
import ytdl from "ytdl-core";

export async function GET({ url }: RequestEvent) {
  const watchId = url.searchParams.get("v");

  if (watchId === null) {
    throw error(400, "Missing 'v' query parameter");
  }
  
  if (!ytdl.validateURL(`https://www.youtube.com/watch?v=${watchId}`)) { 
    throw error(400, "Invalid 'v' query parameter");
  }

  const result = await ytdl.getInfo(
    `https://www.youtube.com/watch?v=${watchId}`,
    {}
  );


  return new Response(JSON.stringify(result));
}
