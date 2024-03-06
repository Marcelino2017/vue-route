<script setup>
import { useCounterStore } from '@/store/counter'
import { storeToRefs } from 'pinia'

const useCounter = useCounterStore()
//usando la desestructuración de objetos 
const { increment } = useCounter 
//usando storeToRefs datos reactivos y computados
const { count, double } = storeToRefs(useCounter)
</script>

<template>
  <main>
    <h1>Home Counter: {{ count }}</h1>
    <h2>Double: {{ double }}</h2>
    <button 
      class="btn btn-outline-primary"
      @click="increment"
    >Increments</button>
  </main>
</template>
