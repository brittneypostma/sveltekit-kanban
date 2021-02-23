<script>
  import Card from './Card.svelte'
</script>

<div class="col">
  <header>
    <h2>
      <input type="text" placeholder="Title" />
    </h2>
    <button class="delete">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        ></path>
      </svg>
    </button>
  </header>
  <button>&plus; Add Card</button>
  <article>
    <Card />
    <Card />
    <Card />
  </article>
</div>

<style>
  .col {
    min-width: 300px;
    height: 100%;
    background: var(--accent);
    color: var(--white);
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: var(--base);
    align-items: start;
    align-content: flex-start;
    border-radius: var(--lg);
    padding: var(--base);
    box-shadow: var(--shadow);
  }

  header {
    display: flex;
    align-items: center;
  }
  header * + * {
    margin-left: var(--sm);
  }
  input {
    border-bottom: 4px solid var(--black);
  }
  .delete {
    background: var(--error);
    width: var(--xxxl);
    color: var(--white);
  }
</style>
