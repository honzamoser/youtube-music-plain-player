import { redirect, type LoadEvent } from "@sveltejs/kit";

export async function load({ url }: LoadEvent) {
  if (url.searchParams.has("w")) {
    console.log(url);
    const id = url.searchParams.get("w");
    throw redirect(307, "/watch/?w=" + id);
  }

  
}
