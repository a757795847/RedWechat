<template>
  <div id="contentNav">
    <publics></publics>
    <application></application>
    <managements></managements>
  </div>
</template>
<script>
  import publics from './NavChild/publics.vue'
  import managements from './NavChild/management.vue'
  import application from './NavChild/application.vue'
  export default {
    name:'contentNav',
    components:{
      publics,
      managements,
      application
    }
  }
</script>
<style>
#contentNav{
  float: left;
  width: 200px!important;
 /* height: 750px;*/
  border-radius: 5px 0 0 5px;
}

</style>
