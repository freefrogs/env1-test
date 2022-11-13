<template>
  <div
    v-if="totalPaginationPages"
    class="text-center my-5"
  >
    <v-pagination
      v-model="page"
      :length="totalPaginationPages"
      :total-visible="7"
      color="deep-purple"
    ></v-pagination>
  </div>
</template>

<script>
export default {
  computed: {
    page: {
      get () { return this.$store.getters.currentPaginationPage },
      set (val) { this.$store.commit('setCurrentPaginationPage', val) }
    },
    totalPaginationPages () {
      return this.$store.getters.totalPaginationPages
    }
  }
}
</script>
