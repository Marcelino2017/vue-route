<script setup>
import { useFavoritosStore } from "@/store/favoritos";
import { storeToRefs } from "pinia";
import { RouterLink } from "vue-router";

const userFavoritos = useFavoritosStore();
const { favoritos } = storeToRefs(userFavoritos);
const { eliminarFavorito } = userFavoritos;

console.log(favoritos.value);
</script>

<template>
  <h1>Favorito</h1>
  <p v-if="favoritos.length === 0">No hay Pokemons favoritos</p>
  <ul class="list-group">
    <li v-for="poke in favoritos" :key="poke.name" class="list-group-item">
      <div class="d-flex flex-row justify-content-center align-items-center">
        {{ poke.name }}
        <img :src="poke.sprites?.front_default" alt="" />
        <router-link
          type="button"
          class="btn btn-success me-2"
          :to="`/pokemon/${poke.name}`"
          title="Ver Detalles"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-info"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line></svg
        ></router-link>
        <button
          type="button"
          class="btn btn-danger"
          @click="eliminarFavorito(poke.id)"
          title="Eliminar de Favorito"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-trash-2"
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path
              d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
            ></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </button>
      </div>
    </li>
  </ul>
</template>
