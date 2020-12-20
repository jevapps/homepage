<template>
  <button
    class="w-full focus:outline-none bg-purple text-white font-bold py-2 px-4 rounded-md shadow uppercase hover:bg-primary-dark transform transition duration-200 ease-linear active:translate-y-0.5"
  >
    <PaperAirplaneIcon class="transform rotate-90" />
    {{ title }}
  </button>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      default: '',
      required: true,
    },
    title: {
      type: String,
      default: '',
      required: true,
    },
  },
}
</script>
