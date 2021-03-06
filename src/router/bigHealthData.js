export default {
  path: 'bigHealthData',
  name: 'bigHealthData',
  // title:'订单管理',
  meta: {
    isVerificationL: true,
    title: '健康大数据',
    iconName: 'icon-data'
  },
  component: resolve =>
    require(['../page/bigHealthData/bigHealthData'], resolve),
  children: [
    {
      path: 'healthDataDisplay',
      name: 'healthDataDisplay',
      meta: {
        isVerificationL: true,
        title: '健康大数据'
      },
      component: resolve =>
        require(['../page/bigHealthData/healthDataDisplay'], resolve)
    }
  ]
}
