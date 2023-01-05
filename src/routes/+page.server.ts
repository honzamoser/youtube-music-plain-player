import { error, type LoadEvent } from "@sveltejs/kit";
import pkg from "youtube-dl-exec";
const { exec } = pkg;

export async function load({ url }: LoadEvent) {
  console.log('q');
  

  const watchId = url.searchParams.get("w");

  if (watchId === null) {
    throw error(400, "Missing 'w' query parameter");
  }

  const result = await exec(`https://www.youtube.com/watch?v=${watchId}`, {
    dumpJson: true,
  });

  return {
    result: JSON.parse(result.stdout),
  };
}
