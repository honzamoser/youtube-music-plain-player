<script lang="ts">
  import SearchEntry from "../../lib/searchEntry.svelte";

  export let data: any;

  let videos = data.search.items.filter((x: any) => x.type  == "video");

  function next() {
    fetch("/search/next?cd=" + btoa(JSON.stringify(data.search.continuation)))
      .then((x) => x.json())
      .then((x) => {
        const newVideos = x.items.filter((x: any) => x.type == "video");
        videos = [...videos, ...newVideos];
      });
  }
</script>

<div style="display: flex; flex-direction: row; flex-wrap: wrap;">
  {#each videos as vid}
    <SearchEntry vid={vid} />
  {/each}
</div>

<button on:click={next}>Next</button>
