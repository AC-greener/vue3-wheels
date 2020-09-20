import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Switch from './components/SwitchDemo.vue'
import Button from './components/ButtonDemo.vue'
import Tabs from './components/TabsDemo.vue'
import Dialog from './components/DialogDemo.vue'

import GetStart from './views/GetStart.vue'
import Install from './views/Install.vue'
import Intro from './views/Intro.vue'
const history = createWebHashHistory()
const router = createRouter({
  history,
  routes:[
    {path: '/', component: Home},
    {path: '/doc', component: Doc, 
    children:[
      { path: 'start', component: GetStart },
      { path: 'install', component: Install },
      { path: 'intro', component: Intro },
      { path: 'switch', component: Switch },
      { path: 'dialog', component: Dialog },
      { path: 'tabs', component: Tabs },
      { path: 'button', component: Button }
    ]}
  ]
})
export default router