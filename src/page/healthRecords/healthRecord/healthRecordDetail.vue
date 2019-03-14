</style>
<template>
<div class="detail-main">
    <div class="nav-tab">
      <el-tabs v-model="activeName" type="card" @tab-click="clicktabs">
        <el-tab-pane label="个人资料" name="first">
            <div class="detail-main border-top-clear" v-loading="pageLoading">
                <el-container v-show="!pageLoading">
                <el-header>
                    <el-row>
                    <el-col :span="3">
                        <router-link :to="{path: backLink}">
                        <div class="go-return icon-back"></div>
                        </router-link>
                    </el-col>
                    <el-col :span="18">
                        <p>运单详情</p>
                    </el-col>
                    </el-row>
                </el-header>
                <el-main>
                    <div class="detail-list detail-form">
                    <div class="detail-form-title">
                        <el-row>
                        <el-col :span="12" :offset="6" class="text-center">
                            提货订单信息
                        </el-col>
                        </el-row>
                    </div>
                    <el-row :gutter="40">
                        <el-col :span="8">
                        <div class="label-list">
                            <label>订单号:</label>
                            <div class="detail-form-item" v-html="pbFunc.dealNullData(detailData.delivery_order.order_number)"></div>
                        </div>
                        </el-col>
                        <el-col :span="8">
                        <div class="label-list">
                            <label>订单生成时间:</label>
                            <div class="detail-form-item" v-html="pbFunc.dealNullData(detailData.delivery_order.created_at)"></div>
                        </div>
                        </el-col>
                        <el-col :span="8">
                        <div class="label-list">
                            <label>托运方:</label>
                            <div class="detail-form-item" v-html="pbFunc.dealNullData(detailData.delivery_order.trader)"></div>
                        </div>
                        </el-col>
                    </el-row>
                    <el-row :gutter="40">
                        <el-col :span="8">
                        <div class="label-list">
                            <label>需求车数:</label>
                            <div class="detail-form-item" v-html="pbFunc.dealNullData(detailData.delivery_order.require_car_number)"></div>
                        </div>
                        </el-col>
                    </el-row>
                    </div>
                </el-main>
                </el-container>
            </div>
        </el-tab-pane>
        <el-tab-pane label="健康状况" name="second">
        </el-tab-pane>
      </el-tabs>
    </div>
</div>
</template>
<script>
export default {
  name: 'healthRecordDetail',
  
  computed: {
    setpId: function() {
      return this.$route.params.setpId;
    },
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
      detailData: {},
    }
  },
  methods: {
   
    getOrderDetail: function() {
      this.pageLoading = true;
      var vm = this;
      let postData = {
        id: this.willId
      }
      this.$$http('getConOrderDetail', postData).then((results) => {
        this.pageLoading = false;
        if (results.data && results.data.code == 0 && results.data.data) {
          
        } else {
          vm.$message({
            message: results.data.msg,
            type: 'error'
          });
        }
      }).catch((err) => {

      })
    },
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
