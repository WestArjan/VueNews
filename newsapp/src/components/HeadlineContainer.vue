<template>
    <div class="o-headline__container">
        <headline-article v-for="a in this.getAllHeadlines" :key="a.title" :article="a"/>
    </div>
</template>




<script>

import HeadlineArticle from '@/components/HeadlineArticle'
export default {
    name:'Grid',
    components:{
        HeadlineArticle
    },
    computed:{
        getAllHeadlines () {
            return this.$store.getters.getAllHeadlines
        }
    },
}
</script>

<style lang="scss" scoped>

</style>

