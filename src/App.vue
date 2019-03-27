<style lang="less">
@import './assets/css/themeStyle.less';
@import './assets/css/common.less';
@import './assets/css/reset.less';
@import './assets/css/icon.less'; //icon
@import './assets/css/tabsStyle.less';
@import './assets/css/buttonStyle.less';
@import './assets/css/tableStyle.less';
@import './assets/css/style.css';
@import './assets/css/detailStyle.less';
@import './assets/css/settingStyle.less'; //个人设置
@import './assets/css/dialogStyle.less'; //弹窗样式
@import './assets/css/userStyle.less'; //登录 注册 找回密码
@import './assets/css/elementReset';
@import './assets/css/news.less'; //消息通知
</style>
<template>
  <router-view id="app" @login="loginDirect" @logout="logoutDirect"></router-view>
</template>
<script>
import Vue from 'vue'
import userPath from './router/fullRouter'
import noData from '@/components/common/noData'
// import exportButton from '@/components/common/exportButton';
Vue.component('noData', noData)
// Vue.component("exportButton", exportButton);

export default {
  name: 'App',
  data() {
    return {
      menuData: null,
      userData: null
    }
  },
  methods: {
    buildDictionary: function() {
      let dictionaryObject = {
        orderManage: 'orderManage', // 概览
        orders: 'ORDER', // 订单
        pickupOrders: 'DELIVERY_ORDER', // 提货订单
        dispatchDashboard: 'OVERVIEW_DISPATCH_SECOND', // 调度概览
        importStatisticsDashboard: 'IMPORT_OVERVIEW_SECOND' // 导入统计概览
      }
      return dictionaryObject
    },

    findDictionary: function(menuList) {
      let findDictionaryObject = {}
      let dictionaryObject = this.buildDictionary()
      for (let i in dictionaryObject) {
        for (let j in menuList) {
          if (menuList[j].menu_key === dictionaryObject[i]) {
            // 寻找一级菜单
            findDictionaryObject[i] = dictionaryObject[i]
          }
          if (menuList[j].second_menus && menuList[j].second_menus.length) {
            // 寻找二级菜单
            for (let k in menuList[j].second_menus) {
              if (
                menuList[j].second_menus[k].menu_key === dictionaryObject[i]
              ) {
                findDictionaryObject[i] = dictionaryObject[i]
              }
            }
          }
        }
      }
      return findDictionaryObject
    },

    extendRoutes: function(allowedRouter) {
      let that = this

      let originPath = that.pbFunc.deepcopy(userPath)
      /*
       ** 这里注入相应权限的路由，暂时不做。
       ** let actualRouter = that.pbFunc.deepcopy(allowedRouter);
       **  originPath[0].children = actualRouter;
       */
      // 注入路由
      that.$router.addRoutes(
        originPath.concat([
          {
            path: '*',
            redirect: '/404'
          }
        ])
      )
    },
    loginDirect: function(newPath) {
      this.pathIn(true)
    },
    isHasTokenAndMenu: function(menuList, token) {
      this.$router.afterEach((to, from) => {
        if (
          !to.path.match(
            /(^\/$)|login|register|registerCompany|registerSuccess|forgetPassword|401|404/
          ) &&
          !from.path.match(/login/)
        ) {
          if (!menuList || !token) {
            this.$message.error('验证信息缺失，请重新登录')
            this.$router.replace({ path: '/login' })
          }
        }
      })
    },
    pathIn: function(isGoFirstPath) {
      let allowedRouter = []
      allowedRouter = userPath
      console.log('菜单', allowedRouter)
      this.extendRoutes(allowedRouter)
      this.$store.state.common.menuData = allowedRouter[0].children
      this.$store.state.common.userData = { name: '测试名称' }
      if (isGoFirstPath) {
        if (
          allowedRouter[0] &&
          allowedRouter[0].children &&
          allowedRouter[0].children.length
        ) {
          this.$router.replace({ name: allowedRouter[0].children[0].name })
        } else {
          this.$router.replace({ path: allowedRouter[0].path })
        }
      }
    },
    getRoutesList: function(menuDictionaryObject) {
      let newRoute = []
      let userPathChild = this.pbFunc.deepcopy(userPath[0].children)

      for (let i in menuDictionaryObject) {
        for (let j in userPathChild) {
          if (userPathChild[j].name === i) {
            if (userPathChild[j].children && userPathChild[j].children.length) {
              let pathCopy = this.pbFunc.deepcopy(userPathChild[j])
              pathCopy.children = [] // 保留一级菜单，去除二级菜单
              for (let m in menuDictionaryObject) {
                for (let k in userPathChild[j].children) {
                  if (userPathChild[j].children[k].name === m) {
                    pathCopy.children.push(userPathChild[j].children[k])
                  }
                }
              }
              newRoute.push(pathCopy)
            } else {
              newRoute.push(userPathChild[j])
            }
          }
        }
      }
      return newRoute
    },
    logoutDirect: function() {
      localStorage.clear()
    }
  },
  created: function(newPath) {
    let vm = this
    vm.pathIn()
  }
}
</script>
