import { defineValaxyConfig } from 'valaxy'
import type { UserThemeConfig } from 'valaxy-theme-yun'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]
/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
     bg_image: {
       enable: true,
       url: 'https://api.oick.cn/api/random?type=pc',
       opacity: 0.3,
     },
    banner: {
      enable: true,
      title: '楚风的小站',
      cloud: {
        enable: true,
      },
    },

    pages: [
      // {
      //   name: '我的小伙伴们 ',
      //   url: '/links/',
      //   icon: 'i-ri-genderless-line',
      //   color: 'dodgerblue',
      // },
      // {
      //   name: '喜欢的女孩子',
      //   url: '/girls/',
      //   icon: 'i-ri-women-line',
      //   color: 'hotpink',
      // },
    ],

    footer: {
      // beian: {
      //   enable: true,
      //   icp: '萌ICP备20246351号',
      // },
      since: 2023,
      powered: false,
    },
    
  },
  
  unocss: { safelist },
  
  
})
