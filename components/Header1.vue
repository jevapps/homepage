<template>
  <header
    :class="{ shadow: !atTopOfPage }"
    class="fixed h-20 w-full top-0 left-0 right-0 transition duration-500 ease-in-out bg-white text-purple z-50 transform-none"
  >
    <div
      class="container h-full flex items-center content-center justify-between m-auto p-4"
    >
      <div>
        <a href="/">LOGO</a>
      </div>
      <nav
        :class="{
          'fixed right-0 left-0 bottom-0 opacity-100 z-50 content-center items-center bg-white top-0 mt-20': openNav,
          'hidden ': !openNav,
        }"
        class="md:flex uppercase content-center items-center"
      >
        <NavLink href="#" text="Projekte" />
        <NavLink href="#" text="Test2" />
        <NavLink href="#" text="Test3" />
        <a
          href="#contact"
          class="bg-white text-purple border-purple hover:bg-purple hover:text-white hover:border-white border py-2 px-4 rounded transition duration-500 ease-in-out"
          >Kontakt
        </a>
      </nav>
      <MenuButton />
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      atTopOfPage: true,
      openNav: false,
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 0) {
        if (this.atTopOfPage) this.atTopOfPage = false
      } else if (!this.atTopOfPage) this.atTopOfPage = true
    },
    toggleNavbar() {
      this.$store.commit('toggle')
    },
  },
}
</script>
