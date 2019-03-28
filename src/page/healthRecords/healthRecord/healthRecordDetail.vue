<template>
  <div>
    <div class="nav-tab">
      <el-tabs v-model="activeName" type="card" @tab-click="clicktabs">
        <el-tab-pane label="个人资料" name="first">
          <div class="detail-content">
            <ul>
              <li>
                <el-row>
                  <el-col :span="8">
                    <div class="item-common item-right">姓名：</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="item-common item-left">
                      <el-input
                        size="mini"
                        v-model="detailData.message.name"
                        class="item-input-common"
                      />
                    </div>
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row>
                  <el-col :span="8">
                    <div class="item-common item-right">性别：</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="item-common item-left">
                      <el-radio v-model="detailData.message.gender" label="1">男</el-radio>
                      <el-radio v-model="detailData.message.gender" label="2">女</el-radio>
                    </div>
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row>
                  <el-col :span="8">
                    <div class="item-common item-right">出生日期：</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="item-common item-left">
                      <el-input
                        size="mini"
                        v-model="detailData.message.name"
                        class="item-input-common"
                      />
                    </div>
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row>
                  <el-col :span="8">
                    <div class="item-common item-right">身份证号：</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="item-common item-left">
                      <el-input
                        size="mini"
                        v-model="detailData.message.name"
                        class="item-input-common"
                      />
                    </div>
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row>
                  <el-col :span="8">
                    <div class="item-common item-right">手机号：</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="item-common item-left">
                      <el-input
                        size="mini"
                        v-model="detailData.message.name"
                        class="item-input-common"
                      />
                    </div>
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row>
                  <el-col :span="8">
                    <div class="item-common item-right">身高（cm）：</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="item-common item-left">
                      <el-input
                        size="mini"
                        v-model="detailData.message.name"
                        class="item-input-common"
                      />
                    </div>
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row>
                  <el-col :span="8">
                    <div class="item-common item-right">体重（kg）：</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="item-common item-left">
                      <el-input
                        size="mini"
                        v-model="detailData.message.name"
                        class="item-input-common"
                      />
                    </div>
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row>
                  <el-col :span="8">
                    <div class="item-common item-right">婚姻状况：</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="item-common item-left">
                      <el-radio v-model="detailData.message.gender" label="1">已婚</el-radio>
                      <el-radio v-model="detailData.message.gender" label="2">未婚</el-radio>
                      <el-radio v-model="detailData.message.gender" label="3">离婚</el-radio>
                      <el-radio v-model="detailData.message.gender" label="4">丧偶</el-radio>
                    </div>
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row>
                  <el-col :span="8">
                    <div class="item-common item-right">受教育程度：</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="item-common item-left">
                      <el-radio v-model="detailData.message.gender" label="1">大学本科及以上</el-radio>
                      <el-radio v-model="detailData.message.gender" label="2">专科</el-radio>
                      <el-radio v-model="detailData.message.gender" label="3">高中</el-radio>
                      <el-radio v-model="detailData.message.gender" label="4">初中</el-radio>
                      <el-radio v-model="detailData.message.gender" label="5">小学</el-radio>
                      <el-radio v-model="detailData.message.gender" label="7">未受教育</el-radio>
                    </div>
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row>
                  <el-col :span="8">
                    <div class="item-common item-right">职业：</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="item-common item-left">
                      <div class="multiple-rows">
                        <el-radio v-model="detailData.message.gender" label="1">国家机关、党群组织、事业单位负责人</el-radio>
                      </div>
                      <div class="multiple-rows">
                        <el-radio v-model="detailData.message.gender" label="2">专业技术人员</el-radio>
                      </div>
                      <div class="multiple-rows">
                        <el-radio v-model="detailData.message.gender" label="3">办事和有关人员</el-radio>
                      </div>
                      <div class="multiple-rows">
                        <el-radio v-model="detailData.message.gender" label="4">商业、服务业人员</el-radio>
                      </div>
                      <div class="multiple-rows">
                        <el-radio v-model="detailData.message.gender" label="5">农、林、牧、渔、水利业生产人员</el-radio>
                      </div>
                      <div class="multiple-rows">
                        <el-radio v-model="detailData.message.gender" label="6">生产、运输设备操作人员及相关人员</el-radio>
                      </div>
                      <div class="multiple-rows">
                        <el-radio v-model="detailData.message.gender" label="7">军人</el-radio>
                      </div>
                      <div class="multiple-rows">
                        <el-radio v-model="detailData.message.gender" label="8">不方便分类的其他从业人员</el-radio>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="健康状况" name="second">
          <div class="detail-content">
            <ul>
              <li>
                <el-row>
                  <el-col :span="8">
                    <div class="item-common item-right">早发心血管病风险：</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="item-common item-left">
                      <el-radio v-model="detailData.message.gender" label="1">有</el-radio>
                      <el-radio v-model="detailData.message.gender" label="2">无</el-radio>
                      <div class="remarks">
                        注：早发心血管病是指您的父母，兄弟姐妹，子女中时候患有心血管病（心绞痛，冠状动脉血运重建，慢性心力衰竭，心肌梗塞
                        并且发病年龄男＜55岁，女＜65岁
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row>
                  <el-col :span="8">
                    <div class="item-common item-right">既往史：</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="item-common item-left">
                      <ul>
                        <li>
                          <el-checkbox v-model="detailData.message.gender">无</el-checkbox>
                        </li>
                        <li>
                          <el-checkbox v-model="detailData.message.gender">高血压</el-checkbox>
                          <el-checkbox v-model="detailData.message.gender">糖尿病</el-checkbox>
                          <el-checkbox v-model="detailData.message.gender">高血脂症</el-checkbox>
                        </li>
                      </ul>
                    </div>
                  </el-col>
                </el-row>
              </li>
            </ul>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  name: 'healthRecordDetail',

  computed: {},
  data() {
    return {
      activeName: 'second',
      pageLoading: false,
      detailData: {
        message: {
          name: '田小龙',
          gender: '1'
        }
      }
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
    },
    clicktabs() {}
  },

  created: function() {
    // this.getOrderDetail();
  }
}
</script>
<style scoped lang="less">
.detail-content {
  background-color: #fff;
  padding: 20px;
  border: 1px solid #e4e7ed;
  border-top: 0 none;
  ul {
    list-style: none;
  }
  li {
    border-bottom: 1px solid #e4e7ed;
    line-height: 50px;
  }
  > ul {
    border: 1px solid #e4e7ed;
    > li {
      border-bottom: 1px solid #e4e7ed;
      line-height: 50px;
      .item-right {
        font-weight: bold;
      }
      .item-left {
        border-left: 1px solid #e4e7ed;
      }
      .item-input-common {
        width: 400px;
      }
      .item-common {
        .multiple-rows {
          line-height: 40px;
        }
        .remarks {
          line-height: 24px;
          color: #aaa;
          font-size: 14px;
          padding-bottom: 10px;
        }
      }
    }
  }
}
</style>
