<template>
  <div class="apis-list mt-10">
    <api-card v-for="api in apis" :key="api.id" :api="api" />
  </div>
</template>

<script>
import api from '@/services/api'
import ApiCard from './ApiCard.vue'

export default {
  components: { ApiCard },
  computed: {
    apis () {
      return this.$store.getters.filteredApis
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
  .apis-list {
    width: 80%;
    margin: 0 auto;
  }
</style>
