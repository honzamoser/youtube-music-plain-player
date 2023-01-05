<script lang="ts">
  // get data from load function
  export let data: any;

  console.log(data);

  export let format: any = (data.result.formats as Array<any>).filter(x => x.format_note != "storyboard" && x.acodec != "none" && x.vcodec == "none").sort((a: any, b: any) => {
    return b.filesize - a.filesize;
  })[0]
</script>

{#if format}
  <audio controls>
    <source src={format.url} type="audio/ogg" />
  </audio>
{/if}
