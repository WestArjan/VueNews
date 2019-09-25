<template>
    <div class="o-article__container">
        <news-article v-for="a in this.getAllArticles" :key="a.title" :article="a"/>
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
        getAllArticles () {
            return this.$store.getters.getAllArticles
        }
    },
}
</script>

<style lang="scss" scoped>
@import "./src/style/objects/objects.articlecontainer";

</style>

