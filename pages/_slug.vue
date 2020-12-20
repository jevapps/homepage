<template>
  <div class="bg-white">
    <h1 class="text-center py-10 font-bold text-4xl">{{ page.title }}</h1>
    <nuxt-content :document="page" class="container m-auto p-4" />
  </div>
</template>

<script>
export default {
  layout: 'staticHeader',
  async asyncData({ $content, params, error }) {
    const slug = params.slug || 'index'
    const page = await $content(slug)
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: 'Page not found', data: err })
      })
    return {
      page,
    }
  },
}
</script>
<style>
.nuxt-content h1 {
  font-weight: bold;
}

.nuxt-content h2 {
  @apply font-semibold text-lg;
}
</style>
