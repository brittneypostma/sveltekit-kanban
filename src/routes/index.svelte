<script>
  import Columns from '$components/Columns.svelte'
  import {store} from '$data/store'

  // function add() {
  //   const newCol = {
  //     id: Math.floor(Math.random() * 100),
  //     title: 'Title',
  //     cards: {
  //       id: 1,
  //       title: 'Title'
  //     }
  //   }
  //   store.update(prev => {
  //     return [newCol, ...prev]
  //   }
  // }

  // function remove(col) {
  //   store = store.filter((c) => c.id !== col.id)
  //   return store
  // }

  // function update(col) {
  //   const idx = store.findIndex((c) => c.id === c.id)
  //   if (store[i].name !== col.name) {
  //     return (store[i] = { ...store[i], ...store })
  //   }
  // }
</script>

<!-- List out columns -->
<!-- Get Local Storage info -->
<Columns bind:store="{$store}" />
