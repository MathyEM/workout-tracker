const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
        sass: {
            sourceMap: false,
            additionalData: `
            @import "@/assets/scss/_variables.scss";
            `,
        }
    }
  },
})