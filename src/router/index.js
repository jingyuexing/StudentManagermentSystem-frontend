/*
* @Author: admin
* @Date:   2022-05-25 14:33:29
* @Last Modified by:   admin
* @Last Modified time: 2022-05-26 12:49:07
*/

import DataGrid from '../components/DataGrid'
import LoginPage from '../components/Login/Login.vue'
import StudentEditor from '../components/student/edit.vue'
import { createRouter, createWebHistory } from 'vue-router'

export default new createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/student",
      component: DataGrid,
    },

    {
      path: "/student/query",
      component: StudentEditor
    },
    {
      path: "/student/edit",
      component: StudentEditor
    },
    {
      path: "/admin",
      component: DataGrid
    },
    {
      path: "/teacher",
      component: DataGrid,
      children: [
        {
          path: "edit",
          component: StudentEditor
        },
        {
          path: "query",
          component: StudentEditor
        }
      ]
    },
    {
      path:"/login",
      component:LoginPage
    }
  ]
})
