<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

const poke = ref({})

const back = () => {
    router.push('/pokemons')
}

const getData = async () => {
    try {
        const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
        console.log('data PkeView');
        poke.value = data
        console.log(poke.value);
    } catch (error) {
        console.log(error);
        poke.value = null
    };
}

getData()

</script>

<template>
    <div v-if="poke">
        <img :src="poke.sprites?.front_default" alt="">
        <h1>Poke Name: {{ $route.params.name }} </h1>
    </div>
    <h1 v-else>No existe el pokemon</h1>
    <button class="btn btn-outline-primary"  @click="back">Volver</button>
</template>