module.exports = {
  title: 'Learn with Dan Vega',
  description: 'Learn with Dan Vega',
  themeConfig: {
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Courses',
        items: [{
          text: 'Getting Started with Vue',
          link: '/getting-started/'
        }]
      }
    ],
    sidebarDepth: 2,
    sidebar: {
      // Getting Started Course
      '/getting-started/': [
        '',
        ['why-vue', 'Why Vue?'],
        'hello-vue',
        ['development-env', 'Development Environment'],
        'vue-cli',
        'vue-ui',
        'create-first-component',
        'resources'
      ],

      // fallback
      '/': [
        '',
      ]
    },
  }
}
