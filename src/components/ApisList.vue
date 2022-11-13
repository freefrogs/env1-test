<template>
  <div class="apis-list mt-10">
    <p v-if="!filteredApis.length && !api.length">Data is not available...</p>
    <p v-else-if="!filteredApis.length && api.length">No APIs that meet the assumption...</p>
    <api-card v-for="api in currentPageData" :key="api.id" :api="api" />
    <apis-list-pagination />
  </div>
</template>

<script>
import api from '@/services/api'
import ApiCard from './ApiCard.vue'
import ApisListPagination from './ApisListPagination.vue'

export default {
  components: { ApiCard, ApisListPagination },
  computed: {
    filteredApis () {
      return this.$store.getters.filteredApis
    },
    api () {
      return this.$store.getters.apis
    },
    currentPageData () {
      return this.$store.getters.currentPageData
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
