<template>
  <div>
    <Counter :initialValue="10" />
    <CounterClass />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Counter from './components/MyCounter.vue'
import CounterClass from './components/CounterClass.vue'

export default defineComponent({
  name: 'App',
  components: {
    Counter,
    CounterClass,
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
