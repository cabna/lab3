const path = require('path') 
const HtmlWebpackPlugin = require('html-webpack-plugin') 
const fs = require('fs');
const pages = fs.readdirSync(path.resolve(__dirname, 'src/pages'))
                .filter(fileName => fileName.endsWith('.html'));
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {  
  mode: 'production',
  entry: { // webpack.config.js  
    main: path.resolve(__dirname, './src/index.js'),  
  },  
   
  output: {  
     path: path.resolve(__dirname, './dist'),  
     filename: 'main.bundle.js',  
  },  
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    open: true,
  },
   plugins: [
    new CleanWebpackPlugin(),

    ...pages.map(page => new HtmlWebpackPlugin({
      filename: page,
      template: path.resolve(__dirname, `src/pages/${page}`),
    })),
  ], 

}  