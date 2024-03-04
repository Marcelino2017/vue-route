<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
//const router = useRouter()

const getData = async () => {
    try {
        const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
        console.log('data PkeView');
        console.log(data);
    } catch (error) {
        console.log(error);
    };
}

getData()

</script>

<template>
    <h1>Poke Name: {{ $route.params.name }} </h1>
</template>