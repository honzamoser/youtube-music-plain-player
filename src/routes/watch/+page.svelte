<script lang="ts">
  import "@fontsource/roboto";
  import Recommendation from "../../lib/recommendation.svelte";
  import { goto } from "$app/navigation";

  export let data: any;

  export let format: any = data.result.format;

  function next() {
    console.log("next");

    goto("/watch?w=" + data.result.related_videos[0].id);
  }
</script>

<svelte:head>
  <title>{data.result.videoDetails.title} - {data.result.videoDetails.author.name}</title>
</svelte:head>

<div
  style="display: flex; flex-direction: column; align-items: center; margin-bottom: 3em;"
>
  <h3>{data.result.videoDetails.title}</h3>
  <h4>{data.result.videoDetails.author.name}</h4>
  {#if format}
    <audio controls>
      <source src={format.url} on:ended={next} type={format.mimeType} />
    </audio>
  {/if}
</div>

<h4>Recommendations</h4>
<hr />

<div
  style="display: flex; flex-wrap: wrap; align-items: center; flex-direction: row;"
>
  {#each data.result.related_videos as x}
    <Recommendation video={x} />
  {/each}
</div>

<footer>
  <a href="https://github.com/WaveLinkdev/youtube-music-plain-player">?</a>
  <button on:click={() => {console.log(data)}}>debug</button>
</footer>

<style>
  footer {
    position: fixed;
    bottom: 0;
    padding: 0.5rem;
    font-size: 0.8rem;
  }
</style>
