<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
<nav class="navbar bg-body-tertiary">
  <div class="container">
    <router-link class="navbar-brand" to="/">
      <img 
        src="@/assets/logo.svg" 
        alt="Logo" 
        width="30" 
        height="24" 
        class="d-inline-block align-text-top"
      >
      Poke Api
    </router-link >
    
    <div>
      <router-link active-class="active" class="btn btn-outline-primary me-2" to="/about">About</router-link>
      <router-link active-class="active" class="btn btn-outline-primary me-2" to="/pokemons">Pokemons</router-link>
      <router-link active-class="active" class="btn btn-outline-primary" to="/favoritos">Favoritos</router-link>
    </div>
  </div>
</nav>

<div class="container text-center">
  <RouterView />
</div>

</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
