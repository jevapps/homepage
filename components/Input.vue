<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <input
      :id="id"
      class="bg-primary-light rounded w-full py-2 px-3 transition duration-300 ease-in-out focus:bg-white outline-none focus:shadow"
      :placeholder="placeholder"
      :type="type"
      required
    />
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      default: '',
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
      required: true,
    },
    label: {
      type: String,
      default: '',
      required: false,
    },
    type: {
      type: String,
      default: '',
      required: false,
    },
  },
}
</script>
