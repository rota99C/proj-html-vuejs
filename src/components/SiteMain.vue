<template>
  <div id="SiteMain">
    <MainMission />
    <MainValues />
    <MainCauses />
    <MainAllCauses />
    <section id="Mainaricles"></section>
    <section id="Mainjoin"></section>
  </div>
</template>

<script>
import MainMission from "./MainMission.vue";
import MainValues from "./MainValues.vue";
import MainCauses from "./MainCauses.vue";
import MainAllCauses from "./MainAllCauses.vue";
export default {
  components: {
    MainMission,
    MainValues,
    MainCauses,
    MainAllCauses,
  },
};
</script>

<style>
</style>