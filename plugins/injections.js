import Formatter from '~/helpers/formatter'

export default ({ store }, inject) => {
  const Loader = {
    on: () => {
      store.commit('updateGlobalLoading', true)
    },
    off: () => {
      store.commit('updateGlobalLoading', false)
    }
  }

  inject('formatter', new Formatter())
  inject('loader', Loader)
}
