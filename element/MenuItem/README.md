# MenuItem.vue

- 使用示例

    ```html
    <el-menu :default-active="$route.path" router>
    <menu-item v-for="(item, index) in menu" :key="index" :item="item"></menu-item>
    </el-menu>
    ```

- 使用时的注意事项

  - 这个组件依赖vue-router
  
    - vue-router安装方法
      ```bash
      npm install vue-router
      ```
      
    - Vue-router中文官网: https://router.vuejs.org/zh/
    
  - 在您不修改MenuItem.vue源代码的情况下,不能更改`:item`字段
  
  - `<menu-item>`是用来替代`<el-menu-item>`、`<el-menu-item-group>`与`<el-submenu>`组件的，所以只能在`<el-menu>`中使用它
  
  - menu的数据格式
  
    ```js
    menu: [{                                          //el-menu-item
        name,                                         //item的名字
        icon,                                         //item的图标(可以省略)
        path                                          //路由地址
    }, {                                              //el-submenu
        name,
        icon,
        path,
        submenu: [{                                   //这里与el-menu-item/el-submenu/el-menu-item-group的格式相同

        }]
    }, {                                              //el-menu-item-group
        name,
        icon,
        path,
        group: [{                                     //这里与el-menu-item/el-submenu/el-menu-item-group的格式相同

        }]
    }]
    ```

- 与ElementUI菜单的比较

  - 优点: 这段代码可以让你仅仅通过一个menu数组完成菜单，简化开发
  - 缺点: 对菜单展开延迟时间等一些细节没有做处理，需要的朋友，请您稍微读一下menu-item.vue的代码，自行修改，很简单的
