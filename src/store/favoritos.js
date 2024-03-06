import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoritosStore = defineStore('favoritos', () => {
    const favoritos = ref([]);
    const agregarFavorito = (poke) => {
        if(!favoritos.value.includes(poke)){
            favoritos.value.push(poke)
            console.log(favoritos.value);
        } else {
            console.log('ya existe en favoritos');
        }
    }

    const eliminarFavorito = (id) => {
        favoritos.value = favoritos.value.filter(poke => poke.id !== id);
    }

    return {
        favoritos,
        agregarFavorito,
        eliminarFavorito
    } 
});