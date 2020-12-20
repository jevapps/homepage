<template>
  <main class="bg-white">
    <div class="flex justify-center h-screen">
      <div class="container m-auto p-4">
        <div class="flex justify-center mb-8">
          <img
            slot="svg"
            class="w-3/4"
            src="~assets/img/Error_404_SVG.svg"
            alt
          />
        </div>
        <div>
          <h1
            class="text-center py-10 font-bold text-4xl md:text-5xl max-w-6xl"
          >
            Seite nicht gefunden
          </h1>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  props: ['error'],
  layout: 'staticHeader',
}
</script>
<style>
html {
  scroll-behavior: smooth;
}
</style>
