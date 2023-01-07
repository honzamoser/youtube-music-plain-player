<script lang="ts">
  export let vid: any;

  function play() {
    window.location.href = "/watch/?w=" + vid.id;
  }
</script>

<div
  class="container"
  on:mouseup={play}
  style="cursor: pointer; background-image: url({vid.bestThumbnail.url}); background-size: cover; background-position: center"
>
  <div style="padding: 1em; border-radius: 2em; backdrop-filter: blur(5px) grayscale(.5) brightness(30%); max-width: 70%; ">
    <h4 class="title">{vid.title}</h4>
    <h5 class="title">{vid.author.name}</h5>
  </div>
</div>

<style>
  .title {
    text-overflow: ellipsis;
    width: auto;
    height: 2.5em;
    overflow: hidden;
  }
  .container {
    display: flex;
    flex-direction: column;;
    align-items: center;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 20px;
    margin-bottom: 0.5rem;
    margin-right: 0.5rem;
    width: calc(100% / 3 - 2em);
  }
</style>
