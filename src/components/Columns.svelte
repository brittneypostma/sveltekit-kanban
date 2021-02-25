<script>
  import Column from './Column.svelte'
  export let store = []
  // $: newId = store.length ? Math.max(...store.map(c => c.id)) + 1 : 1

  // on:click="{add}""
  // on:update="{(e) => update(e.detail)}"
  //     on:remove="{(e) => remove(e.detail)}"
</script>

<section>
  <button class="add">&plus;</button>
  {#each store as column (column.id)}
    <Column
      column="{column}"
    />
  {/each}
</section>

<style>
  .add {
    font-size: var(--xl);
    margin-right: var(--lg);
  }
  section {
    overflow-x: auto;
    padding: var(--base);
    display: flex;
    flex-wrap: nowrap;
    height: 100%;
    width: 100%;
    scrollbar-width: thin;
    scrollbar-color: var(--accent) var(--primary);
  }

  section :global(.col) + :global(.col) {
    margin-left: var(--lg);
  }
  /* *Chrome Scrollbar* */
  section::-webkit-scrollbar {
    height: 8px;
  }
  section::-webkit-scrollbar-track {
    background: var(--primary);
  }
  section::-webkit-scrollbar-thumb {
    background: var(--accent);
  }
  section::-webkit-scrollbar-thumb:hover {
    --accent: hsl(calc(var(--h) - 175), var(--s), calc(var(--l) * 0.75), 100%);
    background: var(--accent);
  }
</style>
