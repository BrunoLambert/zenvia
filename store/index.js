export const state = () => ({
  globalLoading: false
})

export const mutations = {
  updateGlobalLoading (state, value) {
    state.globalLoading = value
  }
}
