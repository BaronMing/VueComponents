<template>
  <div>
    <div class="border-line">
      <process-item :class="className" v-for="(item, index) in itemList" :key="index" :item="item"/>
    </div>
  </div>
</template>

<script>
import ProcessItem from './vh-center'
import DynamicClass from '../../assets/js/func/DynamicClass.js'
import PubSub from 'pubsub-js'

PubSub.subscribe('setVerticalSharingClass', (msg, _this) => {
  _this.verticalSharingClass.setClassStyle = {
    display: 'block',
    height: (100 / _this.itemList.length || 100) + '%'
  }
})

export let VerticalSharing = {
  components: {
    ProcessItem
  },
  props: ['itemList'],
  beforeCreate () {
    this.verticalSharingClass = DynamicClass()
  },
  data () {
    return {
      className: this.verticalSharingClass.className
    }
  },
  watch: {
    itemList () {
      PubSub.publish('setVerticalSharingClass', this)
    }
  }
}
export default VerticalSharing
</script>

<style scoped>

</style>
