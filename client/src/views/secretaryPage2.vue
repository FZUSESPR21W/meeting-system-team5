<template>
  <div id = "body">
  <topline/>
    <div class="sec_left">
      <img src="../assets/business.png" id="business">
      <router-link to="/secretaryUser"><a id="users">用户信息</a></router-link>
      <router-view></router-view>
      <div id="line1"></div>
      <img src="../assets/message.png" id="message">
      <a id="tweet">推送发布</a>
      <div id="line2"></div>

    </div>
    <div class = "sec_right">
      <a id="tweets">推送列表</a>
<!--      <div id = "line1"></div>-->
      <secretaryPageStyle1/>
<!--      <secretaryPageStyle2/>-->
<!--      <secretaryPageStyle2/>-->
<!--      <secretaryPageStyle2/>-->

    </div>

  </div>
</template>

<style>
#body{
  width: 100%;
  height: 600px;
}

.sec_left{
  margin-top: 20px;
  border: rgb(102,102,102) 2px solid;
  width: 15%;
  height: 100%;
  float: left;
  border-radius: 10px;
}

.sec_right{
  margin-top: 20px;
  border: rgb(102,102,102) 2px solid;
  margin-left: 20px;
  width: 82.5%;
  height: 100%;
  float: none;
  border-radius: 10px;
}

#users{
  width:100%;
  height:50px;
  line-height: 50px;
}

#business{
  display: flex;
  position: relative;
  left: 25%;
  top: 5.5%;
}
#message{
  display: flex;
  position: relative;
  left: 23%;
  top: 6%;
}

#line1{
  height: 2px;
  width: 100%;
  background: black;
}
#line2{
  height: 2px;
  width: 100%;
  background: black;
}

</style>

<script>
import Topline from '../component/topline'
// import secretaryPageStyle2 from '../component/secretaryPageStyle2'
import secretaryPageStyle1 from '../component/secretaryPageStyle1'
export default {
  components: { Topline, secretaryPageStyle1 }
}
</script>
