export const state = () => ({
  openNav: false,
})

export const mutations = {
  toggle(state) {
    state.openNav = !state.openNav
  },
}
