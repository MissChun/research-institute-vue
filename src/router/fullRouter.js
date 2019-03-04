import bigHealthData from './bigHealthData'
import nstitutionalRating from './nstitutionalRating'
export default [{
  path: '',
  name: 'index',
  redirect: '/bigHealthData',
  component: (resolve) => require(['../page/MainFirst'], resolve),
  meta: {
    title: '首页'
  },
  children: [
    bigHealthData,
    nstitutionalRating
  ]
}];
