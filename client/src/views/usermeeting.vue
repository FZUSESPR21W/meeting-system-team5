<template>
  <div id="body">
      <topline/>
      <div class="nav_left">
          <a id="bbs">论坛列表</a>
          <hr>
          <a id="msg">消息列表</a>
          <hr>
      </div>
      <div class="nav_right">
        <el-table
            :data="tableData"
            stripe
            style="width: 100%">

            <el-table-column
                prop="bbs"
                label="参加的论坛"
                width="180">
            </el-table-column>

            <el-table-column
                prop="name"
                label="论坛主席"
                width="180">
            </el-table-column>

            <el-table-column
                prop="num"
                label="会议人数">
            </el-table-column>

            <el-table-column
                prop="date"
                label="召开时间">
            </el-table-column>

        </el-table>
      </div>
  </div>
</template>

<script>
import topline from '../component/topline'
export default {
    data(){
        return{
            tableData:[{
                bbs:"bbs1",
                name:'小红',
                num:'100',
                date:'2021-3-27',
            }]
        }
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
    border: rgb(102,102,102) 1px solid;
    width: 15%;
    height: 100%;
    float: left;
}
.nav_right{
    margin-top: 20px;
    border: rgb(102,102,102) 1px solid;
    margin-left: 20px;
    width: 83%;
    height: 100%;
    float: left;
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
</style>