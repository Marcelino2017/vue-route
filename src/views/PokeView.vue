<script setup>
import axios from 'axios';
import { ref } from 'vue';

const getData = async () => {
    try {
        const data = await axios.get(`https://pokeapi.co/api/v2/pokemon`)
    } catch (error) {
        console.log(error);
    };
    
   
}

getData()

</script>

<template>
    <h1>Poke Name: {{ $route.params.name }} </h1>
</template>