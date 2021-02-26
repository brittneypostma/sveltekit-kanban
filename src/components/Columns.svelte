<script>
  import Column from './Column.svelte'
  // import {store} from '$data/store'
  export let store = []

  console.log(store)
</script>


  {#each store as column (column.id)}
    <Column {column}/>
  {/each}


