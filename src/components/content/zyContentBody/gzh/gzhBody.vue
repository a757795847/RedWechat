<template>
    <div id="gzhCard">
        <p class="gzhListHeader" style="paddingLeft: 10px">我的公众号</p>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="公众号列表" name="first">
                <div v-show="!zyBody">
                    <div class="cardItem">
                        <div class="cardItemNews clear">
                            <img src="../../../../assets/logo.jpg" alt="">
                            <p>杭州追游科技</p>
                            <p>认证服务号</p>
                        </div>
                        <div class="cardItemDetails">
                            <ul>
                                <li>
                                    <p>接管</p>
                                    <p>73天</p>
                                </li>
                                <li>
                                    <p>粉丝</p>
                                    <p>54个</p>
                                </li>
                                <li>
                                    <p>应用服务</p>
                                    <p>2个</p>
                                </li>
                            </ul>
                        </div>
                        <div class="cardItemOperation">
                            <el-button type="text" v-on:click="upUser(3)">解除绑定</el-button>
                        </div>
                    </div>
                </div>
                <div class="bodyFather" v-show="zyBody">
                    <img src="../../../../assets/404.png" alt="" id="cancel">
                    <p :style="{ color:'#949494'}">您一个公众号都还没有绑定 TT</p>
                    <div class="elDiv" @click="addpublic">
                        <p class="elP"><i class="addImage"></i>添加公众号</p>
                    </div>
                    </div>
            </el-tab-pane>

        </el-tabs>

    </div>
</template>
<script>
export default{
    name:'zyGzhBody',
    data() {
        return {
            activeName: 'first',
            zyBody:true
        };
    },
    methods:{
        upUser(index){
            this.$router.push('indexBody');
        },
        handleClick(key, keyPath) {
            console.log(key, keyPath);
        },
        addpublic(){
            this.$router.push('/addPublic');
            console.log(1);
        },
    }
}
</script>
<style>
    #gzhCard{
        padding: 20px;
    }
    #gzhCard .gzhListHeader{
        padding-left: 10px;
        margin-bottom: 10px;
    }
    #gzhCard .elDiv{
        margin:20px auto;
        position: relative;
        height: 30px;
        width: 200px;
        background-color: #fff;
    }
    #gzhCard .bodyFather .elP{
        position:relative;
        color: #8d8d8d;
        text-indent: 14px;
        width: 150px;
        margin: 0 auto;
        line-height: 30px;
        border: dashed 1px #8d8d8d;
        cursor:pointer;
    }
    #gzhCard .bodyFather .addImage{
        background: url("../../../../assets/menu-add.png") no-repeat;
        display: inline-block;
        width: 20px;
        height: 20px;
        position: absolute;
        background-size: 20px 20px;
        left: 21px;
        top: 5px;
    }
    #gzhCard .bodyFather{
      text-align: center;
        margin-top:14%;
    }
    #gzhCard #cancel{
        width:130px;
    }
    #gzhCard .bodyFather p{
        color: rgb(148, 148, 148);
        margin-top: 13px;
        font-weight: 700;
    }
    #gzhCard{
        font-family: "Helvetica Neue";
        position: relative;
    }
#gzhCard .cardItem img{
    width: 50px;
    height: 50px;
}
#gzhCard .cardItem{
    display: inline-block;
    width: calc(100%/3 - 26px);
    height: 170px;
    border: 1px solid #e5e5e5;
    margin: 0 10px 20px;
    border-radius: 3px;
}
#gzhCard .cardItem .cardItemNews{
    height: 70px;
    padding: 0 10px;
    line-height: 20px;
}
#gzhCard .cardItem .cardItemNews img{
    float: left;
    margin-top: 10px;
    margin-left: 20px;
}
#gzhCard .cardItem .cardItemNews p{
    text-indent: 20px;
    padding-top: 10px;
}

#gzhCard .cardItem .cardItemNews p:last-child{
    padding-top: 5px;
    font-size: 12px;
    color: #8c8585;
}
#gzhCard .cardItem .cardItemDetails{
    height: 38px;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    padding: 10px 0;
    background: #e5e5e5;
}
#gzhCard .cardItem .cardItemDetails ul{
    height: 38px;
    line-height: 19px;
}
#gzhCard .cardItem .cardItemDetails ul li{
    float: left;
    width: calc(100% /3);
    box-sizing: border-box;
    border-right:1px solid #cccccc;
    text-align: center;
}
#gzhCard .cardItem .cardItemDetails ul li p:first-child{
    color:  #989898;
}
#gzhCard .cardItem .cardItemDetails ul li:last-child{
    border-right: none;
}
#gzhCard .cardItem .cardItemOperation{
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
}
#gzhCard .cardItem .cardItemOperation button.el-button.el-button--text {
    color: #ab3e3e;
    padding: 7px 12px;
    font-size: 13px;
}
#gzhCard .cardItem .cardItemOperation button.el-button.el-button--text:hover{
    background: #ffcece;
}
#gzhCard .el-tabs__item{
    width: 90px;
    text-align: center;
    padding: 0;
}

</style>