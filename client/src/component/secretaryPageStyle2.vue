<template>
  <div>
<!--    <el-button @click="show = !show">发布公告</el-button>-->

    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="el-fade-in-linear" >
<!--        <div v-show="show" class="transition-box">公告1</div>-->
        <div v-show="show" class="transition-box">
          <template>
            <div>
              <el-card class="box-card"  >
                <div slot="header" class="clearfix">
                  <span>公告</span>
                  <el-button style="float: right; padding: 3px 0" type="text" @click="show = !show">发布</el-button>
                </div>
                <div v-for="o in 4" :key="o" class="text item">
                  {{'列表内容 ' + o }}
                </div>
              </el-card>
            </div>
          </template>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>

// import axios from 'axios'

export default {
  data: () => ({
    show: true
  }),
  // methods: {
  //
  //   getListData () { // 网络请求数据
  //     axios.get('/api//v1/forum/getmsg0', {
  //       params: {
  //         forumid: 1
  //       }
  //     }).then((res) => {
  //       this.tableData = res.data
  //       console.log(this.tableData)
  //     })
  //   }
  // },
  name: 'animation'
}
</script>

<style>
.transition-box {
  margin-bottom: 10px;
  width: 500px;
  height: 300px;
  border-radius: 4px;
  background-color: #409EFF;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
 .text {
   font-size: 14px;
 }

.item {
  margin-bottom: 10px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {
  width: 450px;
}
</style>
