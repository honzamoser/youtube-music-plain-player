<script lang="ts">
  // get data from load function
  export let data: any;

  export let format: any = (data.result.formats as Array<any>)
    .filter((x) => x.hasVideo == false && x.hasAudio == true)
    .sort((a: any, b: any) => {
      return b.contentLength - a.contentLength;
    })[0];
</script>

{data.result.videoDetails.title} <br />
{#if format}
  <audio controls>
    <source src={format.url} type="audio/ogg" />
  </audio>
{/if}

<footer><a href="https://github.com/WaveLinkdev/youtube-music-plain-player">?</a></footer>

<style>
  footer {
    position: fixed;
    bottom: 0;
    padding: 0.5rem;
    font-size: 0.8rem;
  }
</style>