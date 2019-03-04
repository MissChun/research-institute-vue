export default {
    path: 'bigHealthData',
    name: 'bigHealthData',
    // title:'订单管理',
    meta: { 
        isVerificationL: true,
        title: '健康大数据',
        iconName: 'icon-setting'
    },
    component: (resolve) => require(['../page/bigHealthData/bigHealthData'], resolve),
}