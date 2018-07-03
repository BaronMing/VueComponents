# 全局  鼠标跟随提示框

- 注意: 这个组件只能在全局中使用，不可以把它应用在某个范围内

- 使用方法

  - 在**main.js**中引入**index.js**文件

    ```javascript
    import MousePromptBox from './components/MousePromptBox/index'

    Vue.prototype.$MousePromptBox = MousePromptBox
    ```

  - 为模板绑定触发事件

    ```html
    <div @mousemove.stop="MousePromptBoxShow"></div>
    ```

  - 调用

    ```javascript
    export let MousePromptBox = {
      methods: {
        MousePromptBoxShow (event) {
          this.MousePromptBoxInstance = this.$MousePromptBox(event, this.$data)
        }
      }
    };
    export default MousePromptBox
    ```
