<script setup>
import { useCounterStore } from '@/store/counter'

const useCounter = useCounterStore()
</script>

<template>
  <main>
    <h1>Home Counter: {{ useCounter.count }}</h1>
    <h2>Double: {{ useCounter.double }}</h2>
    <button 
      class="btn btn-outline-primary"
      @click="useCounter.increment"
    >Increments</button>
  </main>
</template>
