<template>
  <a :href="href" class="h-8 block overflow-hidden mx-4">
    <div
      class="transition transform duration-200 ease-in-out hover:-translate-y-1/2"
    >
      <div class="leading-8 font-normal tracking-wider">
        {{ text }}
      </div>
      <div class="leading-8 font-bold tracking-wider">
        {{ text }}
      </div>
    </div>
  </a>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
      default: '',
    },
    href: {
      type: String,
      required: true,
      default: '#',
    },
  },
}
</script>
