<template>
  <div id="SiteMain">
    <MainMission />
    <MainValues />
    <MainCauses />
    <section id="Mainaricles"></section>
    <section id="Mainjoin"></section>
  </div>
</template>

<script>
import MainMission from "./MainMission.vue";
import MainValues from "./MainValues.vue";
import MainCauses from "./MainCauses.vue";
export default {
  components: {
    MainMission,
    MainValues,
    MainCauses,
  },
};
</script>

<style>
</style>