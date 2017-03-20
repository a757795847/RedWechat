<template>
  <div id="app">
    <my-header></my-header>
    <section id="content">
      <my-content-nav></my-content-nav>
      <my-content-body></my-content-body>
    </section>
  </div>
</template>

<script>
  import myHeader from './header/header.vue'
  import myContentNav from './content/myContentNav.vue'
  import myContentBody from './content/myContentBody.vue'
export default {
  name: 'app',
  components:{
    myHeader,
    myContentNav,
    myContentBody
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#content{
  max-width: 1280px;
  min-width: 1000px;
  height: 750px;
  margin: 0 auto;
  border-radius: 5px;
}
  html,body,h1,h2,h3,p,li,ul,a,div{
    margin: 0;
    padding: 0;
  }
  body{
    font-size: 14px;
    background: #EAF2E9;
  }
  ul{
    list-style:none;
  }
  .clear{
    zoom: 1;
  }
  .clear:after{
    clear:both;
    content:'.';
    display: block;
    width: 0;
    height: 0;
    visibility: hidden;
  }
</style>
