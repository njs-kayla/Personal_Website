<template>
  <div class="container">
    <div class="main_body">
      <div class="personal_info">
        <div class="pic">
          <img src="../../public/image/test.png" alt="自我介紹照片">
        </div>
        <div class="contact">
          <a href="https://github.com/njs-kayla"><i class="fa-brands fa-github"></i></a>
          <i class="fa-solid fa-phone"></i>
          <i class="fa-solid fa-envelope"></i>
        </div>
        <a href="https://drive.google.com/file/d/1BoETBJz4ZC54nv0pAtTboEzlsA0TDf6n/view?usp=sharing" class="resume">
          <span>查看履歷</span>
          <i class="fa-solid fa-up-right-from-square"></i>
        </a>
      </div>
      <div class="right_info">
        <div class="about_me">
          <h2>Hello！</h2>
          <p>我是陳希，半年前決心要開始學寫程式，途中接觸了各種網路文章、線上課程等等，之後，為了更有系統的學習，報名了前端工程師專業技術養成班，學習了更多網頁相關知識、前後端技術以及獨自解決問題的能力，更奠定了我想成為前端工程師的意志，今後也會持續精進自己，朝專業的前端工程師前進。</p>
        </div>
        <div class="link">
          <router-link class="item" to="info">簡歷</router-link>
          <router-link class="item" to="project">作品集</router-link>
          <router-link class="item" to="skill">技能</router-link>
        </div>
      </div>
    </div>
  </div>
  <router-view/>
</template>
<script>
export default {
  name: "HomeView",
};
</script>
<style lang="scss" scoped>
@import "src/assets/scss/home";
</style>
