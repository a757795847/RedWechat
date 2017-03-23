<template>
    <div id="login">

    </div>
</template>

<script>
    import myHeader from './components/header/header.vue'
    import myContentNav from './components/content/myContentNav.vue'
    import myContentBody from './components/content/myContentBody.vue'
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
    #login {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
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
