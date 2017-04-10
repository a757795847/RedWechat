<template>
    <div id="publicList">
        <el-row class="tac">
            <el-menu mode="vertical" :default-active="this.$store.state.cart.activeList" class="el-menu-vertical-demo"  @select="handleSelect">
                <i class="gzhList"></i>
                <el-menu-item-group title="公众号">
                    <el-menu-item index="/" @click="toIndex">我的公众号</el-menu-item>
                    <div class="elDiv" @click="addpublic">
                        <p><i class="addImage"></i>添加公众号</p>
                    </div>
                </el-menu-item-group>

                <i class="appList"></i><el-menu-item-group title="应用" :style="{ marginTop: 4 + 'px' }">
                <!--<el-menu-item index="2">我的应用</el-menu-item>-->
                <div class="temporary" index="2" style="border-radius:0">我的应用</div>
                <el-menu-item index="/details/bag" @click="toDetailsBag" v-for="(item,index) in appList" :key="index">{{ item.name }}</el-menu-item>
                <div class="elDiv" @click="addApp">
                    <p><i class="addImage"></i>添加应用</p>
                </div>
            </el-menu-item-group>
                <i class="fansImage"></i>
                <el-menu-item-group title="微客管理" :style="{ marginTop: 4 + 'px' }" class="management">
                    <!--<el-menu-item index="3">我的粉丝</el-menu-item>-->
                    <!--<el-menu-item index="4">消息发送(敬请期待)</el-menu-item >-->
                    <div class="temporary" index="3">我的粉丝(敬请期待)</div>
                    <div class="temporary" index="4">消息发送(敬请期待)</div>
                </el-menu-item-group>
            </el-menu>
        </el-row>
    </div>
</template>


<script>
    export default {
        name:'zyPublics',
        data(){
          return{
              appList:[]
          }
        },
        activated(){
            this.$store.dispatch('update_db',this.$route.path)
        },
        deactivated(){

        },
      /*  beforeCreate(){
            console.log(this);
            this.$http({
                url: 'app/info',
                method: 'POST',
                params: {
                    id: this.$route.params.id
                }
            }).then((res) => {
                if(res.data.status == 1){
                this.detail = res.data.applicationInfo;
                console.log(res.data.isOpened);
                this.state = res.data.isOpened;

            }
        }, (res) => {

            });
        },*/
        methods:{
            handleSelect(key, keyPath) {

            },
            addApp(){
                this.$store.dispatch('update_db','bbb');
                this.$router.push('/appList')
            },
            addpublic(){
                this.$router.push('/addPublic')
            },
            toIndex(){
                this.$router.push('/')
            },
            toDetailsBag(){
                this.$router.push('/details/bag')
            }
        },
        beforeCreate(){
            this.$http({
                url: 'app/list',
                method: 'POST',
                body:{
                    currentPageIndex:1
                }
            }).then((res) => {
                console.log('publics=>',res)
                var list = res.data.list;
                for(var i=0;i<list.length;i++){
                    if(list.isOpened == true){
                        this.appList.push(list[i])
                    }
                }
            }, (res) => {

            });
        }
    }
</script>

<style>
    #publicList{
        height: 750px;
    }
   #publicList .elDiv{
       position: relative;
       height: 30px;
       padding-bottom: 10px;
       padding-top: 10px;
       width: 200px;
       background-color: #fff;
    }
    #publicList .el-menu-item{
        text-indent: 20px;
        padding-left:0;
        background: white;
        height: 40px;
        line-height: 40px;
    }
    #publicList .el-menu-item-group__title{
        font-size: 13px;
        font-weight: 700;
        border-radius: 5px 0 0;
        text-indent: 20px;
        padding-left:0;
        background: white;
        height: 40px;
        line-height: 40px;
        padding-top:0;
        color: #949494;
    }
    #publicList .el-menu-item.is-active{
        padding-left:39px;
        background: #68A593;
        color: white;
    }
    /*#publicList .el-icon-menu{*/
        /*position: absolute;*/
        /*z-index: 999;*/
        /*top: 13px;*/
        /*left: 67px;*/
    /*}*/
    #publicList p{
        color: #8d8d8d;
        text-indent: 40px;
        width: 150px;
        margin: 0 auto;
        line-height: 30px;
        border: dashed 1px #8d8d8d;
        cursor:pointer
    }
    #publicList .gzhList{
        background: url("../../../assets/menu-weixin.png") no-repeat;
        display: inline-block;
        width: 40px;
        height: 40px;
        position: absolute;
        background-size: 20px 20px;
        background-position: 15px 10px;
    }
   #publicList .addImage{
        background: url("../../../assets/menu-add.png") no-repeat;
        display: inline-block;
        width: 15px;
        height: 15px;
        position: absolute;
        background-size: 15px 15px;
        left: 46px;
        top: 18px;
    }
   #publicList .fansImage{
       background: url("../../../assets/menu-app.png") no-repeat;
       display: inline-block;
       width: 40px;
       height: 40px;
       position: absolute;
       background-size: 18px 18px;
       background-position: 15px 15px;
   }
   #publicList .fansImage{
       background: url("../../../assets/menu-fans.png") no-repeat;
       display: inline-block;
       width: 40px;
       height: 40px;
       position: absolute;
       background-size: 18px 18px;
       background-position: 15px 15px;
   }
   #publicList .management{
       height: 482px;
       background-color: #fff;
   }
   #publicList .temporary{
       text-indent: 20px;
       padding-left: 0;
       background: white;
       height: 40px;
       line-height: 40px;
       padding-left: 20px;
       cursor:pointer;
   }
</style>