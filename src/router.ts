import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Switch from './components/SwitchDemo.vue'
import Button from './components/ButtonDemo.vue'
import Tabs from './components/TabsDemo.vue'
import Dialog from './components/DialogDemo.vue'

import Markdown from './components/Markdown.vue'

import { h } from 'vue'
const history = createWebHashHistory()
const router = createRouter({
  history,
  routes:[
    {path: '/', component: Home},
    {path: '/doc', component: Doc, 
    children:[
      { path: 'start', component: h(Markdown, { path: '../markdown/get-start.md', key: '1'}) },
      { path: 'install', component: h(Markdown, { path: '../markdown/install.md', key: '2'}) },
      { path: 'intro', component: h(Markdown, { path: '../markdown/intro.md', key: '3'}) },
      { path: 'switch', component: Switch },
      { path: 'dialog', component: Dialog },
      { path: 'tabs', component: Tabs },
      { path: 'button', component: Button }
    ]}
  ]
})
export default router