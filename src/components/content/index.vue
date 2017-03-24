<template>
  <section id="content">
    <zy-content-nav></zy-content-nav>
    <zy-content-body></zy-content-body>
  </section>
</template>
<script>
  import zyContentNav from './zyContentNav.vue'
  import zyContentBody from './zyContentBody.vue'
  export default {
    name:'zyIndex',
    mounted: function () {
      console.info("shenjian");
      console.info(this);
    },
    components:{
      zyContentNav,
      zyContentBody
    }
  }
</script>
<style>
  #content{
    max-width: 1160px;
    min-width: 1000px;
    height: 750px;
    margin: 0 auto;
    border-radius: 5px;
    padding: 0 20px;
  }
</style>
