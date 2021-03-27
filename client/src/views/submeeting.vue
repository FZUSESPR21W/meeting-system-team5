<template>
<div>
<el-container>
      <el-header>Header</el-header>
      <el-main>
        <div id="sub">
          <div id="sub-count">
            <p class="subTitle">会议议题<br/></p>
            <p id="meeting-count">会议总人数：</p>
          </div>
          <div class="line"></div>
          <div id="sub-info">     
            <span class="subTitle">会议消息</span>
            <el-button type="primary" id="send">发布消息</el-button>
              <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
          </div>
        </div>
      </el-main>
  </el-container>
  <router-view></router-view>
</div>
</template>

<script>
  export default {
    name: 'submeeting',
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
  }
</script>

<style>
#sub {
  margin: 20px;
  text-align: left;
  border:1px solid #A9A9A9;
  height:650px; 
}
.subTitle {
  color: #607D8B;
  font-size: 30px;
  margin: 15px;
}
 
#sub-info {
  padding-left: 30px;
  padding-top: 20px;
}

#sub-count{
  padding-left: 30px;
}

#meeting-count{
  margin-left:15px ;
}

.line{
  height: 1px;
  border-top: 1px solid #ddd;
  text-align: center;
}

#send{
  float:right;
  margin-right: 15px;
}

</style>