<template>
  <div
    id="SiteJumbo"
    class="d-flex justify-content-center align-items-center w-100"
  >
    <div class="text-center">
      <h1 class="text-white mb-3">MAKE A DIFFERENCE</h1>
      <h4 class="text-white mb-5">
        As long as poverty, injustice &amp; inequality persist, none of us can
        truly rest
      </h4>
      <button class="white_button_empty me-3">
        <a class="text-decoration-none" href="">OUR MISSION</a>
      </button>
      <button class="golden_button_empty">
        <a class="text-decoration-none" href="">DONATE NOW</a>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#SiteJumbo {
  z-index: -1;
  position: absolute;
  top: 0;
  background-image: url(../assets/img/home-page-slider.jpg);
  background-size: cover;
  height: 100vh;
  font-family: "Montserrat", sans-serif;
  h1 {
    font-size: 80px;
  }
}
</style>