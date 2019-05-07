## git上传时的报错以及解决方案
### 当 git push -u origin master时有报错：
### To github.com:thisislys/try-one-s-hand-at.git ! [rejected]        master -> master (fetch first)error: failed to push some refs to'git@github.com:thisislys/try-one-s-hand-at.git' 说明github中的README.md文件不在本地代码目录中 需要执行命令：
### git pull --rebase origin master 然后 git push -u origin master 就OKl
# sign

> 面试管理软件

## Build Setup

``` bash
# 初始化项目
vue init mpvue/mpvue-quickstart myproject
cd myproject

# 安装依赖
yarn

# 开发时构建
npm dev

# 打包构建
npm build

# 指定平台的开发时构建(微信、百度、头条、支付宝)
npm dev:wx
npm dev:swan
npm dev:tt
npm dev:my

# 指定平台的打包构建
npm build:wx
npm build:swan
npm build:tt
npm build:my

# 生成 bundle 分析报告
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
