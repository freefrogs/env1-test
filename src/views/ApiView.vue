<template>
  <div>
    <v-card
      shaped
      class="my-10 pa-3 single-api-view"
      v-if="api"
    >
      <div class="d-flex justify-space-between align-center flex-column flex-md-row">
        <v-card-title class="text-h4">{{ api.API }}</v-card-title>
        <v-chip
          class="white--text"
          color="deep-purple"
        >
          {{ api.Category }}
        </v-chip>
      </div>
      <v-card-subtitle><strong>Description: </strong>{{ api.Description }}</v-card-subtitle>
      <v-card-text>
        <a
          :href="api.Link"
          target="_blank"
          rel="noopener noreferrer"
          class="deep-purple--text"
        >Go to API docs</a>
      </v-card-text>
      <v-divider class="my-5" color="deep-purple"></v-divider>
      <v-simple-table>
        <template v-slot:default>
          <tbody>
            <tr>
              <td>Authorization</td>
              <td>{{ api.Auth }}</td>
            </tr>
            <tr>
              <td>CORS</td>
              <td>{{ api.Cors }}</td>
            </tr>
            <tr>
              <td>HTTPS</td>
              <td>{{ api.HTTPS }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
    <h1
      v-else
      class="ma-5 text-center"
    >Waiting for data...</h1>
  </div>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    api () {
      return this.$store.getters.apis.length ? this.$store.getters.apis[this.id] : null
    }
  }
}
</script>

<style lang="scss">
.v-application {
  .single-api-view {
    @media screen and (min-width: 1000px) {
      width: 60%;
      margin: 5% auto !important;
    }
  }
}
</style>
