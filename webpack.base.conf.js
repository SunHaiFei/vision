const webpack = require("webpack")
module.exports = {
    rules: [
        { //从这一段上面是默认的！不用改！下面是没有的需要你手动添加，相当于是编译识别sass! 
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
        }
    ],
    plugins: [
        // new webpack.optimize.CommonsChunkPlugin('common.js'),
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery",
            jquery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
}