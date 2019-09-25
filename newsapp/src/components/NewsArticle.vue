<template>
    <div class="c-article">
        <div class="c-article-img__container">
            <img v-bind:src=article.urlToImage class="c-article__banner">
        </div>
        <div class="c-article__text">
            <h2 class="c-article__headline">{{article.title}}</h2>
            <p class="c-article__summary">{{article.description}}</p>
            <div class ="c-article__published">
                <p class="c-article__author">{{this.article.author}}</p>
                <p class="c-article__time">{{FormatTime()}}</p>
            </div>

        </div>
        <router-link to="/detail" class="c-article__link" @click.native="AddDetailPage(article)">
            <p class="c-article-link__text">Read more</p>
        </router-link>


    </div>
</template>

<script>
export default {
    name:'Article',
    data: function(){
        return{
            dateformatted: null,
        }
    },


    props:{
        article:{
            type: Object,
        },

    },
    // created: function(){
    //     FormatTime();
    // },
    methods:{
        FormatTime: function(){
            let date = this.article.publishedAt;
            let dateformat = date.replace('T', ' I ');
            let dateformatted = dateformat.replace('Z','');
            return dateformatted;
        },
        replaceAt : function(index, replacement){
            return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
        },
        FormatTimePublished: function(){
            let time = this.article.publishedAt;
            time.replaceAt(11,"")
        },
        AddDetailPage: function(object){
            this.$store.commit( 'setArticleDetail', object)
        }

    },

}
</script>


<style lang="scss" scoped>
@import "./src/style/components/components.article";
</style>
