import { redirect, type LoadEvent } from "@sveltejs/kit";

export async function load({ url }: LoadEvent) {
  if (url.searchParams.has("v")) {
    console.log(url);
    const id = url.searchParams.get("v");
    throw redirect(307, "/watch/?v=" + id);
  }

  
}
