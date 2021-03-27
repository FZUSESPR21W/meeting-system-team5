<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="分论坛名字"
        width="180">
      </el-table-column>
      <el-table-column
        prop="tweets"
        label="内容">
      </el-table-column>
<!--      <el-table-column>-->
<!--        <el-button><el-button type="success" round>成功按钮</el-button></el-button>-->
<!--      </el-table-column>-->
      <el-table-column label="状态">
        <template>
          <el-switch
            style="display: block"
            v-model="value4"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="发布"
            inactive-text="隐藏">
          </el-switch>
        </template>
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
export default {
  data () {
    return {
      value4: true,
      tableData: [{
        date: '2021-03-26',
        name: '计算机视觉论坛',
        tweets: '公告1：请大家注意文明用语言'
      }, {
        date: '2021-03-26',
        name: '计算机视觉论坛',
        tweets: '公告2：请大家注意文明用语言'
      }, {
        date: '2021-03-26',
        name: '计算机视觉论坛',
        tweets: '公告3：请大家注意文明用语言'
      }, {
        date: '2021-03-26',
        name: '计算机视觉论坛',
        tweets: '公告4：请大家注意文明用语言'
      }]
    }
  }
}
</script>
