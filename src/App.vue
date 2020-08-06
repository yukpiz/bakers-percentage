<template>
  <v-app>
    <v-app-bar app color="brown" dark>
      <div class="app-name d-flex align-center">{{ $t("message.title") }}</div>
      <v-spacer></v-spacer>

      <v-btn icon color="white">
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<style scoped>
.container {
  max-width: 100%;
}

.app-name {
  font-size: 1.5em;
  font-family: 'Josefin Sans', sans-serif;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { i18n } from '@/main'

@Component({
  components: {},
})
export default class App extends Vue {
  public constructor() {
    super()
    const lang = this.$route.query.lang as string
    if (lang && ['en', 'ja'].includes(lang)) {
      i18n.locale = lang
    }
  }

  private changeLocale(locale: string) {
    i18n.locale = locale
  }
}
</script>
