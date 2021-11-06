import { UserConfig } from 'vitepress'
import { metaData } from './constants'

const config: UserConfig = {
  title: metaData.title,
  description: metaData.description,
}

export default config
