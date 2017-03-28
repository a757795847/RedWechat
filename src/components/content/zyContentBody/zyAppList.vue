<template>
    <div id="appList">
        <h3>应用中心</h3>
    </div>
</template>
<script>
    export default{
        name:'zyAppList',
        data() {
            return {
                activeName: 'appList',
            };
        },
        methods:{
            handleClick(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>
<style>
#appList{

}
</style>