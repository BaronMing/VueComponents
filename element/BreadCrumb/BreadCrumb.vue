<template>
  <el-breadcrumb class="breadCrumb" :separator="separator" :separator-class="separatorClass">
    <el-breadcrumb-item v-for="(item, index) in breadCrumbList" :key="index" :to="{ 'path': item.path }">
      <a v-if="item.href" :href="item.href"></a>
      {{item.content}}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import { mapState } from 'vuex'
export let BreadCrumb = {
  name: 'BreadCrumb',
  data () {
    return {
      separator: '/',
      separatorClass: null
    }
  },
  computed: mapState([
    'breadCrumbList'
  ])
}
export default BreadCrumb
</script>

<style lang="less" scoped>
@height : 50px;
@padding-left : 10px;

.vertical-center {
  display: flex;
  align-items: center;
  /*  如果兼容性有问题，可以更换为如下代码
  display: table-cell;
  vertical-align: middle;
  */
}

.breadCrumb {
  height: @height;
  padding-left: @padding-left;
  box-sizing: border-box;
  .vertical-center;
}
</style>
