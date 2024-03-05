<script setup>
import { RouterLink } from 'vue-router';
import { useGetData } from '@/composables/getData';


const { data, getData, loading } = useGetData();

/* const getData = async () => {
    try {
        const {data} = await axios.get("https://pokeapi.co/api/v2/pokemon")
        pokemons.value = data.results
        console.log(data.results)
    } catch (error) {
        console.log(error);
    }  finally {
        
    };
} */
console.log(data)
getData('https://pokeapi.co/api/v2/pokemon')
</script>

<template>
    <h1>Pokemons</h1>
    <p v-if="loading">Cargando...</p>
    <div v-if="data">
        <ul>
            <li 
                v-for="poke in data.results"
                :key="poke.id"
            >
                <router-link :to="`/pokemon/${poke.name}`">{{ poke.name }}</router-link>
                
            </li>
        </ul>     
    </div>
</template>