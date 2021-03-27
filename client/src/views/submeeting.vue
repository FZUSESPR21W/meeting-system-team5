<template>
<div>
<el-container>
      <topline/>
      <el-main>
        <div id="sub">
          <div id="sub-count">
            <p class="subTitle">会议议题<br/></p>
            <p id="meeting-count">会议总人数：{{total}}</p>
          </div>
          <div class="line"></div>
          <div id="sub-info">     
            <span class="subTitle">会议消息</span>
            <el-button type="primary" id="send" @click="postInfo">发布消息</el-button>
            <input type="text" name="infoInput" class="info" v-model="content"/>
            <div>
              <br/>
              <el-table
                :data="tableData"
                stripe
                style="width: 100%">
                <el-table-column
                  prop="content"
                  label="消息内容">
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
      </el-main>
  </el-container>
  <router-view></router-view>
</div>
</template>

<script>
  import topline from '../component/topline'
  import axios from 'axios'

  export default {
    name: 'submeeting',
    
    data() {
      return {
        content: '',
        total:'',
        tableData: []
        //tableData: [{info_content:'123'}]
      }
    },
    
    methods: {
    getPeopleCount(){
      axios.get('/api/v1/forum/getnum').then((res) => {
        this.total = res.data[0]
        console.log(this.total);
      })
    },
   
    getListData(){
      axios.get('/api/v1/forum/getmsg0', {
        params: {
          forumid: 1
        }
      }).then((res) => {
        this.tableData = res.data
        
      })
    },

    postInfo(){
      axios.post('api/v1/subchairman/upload', { 
          content: this.content,
          forumid: 1,

      }).then((res) => {
        let data = res.data
        console.log(data);
      })
    }
  },

  created(){//模板已经编译 -- 执行请求数据的操作
        this.getPeopleCount();
        this.getListData();
  },

  components:{topline}
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

.info{
  border-radius: 5px;
  width:400px;
  height:35px;
  border:1px solid #000;
  float: right;
}
#send{
  float:right;
  margin-right: 15px;
  margin-left:15px;
}


</style>