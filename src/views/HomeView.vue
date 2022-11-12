<template>
  <div class="home-view text-center">
    <h2 class="text-h3 deep-purple--text mb-2">Are you looking for free, public APIs?</h2>
    <h3 class="text-h5">if your answer is "yes", then you've come to the right place</h3>
    <p class="text-subtitle-1">This application is based on
      <a
        href="https://api.publicapis.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Public API for Public APIs
      </a>
    </p>
    <router-link
      :to="{ name: 'apis' }"
      class="common__btn"
    >
      <v-btn
        class="ma-6 white--text"
        color="deep-purple"
      >
        Search for APIs
      </v-btn>
    </router-link>
  </div>
</template>

<style lang="scss">
.v-application {
  .home-view {
    max-width: 1400px;
    margin: 0 auto;
    padding: 10% 2%;
  }
}
</style>
