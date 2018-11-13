const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
        mode: 'development',
        entry:{
            index: path.resolve(__dirname, './src/entries/index.js')
        },
        output:{
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        devtool: 'eval-source-map',
        module:{
            rules:[
                // babel loader
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules|bower_components)/,
                    use:{
                        loader: 'babel-loader',
                        options:{
                            presets: ['@babel/preset-env','@babel/preset-react'],
                              plugins: [
                                   "@babel/plugin-syntax-dynamic-import",
                                   "@babel/plugin-syntax-import-meta",
                                   "@babel/plugin-proposal-class-properties",
                                   "@babel/plugin-proposal-json-strings"
                                  ]
                        }
                    }
                },
                // Sass Loader
                {
                    test: /\.scss$/,
                    use:[
                         MiniCssExtractPlugin.loader,
                         "css-loader",
                         "sass-loader"
                        ]
                  },
                //   svg loader
                  { 
                    test: /\.svg$/,
                    loader: 'svg-inline-loader'
                  },
                //   image loader
                  {
                      test: /\.(png|jpeg|jpg)$/,
                      use:{
                           loader: 'url-loader'
                      }
                  }

            ]
        },
        plugins:[
            new MiniCssExtractPlugin({
                filename: './css/[name].css'
            })
        ]
    }