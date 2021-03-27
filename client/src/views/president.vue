<template>
    
<el-container>
  
<el-row type="flex" class="row-bg" justify="space-between">
  <el-col :span="12">会议</el-col>
  <el-col :span="12">主席</el-col>
</el-row>

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
  export default {
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

  .el-header {
    background-color: black;
    
    text-align: left;
    line-height: 60px;
  }

</style>