<template>
  <div id="SiteMain">
    <MainMission />
    <MainValues />
    <section id="Mainvalues"></section>
    <section id="Mainaricles"></section>
    <section id="Mainjoin"></section>
  </div>
</template>

<script>
import MainMission from "./MainMission.vue";
import MainValues from "./MainValues.vue";
export default {
  components: {
    MainMission,
    MainValues,
  },
};
</script>

<style>
</style>