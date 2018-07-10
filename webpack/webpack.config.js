/**
 * 创建时间:2017/11/12
 *  作  者：Jimck_Zhang
 *  邮  箱：XIAOZHANG10086XIAOZHANG@live.com
 *  功  能:
 */
module.exports={
    context: __dirname,
    entry:'./src/app.js',
    output: {
        filename: 'js/[name]-bound.js'//生成后的文件名 为 a-2ea5b2e9b258a8bbba73.js，main-2ea5b2e9b258a8bbba73.js
    },
    module: {
        rules:[
            {
                test: /\/src\/\.js$/,
                loader: "babel-loader",
                exclude:'/node_modules/'
            }
        ],
    }
}