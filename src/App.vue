<template>
  <div id="app">
    <div class="bottone_goUp" v-if="visible">
      <a href="#app"><font-awesome-icon :icon="['fas', 'chevron-up']" /></a>
    </div>
    <Slideshow />
    <SiteMain />
    <SiteFooter />
  </div>
</template>

<script>
import Slideshow from "./components/Slideshow.vue";
import SiteMain from "./components/SiteMain.vue";
import SiteFooter from "./components/SiteFooter.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "App",
  components: {
    Slideshow,
    SiteMain,
    SiteFooter,
    FontAwesomeIcon,
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    createButton() {
      if (window.scrollY > 100) {
        //console.log("string");
        this.visible = true;
      } else {
        this.visible = false;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.createButton);
    /* function goBack() {
      if (window.scrollY > 100) {
        this.visible = true;
      }
    } */
  },
};
</script>

<style lang="scss">
@import "./assets/style/common.scss";
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.bottone_goUp {
  width: 50px;
  height: 40px;
  background-color: $thunder;
  position: fixed;
  bottom: 0;
  right: 120px;
  text-align: center;
  line-height: 40px;
  .svg-inline--fa {
    font-size: 20px;
    color: $white;
  }
}
</style>
