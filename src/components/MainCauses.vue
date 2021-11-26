<template>
  <section id="MainCauses">
    <h1>RECENT CAUSES</h1>
    <hr />
    <p>We run projects in over 30 countries in 5 continents</p>
    <div>
      <img v-for="image in images" :key="image" :src="images.src" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          src: "../assets/img/avada-charity-fair-trade-featured.jpg",
        },
        {
          src: "../assets/img/avada-charity-shelter-featured.jpg",
        },
        {
          src: "../assets/img/avada-charity-farming-featured.jpg",
        },
        {
          src: "../assets/img/avada-charity-vaccines-featured.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../assets/style/common.scss";
#MainCauses {
  text-align: CENTER;
  margin: 80px;
  h1 {
    font-family: "Montserrat", sans-serif;
  }
  hr {
    width: 10%;
    height: 1px;
    color: $golden;
    opacity: 1;
    margin: 1rem auto;
  }
  .images {
    width: 100%;
  }
}
</style>