<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        stripe
        prop="forumid"
        label="分论坛ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="content"
        label="消息内容">
      </el-table-column>

      <el-table-column label="状态" prop="state">

<!--        <template>-->
<!--          <el-switch-->
<!--            style="display: block"-->
<!--            v-model="value4"-->
<!--            active-color="#13ce66"-->
<!--            inactive-color="#ff4949"-->
<!--            active-text="发布"-->
<!--            inactive-text="隐藏">-->
<!--          </el-switch>-->
<!--        </template>-->
      </el-table-column>
      <el-table-column>
        <el-table-column>
          <el-button><el-button v-on:click="clickFun" type="success" round>发布</el-button></el-button>
        </el-table-column>
      </el-table-column>

    </el-table>
  </div>

</template>

<script>
import axios from 'axios'
export default {

  methods: {
    clickFun () {
      axios.post('/api/v1/secretary/update', {
      }).then((res) => {
        this.state = res.data
        // console.log(this.tableData)
        this.getListData()
      })
      alert('修改成功！！')
    },
    getListData () { // 网络请求数据
      axios.get('/api/v1/forum/getmsg0', {
        params: {
          forumid: 1
        }
      }).then((res) => {
        this.tableData = res.data
        console.log(this.tableData)
      })
    }
  },
  created () { // 模板已经编译 -- 执行请求数据的操作
    this.getListData()
  },
  data () {
    return {
      // value4: true,
      tableData: []
      //   [{
      //   date: '2021-03-26',
      //   name: '计算机视觉论坛',
      //   tweets: '公告1：请大家注意文明用语言'
      // }, {
      //   date: '2021-03-26',
      //   name: '计算机视觉论坛',
      //   tweets: '公告2：请大家注意文明用语言'
      // }, {
      //   date: '2021-03-26',
      //   name: '计算机视觉论坛',
      //   tweets: '公告3：请大家注意文明用语言'
      // }, {
      //   date: '2021-03-26',
      //   name: '计算机视觉论坛',
      //   tweets: '公告4：请大家注意文明用语言'
      // }]
    }
  }
}
</script>
