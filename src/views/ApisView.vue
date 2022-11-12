<template>
  <div class="apis-view pa-4 text-center">
    <h2>Search for Public APIs</h2>
    <apis-search-bar />
    <categories />
  </div>
</template>

<script>
import ApisSearchBar from '@/components/ApisSearchBar.vue'
import Categories from '@/components/Categories.vue'

export default {
  components: {
    ApisSearchBar,
    Categories
  }
}
</script>
