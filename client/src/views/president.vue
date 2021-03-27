<template>   
<el-container>
    <topline/> 

  <div id="sub">
    <p>会议人数</p>
    <p>会议列表</p>
  <el-table
    :data="tableData"
    height="600"
    border
    style="width: 100%">
    <el-table-column
      prop="president"
      label="会议主席">
    </el-table-column>
    <el-table-column
      prop="name"
      label="会议议题">
      
    </el-table-column>
    <el-table-column
      prop="peopleCount"
      label="会议人数">
    </el-table-column>
    <el-table-column
      prop="time"
      label="召开时间">
    </el-table-column>
  </el-table>
  </div>
  </el-container>
</template>



<script>
     import topline from '../component/topline'
  export default {
      components:{topline},
    data() {
      return {
        tableData: [{
          president: '201',
          name: '会议1',
          peopleCount: '20',
          time :'2021'
        }, {
            president: '201',
          name: '会议2',
          peopleCount: '20',
          time :'2021'
        }, {
             president: '201',
          name: '会议3',
          peopleCount: '20',
          time :'2021'
        }, {
             president: '201',
          name: '会议4',
          peopleCount: '20',
          time :'2021'
        }]
      }
    }
  }
</script>
<style>
#sub{
    text-align: left;
    margin: 20px;
    border:1px solid #a9a9a9;
    height: 850px;
}

.el-row {
    margin-bottom: 20px;
    
  }

  #user
  {
      float:right;
      margin-right: 30px;
  }
  #meet
  {
      float: left;
      margin-left: 30px;
  }

</style>