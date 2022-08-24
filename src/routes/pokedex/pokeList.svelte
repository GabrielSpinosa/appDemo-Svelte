<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	
	export let pokemons = []
	
	const handlePokemonClick = (pokemon) => {
		dispatch('selectPokemon', pokemon)
	}
</script>

<ul class="list-group">
	{#each pokemons as pokemon}
	<li class="list-group-item list-group-item-dark">
		<button class="btn btn-secondary btn-sm" on:click="{() => handlePokemonClick(pokemon)}" >
			<p style="color: whitesmoke;">{pokemon.name}</p>
		</button>
	</li>
	{/each}
</ul>