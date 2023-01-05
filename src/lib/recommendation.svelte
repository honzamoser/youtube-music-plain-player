<script lang="ts">
  export let video: any;

  let img = video.thumbnails.sort((a, b) => {
    return b.width * b.height - a.width * a.height;
  })[0].url;

  function play() {
    window.location.href = "/?w=" + video.id;
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="container" on:click={play} style="cursor: pointer;">
  <img src={img} width="50%" alt="" style="border-radius: 20px; margin-right: 2em;" />
  <div>
    <h4 class="title">{video.title}</h4>
    <h5 class="title">{video.author.name}</h5>
  </div>
</div>


<style>
  .title {
    text-overflow: ellipsis;
    width: auto;
    height: 2.5em;
    overflow: hidden
  }
  .container {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 20px;
    margin-bottom: 0.5rem;
    margin-right: 0.5rem;
    width: 15em;
    height: 6em;
  }
</style>