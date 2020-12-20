<template>
  <footer class="bg-white text-gray-900">
    <div class="container py-12 m-auto border-t px-4">
      <div class="m-auto flex justify-center p-2">
        <a href="mailto:jonas.wascheroh@gmail.com" class="hover:text-purple">
          <MailIcon />
        </a>
        <a href="mailto:jonas.wascheroh@gmail.com" class="hover:text-purple">
          <MailIcon />
        </a>
      </div>
      <div class="text-center p-2">
        {{ copyright }} |
        <a class="hover:text-purple hover:underline" href="impressum"
          >Impressum</a
        >
        |
        <a class="hover:text-purple hover:underline" href="datenschutz"
          >Datenschutz</a
        >
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      copyright: '© JevApps ' + new Date().getFullYear(),
    }
  },
}
</script>
