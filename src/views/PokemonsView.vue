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
        <button 
            class="btn btn-success me-2"  
            @click="getData(data.previous)"
            :disabled="!data.previous"
        >Previous</button>   
        <button 
            class="btn btn-primary" 
            @click="getData(data.next)"
            :disabled="!data.next"
        >Next</button>   
    </div>
</template>