import { fromRelatedVideo, fromYTSR } from "$lib/util/DisplayVideoUtil";
import { error, redirect, type LoadEvent } from "@sveltejs/kit";
import ytdl from "ytdl-core";

export async function load({ url }: LoadEvent) {
  const watchId = url.searchParams.get("v");
  if (watchId === null) {
    throw error(400, "Missing 'w' query parameter");
  }

  console.log('rendering watch page');
  

  const match = new RegExp(
    /(?<=(\?|&)v=)([a-zA-Z0-9-_]){11}|(?<!.)(([a-zA-Z0-9-_]){11})(?!.)/g
  ).exec(watchId);

  if (match === null) {
    throw redirect(300, "/search/?q=" + watchId);
  }

  const result = await ytdl.getInfo(
    `https://www.youtube.com/watch?v=${match[0]}`,
    {}
  );

  const format = ytdl.chooseFormat(result.formats, {
    filter: (x) => x.hasAudio && !x.hasVideo,
    quality: "highestaudio",
  });

  const relatedDisplay: DisplayVideo[] = [];

  for (const video of result.related_videos) {
    const data = fromRelatedVideo(video);
    const req = await fetch(data.thumbnails[data.bestThumbnail].url as string, {
      cache: "force-cache",
    });
    const buffer = await req.arrayBuffer();
    const imgData = Buffer.from(buffer).toString("base64");
    data.thumbnailData = imgData;
    relatedDisplay.push(data);
  }

  const data = {
    videoDetails: result.videoDetails,
    format,
    related_videos: relatedDisplay,
  };

  return JSON.parse(JSON.stringify(data)); // Serialization issue, Only work around I'm able to think of at 12pm
}
