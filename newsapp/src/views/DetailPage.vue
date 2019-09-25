<template>
    <div class="c-detailcontainer">
        <!-- <detail-article v-for="a in this.GetDetailArticle" :key="a.title" :article="a"/> -->
        <detail-article/>
    </div>
</template>


<script>

import DetailArticle from '@/components/DetailArticle'
export default {

    name:'Detailpage',
    components:{
        DetailArticle
    },
}
</script>


<style lang="scss" scoped>
@import "./src/style/objects/objects.detailcontainer";
</style>
