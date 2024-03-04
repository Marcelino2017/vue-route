<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';


const pokemons = ref([])

const getData = async () => {
    try {
        const {data} = await axios.get("https://pokeapi.co/api/v2/pokemon")
        pokemons.value = data.results
        console.log(data.results)
    } catch (error) {
        console.log(error);
    }  finally {
        
    };
}

getData()
</script>

<template>
    <h1>Pokemons</h1>
    <ul>
        <li 
            v-for="poke in pokemons"
            :key="poke.id"
        >
            <router-link :to="`/pokemon/${poke.name}`">{{ poke.name }}</router-link>
             
        </li>
    </ul>
</template>