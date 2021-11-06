import 'virtual:windi.css'

import '@arco-design/web-vue/dist/arco.css'
import type { Theme } from 'vitepress'

import Layout from './Layout.vue'
import NotFound from './NotFound.vue'

export default <Theme>{
  Layout,
  NotFound,
}
