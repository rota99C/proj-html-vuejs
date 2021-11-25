<template>
  <div id="app">
    <Slideshow />
    <SiteMain />
    <SiteFooter />
  </div>
</template>

<script>
import Slideshow from "./components/Slideshow.vue";
import SiteMain from "./components/SiteMain.vue";
import SiteFooter from "./components/SiteFooter.vue";
export default {
  name: "App",
  components: {
    Slideshow,
    SiteMain,
    SiteFooter,
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
