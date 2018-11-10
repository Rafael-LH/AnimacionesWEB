const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
        mode: 'development',
        entry:{
            index: path.resolve(__dirname, './src/entries/js/index.js')
        },
        output:{
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        module:{
            rules:[
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules|bower_components)/,
                    use:{
                        loader: 'babel-loader',
                        options:{
                            presets: ['@babel/preset-env','@babel/preset-react']
                        }
                    }
                },
                {
                    test: /\.scss$/,
                    use:[
                         MiniCssExtractPlugin.loader,
                         "css-loader",
                         "sass-loader"
                        ]
                  }
            ]
        },
        plugins:[
            new MiniCssExtractPlugin({
                filename: './css/[name].css'
            })
        ]
    }