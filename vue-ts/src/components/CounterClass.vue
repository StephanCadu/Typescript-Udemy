<template>
  <div>
    <h1>Contador Classe: </h1>
    <h2>{{ value }}</h2>
    <h2>{{ getEvenOdd() }}</h2>
    <h2>{{ evenOdd }}</h2>
    <button @click="setValue(1)">+</button>
    <button @click="setValue(-1)">-</button>
  </div>
</template>


<script>
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class CounterClass extends Vue {

  @Prop(Number) private readonly initialValue?: number
  private value: number = this.initialValue || 0

  public setValue(delta: number) {
    this.value += delta
  }

  public getEvenOdd(): string {
    return this.value % 2 === 0 ? 'Par' : 'Ímpar' 
  }

  public get evenOdd(): string {
    return this.value % 2 === 0 ? 'Par' : 'Ímpar' 
  }
}
</script>