<template>
  <div id="SiteMain">
    <MainMission />
    <MainValues />
    <MainCauses />
    <MainAllCauses />
    <MainArticles />
    <section id="Mainjoin"></section>
  </div>
</template>

<script>
import MainMission from "./MainMission.vue";
import MainValues from "./MainValues.vue";
import MainCauses from "./MainCauses.vue";
import MainAllCauses from "./MainAllCauses.vue";
import MainArticles from "./MainArticles.vue";
export default {
  components: {
    MainMission,
    MainValues,
    MainCauses,
    MainAllCauses,
    MainArticles,
  },
};
</script>

<style>
</style>