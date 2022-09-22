const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  ...
  // options
  devServer: {
    allowedHosts: 'all',
  },
  ...
})

module.exports={
  devServer: {
      disableHostCheck: true
  }
}
module.exports = {
  devServer: {
    allowedHosts: "all",
    client: {
      webSocketURL: {
        port: process.env.g4bi567-vuetodo-k6wzdxix2mv ? 443 : undefined,
      },
    },
  },
};
