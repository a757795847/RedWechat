<template>
    <div class="appListItem"  @click="appDetails">
        <ul>
            <li :style="{backgroundColor:item.backgroundColor,borderColor:item.backgroundColor}"></li>
            <li>
                <span>{{item.name}}</span>
                <p>{{item.applicationInfo}}</p>
            </li>
            <li>
                <p>{{item.isOpened ? '开通':'进入后台'}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        name:'zyAppListItem',
        props:{
            item:Object,
        },
        data() {
            return {

            };
        },
        methods:{
            handleClick(tab, event) {
                console.log(tab, event);
            },
            appDetails(){
                this.$router.push({path:'/appList/'+this.item.id});
            }
        }
    }
</script>
<style>
.appListItem {
    border: 1px solid #D1D2D3;
    width: 99%;
    height: 100px;
    position: relative;
}
.appListItem li{
    float: left;
}
.appListItem li:first-child{
    position: absolute;
    top:-1px;
    left:-1px;
    width: 100px;
    height: 100px;
    border:1px solid;
    background: url("../../../assets/app-fanxian.png") no-repeat;
    background-size: 100px 100px;
    background-position: -2px 0;
}
.appListItem li:nth-child(2){
    margin-left: 120px;
    padding-top: 15px;
    height: 62px;
    width: calc(100% - 210px);
}
.appListItem li:nth-child(2) p{
    font-size: 13px;
    color: #A8A8A8;
    margin-top: 5px;
}
.appListItem li:last-child{
    float: right;
    width: 80px;
    line-height: 100px;
    text-align: center;
}
.appListItem li:last-child p{
    cursor:pointer
}
</style>