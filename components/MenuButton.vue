<template>
  <button
    class="flex justify-center items-center focus:outline-none md:hidden"
    @click="toggleNavbar"
  >
    <span class="w-10 h-10 relative group">
      <div
        class="absolute w-10 h-1 bg-purple rounded-full top-2 transform transition duration-300 group-hover:-translate-y-1"
      ></div>
      <div class="absolute w-10 h-1 bg-purple rounded-full top-4.5"></div>
      <div
        class="absolute w-10 h-1 bg-purple rounded-full top-7 transform transition duration-300 group-hover:translate-y-1"
      ></div>
    </span>
  </button>
</template>
<script>
export default {
  /*
        :class="{
          'rotate-45 translate-x-0.25 translate-y-2.25': open,
          ' group-hover:-translate-y-1': !open,
        }"

        :class="{ hidden: open }"
        
                :class="{
          '-rotate-45 translate-x-0.25 -translate-y-2.25': open,
          'group-hover:translate-y-1': !open,
        }"
  */
  data() {
    return {
      open: false,
    }
  },
  methods: {
    toggleNavbar() {
      this.open = !this.open
      this.$store.commit('toggle')
    },
  },
}
</script>
