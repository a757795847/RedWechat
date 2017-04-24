<template>
    <div id="attention">
        <h1>长按关注微信公众号</h1>
        <div v-show="image == ''" ref="qart"></div>
        <img :src="image" alt="">
    </div>
</template>

<script>
    import QArt from 'qartjs'
    import erwei from '../assets/erwei.png'
    export default {
        name:'attention',
        data(){
            return{
                image:'',
            }
        },
        methods:{
            uploadImg(){

            }
        },
        beforeCreate(){

        },
        mounted(){
            new QArt({
                value: 'http://www.baidu.com',
                imagePath: erwei,
                filter:'filter',
                fillType:'image/jpg'
            }).make(this.$refs.qart);
            setTimeout(()=>{
                console.log(this.$refs.qart.children[0])
                this.image = this.$refs.qart.children[0].toDataURL("image/png")
            },500)
//            this.image = this.$refs.qart.child
        },
        created(){

        }
    }
</script>
<style>
    body{
        background-color: white;
    }
    #attention{
        text-align: center;
        width: 100%;
        height: 100%;
    }

</style>

