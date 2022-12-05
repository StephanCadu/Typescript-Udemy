<template>
  <div>
    <h1>Contador:</h1>
    <h2>{{ value }}</h2>
    <button @click="setValue(1)">+</button>
    <button @click="setValue(-1)">-</button>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    initialValue: {
      type: Number
    }
  },
  data() {
    return {
      value: this.initialValue || 0
    }
  },
  methods: {
    setValue(delta: number) {
      this.value += delta
    }
  }
})
</script>

<style>

</style>