# 面包屑

- 依赖

    这个组件依赖**Vuex**, Vuex的安装方法

    ```bash
    npm install vuex --save
    ```

    Vuex官方网站: <https://vuex.vuejs.org/zh/>

- 使用方法

  - 在**main.js**中引入**Vuex**

    ```js
    import Vuex from 'vuex'

    Vue.use(Vuex)
    ```

  - 建立状态管理器

    ```js
    const store = new Vuex.Store({
        state: {
            breadCrumbList: ['']
        },
        mutations: {
            /*
            @params {Object} state 就是上面的state字段
            @params {Object} breadCrumb
                @params {String} path       一般是Menu上click等回调函数的第一位参数值
                @params {Array} pathList    一般是Menu上click等回调函数的第二位参数值
                @params {Array} hrefList    可选项, 为<a>的href列表
             */
            createBreadCrumb (state, breadCrumb) {
                state.breadCrumbList = breadCrumb.path.match(/\w+/g).map((v, i) => {
                    return {
                        content: v.replace(/[A-Z]/g, ($1) => {
                            return ' ' + $1
                        }).trim(),
                        /*
                        href: breadCrumb.hrefList[i],   //可选项, 为<a>的href值
                        */
                        path: breadCrumb.pathList[i]
                    }
                })
            }
        }
    })
    ```