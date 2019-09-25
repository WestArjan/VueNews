<template>
  <div class="o-home">
    <p class="e-header">Newest Headline</p>
    <headline-container/>
    <p class="e-header">Latest Articles</p>
    <article-container/>
  </div>

</template>

<script>
// @ is an alias to /src
import HeadlineContainer from '@/components/HeadlineContainer'
import ArticleContainer from '@/components/ArticleContainer'


export default {

  name: 'home',
  components:{
    ArticleContainer,
    HeadlineContainer
  }
}
</script>

<style lang="scss" scoped>
@import "./src/style/elements/elements.title";
@import "./src/style/objects/objects.home";
</style>
