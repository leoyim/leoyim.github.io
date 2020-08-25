module.exports = {
  title: 'WIKI 文档',
  description: 'Just playing around',
  base: '/yanunbo.gitee.io/',
  themeConfig: {
    logo: '/hero.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Algorithm', link: '/algorithm/'}
    ],
    sidebar: {
      '/guide/': [
        ['CSS', 'CSS'],
        ['HTML','HTML']
      ],
      '/algorithm/' : [
        ['BFS', 'BFS'],
        ['DFS', 'DFS']
      ]
    },
    displayAllHeaders: true,
    sidebarDepth: 2
  },
  markdown: {
    lineNumbers: true
  }
}
