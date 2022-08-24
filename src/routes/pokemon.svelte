<script>
    import {isLoggedIn } from "../stores";
    import PokeDetails from './pokedex/pokeDetails.svelte';
    import PokeList from './pokedex/pokeList.svelte';

    let selectedPokemon = null

    const selectPokemon = ({ detail }) => {
		selectedPokemon = detail;
	}
    const fetchPokemon = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
        const data = await response.json();
        return data.results;
    }

    $: promise = fetchPokemon();

</script>

<div class="container" style="margin-top:25px ;">
    <div class="row">
        <div class="col">
        </div>
        <div class="col-9">
            <div class="row">
                {#if $isLoggedIn}
                {#await promise}
                    <div style="color:whitesmoke ;" class="container">Cargando...</div>
                {:then pokemons}
                    <div class="col-5">
                        <PokeList pokemons={pokemons} on:selectPokemon={selectPokemon}/>
                    </div>
                    <div class="col">
                        {#if selectedPokemon}
                            <PokeDetails pokemon={selectedPokemon} />
                        {/if}
                    </div>
                {:catch error}
                    <div class="container">{error.messaje}</div>
                {/await}
            {/if}
            </div>
            
        </div>
        <div class="col">
        </div>
    </div>
</div>