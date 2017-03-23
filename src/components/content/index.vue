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
    mounted: function () {
      console.info("shenjian");
      console.info(this.$auth.user());
    },
    components:{
      myContentNav,
      myContentBody
    }
  }
</script>
<style>

</style>
