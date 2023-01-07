<script lang="ts">
  export let author: DisplayAuthor;
  let img = author.thumbnails[author.bestThumbnail].url;
</script>

<div class="container">
  <h5 class="name">{author.name}</h5>
  <img class="icon" src={img} alt={author.name} />
</div>

<style>
  .container {
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .name {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    max-height: 2.5em;
    white-space: normal;
    width: auto;
    overflow: hidden;
    text-align: end;
  }

  .icon {
    margin-left: 0.7em;
    width: 2em;
    height: 2em;
    border-radius: 50%;
  }
</style>
