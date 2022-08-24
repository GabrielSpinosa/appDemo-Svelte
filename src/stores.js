import { writable } from "svelte/store";

export const user = writable({}); //guardamos un objeto vacío
export const isLoggedIn = writable(false); //check-in del login
//export const pokemon = writable([]);
//export const pokeData = writable([])