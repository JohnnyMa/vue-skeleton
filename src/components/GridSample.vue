<!-- component template -->
<template id="demo-grid">
  <div id="demo">
    <form id="search">
      Search <input name="query" v-model="searchQuery">
    </form>
    <demo-grid
      :data="gridData"
      :columns="gridColumns"
      :filter-key="searchQuery">
    </demo-grid>
  </div>
</template>

<script>
import Vue from 'vue'

export default new Vue({
  el: '#demo',
  components: {
    
  },
  data: {
    searchQuery: '',
    gridColumns: ['name', 'power'],
    gridData: [
      { name: 'Chuck Norris', power: Infinity },
      { name: 'Bruce Lee', power: 9000 },
      { name: 'Jackie Chan', power: 7000 },
      { name: 'Jet Li', power: 8000 }
    ]
  }
})
</script>

<style lang="stylus">

</style>
