<script lang="ts">
  import GridDisplay from "./gridDisplay.svelte";
  import VideoCard from "./videoCard.svelte";

  export let videos: DisplayVideo[];

  function watch() {

  }
</script>

<div style="margin-left: 10em; margin-right: 10em;">
  <GridDisplay colNum={3}>
  {#each videos as vid}
    <VideoCard video={vid} callback={watch}/>
  {/each}
</GridDisplay>
</div>