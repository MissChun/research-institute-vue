<style scoped lang="less">
.des {
  width: 300px;
  margin-bottom: 15px;
}
</style>
<template>
  <div>
    <public-header></public-header>
    <div class="user-page" @keyup.enter="login">
      <div class="user-page-title">登录</div>
      <el-form
        class="user-form"
        label-width="100px"
        :rules="rules"
        :model="ruleForm"
        status-icon
        ref="ruleForm"
      >
        <div class="des" v-if="isLogin">
          请您
          <a class="cursor-pointer text-blue" v-on:click="toLink('company')">填写企业信息</a>并提交注册审核！
        </div>
        <el-form-item label="用户名：" prop="username">
          <el-input :autofocus="true" placeholder="请输入用户名／手机号" v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input placeholder="请输入密码" type="password" v-model="ruleForm.password"></el-input>
        </el-form-item>
        <div class="user-page-btn">
          <el-form-item>
            忘记密码？
            <span v-on:click="toLink('reset')" class="text-blue cursor-pointer">找回密码</span>
          </el-form-item>
          <el-form-item>
            <el-button
              @click.native="login()"
              type="success"
              :loading="submitBtn.isLoading"
              :disabled="submitBtn.isDisabled"
            >{{submitBtn.btnText}}</el-button>
          </el-form-item>
          <el-form-item>
            没有账号，
            <span v-on:click="toLink('register')" class="text-blue cursor-pointer">请注册</span>
          </el-form-item>
        </div>
        <div class="user-page-img">
          <img class src="../assets/img/user_1.png">
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
import publicHeader from '../components/publicHeader'
export default {
  components: {
    publicHeader: publicHeader
  },
  data() {
    return {
      ruleForm: {
        username: '18100000002',
        password: '000002'
      },
      isLogin: false,
      userId: '',
      verifyCodeData: {},
      rules: {
        username: [
          { required: true, message: '请输入用户名或手机号', trigger: 'blur' },
          { min: 4, max: 20, message: '用户名或手机号不正确', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
          // { validator: validatePass, trigger: 'blur' }
        ]
      },
      submitBtn: {
        btnText: '登录',
        isLoading: false,
        isDisabled: false
      },
      times: 60
    }
  },
  methods: {
    loginAjax() {
      return new Promise((resolve, reject) => {
        this.submitBtn.isDisabled = true
        this.$refs['ruleForm'].validate(valid => {
          if (valid) {
            this.submitBtn = {
              btnText: '登录中',
              isLoading: true,
              isDisabled: true
            }
            this.$$http('login', this.ruleForm)
              .then(results => {
                this.submitBtn = {
                  btnText: '登录',
                  isLoading: false,
                  isDisabled: false
                }
                if (results.data && results.data.code === 0) {
                  this.pbFunc.setLocalData(
                    'token',
                    results.data.content.token,
                    true
                  )
                  this.pbFunc.setLocalData(
                    'userInfo',
                    results.data.content.info,
                    true
                  )
                  resolve(results)
                }
              })
              .catch(err => {
                console.log('err', err)
                this.submitBtn = {
                  btnText: '登录',
                  isLoading: false,
                  isDisabled: false
                }
                this.$message.error('登录失败')
                reject(err)
              })
          } else {
            this.submitBtn.isDisabled = false
          }
        })
      })
    },
    login() {
      this.loginAjax().then(() => {
        this.$router.push({
          path: 'bigHealthData/healthDataDisplay'
        })
      })
    },
    toLink(type) {
      if (type === 'register') {
        this.$router.push({ path: '/register' })
      } else if (type === 'reset') {
        this.$router.push({ path: '/forgetPassword' })
      } else if (type === 'company') {
        this.$router.push({
          path: 'registerCompany',
          query: { user_id: this.userId }
        })
      }
    }
  },
  created() {
    //sessionStorage.clear()
  }
}
</script>
