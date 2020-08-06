<template>
  <v-form class="mt-md-5 mt-0 ml-md-10 ml-2">
    <v-row class="align-baseline">
      <v-col class="d-flex align-end" md="3">
        <v-text-field
          autofocus
          clearable
          :label="$t('message.flourTitle')"
          :hint="$t('message.inputFlourHint')"
          type="number"
          v-model="inputFlour"></v-text-field>
        <div class="pb-5">{{ $t("message.gramUnit") }}</div>
      </v-col>

      <v-col md="3">
        <v-btn color="primary" width="100%" @click="calc">{{ $t("message.calcButtonTitle") }}</v-btn>
      </v-col>
    </v-row>

    <v-layout>
      <v-btn small class="mr-2" @click="flour(flour1)">{{ flour1 }}g</v-btn>
      <v-btn small class="mr-2" @click="flour(flour2)">{{ flour2 }}g</v-btn>
      <v-btn small class="mr-2" @click="flour(flour3)">{{ flour3 }}g</v-btn>
      <v-btn small class="mr-2" @click="flour(flour4)">{{ flour4 }}g</v-btn>
      <v-btn small class="mr-2" @click="flour(flour5)">{{ flour5 }}g</v-btn>
    </v-layout>
  </v-form>
</template>

<style scoped>
.v-btn {
  text-transform: none;
}
</style>

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
    this.calc()
  }
}
</script>
