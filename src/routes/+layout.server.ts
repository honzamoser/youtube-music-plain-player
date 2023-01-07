import type { LoadEvent } from "@sveltejs/kit";

export function load({ url }: LoadEvent) {
  console.log(url);
  

  if(url.host.includes("youtube.com")) {
    const id = url.searchParams.get("v");
    return {
      status: 307,
      headers: {
        location: "/watch/?v=" + id
      }
    }
  }
  
}
