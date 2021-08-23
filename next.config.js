
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
    return config
  }
}
