import { redirect } from "@sveltejs/kit";

export function load({ url }) {
  
  if (url.searchParams.has("w")) {
    console.log(url);
    const id = url.searchParams.get("w");
    throw redirect(307, "/watch/?w=" + id);
  }
}
