<template>
    <div style="background: #a20510;height: 100%;">
        <div id="image">
            <img src="../assets/wechat-mobile-309.jpg" alt="">
            <img style="marginTop: -6px;" src="../assets/wechat-mobile-310.jpg" alt="">
        </div>
        <div id="form" class="text-center">
            <div id="errorHint" :class="errorText != ''? 'errorHint':'noErrorHint'" >
                <div style="height: 20px;margin-top: 10px;color: #d67d7d;">提示</div>
                <p>{{errorText}}</p>
                <span @touchstart="cancelError">确定</span>
            </div>
            <div id="text" v-show="succeed">
                <p>提交成功</p>
                <p>红包审核通过后在三个工作日内审核</p>
            </div>
            <div id="hide" v-show="!succeed">
                <ul>
                    <li class="lict" v-for="(item,index) in images" :key="index"><img :src="item.id"></li>
                    <li class="last" id="odd" @touchstart="uploadImg" v-show="images.length < 3"><p><img src="../assets/7.png" alt=""></p><p>第一步:</p><p>上传图片</p></li>
                </ul>
            </div>

            <input type="text" v-model="input" class="form-control Orders" placeholder="请输入订单号" v-show="!succeed">
            <button class="addID" :class="succeed?'addIDState':''" @click="submit">{{submitText}}</button>

            <p class="father" :class="succeed?'fatherState':''">
                <a href="javascript:;" class="text-info">活动规则</a>
            </p>
        </div>

    </div>
</template>

<script>
    import wx from 'weixin-js-sdk'
    import { setCookie } from '../store/cookie'

    export default {
        name:'redpackage',
        data(){
            return{
                input:'',
                images:[],
                imageIds:[],
                succeed:false,
                submitText:'马上提交',
                errorText:'',
                config:{}
            }
        },
        methods:{
            cancelError(){
                this.errorText = ''
            },
            submit(){
                console.log('this.imageIds=>',this.imageIds)
                console.log(2);
                if(this.input == ''){
                    this.errorText = '请输入订单';
                }else if(this.images.length < 1){
                    this.errorText = '请确认已上传图片';
                }else if(!this.succeed){
                    this.$http({
                        url: "http://open.izhuiyou.com/wechat/view/submit/"+this.$route.params.id,
                        method: 'POST',
                        body:{
                            "image1":this.imageIds[0],
                            "image2":this.imageIds[1],
                            "image3":this.imageIds[2],


                            "billno":this.input
                        }
                    }).then((res) => {
                        if (res.data.status == "1") {
                            this.succeed = true;
                            this.submitText = '点击关闭'
                        }else {
                            this.errorText = data.message
                        }
                    }, (res) => {

                    });
                }

            },
            uploadImg(){
                const that = this;
                wx.chooseImage({
                    count: 1, // 默认9
                    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                    success: function (res) {
                        var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                        localIds.map(function (id){
                            wx.uploadImage({
                                localId: id, // 需要上传的图片的本地ID，由chooseImage接口获得
                                isShowProgressTips: 1, // 默认为1，显示进度提示
                                success: function (res) {
                                    var serverId = res.serverId; // 返回图片的服务器端ID
                                    var ua = navigator.userAgent.toLowerCase();
                                    if (/iphone|ipad|ipod/.test(ua)) {
                                        wx.getLocalImgData({
                                            localId: id, // 图片的localID
                                            success: (res) => {
                                                let img = res.localData; // localData是图片的base64数据，可以用img标签显示
                                                that.images.push({'id':img})
                                            }
                                        })
                                    } else if (/android/.test(ua)) {
                                        that.images.push({'id':id})
                                    }
                                    that.imageIds.push(serverId)

                                }
                            });
                        });
                    }
                });
            }
        },
        beforeCreate(){
            this.$http({
                url: "http://open.izhuiyou.com/wechat/jsonConfig?tAppid="+this.$route.params.id+'&url='+location.href,
                method: 'GET',
            }).then((res) => {
                if (res.body.status == "1") {
                    this.config = res.body;
                    wx.config({
                        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                        appId: this.config.appid, // 必填，公众号的唯一标识
                        timestamp: this.config.timestamp, // 必填，生成签名的时间戳
                        nonceStr: this.config.nonceStr, // 必填，生成签名的随机串
                        signature: this.config.signature,// 必填，签名，见附录1
                        jsApiList: ['chooseImage', 'previewImage', 'uploadImage', 'downloadImage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2

                    })
                }
            }, (res) => {

            });

        },
        mounted(){
            if(this.$cookie.get('default-auth-token') == null){
                this.$http({
                    url: "http://open.izhuiyou.com/wechat/getOpenId?id="+this.$route.query.ticket,
                    method: 'GET',
                }).then((res) => {
//                    setCookie('default-auth-token',localStorage.getItem('default-auth-token'),365)
                    this.$cookie.set('default-auth-token', localStorage.getItem('default-auth-token'), { expires: '1Y' });
                }, (res) => {

                });
            }

        }
    }
</script>
<style>
    #image {
        height: 350px;
        width: 100%;
    }

    #image img {
        margin-top: -7%;
        width: 100%;
    }

    #form {
        text-align: center;
        margin-top: 1%;
        width: 77%;
        margin: 0 auto;
    }

    #form ul {
        margin: 0 auto;
        width: 100%;
    }

    #form ul:after {
        content: ".";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }

    #form .last {
        box-sizing: border-box;
        margin-top: -1px;
        border-radius: 5px;
        border: 1px solid #ddd;
        text-align: center;
        color: #fff;
    }

    #form .last p {
        font-size: 12px;
    }

    #form .Orders {
        text-indent: 10px;
        box-shadow: 6px 6px 5px rgb(216, 207, 207) inset;
        margin-top: 4%;
        width: 100%;
        height: 40px;
        border-radius: 6px;
        background-color: #f7f7f7;
        border: none;
        font-size: 14px;
        outline: none;
        box-sizing: border-box;
    }

    #form .addID {
        background-color: rgb(237, 233, 49);
        border: none;
        width: 100%;
        height: 40px;
        margin-top: 4%;
        border-radius: 6px;
        font-size: 18px;
        outline: none;
        padding: 1px;
        /*box-sizing: content-box;*/
    }
    #form .addIDState{
        background-color: #a20510;
        border: 1px solid #ffe9b8;
        color: #ffe9b8;
        margin-top: 10%;
    }
    #form .text-info {
        color: #fff;
        font-size: 12px;
        text-decoration: underline;
    }

    #text {
        margin-top: 7%;
        text-align: center;
    }

    #text p {
        color: rgb(254, 246, 193);
    }

    #text p:first-child {
        font-size: 22px;
    }

    #form .father {
        margin-top: 3%;
    }
    #form .fatherState {
        margin-top: 11%;
    }

    #form .lict img {
        width: 100%;
        height: 100%;
        border:none;
        border-radius: 6px;
    }

    #form li {
        width: calc(100% / 3 - 4%);
        height: 92px;
        float: left;
        border:none;
        margin-right: 6%;
    }

    #form li:nth-child(2) {
        margin-right: 6%;
    }

    #form li:nth-child(3) {
        float: right;
        margin-right: 0;
    }

    /*error*/
    #errorHint{
        width: 180px;
        height: 100px;
        position: absolute;
        left: calc(50% - 90px);
        background: white;
        border-radius: 10px;
        z-index: 1000;
    }
    #errorHint p{
        padding: 0 10px;
        border-bottom: 1px solid #f75e69;
        min-height: 50px;
        line-height: 40px;
    }
    #errorHint span{
        font-size: 14px;
        width: 100%;
        height: 30px;
        border: none;
        border-radius: 0 0 10px 10px;
        background: white;
        display: inline-block;
        line-height: 30px;
    }
    #form .errorHint{
        top:40%;
        opacity: 1;
        transition:all 0.5s;
    }
    #form .noErrorHint{
        top:38%;
        opacity: 0;
    }
    @media screen and (max-width: 414px) {
        #form li {
            height: 92px;
        }
        #form #odd p:first-child {
            margin-top: 14px;
        }
        #form .last p,
        #form .text-info {
            font-size: 13px;
        }
        #errorHint{
            width: 200px;
            height: 120px;
            left: calc(50% - 100px);
        }
        #errorHint p{
            min-height: 55px;
            line-height: 55px;
        }

        #image {
            height: 380px;
        }
    }

    @media screen and (max-width: 375px) {
        #form li {
            height: 84px;
        }
        #form #odd p:first-child {
            margin-top: 10px;
        }
        #errorHint{
            width: 180px;
            height: 100px;
            left: calc(50% - 90px);
        }
        #errorHint p{
            min-height: 40px;
            line-height: 40px;

        }
        #image {
            height: 345px;
        }
    }

    @media screen and (max-width: 320px) {
        #form li {}
        #form #odd p:first-child {
            margin-top: 9px;
        }
        #form .last p,
        #form .text-info {
            font-size: 12px;
        }
        #errorHint{
            width: 180px;
            height: 100px;
            left: calc(50% - 90px);
        }
        #errorHint p{
            min-height: 40px;
            line-height: 40px;

        }
        #image {
            height: 295px;
        }
    }

</style>

