<template>
    <div class="o-category">
        <p class="e-header">{{this.$route.params.category}} articles</p>
        <category-container/>
    </div>

</template>


<script>

import CategoryContainer from '@/components/CategoryContainer'

export default {
    components:{
        CategoryContainer
    },

    created: function(){
        let currentCategory = this.$route.params.category
        this.$store.dispatch("fetchCategoryArticles",currentCategory);
    },
    methods: {
      fetchArticles: function(){
        let currentCategory = this.$route.params.category
        this.$store.dispatch("fetchCategoryArticles",currentCategory);
      },
    },
    watch:{
      '$route' : 'fetchArticles'
  },
computed:{
        getAllArticles () {
            return this.$store.getters.getCategoryArticles
        }
    },
}
</script>


<style lang="scss" scoped>
@import "./src/style/elements/elements.title";
@import "./src/style/objects/objects.category";

</style>
