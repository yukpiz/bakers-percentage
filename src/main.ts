import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'

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
    },
  },
  ja: {
    message: {
      title: 'Baker\'s Percentage',
      flourTitle: '強力粉',
      calcButtonTitle: '計算',
      waterTitle: '水',
      yeastTitle: 'イースト',
      sugarTitle: '砂糖',
      saltTitle: '塩',
      skimmilkTitle: 'スキムミルク',
      eggTitle: '卵',
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
  i18n,
}).$mount('#app')
