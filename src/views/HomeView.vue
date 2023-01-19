<template>
  <div class="home">
    <div class="container">
      <HomeComponents />
    </div>
    <FooterComponents />
  </div>
</template>

<script>
import FooterComponents from "@/components/FooterComponents.vue"
import HomeComponents from "@/components/Home-page/HomeComponents.vue"
import NavbarComponents from "@/components/NavbarComponents.vue"

export default {
  name: "HomeView",
  components: { NavbarComponents, HomeComponents, FooterComponents },
}
</script>

<style scoped>
.container {
  max-width: 150%;

  box-sizing: border-box;
  overflow: hidden;
  padding-left: 5%;
  padding-right: 5%;
}
</style>
