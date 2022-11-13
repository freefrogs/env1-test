<template>
  <v-navigation-drawer
      v-model="isDrawerActive"
      absolute
      top
      temporary
    >
      <v-list
        nav
        dense
        class="nav__list"
      >
        <v-list-item>
          <router-link
            :to="{ name: 'home' }"
            class="nav__link"
            :class="{ 'nav__link--active': currentRoute === 'home' }"
          >Home</router-link>
        </v-list-item>
        <v-list-item>
          <router-link
            :to="{ name: 'apis' }"
            class="nav__link"
            :class="{ 'nav__link--active': currentRoute === 'apis' }"
          >APIs</router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
import api from '@/services/api'

export default {
  computed: {
    isDrawerActive: {
      get () {
        return this.$store.getters.isNavActive
      },
      set (val) {
        this.$store.commit('setNavState', val)
      }
    },
    currentRoute () {
      return this.$route.name
    }
  },
  async mounted () {
    try {
      const res = await api.get('/entries')
      this.$store.commit('initApis', res.data.entries)
    } catch (err) {
      console.error(err)
    }
  }
}
</script>

<style lang="scss">
.v-application {
  .nav__link {
    text-decoration: none;
    color: #000;
    &--active {
      color: #673AB7;
      font-weight: 800;
    }
  }
  .nav__list {
    height: 100vh;
  }
}
</style>
