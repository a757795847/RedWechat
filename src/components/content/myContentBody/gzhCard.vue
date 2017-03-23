<template>
    <div id="gzhCard">
        <div class="cardItem">
            <div class="cardItemNews clear">
                <img src="../../../assets/logo.jpg" alt="">
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
                <el-button type="text">解除绑定</el-button>
            </div>
        </div>
        <div class="cardItem">
            <div class="cardItemNews clear">
                <img src="../../../assets/logo.jpg" alt="">
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
                <el-button type="text">解除绑定</el-button>
            </div>
        </div>
        <div class="cardItem">
            <div class="cardItemNews clear">
                <img src="../../../assets/logo.jpg" alt="">
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
                <el-button type="text">解除绑定</el-button>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name:'gzhCard',
}
</script>
<style>
#gzhCard{
    width: 100%;
}
#gzhCard img{
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

</style>