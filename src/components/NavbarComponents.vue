<template>
  <div id="navbar-components">
    <div class="container">
      <div class="navbar shadow-md">
        <div class="flex text-center items-center justify-center pl-20">
          <img
            src="../assets/logo-starbucks.png"
            class="h-auto w-12 mr-10 cursor-pointer" />
          <span
            class="text-lg uppercase font-bold hover:text-link-active cursor-pointer"
            >starbucks</span
          >
        </div>

        <nav class="text-base text-right flex-1 pr-20">
          <ul class="font-bold cursor-pointer">
            <li class="hover:text-link-active">Home</li>
            <li class="hover:text-link-active">Menu</li>
            <li class="hover:text-link-active">About</li>
            <li class="hover:text-link-active">
              <router-link to="/" class="text-base flex items-center">
                Cart
                <ion-icon
                  name="cart-outline"
                  class="ml-1 text-lg pb-1 items-center"></ion-icon>
              </router-link>
            </li>
            <li>
              <button
                class="border border-black py-1 px-3 rounded-full text-sm hover:bg-link-active hover:text-white hover:border-link-active">
                Sign in
              </button>
            </li>
            <li>
              <button
                class="border border-black py-1 px-3 rounded-full text-sm bg-black hover:bg-white hover:text-black text-white">
                Join now
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  },
}
</script>

<style scoped>
.navbar {
  width: 105%;
  height: 100px;
  display: flex;
  align-items: center;
}

.navbar ul li {
  display: inline-block;
  margin-right: 30px;
}
</style>
