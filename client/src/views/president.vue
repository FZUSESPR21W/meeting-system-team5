<template>   
<el-container>
    <topline/> 

  <div id="sub">
    <p>会议人数:{{total}}</p>
    <p>会议列表</p>
  <el-table
    :data="tableData"
    height="600"
    border
    style="width: 100%">
    <el-table-column
      prop="title"
      label="会议议题">
      
    </el-table-column>
    <el-table-column
      prop="num"
      label="会议人数">
    </el-table-column>
  </el-table>
  </div>
  </el-container>
</template>



<script>
     import topline from '../component/topline'
  import axios from 'axios'
export default {
  name: 'usermessage',
  data() {
    return {
        total:'',
        tableData: [{
            title: "第一次会议",
            num: ''
          }, {
            title: "第二次会议",
            num: ''
          }, {
            title: "第三次会议",
            num: ''
          }]
    }
  },
  methods: {
    
    getListData(){//网络请求数据
        axios.get('/api/v1/chairman/getnum').then((res) => {
          this.total = res.data
      })
      axios.get('/api/v1/forum/getnum').then((res) => {
        let data = res.data
        let i = 0
        this.tableData.map((item) => {
            item['num'] = data[i]
            i++;
        })
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