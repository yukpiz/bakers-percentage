<template>
  <div class="home">
    <BreadForm flour1=100 flour2=200 flour3=300 flour4=400 flour5=500 @calc="calc($event)"/>
    <CalcForm :waters="defaultWaters" :yeasts="defaultYeasts" :sugars="defaultSugars"/>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import BreadForm from '@/components/BreadForm.vue'
import CalcForm from '@/components/CalcForm.vue'
import { Waters, Water, Yeasts, Yeast, Sugars, Sugar, Salts, Salt, SkimMilks, SkimMilk, Eggs, Egg } from '@/models/property'
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    BreadForm,
    CalcForm,
  },
})
export default class Home extends Vue {

  // TODO: From setting values

  defaultWaters: Waters = [
    { ratio: 65 },
    { ratio: 66 },
    { ratio: 67 },
    { ratio: 68 },
    { ratio: 69 },
    { ratio: 70 },
  ]

  defaultYeasts: Yeasts = [
    { ratio: 1 },
    { ratio: 1.5 },
    { ratio: 2 },
    { ratio: 2.5 },
    { ratio: 3 },
    { ratio: 3.5 },
  ]

  defaultSugars: Sugars = [
    { ratio: 5 },
    { ratio: 10 },
    { ratio: 15 },
    { ratio: 20 },
    { ratio: 25 },
    { ratio: 30 },
  ]

  private calc(val: number) {
    this.defaultWaters.map((water: Water) => {
      water.amount = Math.round(water.ratio * 0.01 * val)
    })
    this.defaultWaters.sort()

    this.defaultYeasts.map((yeast: Yeast) => {
      yeast.amount = Math.round(yeast.ratio * 0.01 * val)
    })
    this.defaultYeasts.sort()

    this.defaultSugars.map((sugar: Sugar) => {
      sugar.amount = Math.round(sugar.ratio * 0.01 * val)
    })
  }
}
</script>
