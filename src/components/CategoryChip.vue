<template>
  <v-chip
    class="ma-2"
    color="deep-purple"
    :input-value="active"
    filter
    :data-label="label"
    @click="setChipState"
    small
    outlined
  >
    {{ label }}
  </v-chip>
</template>

<script>
export default {
  props: {
    label: {
      required: true,
      type: String
    }
  },
  computed: {
    checkedCategories () {
      return this.$store.getters.checkedCategories
    },
    active () {
      return this.checkedCategories.includes(this.label)
    }
  },
  methods: {
    setChipState () {
      this.$store.commit('setCheckedCategories', this.label)
    }
  }
}
</script>
