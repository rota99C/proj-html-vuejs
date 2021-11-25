<template>
  <section id="MainMission" class="d-flex">
    <div class="mission_text col-8">
      <h1>EVERY MOMENT COUNTS</h1>
      <hr />
      <div class="paragraph pt-4 pb-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
          reiciendis optio asperiores laboriosam tenetur exercitationem,
          eligendi excepturi praesentium quasi temporibus. Rerum explicabo, modi
          assumenda provident totam maiores laudantium placeat odio!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
          reiciendis optio asperiores laboriosam tenetur exercitationem,
          eligendi excepturi praesentium quasi temporibus.
        </p>
        <p>
          Rerum explicabo, modi assumenda provident totam maiores laudantium
          placeat odio!
        </p>
      </div>

      <button class="golden_button_full">OUR MISSION</button>
    </div>
    <div
      class="
        col-4
        mission_numbers
        d-flex
        flex-column
        justify-content-between
        text-center text-white
      "
    >
      <div>
        <p>
          <font-awesome-icon :icon="['fas', 'heart']" />
          {{ numberVolunteers }}
        </p>
        <p>Volunteers worldwide</p>
      </div>
      <div>
        <p>
          <font-awesome-icon :icon="['fas', 'globe']" />
          {{ numberProjects }}
        </p>
        <p>Active projects</p>
      </div>
      <div>
        <p>
          <font-awesome-icon :icon="['fas', 'dollar-sign']" />
          {{ numberDonation }} M
        </p>
        <p>Donated</p>
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
      numberVolunteers: 2032,
      numberProjects: 132,
      numberDonation: 3.8,
    };
  },
};
</script>

<style lang="scss">
@import "../assets/style/common.scss";
@import "../assets/style/variables.scss";

.mission_text {
  background-color: $white;
  padding: 100px;
  h1 {
    font-family: "Montserrat", sans-serif;
  }
  hr {
    width: 30%;
    height: 1px;
    color: $golden;
    opacity: 1;
  }
  p {
    font-family: "Raleway", sans-serif;
  }
}
.mission_numbers {
  background-image: url(../assets/img/home-content-bg-1.jpg);
  padding: 100px;
  font-family: "Raleway", sans-serif;
  div p:first-child {
    font-size: 60px;
    margin-bottom: -5px;
  }
  .svg-inline--fa {
    font-size: 45px;
  }
  div p:last-child {
    font-size: 24px;
  }
}
</style>
