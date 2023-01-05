<script lang="ts">
  // get data from load function
  export let data: any;

  console.log(data);

  export let format: any = (data.result.formats as Array<any>).filter(x => x.hasVideo == false && x.hasAudio == true).sort((a: any, b: any) => {
    return b.contentLength - a.contentLength;
  })[0]
</script>
{data.result.videoDetails.title} <br>
{#if format}
  <audio controls>
    <source src={format.url} type="audio/ogg" />
  </audio>
{/if}