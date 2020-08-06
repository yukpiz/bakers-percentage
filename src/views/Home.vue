<template>
  <v-container>
    <BreadForm flour1=100 flour2=200 flour3=300 flour4=400 flour5=500 @calc="calc($event)"/>
    <CalcForm :waters="defaultWaters" :yeasts="defaultYeasts" :sugars="defaultSugars" :salts="defaultSalts" :skimmilks="defaultSkimMilks" :eggs="defaultEggs" :flour="flour"/>
  </v-container>
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

  defaultSalts: Salts = [
    { ratio: 1 },
    { ratio: 2 },
    { ratio: 3 },
    { ratio: 4 },
    { ratio: 5 },
    { ratio: 6 },
  ]

  defaultSkimMilks: SkimMilks = [
    { ratio: 5 },
    { ratio: 6 },
    { ratio: 7 },
    { ratio: 8 },
    { ratio: 9 },
    { ratio: 10 },
  ]

  defaultEggs: Eggs = [
    { ratio: 25 },
    { ratio: 30 },
    { ratio: 35 },
    { ratio: 40 },
    { ratio: 45 },
    { ratio: 50 },
  ]

  private flour = 0

  private calc(val: number) {
    this.flour = val

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
    this.defaultSugars.sort()

    this.defaultSalts.map((salt: Salt) => {
      salt.amount = Math.round(salt.ratio * 0.01 * val)
    })
    console.log(this.defaultSalts)
    this.defaultSalts.sort()

    this.defaultSkimMilks.map((skimmilk: SkimMilk) => {
      skimmilk.amount = Math.round(skimmilk.ratio * 0.01 * val)
    })
    this.defaultSkimMilks.sort()

    this.defaultEggs.map((egg: Egg) => {
      egg.amount = Math.round(egg.ratio * 0.01 * val)
    })
    this.defaultEggs.sort()
  }
}
</script>
