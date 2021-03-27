<template>
  <div id="body">
      <topline/>
      <div class="nav_left">
          <img src="../assets/business.png" id="business">
          <a id="bbs">论坛列表</a>
          <div id="line1"></div>
          <img src="../assets/message.png" id="message">
          <a id="msg">消息列表</a>
          <div id="line1"></div>
      </div>
      <div class="nav_right">
          <a id="word">已经加入的论坛列表</a>
          <hr>
        <el-table
            :data="tableData"
            stripe
            style="width: 100%">

            <el-table-column
                prop="bbs"
                label="参加的论坛">
            </el-table-column>

            <el-table-column
                prop="num"
                label="会议人数">
            </el-table-column>
        </el-table>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
import topline from '../component/topline'
import axios from 'axios'
export default {
    data(){
        return{
            tableData:[{
                bbs:"第一次会议",
                num:'',
            },{
                bbs:"第二次会议",
                num:'',
            },{
                bbs:"第三次会议",
                num:'',
            }]
        }
    },
    methods: {
    getListData(){//网络请求数据
    axios.get('/api/v1/forum/getnum').then((res) => {
            let data = res.data
            let i = 0
            this.tableData.map((item) => {
                item['num'] = data[i]
                i++;
            })
        })
    }
    },
    created(){
        this.getListData()
    },
    name:'usermeeting',
    components: { topline },

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