module.exports = {
    publicPath: "./",

    devServer: {
        overlay: {
            warnings: true,
            errors: true
        }
    },
    lintOnSave: false,
    outputDir: 'dist',
    assetsDir: 'static'    
}