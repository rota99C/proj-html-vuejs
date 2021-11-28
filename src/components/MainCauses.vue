<template>
  <section id="MainCauses">
    <h1>RECENT CAUSES</h1>
    <hr />
    <p class="mt-4">We run projects in over 30 countries in 5 continents</p>

    <div
      class="container_caouses col-12 d-flex justify-content-center flex-row"
    >
      <div
        class="container_img position-relative"
        v-for="image in images"
        :key="image"
      >
        <div class="position-absolute w-100 h-100">
          <h5 class="position-absolute top-50 start-50 translate-middle">
            {{ image.title }}
          </h5>
        </div>
        <img :src="image.link" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          title: "FAIR TRADE",
          id: "1",
          link: "https://avada.theme-fusion.com/charity/wp-content/uploads/sites/72/2016/08/avada-charity-fair-trade-featured.jpg",
        },
        {
          title: "SHELTER",
          id: "2",
          link: "https://avada.theme-fusion.com/charity/wp-content/uploads/sites/72/2016/08/avada-charity-shelter-featured.jpg",
        },
        {
          title: "FARMING",
          id: "3",
          link: "https://avada.theme-fusion.com/charity/wp-content/uploads/sites/72/2016/08/avada-charity-farming-featured.jpg",
        },
        {
          title: "VACCINES",
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
    height: 3px;
    color: $golden;
    opacity: 1;
    margin: 1rem auto;
  }
  p {
    color: $jumbo;
  }

  .container_caouses {
    margin: 70px auto;
    .container_img {
      width: 20%;
      margin: 0px 35px;
      img {
        width: 100%;
      }
      div {
        background-color: rgba(252, 214, 108, 0.5);
        visibility: hidden;
        h5 {
          color: $white;
        }
      }
    }
    .container_img:hover div {
      visibility: visible;
    }
  }
}
</style>