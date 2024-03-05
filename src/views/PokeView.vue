<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useGetData } from '@/composables/getData';

const route = useRoute()
const router = useRouter()

//const poke = ref({})

const back = () => {
    router.push('/pokemons')
}

const { data, getData,loading } = useGetData()

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)

</script>

<template>
    <p v-if="loading">Cargando...</p>
    <div v-if="data">
        <img :src="data.sprites?.front_default" alt="">
        <h1>Poke Name: {{ $route.params.name }} </h1>
    </div>
    <h1 v-else>No existe el pokemon</h1>
    <button class="btn btn-outline-primary"  @click="back">Volver</button>
</template>