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
    <v-footer
      color="deep-purple"
      padless
    >
      <v-col
        class="purple-deep text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }}
        created by
        <a
          href="https://freefrogs.github.io/Portfolio/#/"
          target="_blank"
          rel="noopener noreferrer"
        > freefrogs</a>
      </v-col>
    </v-footer>
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

<style lang="scss">
.v-application {
  a {
    text-decoration: none;
    color: #fff;
  }
  .v-btn {
    color: #fff;
  }
}
</style>
