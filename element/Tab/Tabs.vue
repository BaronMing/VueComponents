<template>
  <el-tabs v-model="activeName" type="card">
    <el-tab-pane v-for="item in tabs" :key="item.name" :label="item.title" :name="item.name">
      <div>{{item.content}}</div>
      <slot :item="item"></slot>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: 'Tabs',
  data () {
    return {
      tabs: [{
        title: 'Tab1',
        name: '1',
        content: 'Tab 1 content'
      }, {
        title: 'Tab2',
        name: '2',
        content: 'Tab 2 content'
      }],
      activeName: '1',
      tabIndex: 2
    }
  }
}
</script>

<style lang="less" scoped>
  @titleHeight : 30px;

  /*head*/
  .el-tabs > :first-child {
    background-color: #fbfbfb;
    margin-bottom: 5px;
  }

  /*标签*/
  .el-tabs [role="tab"] {
    height: @titleHeight;
    line-height: @titleHeight;
  }
</style>
