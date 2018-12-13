# 按钮

- 依赖

  这个组件依赖`colorToType`脚本

- 使用方法

  - 必传参数

        props: ['button']

    `button`对象的字段

    |字段|类型|含义|候选值|备注|
    |:-:|:-:|:-:|:-:|:-:|
    |size|String|尺寸|medium/small/mini|不选时为默认值，按钮最大|
    |shape|String|形状|round/circle|-|
    |status|String|状态|loading/disabled|-|
    |type|String|颜色|primary(blue)/success(green)/warning(yellow)/danger(red)/info(gray)/text(蓝色文字)以上几个值与'plain'的组合|-|
    |content|Object|内容|icon(图标)&words(文字)|-|
    |autofocus|Boolean|自动获取焦点|-|-|
    |autofocus|String|原生type属性|button/submit/reset|-|
