const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  chainWebpack: (config) => {
    config.plugin('copy').tap((entries) => {
      entries[0].patterns.push({
        from: path.resolve(__dirname, 'node_modules/@mdi/font/fonts/'),
        to: path.resolve(__dirname, 'dist/fonts/'),
        toType: 'dir',
        noErrorOnMissing: true,
        globOptions: { ignore: ['.DS_Store'] },
      })

      return entries
    })
  },
  transpileDependencies: true,
  css: {
    loaderOptions: {
        sass: {
            sourceMap: false,
            additionalData: `
            @import "@/assets/scss/globals.scss";
            `,
        }
    }
  },
})
