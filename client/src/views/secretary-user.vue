<template>
  <div>
      <el-container style="height: 500px; border: 1px solid #eee">
            <el-header style="text-align:right; font-size: 12px">
                <span>用户名</span>
            </el-header>
            <el-container>
              <el-aside width="200px" style="background-color: rgb(238, 241, 246)">

                <el-menu-item index="1"><i class="el-icon-user">用户信息</i></el-menu-item>
              </el-aside>
                <el-container>
                    <el-main>
                        <el-table :data="tableDate">
                        <el-table-column prop="username" label="用户ID" width="300">
                        </el-table-column>
                        <el-table-column prop="account" label="账号" width="300">
                        </el-table-column>
                        <el-table-column prop="register_date" label="注册时间">
                        </el-table-column>
                        </el-table>
                    </el-main>
                    <el-footer>
                        footer
                    </el-footer>
                </el-container>
            </el-container>
      </el-container>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    const item = {
      username: '123456',
      account: '小王',
      register_date: '2017-04-30 10:20'
    }
    return {
      tableDate: Array(20).fill(item)
    }
  },
  methods: {

  },
  components:{

  }
}
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>