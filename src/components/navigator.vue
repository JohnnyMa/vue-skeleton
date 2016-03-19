<style>

</style>

<template>
  <div class="nav">
	      <!-- use v-link directive for navigation. -->
	      <a v-link="{ path: '/dashboard' }">Dashboard</a>
	      <a v-link="{ path: '/foo' }">Go to Foo</a>
	      <a v-link="{ path: '/bar' }">Go to Bar</a>
  </div>
</template>

<script>
// import store from '../store'

export default {

  name: 'Comment',

  props: {
    comment: Object
  },

  data () {
    return {
      childComments: [],
      open: true
    }
  },

  created () {
    if (this.comment.kids) {
      store.fetchItems(this.comment.kids).then(comments => {
        this.childComments = comments
      })
    }
  }
}
</script>
