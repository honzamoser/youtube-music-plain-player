import type { LoadEvent } from "@sveltejs/kit";

export function load({ url }: LoadEvent) {
  if(url.hostname.includes("youtube.com")) {
    const id = url.searchParams.get("v");
    return {
      status: 307,
      headers: {
        location: "/watch/?v=" + id
      }
    }
  }
  
}
