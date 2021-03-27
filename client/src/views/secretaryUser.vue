<template>
<div id = "body">
  <topline/>
    <div class = "sec_left">
      <img src="../assets/business.png" id="business">
      <a id="users">用户信息</a>
      <div id="line1"></div>
      <img src="../assets/message.png" id="message">
      <router-link to="/secretaryPage2"><a id="tweet">推送发布</a></router-link>
      <div id="line2"></div>
      <router-view></router-view>
    </div>
    <div class = "sec_right">
      <el-container style="height: 500px; border: 1px solid #eee">
        <el-header style="text-align:right; font-size: 12px">
        </el-header>
        <el-container>
          <!--          <el-aside width="200px" style="background-color: rgb(238, 241, 246)">-->

          <!--          </el-aside>-->
          <el-main>
            <el-table :data="tableData">
<!--               <el-table-column prop="username" label="用户ID" width="300">
              </el-table-column> -->
              <el-table-column prop="account" label="账号" width="300" align="center">
              </el-table-column>
<!--               <el-table-column prop="register_date" label="注册时间">
              </el-table-column>a -->
            </el-table>
          </el-main>
        </el-container>
      </el-container>
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

.sec_right {
  margin-top: 20px;
  border: rgb(102, 102, 102) 2px solid;
  margin-left: 20px;
  width: 82.5%;
  height: 100%;
  float: left;
  border-radius: 10px;
}
#tweet{
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
import axios from 'axios'
export default {
  name: 'login',
  data () {
    const item = {
      username: '123456',
      account: '小王',
      register_date: '2017-04-30 10:20'
    }
    return {
      tableData: []
    }
  },
  methods: {
  getListData(){//网络请求数据
      axios.get('/api/v1/secretary/getuser', {
        params: {
          forumid: 1
        }
      }).then((res) => {
        this.tableData = res.data
        console.log(this.tableData);
      })
    }
  },
  components: { Topline },
  created(){//模板已经编译 -- 执行请求数据的操作
        this.getListData();
  }
}
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
