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
      },
      {
        text: 'www.danvega.dev',
        link: 'https://www.danvega.dev'
      }
    ],
    sidebarDepth: 1,
    sidebar: {
      // Getting Started Course
      '/getting-started/': [
        ['', 'Course Introduction'],
        ['why-vue', 'Why Vue?'],
        ['hello-vue', 'Hello Vue'],
        ['development-env', 'Development Environment'],
        ['vue-cli', 'Vue CLI'],
        ['vue-ui', 'Vue UI'],
        ['reusable-components', 'Reusable Components'],
        ['resources', 'Resources'],
        ['whats-next', "What's Next?"]
      ],

      // other courses

      // fallback
      '/': [
        '',
      ]
    },
    totalStudents: '84,000+'
  },
  ga: 'UA-133826656-1'
}
