const path = require('path')
const webpack = require('webpack')
const { env } = require('process')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

env.NODE_ENV === 'development' //evaluates to true

module.exports = env => {
    return {
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new MiniCssExtractPlugin({
                filename: '[name].bundle.css',
                chunkFilename: '[id].css'
            })
        ],
        // Create ReactJS entry point
        entry: path.resolve(__dirname, 'src', 'index.js'),
        // Define location and name of the bundled file for webpack to build.  As written, expected location is ./dist/bundle.js
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        devServer:{
            // Establishes path to output directory.  By default, any index.html file is served, as with any other web server.
            contentBase: path.resolve(__dirname, 'dist'),
            // Tells devServer to open a browser window for the application.
            open: true,
            // Set to silent so all server requests and long pull requests will not be logged to the console.
            clientLogLevel: 'silent',
            port: 9000,
            hot: true
        },
        module: {
            rules: [
                {
                    // Tests the defined file extension to see if we should use the babel-loader
                    test: /\.(jsx|js)$/,
                    // Includes all files within the src folder
                    include: path.resolve(__dirname, 'src'),
                    // Excludes anything within a node_modules sub folder
                    exclude: /node_modules/,
                    // Defines which loader to use.
                    use: [{
                        loader: 'babel-loader',
                        options: {
                            // Note:  In the previous tutorial, this was kept in a .babelrc file.
                            presets: [
                                // Check compatibility for backward compatibility and polyfills for commonly used browser versions.
                                [
                                    '@babel/preset-env',
                                    // Targets a broswerslist query for compatible browser versions.
                                    { "targets": "defaults" }
                                ],
                                // Handles JSX syntax
                                '@babel/preset-react'
                            ]
                        }
                    }]
                },
                {
                    test: /\.s[ac]ss$/i,
                    include: path.resolve(__dirname, 'src'),
                    use: [
                        "style-loader",
                        "css-loader",
                        {
                            loader: 'sass-loader',
                            options: {
                                implementation: require('sass'),
                                sassOptions: {
                                    fiber: false,
                                }
                            }
                        }
                    ]
                }
            ]
        }
    }    
}