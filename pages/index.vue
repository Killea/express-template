<template>
  <div>
    <el-header>
      <el-row :gutter="20">
        <el-col :span="21">
          <div class="grid-content bg-purple">
            <el-input v-model="inputText" placeholder="please input..." />
          </div>
        </el-col>
        <el-col :span="3">
          <el-button type="primary" @click="postMessage">
            Post a message
          </el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <el-table
        :data="tableData"
        border
        style="width: 100%"
      >
        <el-table-column
          prop="date"
          label="date"
          width="180"
        />
        <el-table-column
          prop="name"
          label="name"
          width="180"
        />
        <el-table-column
          prop="message"
          label="message"
        />
      </el-table>
    </el-main>
  </div>
</template>

<script>
export default {
  data () {
    return { inputText: null, tableData: [] }
  },
  async mounted () {
    const test = await this.$http.$get('/api/users')
    this.tableData = test.map(item => ({ message: item.message }))
  },
  methods: {
    async postMessage () {
      await this.$http.$post('/api/test',
        {
          message: this.inputText || 'No message',
          type: 'msg'
        }
      )
      window.location.reload(true)
    }
  }
}
</script>

<style scoped>
  .el-row {
    margin-top: 20px;
  }
</style>
