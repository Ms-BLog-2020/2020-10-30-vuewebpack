import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/HelloWorld';
import Page from '@/components/pages/page';
import child from '@/components/pages/child';
import child2 from '@/components/pages/child2';
import child3 from '@/components/pages/child3';
import Menu from '@/components/pages/menu';
Vue.use(VueRouter)

export default new VueRouter({
    // mode: 'history', //去除URL上的# 但是沒有#代表用的是後端的伺服器路由 不只使用前端的路由 使用history必須前後端搭配
    routes:[
        {
            name: '首頁',
            path: '/index',
            component: Home,
        },
        {
            // name: '分頁',
            path: '/page',
            components: {
                default: Page,
                menu: Menu,
            },
            children: [
                {
                    name: '卡片 1',
                    path: '',
                    component: child,
                },
                {
                    name: '卡片 2',
                    path: 'child2',
                    component: child2,
                },
                {
                    name: '卡片 3',
                    path: 'child/:id', //動態路由
                    component: child3,
                },
            ]
        },
    ]
})