<template>
    <div class="o-article__container">
        <news-article v-for="a in this.getCategoryArticles" :key="a.title" :article="a"/>
    </div>
</template>




<script>

import NewsArticle from '@/components/NewsArticle'
export default {
    name:'Articles',
    components:{
        NewsArticle
    },
    computed:{
        getCategoryArticles () {
            return this.$store.getters.getCategoryArticles
        }
    },
}
</script>

<style lang="scss" scoped>
@import "./src/style/objects/objects.articlecontainer";

</style>

