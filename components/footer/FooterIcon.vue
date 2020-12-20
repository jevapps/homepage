<template>
  <a :href="href" class="hover:text-purple">
    <img :src="src" alt />
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: '',
      required: true,
    },
    src: {
      type: String,
      default: '',
      required: true,
    },
  },
}
</script>
