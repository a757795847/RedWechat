<template>
  <router-view></router-view>
</template>

<script>
  export default {
    beforeCreate(){
      if(localStorage.getItem('default-auth-token') != null){
        this.$store.dispatch('update_user_img','http://115.29.188.190:8085/user/headImage?jwt=Bearer '+localStorage.getItem('default-auth-token'));
      }
    }
  }
</script>

