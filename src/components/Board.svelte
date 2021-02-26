<script>
  import {add} from '$data/store'
</script>

<section>
  <button class="add" on:click={add}>&plus;</button>
  <slot />
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