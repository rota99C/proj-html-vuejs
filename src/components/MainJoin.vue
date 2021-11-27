<template>
  <div id="MainJoin" class="w-100">
    <div class="col-7 m-auto text-white">
      <h1>CHANGE A LIFE TODAY</h1>
      <hr />
      <p class="mt-4">
        As long as poverty, injustice & inequality persist, none of us can truly
        rest. It doesn’t take much to change a life, Get in touch today and
        start making the difference.
      </p>
      <div class="d-flex justify-content-center">
        <button class="white_button_empty me-4">
          <a class="text-decoration-none" href="">OUR MISSION</a>
        </button>
        <button class="white_button_empty ms-4">
          <a class="text-decoration-none" href="">DONATE NOW</a>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../assets/style/common.scss";
#MainJoin {
  text-align: center;
  font-family: "Montserrat", sans-serif;
  background-image: url(../assets/img/home-footer.jpg);
  background-position: center;
  background-size: cover;
  padding: 150px 30px;

  hr {
    width: 20%;
    height: 3px;
    color: $golden;
    opacity: 1;
    margin: 1rem auto;
  }
  p {
    font-size: 24px;
    margin-bottom: 70px;
  }
}
</style>