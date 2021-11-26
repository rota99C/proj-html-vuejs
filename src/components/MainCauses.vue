<template>
  <section id="MainCauses">
    <h1>RECENT CAUSES</h1>
    <hr />
    <p class="mt-4">We run projects in over 30 countries in 5 continents</p>

    <div class="container_caouses col-12 d-flex justify-content-center">
      <img v-for="image in images" :key="image" :src="image.link" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          id: "1",
          link: "https://avada.theme-fusion.com/charity/wp-content/uploads/sites/72/2016/08/avada-charity-fair-trade-featured.jpg",
        },
        {
          id: "2",
          link: "https://avada.theme-fusion.com/charity/wp-content/uploads/sites/72/2016/08/avada-charity-shelter-featured.jpg",
        },
        {
          id: "3",
          link: "https://avada.theme-fusion.com/charity/wp-content/uploads/sites/72/2016/08/avada-charity-farming-featured.jpg",
        },
        {
          id: "4",
          link: "https://avada.theme-fusion.com/charity/wp-content/uploads/sites/72/2016/08/avada-charity-vaccines-featured.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../assets/style/common.scss";
@import "../assets/style/variables.scss";
#MainCauses {
  text-align: CENTER;
  margin: 120px;
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
  p {
    color: $jumbo;
  }

  .container_caouses {
    margin: 70px auto;
    img {
      width: 20%;
      margin: 0px 35px;
    }
  }
}
</style>