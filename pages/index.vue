<template>
  <main class="bg-primary-light">
    <div
      class="bg-purple flex flex-col justify-center items-center min-h-screen"
    >
      <div class="container py-24 px-12">
        <h1 class="text-white text-4xl">Lorem Ipsum</h1>
        <img slot="svg" src="~assets/img/Startup_SVG.svg" alt />
      </div>
    </div>
    <div>
      <h1 id="projekte">Projekte</h1>
      <Card class="">
        <div class="max-w-xs">TEST</div>
      </Card>
    </div>
    <div class="container p-4 mx-auto grid grid-cols-1 gap-4">
      <Card>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4">
            <h1 class="font-bold">Lorem ipsum</h1>
            <p>
              Dolor sit amet consectetur adipisicing elit. Enim maiores dolor
              suscipit molestiae voluptas repudiandae inventore officiis quas
              quae itaque. Illum ratione rem repellendus nam quos sit nihil,
              dignissimos quia!
            </p>
          </div>
          <div class="p-4">
            <img slot="svg" src="~assets/img/Web_design_SVG.svg" alt />
          </div>
        </div>
      </Card>
    </div>
    <div id="contact" class="bg-white w-full">
      <form class="container m-auto px-4 py-4 grid grid-cols-2 gap-4">
        <h3 class="col-span-2 text-3xl">Kontakt</h3>
        <div class="col-span-2 md:col-span-1">
          <Input
            id="name"
            label="Ihr Name"
            placeholder="Ihr Name"
            type="text"
          />
        </div>
        <div class="col-span-2 md:col-span-1">
          <Input
            id="email"
            label="Ihre E-Mail"
            placeholder="name@example.com"
            type="email"
          />
        </div>
        <div class="col-span-2">
          <Input
            id="message"
            label="Ihre Nachricht"
            placeholder="Ihre Nachricht..."
            type="text"
          />
        </div>
        <div class="py-4 col-span-2">
          <Button id="btn-send" title="Abschicken" />
        </div>
        <div class="col-span-2">
          <p class="text-xs">
            Mit dem Absenden dieser Nachricht erklären Sie sich damit
            einverstanden, dass wir Ihre Daten ausschließlich zu Kontaktzwecken
            nutzen und speichern. Nähere Informationen dazu entnehmen Sie bitte
            unserer Datenschutzerklärung.
          </p>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
export default {}
</script>
