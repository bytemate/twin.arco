import type { DefaultTheme } from '@/config'
import { sidebar } from './sidebar'
import { nav } from './nav'

const themeConfig: DefaultTheme.Config = {
  repo: 'bytesfriends/twin.arco',
  logo: '/assets/logo.svg',
  docsDir: '.',
  docsBranch: 'main',
  docsRepo: 'bytesfriends/twin.arco',
  editLinks: true,
  editLinkText: 'Suggest changes to this page',
  nav,
  sidebar,
}

export default themeConfig
