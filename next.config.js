
module.exports = {
  webpack: (config, options) => {
    config.module.rules.push(
      {
        test: /SuperpixelMeshModule\.wasm$/,
        type: "javascript/auto",
        loader: "file-loader",
        options: {
          publicPath: `/_next/static/files`,
          outputPath: 'static/files'
        }
      }
    )
    config.module.rules.push({
      test: /\.worker\.js$/,
      loader: 'worker-loader',
      options: {
        filename: 'static/[hash].worker.js',
        publicPath: '/_next/'
      }
    })
    return config
  }
}
