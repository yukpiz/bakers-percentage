<template>
  <div class="calc-form">
    <div>{{ $t("message.waterTitle") }}</div>
    <dl>
      <div v-for="water in waters" :key="water.ratio">
        <dt>{{ water.ratio }}%</dt>
        <dd>{{ water.amount }}g</dd>
      </div>
    </dl>

    <div>{{ $t("message.yeastTitle") }}</div>
    <dl>
      <div v-for="yeast in yeasts" :key="yeast.ratio">
        <dt>{{ yeast.ratio }}%</dt>
        <dd>{{ yeast.amount }}g</dd>
      </div>
    </dl>

    <div>{{ $t("message.sugarTitle") }}</div>
    <dl>
      <div v-for="sugar in sugars" :key="sugar.ratio">
        <dt>{{ sugar.ratio }}%</dt>
        <dd>{{ sugar.amount }}g</dd>
      </div>
    </dl>

    <div>{{ $t("message.saltTitle") }}</div>
    <dl>
      <div v-for="salt in salts" :key="salt.ratio">
        <dt>{{ salt.ratio }}%</dt>
        <dd>{{ salt.amount }}g</dd>
      </div>
    </dl>

    <div>{{ $t("message.skimmilkTitle") }}</div>
    <dl>
      <div v-for="skimmilk in skimmilks" :key="skimmilk.ratio">
        <dt>{{ skimmilk.ratio }}%</dt>
        <dd>{{ skimmilk.amount }}g</dd>
      </div>
    </dl>

    <div>{{ $t("message.eggTitle") }}</div>
    <dl>
      <div v-for="egg in eggs" :key="egg.ratio">
        <dt>{{ egg.ratio }}%</dt>
        <dd>{{ egg.amount }}g</dd>
      </div>
    </dl>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Waters, Yeasts, Sugars, Salts, SkimMilks, Eggs } from '@/models/property'

@Component
export default class CalcForm extends Vue {

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
