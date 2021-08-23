<template>
  <v-dialog v-model="loading" fullscreen content-class="loading-dialog">
    <v-card class="loading-card">
      <v-progress-circular id="global-loading" color="primary" indeterminate size="100" width="8" />
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  computed: {
    loading () {
      return this.$store.state.globalLoading
    }
  }
}
</script>

<style lang="scss" scoped>
.loading-card {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4) !important;
}
</style>
