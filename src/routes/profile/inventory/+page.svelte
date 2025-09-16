<script lang="ts">
	import type { PageData } from "../$types";


  // Declare the data prop using $props()
  let { data } = $props<{ data: PageData }>();

  // Use $derived for reactive user and error
  let user = $derived(data.user);
  let error = $derived(data.error);
</script>

{#if error}
  <p>Error: {error}</p>
{:else if user}
  <h1>User: {user.name} (ID: {user.id})</h1>
  <h2>Owned Items:</h2>
  {#if user.items.length > 0}
    <ul>
      {#each user.items as item}
        <li>Item: {item.name} (ID: {item.id})</li>
      {/each}
    </ul>
  {:else}
    <p>No items owned.</p>
  {/if}
{:else}
  <p>Loading...</p>
{/if}