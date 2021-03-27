<template>
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