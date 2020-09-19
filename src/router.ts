import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Switch from './components/SwitchDemo.vue'
import Button from './components/ButtonDemo.vue'
import Tabs from './components/Tabs.vue'
import Dialog from './components/DialogDemo.vue'

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes:[
    {path: '/', component: Home},
    {path: '/doc', component: Doc, 
    children:[
      { path: 'switch', component: Switch },
      { path: 'dialog', component: Dialog },
      { path: 'tabs', component: Tabs },
      { path: 'button', component: Button }
    ]}
  ]
})
export default router