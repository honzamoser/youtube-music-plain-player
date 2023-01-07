<script lang="ts">
  import GridDisplay from "$lib/components/gridDisplay.svelte";
  import VideoCard from "$lib/components/videoCard.svelte";

  export let data: any;
  let videos = data.videos


  function next() {
    fetch("/search/next?cd=" + btoa(JSON.stringify(data.continuation)))
      .then((x) => x.json())
      .then((x) => {
        const newVideos = x.items.filter((x: any) => x.type == "video")
        videos = [...videos, ...newVideos];
      });
  }
</script>

<div style="margin-left: 10em; margin-right: 10em;">
  <GridDisplay colNum={3}>
  {#each videos as vid}
    <VideoCard video={vid} />
  {/each}
</GridDisplay>
</div>

<button on:click={next}>Next</button>
