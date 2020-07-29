<template>
  <div id="app">
    <div class="title">{{ $t("message.title") }}</div>
    <button type="button" @click="changeLocale('en')">en</button>
    <button type="button" @click="changeLocale('ja')">ja</button>

    <div id="nav">
      <router-link to="/settings">Settings</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script lang="ts">

import { i18n } from '@/main'

export default {
  methods: {
    changeLocale(locale: string) {
      i18n.locale = locale
    }
  }
}

</script>
