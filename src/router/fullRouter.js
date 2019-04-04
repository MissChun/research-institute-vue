import bigHealthData from './bigHealthData'
import nstitutionalRating from './nstitutionalRating'
import healthRecords from './healthRecords'
export default [
  {
    path: '',
    name: 'index',
    redirect: '/login',
    component: resolve => require(['../page/MainFirst'], resolve),
    meta: {
      title: '首页'
    },
    children: [bigHealthData, healthRecords, nstitutionalRating]
  }
]
