import type { LoadEvent } from "@sveltejs/kit";
import ytsr from "ytsr";

export async function load({ url }: LoadEvent) {
  const query = url.searchParams.get("q");
  if (query !== null) {
    const search = await ytsr(query, {pages: 1});
    return {search}
  }

  return {search: null}
}
