import Main from '@/components/main'
import parentView from '@/components/parent-view'
import HomeMain from '@/components/home-main'
import Apply from '@/components/carousel/apply.vue'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面不会缓存
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
  {
    path: '/',
    redirect: '/main-page',
    name: 'main',
    component: HomeMain,
    children: [
      {
        path: '/main-page',
        name: 'main-page',
        component: () => import('@/view/main-page/main/main.vue')
      },
      {
        path: '/detail/:id',
        name: 'detail',
        component: () => import('@/view/main-page/main/detail.vue')
      },
      {
        path: '/more/:id',
        name: 'more',
        component: () => import('@/view/main-page/main/more.vue')
      },
      {
        path: '/download',
        name: 'download',
        component: () => import('@/view/main-page/main/download.vue')
      }
    ]
  },
  {
    path: '/home-test',
    name: 'home-test',
    meta: {
      title: 'home-test',
      hideInMenu: true
    },
    component: () => import('@/view/home/home-test.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/admin',
    name: 'admin-home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  },
  {
    path: '/apply',
    name: 'apply',
    meta: {
      icon: 'md-funnel',
      title: '申请'
    },
    component: Main,
    children: [
      {
        path: 'apply-pages',
        name: 'apply-pages',
        meta: {
          title: '申请流程'
        },
        component: Apply,
        children: [
          {
            path: 'apply-1',
            name: 'apply-1',
            meta: {
              icon: 'md-funnel',
              title: '申请流程1'
              // hideInMenu: true
            },
            component: () => import('@/view/apply/apply-1.vue')
          },
          {
            path: 'apply-2',
            name: 'apply-2',
            meta: {
              title: '申请流程2',
              hideInMenu: true
            },
            component: () => import('@/view/apply/apply-2.vue')
          },
          {
            path: 'apply-3',
            name: 'apply-3',
            meta: {
              title: '申请流程3',
              hideInMenu: true
            },
            component: () => import('@/view/apply/apply-3.vue')
          }
        ]
      },
      {
        path: 'apply-test',
        name: 'apply-test',
        meta: {
          icon: 'md-funnel',
          title: '申请test'
        },
        component: () => import('@/view/apply/apply-3.vue')
      }

    ]
  },
  {
    path: '',
    name: 'doc',
    meta: {
      title: '文档',
      href: 'https://lison16.github.io/iview-admin-doc/#/',
      icon: 'ios-book'
    }
  },
  {
    path: '/multilevel',
    name: 'multilevel',
    meta: {
      icon: 'md-menu',
      title: '多级菜单'
    },
    component: Main,
    children: [
      // {
      //   path: 'level_2_1',
      //   name: 'level_2_1',
      //   meta: {
      //     icon: 'md-funnel',
      //     title: '二级-1',
      //     // hideInMenu: true
      //   },
      //   component: () => import('@/view/multilevel/level-2-1.vue')
      // },
      {
        path: 'level_2_2',
        name: 'level_2_2',
        meta: {
          access: ['super_admin'],
          icon: 'md-funnel',
          showAlways: true,
          title: '二级-2'
        },
        component: parentView,
        children: [
          {
            path: 'level_2_2_1',
            name: 'level_2_2_1',
            meta: {
              icon: 'md-funnel',
              title: '三级'
            },
            component: () => import('@/view/multilevel/level-2-2/level-3-1.vue')
          }
        ]
      },
      {
        path: 'level_2_3',
        name: 'level_2_3',
        meta: {
          icon: 'md-funnel',
          title: '二级-3'
          // hideInMenu: true
        },
        component: () => import('@/view/multilevel/level-2-3.vue')
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  }
]
