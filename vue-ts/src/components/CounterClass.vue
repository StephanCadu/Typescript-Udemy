<template>
  <div>
    <h1>Contador Classe: </h1>
    <h2>{{ value }}</h2>
    <button @click="setValue(1)">+</button>
    <button @click="setValue(-1)">-</button>
  </div>
</template>


<script>
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class CounterClass extends Vue {
  private value: number = 0

  public setValue(delta: number) {
    this.value += delta
  }
}
</script>