<main>
  <slot />
</main>
<footer class="text-center">
  &copy; Brittney Postma {new Date().getFullYear()}
</footer>

<style>
  :global(#svelte) {
    min-height: 100vh;
  }

  main {
    padding: var(--base);
    min-height: 97vh;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto 1fr;
    gap: var(--base);
    place-items: start;
  }
</style>
