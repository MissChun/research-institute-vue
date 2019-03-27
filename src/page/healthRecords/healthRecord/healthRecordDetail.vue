<template>
  <div class="detail-main">
    <div class="nav-tab">
      <el-tabs v-model="activeName" type="card" @tab-click="clicktabs">
        <el-tab-pane label="个人资料" name="first">
          <div class="detail-main border-top-clear" v-loading="pageLoading">
            <el-container v-show="!pageLoading">
              <el-main></el-main>
            </el-container>
          </div>
        </el-tab-pane>
        <el-tab-pane label="健康状况" name="second"></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  name: 'healthRecordDetail',

  computed: {
    setpId: function() {
      return this.$route.params.setpId
    }
    // willId: function() {
    //   return this.$route.params.willId;
    // },
    // orderId: function() {
    //   return this.$route.params.orderId ? this.$route.params.orderId : '';
    // },
  },
  data() {
    return {
      activeName: 'first',
      pageLoading: false,
      detailData: {}
    }
  },
  methods: {
    getOrderDetail: function() {
      this.pageLoading = true
      var vm = this
      let postData = {
        id: this.willId
      }
      this.$$http('getConOrderDetail', postData).then(results => {
        this.pageLoading = false
        if (results.data && results.data.code === 0 && results.data.data) {
        } else {
          vm.$message({
            message: results.data.msg,
            type: 'error'
          })
        }
      })
    }
  },

  created: function() {
    // this.getOrderDetail();
  }
}
</script>
<style scoped lang="less">
.detail-main {
  min-height: 500px;
}
