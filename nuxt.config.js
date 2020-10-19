export default {
    build: {
        extend(config) {
            config.module.rules.push(
                {
                    test: /\.wasm$/,
                    loaders: ['wasm-loader']
                }
            )
        }
    }
}