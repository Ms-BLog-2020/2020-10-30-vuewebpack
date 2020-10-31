import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/HelloWorld';
import Page from '@/components/pages/page';
Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            name: '首頁',
            path: '/index',
            component: Home,
        },
        {
            name: '分頁',
            path: '/page',
            component: Page,
        },
    ]
})