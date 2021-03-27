<template>
<div>
<el-container>
      <topline/>
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
            <input type="text" name="infoInput" class="info"/>
            <div>
              <br/>
              <el-table
                :data="tableData"
                stripe
                style="width: 100%">
                <el-table-column
                  prop="info_content"
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

  export default {
    name: 'submeeting',
    
    data() {
      return {
        tableData: [{
          info_content: '2016-05-02',
        }, {
          info_content: '2016-05-04',
        }, {
          info_content: '2016-05-01',
        }, {
          info_content: '2016-05-03',
        }]
      }
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