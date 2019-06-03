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
        ['', 'Course Introduction'],
        ['why-vue', 'Why Vue?'],
        ['hello-vue', 'Hello Vue'],
        ['development-env', 'Development Environment'],
        ['vue-cli', 'Vue CLI'],
        ['vue-ui', 'Vue UI'],
        ['first-component', 'Single File Components (SFC)'],
        ['resources', 'Resources & Next Steps']
      ],

      // fallback
      '/': [
        '',
      ]
    },
  }
}
