<script lang="ts">
  import { goto } from "$app/navigation";
  import GridDisplay from "$lib/components/gridDisplay.svelte";
  import VideoCard from "$lib/components/videoCard.svelte";
  import { fromYTSR } from "$lib/util/DisplayVideoUtil";
  import type {Video} from "ytsr";

  export let data: any;
  let videos = data.videos

  let loading = false;


  function next() {
    loading = true;
    fetch("/search/next?cd=" + btoa(JSON.stringify(data.continuation)))
      .then((x) => x.json())
      .then((x) => {
        videos = [...videos, ...x];
        loading = false;
      });
  }

  function play(id: string) {
    goto("/watch?v=" + id);
  }
</script>

<div style="margin-left: 10em; margin-right: 10em;">
  <GridDisplay colNum={3}>
    {#each videos as vid}
      <VideoCard video={vid} callback={play} />
    {/each}
  </GridDisplay>
</div>

<button on:click={next}>Next</button> {#if loading} Loading... {/if}
