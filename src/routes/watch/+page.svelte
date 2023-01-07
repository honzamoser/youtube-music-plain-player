<script lang="ts">
  import "@fontsource/roboto";
  import Recommendation from "../../lib/components/recommendation.svelte";
  import { goto } from "$app/navigation";
  import GridDisplay from "$lib/components/gridDisplay.svelte";
  import VideoCard from "$lib/components/videoCard.svelte";

  export let data: any;

  function next() {
    console.log("next");

    goto("/watch?w=" + data.related_videos[0].id);
  }

  let format: any;
  $: format = data.format;

  function play(id: string) {
    goto("/watch?w=" + id);
  }
</script>

<svelte:head>
  <title>{data.videoDetails.title} - {data.videoDetails.author.name}</title>
</svelte:head>

<div
  style="display: flex; flex-direction: column; align-items: center; margin-bottom: 3em;"
>
  <h3>{data.videoDetails.title}</h3>
  <h4>{data.videoDetails.author.name}</h4>
  <audio controls src={format.url} on:ended={next} />
</div>

<h4>Recommendations</h4>
<hr />

<div style="margin-left: 10em; margin-right: 10em;">
  <GridDisplay colNum={2}>
    {#each data.related_videos as vid}
      <VideoCard video={vid} callback={play} />
    {/each}
  </GridDisplay>
</div>

<footer>
  <a href="https://github.com/WaveLinkdev/youtube-music-plain-player">?</a>
  <button
    on:click={() => {
      console.log(data);
    }}>debug</button
  >
</footer>

<style>
  footer {
    position: fixed;
    bottom: 0;
    padding: 0.5rem;
    font-size: 0.8rem;
  }
</style>
