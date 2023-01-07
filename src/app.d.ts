// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  // interface Error {}
  // interface Locals {}
  // interface PageData {}
  // interface Platform {}
}

declare type DisplayVideo = {
  hasThumbData: boolean;
  thumbnailData: string;
  title: string;
  author: DisplayAuthor | null;
  url?: string;
  id: string;
  duration: string | null;
  bestThumbnail: number;
  thumbnails: {
    url: string | null;
    width: number;
    height: number;
  }[];
};

declare type DisplayAuthor = {
  name: string;
  id: string;
  bestThumbnail: number;
  thumbnails: {
    url: string | null;
    width: number;
    height: number;
  }[];
};
