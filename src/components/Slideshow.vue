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
  position: relative;
  height: 100vh;
}
</style>