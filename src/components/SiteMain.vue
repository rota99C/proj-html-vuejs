<template>
  <div id="SiteMain">
    <MainMission />
    <MainValues />
    <MainCauses />
    <MainAllCauses />
    <MainArticles />
    <MainJoin />
  </div>
</template>

<script>
import MainMission from "./MainMission.vue";
import MainValues from "./MainValues.vue";
import MainCauses from "./MainCauses.vue";
import MainAllCauses from "./MainAllCauses.vue";
import MainArticles from "./MainArticles.vue";
import MainJoin from "./MainJoin.vue";
export default {
  components: {
    MainMission,
    MainValues,
    MainCauses,
    MainAllCauses,
    MainArticles,
    MainJoin,
  },
};
</script>

<style>
</style>