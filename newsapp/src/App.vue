<template>

  <div id="app">
    <!-- <language-bar/> -->
    <news-header/>
    <router-view/>
  </div>
</template>


<script>

import NewsHeader from '@/components/NewsHeader'
export default {
  name: 'App',
  components: {
    NewsHeader,

  },
  beforeCreate: function() {
    this.$store.dispatch("fetchArticles");
    this.$store.dispatch("fetchHeadlines");
  }
}
</script>


<style lang="scss">
@import "./src/style/base";
</style>

