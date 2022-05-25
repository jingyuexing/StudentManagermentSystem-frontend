/*
* @Author: admin
* @Date:   2022-05-25 14:33:29
* @Last Modified by:   admin
* @Last Modified time: 2022-05-26 00:58:21
*/

import DataGrid from '../components/DataGrid'
import StudentEditor from '../components/student/edit.vue'
import {createRouter, createWebHistory} from 'vue-router'

export default new createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:"/student",
            component:DataGrid,
            children:[
              {
                path:"edit",
                component:StudentEditor
              },
              {
                path:"query",
                component:StudentEditor
              }
            ]
        },
        {
            path:"/admin",
            component:DataGrid
        },
        {
            path:"/teacher",
            component:DataGrid,
            children:[
              {
                path:"edit",
                component:StudentEditor
              },
              {
                path:"query",
                component:StudentEditor
              }
            ]
        }
    ]
})
