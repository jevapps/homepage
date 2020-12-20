<template>
  <div class="app bg-purple">
    <div
      :class="{
        '-translate-x-48 translate-y-10 scale-90 opacity-75 overflow-hidden transform': openNav,
      }"
      class="rounded-3xl transition duration-300"
    >
      <Header1 />
      <Nuxt class="pt-20" />
      <Footer />
    </div>
    <Nav />
  </div>
</template>
<style>
html {
  scroll-behavior: smooth;
}
::selection {
  @apply bg-purple;
  @apply text-white;
}
::-moz-selection {
  @apply bg-purple;
  @apply text-white;
}
</style>
<script>
export default {
  data() {
    return {
      open: false,
    }
  },
  computed: {
    openNav() {
      return this.$store.state.openNav
    },
  },
}
</script>
