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
import axios from 'axios'
export default {
  name: 'usermessage',
  data() {
    return {
        list:[],
        tableData: []
    }
  },
  methods: {
    
    getListData(){//网络请求数据
      axios.get('/api/v1/forum/getmsg0', {
        params: {
          forumid: 1
        }
      }).then((res) => {
        this.tableData = res.data
        console.log(this.tableData);
      })
    }
  },
  components:{
    topline
  },
  created(){//模板已经编译 -- 执行请求数据的操作
        this.getListData();
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
