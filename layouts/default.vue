<template>
  <v-app dark>
    <Loader />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Loader from '~/components/layout/Loader.vue'

export default {
  components: {
    Loader
  }
}
</script>
