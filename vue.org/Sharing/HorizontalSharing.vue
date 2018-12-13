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

PubSub.subscribe('setHorizontalSharingClass', (msg, _this) => {
  _this.horizontalSharingClass.setClassStyle = {
    display: 'block',
    float: 'left',
    height: '100%',
    width: (100 / _this.itemList.length || 100) + '%'
  }
})

export let HorizontalSharing = {
  props: ['itemList'],
  components: {
    ProcessItem
  },
  beforeCreate () {
    this.horizontalSharingClass = DynamicClass()
  },
  data () {
    return {
      className: this.horizontalSharingClass.className
    }
  },
  watch: {
    itemList () {
      PubSub.publish('setHorizontalSharingClass', this)
    }
  }
}
export default HorizontalSharing
</script>

<style scoped>

</style>
