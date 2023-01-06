<script lang="ts">
  let id: string = "";

  function play() {
    window.location.href = "/watch/?w=" + id;
  }

  function input(x: KeyboardEvent) {
    const keypress = x.key;
    if(keypress == "Enter") {
      play();
    }
  }
</script>

<div
  style="display: flex; align-items: center; width: 100%; flex-direction: column;"
>
  <h1>Youtube Plain</h1>

  <input type="text" on:keydown={input} bind:value={id} />
</div>
