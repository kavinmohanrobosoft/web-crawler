const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports =  {
    
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'index_bundle.js'
        },
        module: {
            rules: [
              { test: /\.(ts|tsx)$/, loader: 'ts-loader' },
              {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                },
              },
              { test: /\.css$/, use: ["style-loader", "css-loader"] },
              {
                test: /\.json$/,
                loader: "file-loader"
              },
            ]
        },
        node: {
            fs: 'empty'
        },
        resolve: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'src/index.html'
            })
        ],
        devServer: {
          contentBase: path.join(__dirname, 'dist'),
          compress: true,
          port: 9000
        }
    
}