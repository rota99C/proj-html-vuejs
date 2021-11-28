<template>
  <div id="Slideshow">
    <SiteHeader />
    <SiteJumbo />
  </div>
</template>

<script>
import SiteHeader from "./SiteHeader.vue";
import SiteJumbo from "./SiteJumbo.vue";
export default {
  components: {
    SiteHeader,
    SiteJumbo,
  },
};
</script>

<style lang="scss">
#Slideshow {
  background-image: url(../assets/img/home-page-slider.jpg);
  background-size: cover;
}
</style>