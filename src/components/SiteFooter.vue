<template>
  <div id="SiteFooter">
    <div class="logo_footer">
      <img src="../assets/img/avada-charity-mobile-logo-retina.png" alt="" />
    </div>
    <div class="rights_social d-flex flex-column">
      <p>
        &copy; Copyright 2012 - 2021 | Avada Theme by
        <span class="text_golden">ThemeFusion</span> | All Rights Reserved |
        Powered by <span class="text_golden">WordPress</span>
      </p>
      <div class="d-flex justify-content-center">
        <div class="container_icon rounded-circle">
          <img
            src="../assets/img/facebook.png"
            class="position-absolute top-50 start-50 translate-middle"
            alt=""
          />
        </div>
        <div class="container_icon rounded-circle">
          <img
            src="../assets/img/instagram.png"
            class="position-absolute top-50 start-50 translate-middle"
            alt=""
          />
        </div>
        <div class="container_icon rounded-circle">
          <img
            src="../assets/img/twitter.png"
            class="position-absolute top-50 start-50 translate-middle"
            alt=""
          />
        </div>
        <div class="container_icon rounded-circle">
          <img
            src="../assets/img/youtube.png"
            class="position-absolute top-50 start-50 translate-middle"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../assets/style/common.scss";
@import "../assets/style/variables.scss";
#SiteFooter {
  .logo_footer {
    background-color: $white;
    padding: 60px 30px;
    text-align: center;
    img {
      width: 300px;
      height: 60px;
    }
  }
  .rights_social {
    background-color: #f5f5f5;
    text-align: center;
    padding: 25px 30px;
    .text_golden {
      color: $golden;
    }
    p {
      font-size: 14px;
      color: grey;
    }

    // stesso font dei bottoni
  }
  .container_icon {
    width: 42px;
    height: 42px;
    background-color: $white;
    position: relative;
    margin: 0px 4px;
    img {
      width: 24px;
    }
  }
}
</style>