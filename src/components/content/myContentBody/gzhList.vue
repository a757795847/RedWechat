<template>
    <div id="gzhTable">
        <ul class="gzhHeader">
            <li>公众号名称</li>
            <li>公众号名称</li>
        </ul>
        <ul class="gzhBody">
            <li class="clear">
                <div class="gzhBodyImg">
                    <img src="../../../assets/logo.jpg" alt="公众号">
                </div>
                <div class="gzhBodyImgText">
                    <p>杭州追游科技</p>
                    <p>服务认证号</p>
                </div>
            </li>
            <li>b</li>
            <li class="clear">
                <div class="gzhBodyImg">
                    <img src="../../../assets/logo.jpg" alt="公众号">
                </div>
                <div class="gzhBodyImgText">
                    <p>杭州追游科技</p>
                    <p>服务认证号</p>
                </div>
            </li>
            <li>b</li>
            <li class="clear">
                <div class="gzhBodyImg">
                    <img src="../../../assets/logo.jpg" alt="公众号">
                </div>
                <div class="gzhBodyImgText">
                    <p>杭州追游科技</p>
                    <p>服务认证号</p>
                </div>
            </li>
            <li>b</li>
            <li class="clear">
                <div class="gzhBodyImg">
                    <img src="../../../assets/logo.jpg" alt="公众号">
                </div>
                <div class="gzhBodyImgText">
                    <p>杭州追游科技</p>
                    <p>服务认证号</p>
                </div>
            </li>
            <li>b</li>
        </ul>
    </div>
</template>
<script>
export default{

}
</script>
<style>
#gzhTable{
    font-size: 14px;
    width: 100%;
}
#gzhTable .gzhHeader{
    height: 45px;
    background: #eef1f6;
    line-height: 45px;
    border-radius: 5px 5px 0 0;
    border: 1px solid #ccc;
}
#gzhTable li{
    text-indent: 20px;
    float: left;
    padding: 0 10px;
}
#gzhTable li:first-child{
    width: calc(30% - 20px);
}
#gzhTable li:last-child{
    width: calc(70% - 20px);
}
#gzhTable .gzhBody li{
    height: 70px;
    line-height: 70px;
    border: 1px solid #ccc;
    border-top: none;
}
#gzhTable .gzhBody li:nth-child(odd){
    width: calc(30% - 21px);
    border-right: none;
}
#gzhTable .gzhBody li:nth-child(even){
    width: calc(70% - 21px);
    border-left: none;
}
#gzhTable .gzhBody li .gzhBodyImg img{
    width: 50px;
    padding-top: 10px;
}
#gzhTable .gzhBody .gzhBodyImg{
    float: left;
}
#gzhTable .gzhBody .gzhBodyImgText{
    float: left;
    line-height: 25px;
    margin-top: 10px;
}
#gzhTable .gzhBody .gzhBodyImgText p:first-child{
    font-size: 14px;
}
#gzhTable .gzhBody .gzhBodyImgText p:last-child{
     font-size: 12px;
     color: #807979;
}
</style>