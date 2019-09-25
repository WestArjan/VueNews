<template>
    <div class="c-headline">
        <img v-bind:src=article.urlToImage class="c-headline__banner">
        <div class="c-headline__text">
            <h2 class="c-headline__title">{{article.title}}</h2>
            <p class="c-headline__description">{{article.description}}</p>
            <router-link to="/detail" class="c-article__link" @click.native="AddDetailPage(article)">
                <p class="c-article-link__text">Read more</p>
            </router-link>
        </div>



    </div>
</template>

<script>
export default {
    name:'HeadlineArticle',

    props:{
        article:{
            type: Object,
        }

    },
    methods:{
        AddDetailPage: function(object){
            this.$store.commit( 'setArticleDetail', object)
        }
    }
}
</script>


<style lang="scss" scoped>
@import "./src/style/components/components.headlines";

</style>
