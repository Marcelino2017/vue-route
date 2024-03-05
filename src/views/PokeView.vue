<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useGetData } from '@/composables/getData';

const route = useRoute()
const router = useRouter()

//const poke = ref({})

const back = () => {
    router.push('/pokemons')
}

const { data, getData,loading, error } = useGetData()

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)

</script>

<template>
    <p v-if="loading">Cargando...</p>
    <div class="alert alert-danger mt-2" role="alert" v-if="error">
        No existe el pokemon
    </div>
    <div v-if="data">
        <img :src="data.sprites?.front_default" alt="">
        <h1>Poke Name: {{ $route.params.name }} </h1>
    </div>
    <button class="btn btn-outline-primary"  @click="back">Volver</button>
</template>