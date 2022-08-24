<script>
	export let pokemon
	let promise
	$: promise = getPokemon(pokemon.url)
	
	async function getPokemon(url) {
		const res = await fetch(pokemon.url);
		return await res.json();
	}
</script>

<div class="container">
  {#await promise}
    <p style="color: whitesmoke;"> {pokemon.name}… </p>
  {:then pokemonDetails}
  <div class="container" style="margin-left: 100px;">
    <p style="color: whitesmoke; font-size: 30px;"><strong>{pokemonDetails.name}</strong></p>
  </div>
  <div class="container">
    <img height="250px" width="250px" src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
  </div>
  {:catch error}
    {error.message}
  {/await}
</div>