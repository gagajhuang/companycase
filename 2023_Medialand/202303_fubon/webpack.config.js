const path = require('path');

var config = {
    mode: process.env.NODE_ENV,
    entry: './js/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'assets/scripts/[name].js?[hash:8]',
    },
    resolve: {
        modules: [
            path.resolve('src'),
            path.resolve('node_modules'),
        ],
        alias: {
            '~': path.resolve('src'),
            '@': path.resolve('src/scripts'),
            images: path.resolve('src/images'),
            fonts: path.resolve('src/fonts'),
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ ['@babel/preset-env', { targets: 'defaults' }] ]
                    }
                }
            },
        ]
    },
    plugins: [
    ],
    performance: {
    },
    devtool: process.env.NODE_ENV === 'development' ? 'eval' : 'source-map', // 生成 SourceMap: source-map
    devServer: {
        host: '0.0.0.0',                        // 允許區網設備進行訪問
        useLocalIp: true,                       // 允許區網設備進行訪問
        contentBase: path.join(__dirname, '/'), // contentBase 表示的是告訴伺服器從哪裡提供內容。（只有想提供靜態文件時才需要）['./dist']
        // publicPath: '/dist/',                // publicPath 表示的是打包生成的靜態文件所在的位置（若是 devServer 裡面的 publicPath 沒有設置，則會認為是 output 裡面設置的 publicPath 的值）
        watchContentBase: true,                 // html 內容有改變時會自動重新整理
        compress: false,
        port: 3030,
        hot: true,
        open: false,
        proxy: {
            '/api/*': {
                target: 'https://greenpoints-test.medialand.com.tw/',
                ws: true,
                changeOrigin: true,
            },
        }
    }
}

module.exports = config