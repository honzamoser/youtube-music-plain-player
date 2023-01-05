import { error, type LoadEvent } from "@sveltejs/kit";
import ytdl from 'ytdl-core'

export async function load({ url }: LoadEvent) {
  const watchId = url.searchParams.get("w");

  if (watchId === null) {
    throw error(400, "Missing 'w' query parameter");
  }

  const result = await ytdl.getInfo(
    `https://www.youtube.com/watch?v=${watchId}`,
    {}
  );

  return {
    result: JSON.parse(JSON.stringify(result)), // Serialization issue, Only work around I'm able to think of at 12pm
  };
}
