<template>
    <div class="c-detail">
        <h2 class="c-detail__title">{{detailarticle.title}}</h2>
        <div class ="c-detail__published">
            <p class="c-detail__author">{{detailarticle.author}}</p>
            <p class="c-detail__time">{{FormatTime()}}</p>
        </div>
        <div class="c-detail-img__container">
            <img v-bind:src=detailarticle.urlToImage class="c-detail__img">
        </div>
        <p class="c-detail__content">{{detailarticle.content}}</p>

    </div>
</template>

<script>
export default {
    name: 'Articledetail',
    data: function(){
        return{
            detailarticle: this.$store.state.ArticleDetail,
            dateformatted: null,
        }
    },
    methods:{
        FormatTime: function(){
            let date = this.detailarticle.publishedAt;
            let dateformat = date.replace('T', ' I ');
            let dateformatted = dateformat.replace('Z','');
            return dateformatted;
        },
    },

}
</script>


<style lang="scss" scoped>
@import "./src/style/components/components.detail";
</style>
