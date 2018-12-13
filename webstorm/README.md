# WebStorm-template-of-Vue

- 按照Vue-template.vue和router文件夹下的方法写，可以减少路由代码的繁琐程度

- 关于代码自动修复

  在`build/webpack.base.conf.js`文件中,按`ctrl+F`搜索`eslint-loader`，
    ```
    const createLintingRule = () => ({
      test: /\.(js|vue)$/,
      loader: 'eslint-loader',
      enforce: 'pre',
      include: [resolve('src'), resolve('test')],
      options: {  
        fix: true,                                          //默认情况下是没有这个fix字段的，添加这个字段并将其值设置为true即可
        formatter: require('eslint-friendly-formatter'),
        emitWarning: !config.dev.showEslintErrorsInOverlay
      }
    })
    ```
  关于options的配置，可以在如下地址查看
  https://www.npmjs.com/package/eslint-loader
  
- 在vue-cli中使用less

  ```
  npm install less less-loader --save-dev
  ```

  即通过npm安装less和less-loader，并记录到devDependencies中
  
  因为这是我们在开发中使用的而非在生产中使用，所以就不将之记录在 dependencies 中
  
  less文档: http://www.bootcss.com/p/lesscss/#docs
