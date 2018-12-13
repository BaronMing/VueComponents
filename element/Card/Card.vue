<template>
  <el-card>
    <div v-if="title || config.button" slot="header">
      <span :class="color">{{title.content}}</span>
      <template v-if="config.button">
        <Button class="right" v-for="(btn, index) in button" :key="index" :button="btn"></Button>
      </template>
    </div>
    <slot></slot>
  </el-card>
</template>

<script>
import {colorToType} from './MapBetweenColorAndType'
import Button from './Button'

export let Card = {
  props: ['config'],
  components: {
    Button
  },
  data () {
    let title = this.config.title
    let button = this.config.button
    return {
      title: title,
      button: Array.isArray(button) ? button : [button]
    }
  },
  computed: {
    color () {
      let color = this.title.color
      return color in colorToType ? colorToType[color] : color
    }
  }
}
export default Card
</script>

<style lang="less" scoped>
  .card-head {
    background-color: #fbfbfb;
    padding: 9px 20px;
  }
  .card-body {
    padding: 0;
  }

  .right {
    float: right;
    padding: 0.2rem;
    margin-left: 0.2rem;
  }

  .el-card > :first-child {
    .card-head
  }
  .el-card > :last-child {
    .card-body
  }
</style>
