<script>
  import Column from '$components/Column.svelte'
</script>

<!-- List out boards -->
<!-- Get Local Storage info -->
<!-- Create new board -->
<button>Create new board</button>
<section>
  <button class="add">&plus;</button>
  <Column />
  <Column />
  <Column />
  <Column />
  <Column />
</section>

<style>
  .add {
    font-size: var(--xl);
    margin-right: var(--lg);
  }
  section {
    overflow-x: auto;
    padding: var(--base) 0;
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
