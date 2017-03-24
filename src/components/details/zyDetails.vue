<template>
    <div id="details">
        <div id="detailsHeader">
            <div class="returnAppBtn" v-on:click="returnIndex"><i class="el-icon-arrow-left"></i>返回我的应用</div>
            <div class="detailsTab">
                <span id="appName">红包返现后台</span>
                <ul>
                    <li v-for="( item , index ) in dataList" :class="isActive === index ? 'isActive' : ''" @click="IsActive(index)">{{ item.name }}</li>
                </ul>
                <transition name="detailsTabActive">
                    <div class="activeTab" :style="{ left: isActive * 90 + 'px' }"></div>
                </transition>
            </div>
        </div>
        <div id="detailsBody">
            <div class="detailsBodyTab" v-for="( item , index ) in dataList" :class="isActive === index ? 'isActive' : ''"> {{ item.name }} </div>
        </div>
    </div>
</template>
<script>
export default{
    name:'zyDetails',
    data(){
        return{
            dataList:[
                {
                    name:'订单管理'
                },
                {
                    name:'红包管理'
                }
            ],
            isActive : 0
        }
    },
    methods:{
        IsActive( index ){
            this.isActive = index;
        },
        returnIndex(){
            console.log(this);
            if(this.$route.path == '/'){
                this.$router.push('index')
            }else{
                this.$router.go(-1)
            }

        }
    }
}
</script>
<style>
#details{
    min-height: 750px;
    min-width: 1000px;
    max-width: 1280px;
    margin: 0 auto;
}
#detailsHeader{
    width: 100%;
    height: 40px;
    margin-bottom: 20px;
}
#detailsHeader .returnAppBtn{
    background: white;
    border-radius: 5px 0 0 5px;
    width: 150px;
    height: 100%;
    line-height: 40px;
    text-indent: 15px;
    background-size: 20px 20px;
    background-position: 28px 10px;
    color: #68A593;
    font-weight: bold;
    margin-right: 3px;
    float: left;
    cursor: pointer;
}
#detailsHeader .detailsTab{
    width: calc(100% - 153px);
    background: white;
    display: inline-block;
    float: left;
    height: 100%;
    border-radius: 0 5px 5px 0;
    line-height: 40px;
    position: relative;
}
#detailsHeader .detailsTab #appName{
    padding-left: 20px;
    width: 150px;
    float: left;
    display: inline-block;
    white-space: nowrap;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    overflow: hidden;
    margin-right: 50px;
}

#detailsHeader .detailsTab ul{
    float: left;
}
#detailsHeader .detailsTab li{
    float: left;
    width: 90px;
    text-align: center;
    cursor:pointer;
}
#detailsHeader .activeTab{
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 90px;
    margin-left: 220px;
    background-color: #68A593;
    z-index: 1;
    transition: left .3s cubic-bezier(.645,.045,.355,1);
    list-style: none;
}
#detailsBody{
    background: white;
    width: 100%;
    min-height: 700px;
    border-radius: 5px ;
}
#detailsBody .detailsBodyTab{
    display: none;
    width: 100%;
    height: 100%;
}
#detailsBody .isActive{
    display: block;
}

</style>