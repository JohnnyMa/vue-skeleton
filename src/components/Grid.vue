<!-- component template -->
<template id="demo-grid">
	<!-- demo root element -->
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
  <table class="demo-tbl">
    <thead>
      <tr>
        <th v-for="key in gridColumns"
          @click="sortBy(key)"
          :class="{active: sortKey == key}">
          {{key | capitalize}}
          <span class="arrow"
            :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="
        entry in gridData
        | filterBy filterKey
        | orderBy sortKey sortOrders[sortKey]">
        <td v-for="key in gridColumns">
          {{entry[key]}}
        </td>
      </tr>
    </tbody>
  </table>


</template>

<script>
import Vue from 'vue'

export default {
  name: 'Grid',
  props: {
    gridData: Array,
    gridColumns: Array,
    filterKey: String
  },
  methods: {
    sortBy: function (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    }
  },

  data: function () {
    var sortOrders = {}
    this.columns.forEach(function (key) {
      sortOrders[key] = 1
    })

    console.log(sortOrders);

    return {
      sortKey: '',
      sortOrders: sortOrders
    }
  },

  data () {
    return {
	    searchQuery: 'jet',
	    gridColumns: [],
	    gridData: []
	  }
  },

  created () {
  	//init data
  	this.gridColumns = ['name', 'power'];
    this.gridData = [
	      { name: 'Chuck Norris', power: Infinity },
	      { name: 'Bruce Lee', power: 9000 },
	      { name: 'Jackie Chan', power: 7000 },
	      { name: 'Jet Li', power: 8000 },
	      { name: 'Jet Liqqq', power: 8000 }
	    ];
  }
}

// Vue.component('demo-grid', Grid)

</script>

<style lang="stylus">
body {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
  color: #444;
}

table.demo-tbl {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

table.demo-tbl th {
  background-color: #42b983;
  color: rgba(255,255,255,0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -user-select: none;
}

table.demo-tbl td {
  background-color: #f9f9f9;
}

table.demo-tbl th,table.demo-tbl  td {
  min-width: 120px;
  padding: 10px 20px;
}

table.demo-tbl th.active {
  color: #fff;
}

table.demo-tbl th.active .arrow {
  opacity: 1;
}

table.demo-tbl .arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

table.demo-tbl .arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

table.demo-tbl .arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}

#search {
  margin-bottom: 10px;
}
</style>
