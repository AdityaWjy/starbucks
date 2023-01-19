<template>
  <div id="home-components" class="mt-10">
    <div class="container">
      <div class="product-container">
        <!-- Product 1 start -->
        <div class="product flex" style="background-color: #f4c5a1">
          <div class="product-left items-center justify-center text-center">
            <div class="text-color-green font-bold text-2xl mb-8">
              Make someone’s week
            </div>
            <div class="product-description text-color-green mb-8 text-lg">
              Send a thoughtful gift card surprise, just because.
            </div>
            <div class="product-button">
              <button
                class="border border-color-green text-color-green py-1 px-3 rounded-full hover:bg-color-green hover:text-white font-bold">
                Send an eGift
              </button>
            </div>
          </div>
          <div class="product-right">
            <img src="../assets/1.jpg" alt="" />
          </div>
        </div>
        <!-- Product 1 end -->

        <!-- Product 2 start -->
        <div class="product flex my-10" style="background-color: #96b2e1">
          <div class="product-right">
            <img src="../assets/2.png" alt="" />
          </div>

          <div class="product-left items-center justify-center text-center">
            <div class="text-color-green font-bold text-6xl mb-8">
              Day boosters
            </div>
            <div
              class="product2-description text-color-green mb-8 text-2xl text-center">
              Recharge with a bold and lively Iced Shaken Espresso or Iced Brown
              Sugar Oatmilk Shaken Espresso.
            </div>
            <div class="product-button">
              <button
                class="border border-color-green text-color-green py-1 px-3 rounded-full hover:bg-color-green hover:text-white font-bold">
                Order now
              </button>
            </div>
          </div>
        </div>
        <!-- Product 2 end -->

        <!-- Product 3 start -->
        <div class="product flex" style="background-color: #8b323e">
          <div
            class="product-left items-center justify-center text-center pt-16">
            <div class="text-white font-bold text-5xl mb-8">Wrap your day</div>
            <div
              class="product-description text-white mb-8 text-2xl"
              style="width: 31rem">
              Savory ingredients come together in our Bacon, Sausage & Egg Wrap
              for a satisfying meal on the go.
            </div>
            <div class="product-button">
              <button
                class="border border-white text-white py-1 px-3 rounded-full hover:bg-slate-50 hover:text-color-red font-bold text-lg">
                Order now
              </button>
            </div>
          </div>
          <div class="product-right">
            <img src="../assets/3.jpg" alt="" />
          </div>
        </div>
        <!-- Product 3 end -->

        <!-- Product 4 start -->
        <div class="product flex my-10" style="background-color: #3d7170">
          <div class="product-right">
            <img src="../assets/4.png" alt="" />
          </div>

          <div class="product-left items-center justify-center text-center">
            <div class="text-white font-bold text-3xl mb-8">
              Taste of the globe
            </div>
            <div
              class="product2-description text-white mb-8 text-2xl text-center">
              Exceptional coffees unite in Starbucks Tribute Blend® showcasing
              four of our favorite origins
            </div>
            <div class="product-button">
              <button
                class="border border-color-white text-white py-1 px-3 rounded-full hover:bg-white hover:text-color-greenBlend font-bold">
                Order now
              </button>
            </div>
          </div>
        </div>
        <!-- Product 4 end -->

        <!-- join start -->
        <div
          class="product py-11 text-center m-auto mb-16"
          style="background-color: #a1cfc0">
          <div class="text-center pb-4">
            <span class="text-color-green font-bold text-xl"
              >Start fresh with Starbucks® Rewards</span
            >
          </div>
          <span class="text-color-green text-lg pt-10"
            ><a href="#" class="border-b-2 border-color-green hover:font-bold"
              >Join</a
            >
            today to earn your way to free coffee and treats.*</span
          >
        </div>
        <!-- join end -->
        <!-- tag close product-container -->
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.product img {
  max-width: 100%;
}

.product-right,
.product-left {
  max-width: 50%;
}

.product-left {
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto;
}

.product2-description {
  width: 35rem;
  font-weight: 500;
}

/* 96b2e1 */
</style>
