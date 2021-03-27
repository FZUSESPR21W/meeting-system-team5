<template>
    <div id="body">
        <topline/>
        <div class="nav_left">
          <img src="../assets/business.png" id="business">
          <router-link to="/usermeeting"><a id="bbs">论坛列表</a></router-link>
          <router-view></router-view>
          
          <div id="line1"></div>
          <img src="../assets/message.png" id="message">
          <a id="msg">消息列表</a>
          <div id="line1"></div>
        </div>
        <div class="nav_right">
          <a id="word">用户消息列表</a>
          <hr>
            <div>
                <el-table
                    :data="tableData"
                    stripe
                    style="width: 100%">
                    <el-table-column
                    prop="title"
                    label="论坛议题"
                    width="540">
                    </el-table-column>
                    <el-table-column
                    prop="content"
                    label="消息内容"
                    width="540">
                    </el-table-column>
                </el-table>
                </div>
        </div>
    </div>
</template>

<script>
import topline from '../component/topline'
export default {
  name: 'usermessage',
  data() {
    return {
        tableData: [{
          title: '吃什么',
          content: '福鼎肉片'
        }, {
          title: '做什么',
          content: '敲代码'
        }, {
         title: '讨论什么',
          content: '怎么写'
        }],
        radio: '1'
    }
  },
  methods: {

  },
  components:{
    topline
  }
}
</script>

<style>
    #body{
        width: 100%;
        height: 600px;
    }
    .nav_left{
        margin-top: 20px;
        border: rgb(102,102,102) 2px solid;
        width: 15%;
        height: 100%;
        float: left;
        border-radius: 10px;
    }
    .nav_right{
        margin-top: 20px;
        border: rgb(102,102,102) 2px solid;
        margin-left: 20px;
        width: 83%;
        height: 100%;
        float: left;
        border-radius: 10px;
    }
    #bbs{
        width:100%;
        height:50px;
        line-height: 50px;
    }
    #msg{
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
</style>
