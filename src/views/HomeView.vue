<script setup>
import { useCounterStore } from '@/store/counter'

const useCounter = useCounterStore()
</script>

<template>
  <main>
    <h1>Home Counter: {{ useCounter.count }}</h1>
    <h2>Double: {{ userCounter.double }}</h2>
    <button 
      class="btn btn-outline-primary"
      @click="useCounter.incremen"
    >Increments</button>
  </main>
</template>
