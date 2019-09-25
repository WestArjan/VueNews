<template>
  <div class="o-search">
      <searchbar/>
      <search-container/>
      
  </div>

</template>

<script>
// @ is an alias to /src
import Searchbar from '@/components/Searchbar'
import SearchContainer from '@/components/SearchContainer'


export default {

  name: 'Searchpage',
  components:{
    Searchbar,
    SearchContainer
    
  }
}
</script>

<style lang="scss" scoped>
@import "./src/style/objects/objects.search";
</style>
