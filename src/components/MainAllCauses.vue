<template>
  <div id="MainAllCauses">
    <div class="d-flex justify-content-center align-items-center">
      <p class="mb-0">VIEW ALL OUR CAUSES</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../assets/style/variables.scss";
@import "../assets/style/common.scss";
#MainAllCauses {
  div {
    height: 160px;
    background-color: $sienna;
    width: 100%;

    p {
      font-family: "Montserrat", sans-serif;
      font-weight: 600;
      letter-spacing: 2px;
      color: $white;
      font-size: 18px;
    }
  }
  div:hover {
    background-color: $tuna;
  }
}
</style>