module.exports = {
  stripPrefix: 'dist/',
  staticFileGlobs: [
    'dist/*.html',
    'dist/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff,ico}',
    'dist/***/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff,ico}',
    'dist/****/***/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff,ico}'
  ],
  dontCacheBustUrlsMatching: /\.\w{8}\./,
  swFilePath: 'dist/service-worker.js',
  navigateFallback: '/index.html',
  runtimeCaching: [{
    urlPattern: /api\.coinmarketcap\.com/,
    handler: 'networkFirst'
  }]
}
