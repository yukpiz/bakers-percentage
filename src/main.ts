import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.use(VueI18n)

const messages = {
  en: {
    message: {
      title: 'Baker\'s Percentage',
      flourTitle: 'Bread Flour',
      calcButtonTitle: 'Calc',
      waterTitle: 'Water',
      yeastTitle: 'Yeast',
      sugarTitle: 'Sugar',
      saltTitle: 'Salt',
      skimmilkTitle: 'Skim Milk',
      eggTitle: 'Egg',
      inputFlourHint: 'Enter bread flour in grams.',
      gramUnit: 'g',
    },
  },
  ja: {
    message: {
      title: 'Baker\'s Percentage',
      flourTitle: '強力粉',
      calcButtonTitle: '計算',
      waterTitle: '水分',
      yeastTitle: 'イースト',
      sugarTitle: '砂糖',
      saltTitle: '塩',
      skimmilkTitle: 'スキムミルク',
      eggTitle: '卵',
      inputFlourHint: '強力粉をグラムで入力してください。',
      gramUnit: 'g',
    },
  },
}

export const i18n = new VueI18n({
  locale: 'ja',
  messages,
})

new Vue({
  router,
  store,
  render: h => h(App),
  vuetify,
  i18n
}).$mount('#app')
