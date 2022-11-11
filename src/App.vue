<template>
  <v-app>
    <v-app-bar
      app
      color="deep-purple"
      dark
    >
      <v-toolbar-title>Let's talk about public APIs</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  })
}
</script>
