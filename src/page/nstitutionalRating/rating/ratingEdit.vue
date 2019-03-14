<style scoped lang="less">
/deep/ .code {
  input {
    border-color: #dcdfe6 !important;
  }
  i {
    display: none;
  }
}
</style>
<template>
  <div id="addPerson" class="detail-main">
    <el-container v-loading="pageLoading">
      <el-header>
        <el-row>
          <el-col :span="2" class="left-arrow-d">
            <div class="go-return icon-back" @click="returnToPage"></div>
            <!-- <span @click="returnToPage"><i class="icon-down-arrow"></i><span class="fs-13">返回{{returnPage}}</span></span> -->
          </el-col>
          <el-col :span="20">
            <p>{{titleType}}</p>
          </el-col>
        </el-row>
      </el-header>
      <el-main v-show="!pageLoading" class="mt-30">
        <transition name="el-fade-in-linear">
          <div v-if="activeStep==0">
            <div class="detail-form-title text-center">基础信息</div>
            <el-form
              class="addheaduserform detail-form"
              label-width="120px"
              ref="addFormSetpOne"
              :rules="rules"
              :model="editMsgForm"
              status-icon
            >
              <el-row :gutter="40">
                <el-col :span="22">
                  <el-form-item label="机构简介:" prop="name">
                    <el-input
                      placeholder="请输入"
                      type="textarea"
                      :rows="4"
                      v-model.trim="editMsgForm.name"
                    ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="40">
                <el-col :span="22">
                  <el-form-item label="评分维度1:" prop="name">
                    <el-row>
                      <el-col :span="2" class="text-center">{{dimension}}分</el-col>
                      <el-col :span="22">
                        <div class="block">
                          <el-slider v-model="dimension" :max="10"></el-slider>
                        </div>
                      </el-col>
                    </el-row>
                  </el-form-item>
                </el-col>
                <el-col :span="22">
                  <el-form-item label="评分维度2:" prop="name">
                    <el-row>
                      <el-col :span="2" class="text-center">{{dimension}}分</el-col>
                      <el-col :span="22">
                        <div class="block">
                          <el-slider v-model="dimension" :max="10"></el-slider>
                        </div>
                      </el-col>
                    </el-row>
                  </el-form-item>
                </el-col>
                <el-col :span="22">
                  <el-form-item label="评分维度3:" prop="name">
                    <el-row>
                      <el-col :span="2" class="text-center">{{dimension}}分</el-col>
                      <el-col :span="22">
                        <div class="block">
                          <el-slider v-model="dimension" :max="10"></el-slider>
                        </div>
                      </el-col>
                    </el-row>
                  </el-form-item>
                </el-col>
                <el-col :span="22">
                  <el-form-item label="评分维度4:" prop="name">
                    <el-row>
                      <el-col :span="2" class="text-center">{{dimension}}分</el-col>
                      <el-col :span="22">
                        <div class="block">
                          <el-slider v-model="dimension" :max="10"></el-slider>
                        </div>
                      </el-col>
                    </el-row>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="40">
                <el-col :span="8">
                  <el-form-item label="标签:" prop="name">
                    <el-select
                      v-model="tag"
                      multiple
                      collapse-tags
                      placeholder="请选择"
                      @change="selectTags"
                    >
                      <el-option
                        v-for="item in options"
                        :key="item.id"
                        :label="item.label"
                        :value="item.id"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="22">
                  <el-form-item label>
                    {{tag}}
                    <el-tag v-for="item in tags" :key="item.id" closable>{{item.label}}</el-tag>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
            <div class="detail-btn">
              <el-row>
                <el-col :span="12" :offset="6" class="text-center">
                  <!-- <el-button type="success" @click="editBasics(nextStepBtn,'next')" :loading="nextStepBtn.isLoading" :disabled="nextStepBtn.isDisabled">{{nextStepBtn.btnText}}</el-button> -->
                  <el-button
                    type="primary"
                    @click="editBasics(saveBasicAndReviewBtn,'out')"
                    :loading="saveBasicAndReviewBtn.isLoading"
                    :disabled="saveBasicAndReviewBtn.isDisabled"
                  >{{saveBasicAndReviewBtn.btnText}}</el-button>
                </el-col>
              </el-row>
            </div>
          </div>
        </transition>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  name: 'ratingEdit',
  computed: {
    titleType: function() {
      return this.$route.query.id ? '编辑医疗机构评级' : '新增医疗机构评级'
    },
    activeStep: function() {
      return this.$route.query.activeStep || 0
    },
    id: function() {
      return this.$route.query.id || ''
    },
    returnPage: function() {
      return this.$route.query.id ? '详情页' : '列表页'
    }
  },
  data() {
    return {
      dimension: 0,
      pageLoading: false,
      // address: {
      //   province: '',
      //   city: '',
      //   area: '',
      // },
      pickerOptions0: {
        disabledDate(time) {
          return time.getTime() > Date.now() - 8.64e6
        }
      },
      addType: '默认新增',
      selectCustomer: '',
      tag: [],
      tags: [],
      options: [
        {
          id: 1,
          value: 'tag',
          label: '标签1'
        },
        {
          id: 2,
          value: 'tag',
          label: '标签2'
        },
        {
          id: 3,
          value: 'tag',
          label: '标签3'
        },
        {
          id: 4,
          value: 'tag',
          label: '标签4'
        },
        {
          id: 5,
          value: 'tag',
          label: '标签5'
        }
      ],
      editMsgForm: {
        name: '',
        contact_name: '',
        contact_phone: '',
        detail_address: '',
        // area:'',
        license_pic: [],
        code: 'license_code',
        codeMsg: ''
      },
      selectData: {
        codeSelect: [
          { id: 'license_code', value: '统一社会信用代码（三合一）' }
          // { id: 'organization_code', value: '组织机构代码（非三合一）' },
        ],
        carrierTypeSelect: [
          { id: 'own', value: '自有承运' },
          { id: 'external', value: '外部承运' }
        ]
      },
      rules: {
        name: [
          { required: true, message: '请输入客户名称', trigger: 'blur' },
          { min: 1, max: 20, message: '客户名称为1~20个字符', trigger: 'blur' }
        ],
        contact_name: [
          { required: true, message: '请输入联系人姓名', trigger: 'blur' },
          { min: 2, max: 20, message: '联系人为2~10个字符', trigger: 'blur' }
        ],
        detail_address: [
          { required: true, message: '请输入地址', trigger: 'blur' }
        ],
        contact_phone: [
          { required: true, message: '请输入联系方式', trigger: 'blur' },
          {
            pattern: /(^(\(0\d{2,3}\)|0\d{2,3}-|\s)?\d{7,8}$)|(^1\d{10}$)/,
            message: '请输入座机号或者手机号',
            trigger: 'blur'
          }
        ],
        codeMsg: [
          {
            required: true,
            message: '请输入统一社会信用代码',
            trigger: 'blur'
          },
          {
            pattern: /^([A-Z0-9]{18})$/,
            message: '由18位数字和大写字母组成',
            trigger: 'blur'
          }
        ]
      },
      saveBasicAndReviewBtn: {
        isLoading: false,
        btnText: '保存并退出',
        isDisabled: false
      },
      // nextStepBtn: {
      //   isLoading: false,
      //   btnText: '保存并下一步',
      //   isDisabled: false,
      // },
      detail: {},
      customerList: [],
      isDisabled: false
    }
  },
  created() {
    if (this.id) {
      this.getDetail()
    }
    // this.selectTags();
  },
  methods: {
    returnToPage: function() {
      if (this.$route.query.id) {
        this.$router.push({
          path: `/basicDataManage/supplierManage/carrierManage/carrierDetail/${
            this.$route.query.id
          }/`
        })
      } else {
        this.$router.push({
          path:
            '/basicDataManage/supplierManage/carrierManage/carrierManagelist'
        })
      }
    },
    selectTags() {
      this.tags = []
      this.options.forEach(item => {
        this.tag.forEach(tagItem => {
          if (item.id === tagItem) {
            this.tags.push(item)
          }
        })
      })
    },
    handleRemove(file, fileList) {},
    handlePreview(file) {},
    relation(id, msg) {
      this.$confirm(msg, '创建关联', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$$http('establishCarrierRelation', { carrier: id })
            .then(results => {
              if (results.data && results.data.code === 0) {
                this.$message({
                  message: '创建关联成功',
                  type: 'success'
                })
                this.$router.push({
                  path:
                    '/basicDataManage/supplierManage/carrierManage/carrierManagelist'
                })
              }
            })
            .catch(err => {
              console.log('err', err)
              this.$message.error('创建关联失败')
            })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消创建关联'
          })
          this.$router.push({
            path:
              '/basicDataManage/supplierManage/carrierManage/carrierManagelist'
          })
        })
    },
    getDetail: function() {
      this.$$http('getCarrierDetail', { carrier_id: this.id }).then(results => {
        if (results.data && results.data.code === 0) {
          this.detail = results.data.data

          this.editMsgForm = {
            name: this.detail.name,
            contact_name: this.detail.contact_name,
            contact_phone: this.detail.contact_phone,
            detail_address: this.detail.detail_address,
            license_pic: [],
            // area:this.detail.area,
            code: this.detail.license_code
              ? 'license_code'
              : 'organization_code',
            codeMsg: this.detail.license_code
              ? this.detail.license_code
              : this.detail.organization_code
          }
          if (this.editMsgForm.codeMsg) {
            this.isDisabled = true
          }
          if (this.editMsgForm.code === 'license_code') {
            this.rules.codeMsg = this.sociology
          } else {
            this.rules.codeMsg = this.structure
          }
        }
      })
    },
    editAjax(postData, formName, btnObject, stepNum, isReview) {
      let btnTextCopy = this.pbFunc.deepcopy(btnObject).btnText
      let apiName = 'addCarrierMsg'
      // postData.company = 'cacf2c4d-9290-4f88-bfa0-be842df32e3b';
      btnObject.isDisabled = true
      this.$refs[formName].validate(valid => {
        if (valid) {
          /* 如果id存在则为编辑 */
          if (this.id) {
            postData.id = this.id
            apiName = 'updateCarrier'
          }

          btnObject.btnText = '正在提交'
          btnObject.isLoading = true

          // postData = this.pbFunc.fifterObjIsNull(postData);
          this.$$http(apiName, postData)
            .then(results => {
              btnObject.btnText = btnTextCopy
              btnObject.isLoading = false
              btnObject.isDisabled = false

              if (
                results.data &&
                results.data.code === 0 &&
                results.data.data
              ) {
                this.$message({
                  message: '提交成功',
                  type: 'success'
                })
                // if (isReview) {
                if (this.id) {
                  this.$router.push({
                    path: `/basicDataManage/supplierManage/carrierManage/carrierDetail/${
                      this.id
                    }/`
                  })
                } else {
                  this.$router.push({
                    path:
                      '/basicDataManage/supplierManage/carrierManage/carrierManagelist'
                  })
                }

                // } else {
                //   let id = results.data.data.id;
                //   this.$router.push({ path: "/basicDataManage/carrierManage/editCarrier", query: { activeStep: stepNum - 1, id: id } });
                // }
              }
            })
            .catch(err => {
              console.log('err', err)
              btnObject.btnText = btnTextCopy
              btnObject.isLoading = false
              btnObject.isDisabled = false
            })
        } else {
          btnObject.isDisabled = false
        }
      })
    },
    editBasics(btn, btnType) {
      let formName = 'addFormSetpOne'
      let btnObject = btn

      let keyArray = ['name', 'contact_name', 'contact_phone', 'detail_address']
      if (this.editMsgForm.code === 'license_code') {
        this.editMsgForm.license_code = this.editMsgForm.codeMsg
        keyArray.push('license_code')
      } else if (this.editMsgForm.code === 'organization_code') {
        this.editMsgForm.organization_code = this.editMsgForm.codeMsg
        keyArray.push('organization_code')
      }
      let postData = this.pbFunc.fifterbyArr(this.editMsgForm, keyArray)
      // postData.area = this.address.area;
      if (btnType === 'next') {
        this.editAjax(postData, formName, btnObject, 2)
      } else if (btnType === 'out') {
        this.editAjax(postData, formName, btnObject, null, true)
      }
    }
  }
}
</script>
