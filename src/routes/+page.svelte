<script lang="ts">
  import { browser } from "$app/environment";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  let id: string = "";

  function input(x: KeyboardEvent) {
    const keypress = x.key;
    if (keypress == "Enter") {
      goto("/watch/?v=" + id);
    }
  }
</script>

<div
  style="display: flex; align-items: center; width: 100%; flex-direction: column;"
>
  <h1>Youtube Plain</h1>
  <input type="text" on:keydown={input} bind:value={id} />
</div>
