import { fromYTSR } from "$lib/util/DisplayVideoUtil";
import ytsr, { type Video } from "ytsr";
import type { RequestEvent } from "../$types";

export async function GET({ url }: RequestEvent) { 
  const contiunedata = url.searchParams.get("cd");
  if (contiunedata !== null) {
    const json = JSON.parse(atob(contiunedata));

    const search = await ytsr.continueReq(json);

    const videos = search.items.filter(
      (x: any) => x.type == "video"
    ) as Video[];
    const displayVideos: DisplayVideo[] = [];
    for (const video of videos) {
      const data = fromYTSR(video);
      const req = await fetch(
        data.thumbnails[data.bestThumbnail].url as string,
        { cache: "force-cache" }
      );
      const buffer = await req.arrayBuffer();
      const imgData = Buffer.from(buffer).toString("base64");
      data.thumbnailData = imgData;
      displayVideos.push(data);
    }

    return new Response(JSON.stringify(displayVideos));
  }
  return new Response("null");
}