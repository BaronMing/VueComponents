<!--
  ul固定高度时,li平分ul高度的动态列表插槽
-->
<template>
  <ul>
    <li v-for="(item,index) in array" :key="index" :class="className">
      <slot v-if="sort" :name="`li${index+1}`"></slot>
      <slot v-else :name="`li${array.length - index}`"></slot>
    </li>
  </ul>
</template>

<script>
import DynamicClass from '../../assets/js/func/DynamicClass.js'

let liClass = DynamicClass()
export default {
  props: ['num', 'sort'],
  data () {
    return {
      className: liClass.className,
      array: new Array(this.num)
    }
  },
  mounted () {
    liClass.setClassStyle = {
      height: (100 / this.num) + '%',
      display: 'block'
    }
  }
}
</script>

<style>
  ul {
    margin: 0;
    padding: 0;
    border-width: 0;
    width: 100%;
    height: 100%;
  }
</style>
