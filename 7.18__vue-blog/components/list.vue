<template>
  <div class="list">
    <template v-if="total===0">
      <div class="list-null">
        空空路也
      </div>
    </template>
    <template v-else>
      <ul>

      </ul>
    </template>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name:'BaseList',
  data() {
    return {
      // total: 0

    }
  },
  computed: {
    ...mapState('article', [
      'articles',
      'total',
      'limit',
      'articlesTop'
    ])
  }
}
</script>

<style>

</style>
