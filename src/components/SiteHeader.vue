<template>
  <div id="SiteHeader" class="w-100 d-flex justify-content-between">
    <img src="../assets/img/avada-charity-logo.png" alt="logo-AvadaCharity" />
    <div class="navbar">
      <ul>
        <li v-for="menuItem in menuItems" :key="menuItem" class="d-inline">
          <a href="" class="text-decoration-none">
            {{ menuItem }}
          </a>
        </li>
        <button class="golden_button_full">
          <a href="" class="text-decoration-none">DONATE</a>
        </button>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: ["HOME", "MISSION", "CAUSES", "JOURNAL"],
    };
  },
};
</script>

<style lang="scss">
@import "../assets/style/common.scss";
@import "../assets/style/variables.scss";
#SiteHeader {
  height: 150px;
  padding: 45px 85px;
  li {
    margin-right: 40px;
    color: $white;
    a:visited {
      color: $white;
    }
    a:hover {
      color: $golden;
    }
  }
}
</style>