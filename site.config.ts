import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://chufenglizan.site/',
  lang: 'zh-CN',
  title: '楚风',
  author: {
    name: '楚风',
    avatar: 'https://s2.loli.net/2024/03/15/VcBxSNUX4enRCrJ.png',
    email: 'wlkongxiangtang@foxmail.com',
  },
  description: '每个人都需要一个段子手.',
  subtitle: '每个人都是段子手.(每个人都需要复读机）',
  social: [
    // {
    //   name: 'RSS',
    //   link: '/atom.xml',
    //   icon: 'i-ri-rss-line',
    //   color: 'orange',
    // },
    // {
    //   name: 'QQ 群 1050458482',
    //   link: 'https://qm.qq.com/cgi-bin/qm/qr?k=kZJzggTTCf4SpvEQ8lXWoi5ZjhAx0ILZ&jump_from=webapi',
    //   icon: 'i-ri-qq-line',
    //   color: '#12B7F5',
    // },
    // {
    //   name: 'GitHub',
    //   link: 'https://github.com/YunYouJun',
    //   icon: 'i-ri-github-line',
    //   color: '#6e5474',
    // },
    // {
    //   name: '微博',
    //   link: 'https://weibo.com/jizhideyunyoujun',
    //   icon: 'i-ri-weibo-line',
    //   color: '#E6162D',
    // },
    // {
    //   name: '豆瓣',
    //   link: 'https://www.douban.com/people/yunyoujun/',
    //   icon: 'i-ri-douban-line',
    //   color: '#007722',
    // },
    // {
    //   name: '网易云音乐',
    //   link: 'https://music.163.com/#/user/home?id=247102977',
    //   icon: 'i-ri-netease-cloud-music-line',
    //   color: '#C20C0C',
    // },
    // {
    //   name: '知乎',
    //   link: 'https://www.zhihu.com/people/yunyoujun/',
    //   icon: 'i-ri-zhihu-line',
    //   color: '#0084FF',
    // },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/869069',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/ydw1000mxd',
      icon: 'i-ri-twitter-line',
      color: '#1da1f2',
    },
    {
      name: 'E-Mail',
      link: 'wlkongxiangtang@foxmail.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
  ],

  search: {
    enable: true,
  },
  statistics: {
    enable:true,
    readTime: {
      speed: {
        cn: 300,
        en: 100
      }
    }
  },
  favicon: './logo.png',
  feed: {
    name: 'chufeng',
    favicon: './logo.png',

  },
  sponsor: {
    enable: true,
    title: '我很可爱，请给我钱！',
    description: '看官如果觉得文章可以，可以打赏哦',
    methods: [
      {
        name: '微信支付',
        url: 'https://s2.loli.net/2024/03/15/VldNvu4JcOZk51T.jpg',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
  frontmatter: {
    time_warning: false,
  },
})
