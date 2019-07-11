<template>
  <div class="search">
    <div class="search-box-wrapper">
      <!-- searchBox 抛出了一个query方法 -->
      <v-search-box ref="searchBox" @query='onQueryChange'></v-search-box>
    </div>
  </div>
</template>

<script>
import searchBox from '@/components/searchBox'
export default {
  components:{
    'v-search-box':searchBox
  }
}
</script>

<style>

</style>
