<script lang="ts">
  import { base } from "$app/paths";
  import { onMount } from "svelte";
  import { browser } from "$app/environment";
  import AuthorDisplay from "./video/authorDisplay.svelte";
  import { goto } from "$app/navigation";

  export let video: DisplayVideo;
  export let callback: (id: string) => void;

  function getAvgColor(img: string) {
    const context = document
      .createElement("canvas")
      .getContext("2d") as CanvasRenderingContext2D;
    const load: HTMLImageElement = new Image();
    load.src = img;
    load.onload = () => {
      context.drawImage(load, 0, 0, 1, 1);
      let i = context!.getImageData(0, 0, 1, 1).data.slice(0, 3);
      const rgba = `rgba(${i[0]},${i[1]},${i[2]}, 0.2)`;
      avgCol = rgba;
    };
  }

  let img = "";
  if (browser) {
    fetch("data:image/jpg;base64," + video.thumbnailData)
      .then((res) => res.blob())
      .then((blob) => {
        img = URL.createObjectURL(blob);
        getAvgColor(img);
      });
  }

  let avgCol = "";

  function play() {
    console.log("play");
    callback(video.id);
    goto("/watch/?w=" + video.id);
  }
</script>

<div
  class="container"
  style="background-image: url({img});"
>
  <div class="card" style="background-color: {avgCol};" on:mousedown={play}>
    <h4 class="title">{video.title}</h4>
    {#if video.author}
      <AuthorDisplay author={video.author} />
    {/if}
  </div>
</div>

<style>
  .card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em;
    margin: 1em;
    border-radius: 2em;
    backdrop-filter: blur(5px) brightness(30%);
    width: 100%;
    cursor: pointer;

    transition: all 0.2s ease-in-out;
  }

  .card:hover {
    box-shadow: inset 0 0 10px;
  }

  .container {
    display: flex;
    justify-content: center;
    background-position: center;
    background-size: cover;
    max-width: 100%;
    height: 100%;
    border-radius: 2em;
  }

  .author-favicon {
    width: 2em;
    height: 2em;
    border-radius: 50%;
    opacity: 50%;
    margin-left: 1em;
  }

  .title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    max-height: 2.5em;
    white-space: normal;
    width: auto;
    overflow: hidden;
    margin-right: 0.5em;
  }
</style>
