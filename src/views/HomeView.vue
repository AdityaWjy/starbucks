<template>
  <div class="home">
    <NavbarComponents />
    <div class="container">
      <HomeComponents />
    </div>
  </div>
</template>

<script>
import HomeComponents from "@/components/HomeComponents.vue"
import NavbarComponents from "@/components/NavbarComponents.vue"

export default {
  name: "HomeView",
  components: { NavbarComponents, HomeComponents },
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
