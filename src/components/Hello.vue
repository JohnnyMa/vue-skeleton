<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input v-model="msg">
  </div>

  <section>
    <span>Message is: {{ message }}</span>
    <input type="text" v-model="message" placeholder="edit me">
  </section>
</template>

<script>
export default {                                                                                        
  data: function () {
     // body...  
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World1!',
      message: 'test'
    }
  }
}
</script>


