<template>
  <div class="categories-container">
    <h4>APIs Categories:</h4>
    <div>
      <v-chip
        class="ma-2 white--text"
        color="deep-purple"
        @click="clearCategories"
      >
        Clear Categories
      </v-chip>
      <v-chip
        class="ma-2 white--text"
        color="deep-purple"
        @click="checkAllCategories"
      >
        Check All Categories
      </v-chip>
    </div>
    <category-chip v-for="category in categories" :key="category" :label="category" />
  </div>
</template>

<script>
import api from '@/services/api'
import CategoryChip from './CategoryChip.vue'

export default {
  components: { CategoryChip },
  computed: {
    categories () {
      return this.$store.getters.categories
    }
  },
  async mounted () {
    try {
      const res = await api.get('/categories')
      this.$store.commit('setCategories', res.data.categories)
      this.$store.commit('initCheckedCategories', res.data.categories)
    } catch (err) {
      console.error(err)
    }
  },
  methods: {
    clearCategories () {
      this.$store.commit('clearCategories')
    },
    checkAllCategories () {
      this.$store.commit('checkAllCategories')
    }
  }
}
</script>
