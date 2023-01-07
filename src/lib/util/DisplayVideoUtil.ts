import type { Video } from "ytsr";
import type { Author, relatedVideo, thumbnail } from "ytdl-core";
import prettyMilliseconds from "pretty-ms"

export function fromYTSR(video: Video): DisplayVideo {
  const bestThumbnail =
    video.thumbnails.findIndex((x) => x.url == video.bestThumbnail?.url) | 0;
  let bestAuthorThumbnail = 0;
  if (video.author != null) {
    bestAuthorThumbnail =
      video.author?.avatars.findIndex(
        (x) => x.url == video.author?.bestAvatar?.url
      ) | 0;
  }

  return {
    hasThumbData: false,
    thumbnailData: "",
    title: video.title,
    id: video.id,
    duration: video.duration,
    bestThumbnail: bestThumbnail,
    thumbnails: video.thumbnails,
    author:
      video.author != null
        ? {
            bestThumbnail: bestAuthorThumbnail,
            id: video.author?.channelID,
            name: video.author?.name,
            thumbnails: video.author?.avatars,
          }
        : null,
  };
}

export function fromRelatedVideo(video: relatedVideo): DisplayVideo {
  const bestThumbnail = video.thumbnails.indexOf(
    video.thumbnails.sort(
      (a, b) => a.width * a.height - b.height * b.width
    )[0] as thumbnail
  ) as number | 0;
  let bestAuthorThumbnail = 0;
  if (video.author != null) {
    bestAuthorThumbnail = (video.author as Author).thumbnails?.indexOf(
      (video.author as Author).thumbnails?.sort(
        (a, b) => a.width * a.height - b.width * b.height
      )[0] as thumbnail
    ) as number;
  }

  return {
    hasThumbData: false,
    thumbnailData: "",
    title: video.title!,
    id: video.id!,
    duration: prettyMilliseconds(video.length_seconds! * 1000),
    bestThumbnail: bestThumbnail,
    thumbnails: video.thumbnails,
    author: {
      bestThumbnail: bestAuthorThumbnail,
      id: (video.author as Author).id,
      name: (video.author as Author).name,
      thumbnails: (video.author as Author).thumbnails as thumbnail[],
    },
    url: `https://www.youtube.com/watch?v=${video.id}`,
  };
}
