# vue-after

> A Vue.js project

## Build Setup
``` bash
# install dependencies
npm install
npm run build --dev      # 开发模式打包
npm run build --prod     # 生产模式打包
npm run build --test     # 测试模式打包
# serve with hot reload at localhost:8080
npm run dev
# build for production with minification
npm run build
# build for production and view the bundle analyzer report
npm run build --report
```
mint-ui 使用

marketing_system_list.vue   测试界面  路由 /system_list

# 上线打包  需要配置文件  config  index.js  

build  编译到指定的文件夹
        本地   
        index: path.resolve(__dirname, 'dist/index.html'),
        assetsRoot: path.resolve(__dirname, 'dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',

        打包线上
        index: path.resolve(__dirname, '../style7/index.html'),
        assetsRoot: path.resolve(__dirname, '../style7'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/index/style7/',

    
 dev   本地运行   assetsPublicPath: '/'  
       打包线上运行  assetsPublicPath: '/index/style7/' 


我的课程： https://wen.openadc.top/course/on_order_purchased.html
