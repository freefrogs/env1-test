<template>
  <v-text-field
    label="Enter the search word"
    prepend-icon="mdi-magnify"
    color="deep-purple"
    v-model="searchWord"
    class="search-input"
  ></v-text-field>
</template>

<script>
export default {
  computed: {
    searchWord: {
      get () {
        return this.$store.getters.searchWord
      },
      set (val) {
        this.$store.commit('setSearchWord', val)
      }
    }
  }
}
</script>
<style lang="scss">
.v-application {
  .search-input {
    @media screen and (min-width: 1000px) {
      width: 60%;
      margin: 0 auto;
    }
  }
}
</style>
