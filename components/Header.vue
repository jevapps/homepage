<template>
  <header
    :class="{
      'bg-white text-purple': !atTopOfPage,
      'bg-transparent text-white': atTopOfPage,
    }"
    class="fixed h-20 top-0 left-0 right-0 transition duration-500 ease-in-out"
  >
    <div
      class="container h-full flex items-center content-center justify-between m-auto p-4"
    >
      <div>
        <a href="/">LOGO</a>
      </div>
      <nav
        :class="{
          'fixed right-0 left-0 bottom-0 opacity-100 z-50 content-center items-center bg-purple top-0 mt-20': openNav,
          'hidden ': !openNav,
        }"
        class="md:flex uppercase content-center items-center"
      >
        <NavLink href="#" text="Projekte" />
        <NavLink href="#" text="Test2" />
        <NavLink href="#" text="Test3" />
        <a
          href="#contact"
          :class="{
            'bg-purple text-white hover:bg-white hover:text-purple hover:border-purple': !atTopOfPage,
            'bg-white text-purple border-purple hover:bg-purple hover:text-white  hover:border-white ': atTopOfPage,
          }"
          class="border py-2 px-4 rounded transition duration-500 ease-in-out"
          >Kontakt
        </a>
      </nav>
      <button class="md:hidden outline-none" @click="toggleNavbar">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
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
      this.openNav = !this.openNav
    },
  },
}
</script>
