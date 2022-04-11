const path = require('path')

//1. 导入html-webpack-plugin这个插件，得到插件的构造函数
const HtmlPlugin=require('html-webpack-plugin')
//2. new构造函数，创建插件的实例对象
const htmlPlugin = new HtmlPlugin({
  // 指定要复制那个页面
  template: './src/index.html',
  // 指定复制出来的文件名和存放路径
  filename: './index.html'
})

//使用node.js中的导出语法，向外导出一个webpack的配置对象
module.exports = {
  mode:'development',
  // entry指定要处理那个文件
  entry: path.join(__dirname,'./src/index.js'),
  //指定要生成的文件存放到哪里
  output: {
    // 存放到目录
    path: path.join(__dirname,'dist'),
    //  生成的文件名
    filename: 'main.js'
  },
  // 3. 插件的数组  将来webpack在运行时，会加载并调用这些插件
  plugins: [htmlPlugin],
  devSever: {
    // 首次打包成功后，自动打开浏览器
    open: true,
    //在http协议中，如果端口号是80，可以被省略
    port: 80,
    // 指定运行的主机地址
    host: '127.0.0.1'
  },
  module: {
    rules: [
      //定义了不同模块对应的loader
      {test: /\.css$/, use: ['style-loadr', 'css-loader']},
      // 处理.less文件的loader
      {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']}
    ]
  }
}
