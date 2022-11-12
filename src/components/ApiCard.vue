<template>
  <v-card
    shaped
    class="ma-2 text-left d-flex justify-space-between align-center"
  >
    <router-link
      :to="{ name: 'api', params: { id: api.id } }"
      class="text-h6 deep-purple--text pl-4"
    >{{ api.API }}</router-link>
    <v-card-subtitle>{{ api.Description }}</v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  props: {
    api: {
      required: true,
      type: Object
    }
  }
}
</script>
