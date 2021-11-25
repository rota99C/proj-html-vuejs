<template>
  <div id="app">
    <SiteHeader />
    <SiteJumbo />
    <SiteMain />
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from "./components/SiteHeader.vue";
import SiteJumbo from "./components/SiteJumbo.vue";
import SiteMain from "./components/SiteMain.vue";
import SiteFooter from "./components/SiteFooter.vue";
export default {
  name: "App",
  components: {
    SiteHeader,
    SiteJumbo,
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
