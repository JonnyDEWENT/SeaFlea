module.exports = {
  transpileDependencies: [
    'vuetify'
  ]
}
const SitemapPlugin = require('sitemap-webpack-plugin').default
// You can write the paths as an array of strings or an array of objects
const paths = [
  {
      path: '/',
      lastmod: '2023-02-26',
      priority: 1.0,
      changefreq: 'yearly'
  }
]

module.exports = {
    configureWebpack: {
        plugins: [
            new SitemapPlugin({ base: 'https://seafleacharters.com', paths })
        ]
    },
    // Other exports here
}
