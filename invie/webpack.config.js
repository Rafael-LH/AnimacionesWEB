const path = require('path')

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
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules)/,
                    use:{
                        loader: 'babel-loader',
                        options:{
                            presets: ['@babel/preset-env','@babel/preset-react'],
                            plugins:[
                                "@babel/plugin-proposal-class-properties",
                                "@babel/plugin-proposal-json-strings",
                                "@babel/plugin-syntax-dynamic-import",
                                "@babel/plugin-syntax-import-meta",
                            ]
                        }
                       
                    }

                }
            ]
        }
}