<template>
  <v-form class="mt-md-8 mt-5 ml-md-10 ml-2">

    <v-layout class="flour-area d-flex align-end mb-3">
      <div class="flour-label">{{ $t("message.flourTitle") }}:&nbsp;</div>
      <div v-if="flour" class="flour-val ml-3">{{ flour }}g</div>
    </v-layout>

    <v-row >
      <v-col cols=12>
        <v-card outlined>
          <div class="card-title text-center ml-3 mt-6 mb-3 text-decoration-underline">{{ $t("message.waterTitle") }}</div>
          <v-row class="justify-center" v-for="water in waters" :key="water.ratio">
            <v-col md="4" class="line ml-3 text-right">{{ water.ratio }}%</v-col>
            <v-col md="4" class="line ml-5 mr-5 text-right">{{ water.amount }}g</v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col cols=12>
        <v-card outlined>
          <div class="card-title text-center ml-3 mt-6 mb-3 text-decoration-underline">{{ $t("message.yeastTitle") }}</div>
          <v-row class="justify-center" v-for="yeast in yeasts" :key="yeast.ratio">
            <v-col md="4" class="line ml-3 text-right">{{ yeast.ratio }}%</v-col>
            <v-col md="4" class="line ml-5 mr-5 text-right">{{ yeast.amount }}g</v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col cols=12>
        <v-card outlined>
          <div class="card-title text-center ml-3 mt-6 mb-3 text-decoration-underline">{{ $t("message.sugarTitle") }}</div>
          <v-row class="justify-center" v-for="sugar in sugars" :key="sugar.ratio">
            <v-col md="4" class="line ml-3 text-right">{{ sugar.ratio }}%</v-col>
            <v-col md="4" class="line ml-5 mr-5 text-right">{{ sugar.amount }}g</v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col cols=12>
        <v-card outlined>
          <div class="card-title text-center ml-3 mt-6 mb-3 text-decoration-underline">{{ $t("message.saltTitle") }}</div>
          <v-row class="justify-center" v-for="salt in salts" :key="salt.ratio">
            <v-col md="4" class="line ml-3 text-right">{{ salt.ratio }}%</v-col>
            <v-col md="4" class="line ml-5 mr-5 text-right">{{ salt.amount }}g</v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col cols=12>
        <v-card outlined>
          <div class="card-title text-center ml-3 mt-6 mb-3 text-decoration-underline">{{ $t("message.skimmilkTitle") }}</div>
          <v-row class="justify-center" v-for="skimmilk in skimmilks" :key="skimmilk.ratio">
            <v-col md="4" class="line ml-3 text-right">{{ skimmilk.ratio }}%</v-col>
            <v-col md="4" class="line ml-5 mr-5 text-right">{{ skimmilk.amount }}g</v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col cols=12>
        <v-card outlined>
          <div class="card-title text-center ml-3 mt-6 mb-3 text-decoration-underline">{{ $t("message.eggTitle") }}</div>
          <v-row class="justify-center" v-for="egg in eggs" :key="egg.ratio">
            <v-col md="4" class="line ml-3 text-right">{{ egg.ratio }}%</v-col>
            <v-col md="4" class="line ml-5 mr-5 text-right">{{ egg.amount }}g</v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-form>
</template>

<style scoped>
.card-title {
  font-weight: bold;
  font-size: 2em;
  font-family: 'Josefin Sans', sans-serif;
}

.line {
  font-size: 1.4em;
  font-family: 'Josefin Sans', sans-serif;
}

.row {
  line-height: 1.4em;
}

.flour-area {
  width: 15em;
  border-bottom: 1px solid;
}

.flour-label {
  font-size: 1.3em;
  font-weight: bold;
  line-height: 1.3em;
}

.flour-val {
  font-size: 1.6em;
  line-height: 1.3em;
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Waters, Yeasts, Sugars, Salts, SkimMilks, Eggs } from '@/models/property'

@Component
export default class CalcForm extends Vue {

  @Prop({ default: null })
  flour!: number

  @Prop({ default: null })
  waters!: Waters

  @Prop({ default: null })
  yeasts!: Yeasts

  @Prop({ default: null })
  sugars!: Sugars

  @Prop({ default: null })
  salts!: Salts

  @Prop({ default: null })
  skimmilks!: SkimMilks

  @Prop({ default: null })
  eggs!: Eggs
}
</script>
