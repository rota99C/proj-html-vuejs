<template>
  <section id="MainValues">
    <div class="titolo">
      <h1>OUR VALUES</h1>
      <hr />
      <h4 class="mt-4">Think Big. Act Bigger</h4>
    </div>
    <div
      class="container-value d-flex justify-content-center text-center col-12"
    >
      <div class="col-3 ms-2 me-2" v-for="value in values" :key="value">
        <font-awesome-icon :icon="['fas', value.iconName]" />
        <h4 class="mb-4">{{ value.name }}</h4>
        <p>{{ value.description }}</p>
        <button class="golden_button_full">
          <a href="" class="text-decoration-none">LEARN MORE</a>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      values: [
        {
          iconName: "tint",
          name: "Clean Water",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velreiciendis optio",
        },
        {
          iconName: "stethoscope",
          name: "Vaccinations",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velreiciendis optio",
        },
        {
          iconName: "graduation-cap",
          name: "Education",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velreiciendis optio",
        },
        {
          iconName: "seedling",
          name: "Farming",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velreiciendis optio",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../assets/style/common.scss";
@import "../assets/style/variables.scss";
#MainValues {
  font-family: "Montserrat", sans-serif;
  padding: 100px 80px;
  background-image: url(../assets/img/home-content-bg-2.jpg);
  background-size: cover;
  background-position: center;
  background-position-y: -195px;
  color: $white;
}
.titolo {
  text-align: center;

  hr {
    width: 10%;
    height: 1px;
    color: $golden;
    opacity: 1;
    margin: 1rem auto;
  }
}
.container-value {
  padding: 40px;
  .svg-inline--fa {
    font-size: 70px;
    color: $golden;
    margin-bottom: 20px;
  }
}
</style>