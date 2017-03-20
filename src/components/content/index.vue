<template>
  <section id="content">
    <my-content-nav></my-content-nav>
    <my-content-body></my-content-body>
  </section>
</template>
<script>
  import myContentNav from './myContentNav.vue'
  import myContentBody from './myContentBody.vue'
  export default {
    name:'index',
    components:{
      myContentNav,
      myContentBody
    }
  }
</script>
<style>

</style>
