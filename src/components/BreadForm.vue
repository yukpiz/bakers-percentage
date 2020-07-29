<template>
  <div class="bread-form">
    <div>{{ $t("message.flourTitle") }}</div>
    <input type="number" v-model="inputFlour"/><div>g</div>
    <button @click="calc">{{ $t("message.calcButtonTitle") }}</button>

    <div>
      <button @click="flour(flour1)">{{ flour1 }}g</button>
      <button @click="flour(flour2)">{{ flour2 }}g</button>
      <button @click="flour(flour3)">{{ flour3 }}g</button>
      <button @click="flour(flour4)">{{ flour4 }}g</button>
      <button @click="flour(flour5)">{{ flour5 }}g</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BreadForm extends Vue {
  @Prop({ default: 100 })
  flour1!: number

  @Prop({ default: 200 })
  flour2!: number

  @Prop({ default: 300 })
  flour3!: number

  @Prop({ default: 400 })
  flour4!: number

  @Prop({ default: 500 })
  flour5!: number

  @Prop({ default: '' })
  initializeFlour!: number

  private inputFlour: number

  constructor() {
    super()
    this.inputFlour = this.initializeFlour
  }

  @Emit('calc')
  private calc(): number {
    return this.inputFlour
  }

  private flour(val: number): void {
    this.inputFlour = val
  }
}
</script>
