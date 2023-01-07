<script lang="ts">
  export let colNum: number = 3;
  let colStr: string = "";
  for (let i = 0; i < colNum; i++) {
    colStr += 100/colNum + "% ";
  }
</script>

<div class="grid" style="grid-template-columns: {colStr};">
  <slot />
</div>

<style>
  .grid {
    max-width: 100%;
    display: grid;
    justify-content: space-evenly;
    align-items: stretch;
    gap: 1em;
    padding: 1em;
  }
</style>