export default {
  path: 'nstitutionalRating',
  name: 'nstitutionalRating',
  meta: {
    isVerificationL: true,
    title: '医疗机构评级',
    iconName: 'icon-star-full'
  },
  component: resolve =>
    require(['../page/nstitutionalRating/nstitutionalRating'], resolve),
  children: [
    {
      path: 'rating',
      name: 'rating',
      meta: {
        isVerificationL: true,
        title: '医疗机构评级'
      },
      redirect: '/nstitutionalRating/rating/ratingList',
      component: resolve =>
        require(['../page/nstitutionalRating/rating/rating'], resolve),
      children: [
        {
          path: 'ratingList',
          name: 'ratingList',
          meta: {
            isVerificationL: true,
            title: '医疗机构评级列表'
          },
          component: resolve =>
            require(['../page/nstitutionalRating/rating/ratingList'], resolve)
        },
        {
          path: 'ratingEdit',
          name: 'ratingEdit',
          meta: {
            isVerificationL: true,
            title: '医疗机构评级'
          },
          component: resolve =>
            require(['../page/nstitutionalRating/rating/ratingEdit'], resolve)
        }
      ]
    }
  ]
}
