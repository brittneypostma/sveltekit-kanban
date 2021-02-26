<script>
  import Board from '$components/Board.svelte'
  import Columns from '$components/Columns.svelte'
  import { store } from '$data/store'
</script>

<Board>
  <Columns bind:store={$store}/>
</Board>
