<script>
  import {onMount} from 'svelte'
  import Column from '$components/Column.svelte'
  import {persistStore} from '$data/persistStore'

  
const defaultColumns = [
  {
    title: 'Todo',
    cards: [],
  },
  {
    title: 'In Progress',
    cards: [],
  },
  {
    title: 'Complete',
    cards: [],
  },
]

const store = persistStore('store', defaultColumns)

function add() {
  const newCol = {
    id: Math.random().toString(36).substring(2, 15),
    title: 'Title',
    cards: [],
  }
  store = [newCol, ...store]
}



</script>

<!-- List out columns -->
<!-- Get Local Storage info -->
<section>
  <button class="add" on:click={add}>&plus;</button>
  {#each defaultColumns as columns, id}
    <Column {id} {...columns} />
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
