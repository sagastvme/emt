var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')

    .enableVueLoader()

    .addEntry('app', './assets/js/app.js')
    .addEntry('admin', './assets/js/admin.js')
    .addEntry('appTwo', './assets/js/AppBeforeLogin.js')
    .addEntry('addReply', './assets/js/addReply.js')
    .addEntry('userDetails', './assets/js/userDetails.js')
    .addEntry('byCategories', './assets/js/byCategories.js')
    .enablePostCssLoader()
    .splitEntryChunks()

    .enableSingleRuntimeChunk()

    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())

;

module.exports = Encore.getWebpackConfig();