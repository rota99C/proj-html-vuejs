<template>
  <div id="MainArticles">
    <h1>LATEST ARTICLES</h1>
    <hr />
    <p class="mt-4">Together we make all the difference</p>
    <div class="container_Articles d-flex w-75">
      <div class="col-6 container_Articles_image">
        <img
          src="../assets/img/photo-1444213007800-cff19e1677ac.jpg"
          class="w-100"
          alt=""
        />
        <div class="container_Articles_text">
          <p class="title">Understanding community complexities</p>
          <p class="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prasent ac
            nibh vestibulum, laoreet ipsum.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Prasent ac nibh vestibulum, laoreet
            ipsum.Lorem ipsum dolor sit amet,<br />
            <br />
            consectetur adipiscing elit. Prasent ac nibh vestibulum, laoreet
            ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Prasent ac nibh vestibulum, laoreet ipsum.
          </p>
        </div>
      </div>
      <div class="col-6 d-flex flex-column justify-content-between">
        <div class="d-flex p-4" v-for="article in articles" :key="article">
          <img :src="article.image" />
          <div class="text-start ps-4">
            <p class="title">{{ article.title }}</p>
            <p class="description">{{ article.descritpion }}</p>
          </div>
        </div>
      </div>
    </div>
    <button class="red_button_full w-75">
      <a class="text-decoration-none" href="">VIEW ALL OUR ARTICLES</a>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {
          image:
            "https://avada.theme-fusion.com/charity/wp-content/uploads/sites/72/2016/08/photo-1444664597500-035db93e2323-177x142.jpg",
          title: "The human story of uniqueness",
          descritpion:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prasent ac nibh vestibulum, laoreet ipsum. ",
        },
        {
          image:
            "https://avada.theme-fusion.com/charity/wp-content/uploads/sites/72/2016/08/photo-1447430617419-95715602278e-177x142.jpg",
          title: "Sustainable trade tactics",
          descritpion:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prasent ac nibh vestibulum, laoreet ipsum. ",
        },
        {
          image:
            "https://avada.theme-fusion.com/charity/wp-content/uploads/sites/72/2016/08/photo-1460230525622-630fe3294cd7-177x142.jpg",
          title: "Farmers making a difference",
          descritpion:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prasent ac nibh vestibulum, laoreet ipsum. ",
        },
        {
          image:
            "https://avada.theme-fusion.com/charity/wp-content/uploads/sites/72/2016/08/photo-1460600421604-5e138c208b9c-177x142.jpg",
          title: "Meeting remote tribes in Peru",
          descritpion:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prasent ac nibh vestibulum, laoreet ipsum. ",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../assets/style/common.scss";
@import "../assets/style/variables.scss";
#MainArticles {
  text-align: center;
  margin: 120px;
  font-family: "Montserrat", sans-serif;

  hr {
    width: 10%;
    height: 3px;
    color: $golden;
    opacity: 1;
    margin: 1rem auto;
  }
  .description {
    color: $jumbo;
  }
  .title {
    color: $putty;
  }
  .container_Articles {
    margin: 80px auto;
    .container_Articles_image {
      border: 1px solid $light_gray;
    }
    .container_Articles_text {
      padding: 40px 20px;
      text-align: left;
    }
  }
}
</style>