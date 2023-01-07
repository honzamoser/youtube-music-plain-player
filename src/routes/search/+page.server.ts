import { fromYTSR } from "$lib/util/DisplayVideoUtil";
import type { LoadEvent } from "@sveltejs/kit";
import ytsr, { type Video } from "ytsr";

export async function load({ url }: LoadEvent) {
  const query = url.searchParams.get("q");
  if (query !== null) {
    const search = await ytsr(query, { pages: 1 });
    const videos = search.items.filter(
      (x: any) => x.type == "video"
    ) as Video[];
    const displayVideos: DisplayVideo[] = [];
    for (const video of videos) {
      const data = fromYTSR(video);
      const req = await fetch(data.thumbnails[data.bestThumbnail].url as string, {cache: "force-cache"})
      const buffer = await req.arrayBuffer()
      const imgData = Buffer.from(buffer).toString("base64");
      data.thumbnailData = imgData;
      displayVideos.push(data);
    }

    return { videos: displayVideos, contiunation: search.continuation };
  }

  return { search: null };
}
