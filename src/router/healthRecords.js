export default {
  path: 'healthRecords',
  name: 'healthRecords',
  meta: {
    isVerificationL: true,
    title: '人群健康档案',
    iconName: 'icon-setting'
  },
  component: resolve =>
    require(['../page/healthRecords/healthRecords'], resolve),
  children: [
    {
      path: 'healthRecord',
      name: 'healthRecord',
      meta: {
        isVerificationL: true,
        title: '人群健康档案'
      },
      redirect: '/healthRecords/healthRecord/healthRecordList',
      component: resolve =>
        require(['../page/healthRecords/healthRecord/healthRecord'], resolve),
      children: [
        {
          path: 'healthRecordList',
          name: 'healthRecordList',
          meta: {
            isVerificationL: true,
            title: '人群健康档案列表'
          },
          component: resolve =>
            require([
              '../page/healthRecords/healthRecord/healthRecordList'
            ], resolve)
        }
      ]
    }
  ]
}
