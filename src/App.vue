<template>
  <v-app>
    <v-app-bar
      app
      color="deep-purple"
      dark
    >
      <v-app-bar-nav-icon @click.stop="showNavDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Let's talk about public APIs</v-toolbar-title>
    </v-app-bar>
    <nav-drawer />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import NavDrawer from '@/components/common/NavDrawer.vue'

export default {
  name: 'App',
  components: {
    NavDrawer
  },
  methods: {
    showNavDrawer () {
      this.$store.commit('setNavState', { val: true })
    }
  }
}
</script>
