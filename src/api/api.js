/**
 * @description 接口文档API,用于后端接口查询
 * @param
 *   url:后端接口url（必需）
 *   method:后端接口方法（必需）
 *   desc:后端接口描述 （可选）
 *   param:接口参数 （可选）
 *     desc:参数描述（可选）
 */

const api = {
  login: {
    url: '/api/v1/auth',
    method: 'post',
    desc: '登录',
    notNeedToken: true,
    param: {

    }
  },
  getHealthRecords: {
    url: '/api/v1/health-records',
    method: 'get',
    desc: '获取健康档案列表',
    param: {

    }
  },
  getRatingList: {
    url: '/api/v1/enterprise-rate',
    method: 'get',
    desc: '获取机构评级信息',
    param: {

    }
  }
}

export default api
