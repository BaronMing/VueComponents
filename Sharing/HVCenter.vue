<template>
    <div class="parent">
        <div class="child" @mousemove.stop="tooltipShow">
            <p v-if="item.name">{{item.name}}</p>
            <p v-if="item.traffic">{{item.traffic + item.unit}}</p>
            <img v-if="item.src" :src="item.src"/>
        </div>
    </div>
</template>

<script>
export let HVCenter {
  props: ['item'],
  methods: {
    tooltipShow (event) {
      if (this.item.status !== 1) {
        this.tooltipInstance = this.$tooltip(event, this.item)
      }
    }
  }
}
export default HVCenter
</script>

<style scoped>
/* 水平居中 */
.parent {
  text-align: center;
  font-size: 0;
}
.child {
  font-size: initial;
  width: auto;
  display: inline-block;
}

/* 垂直居中 */
.child {
  vertical-align: middle;
  height: auto;
}
.parent:after {
  content: "";
  /* width:0; */
  height: 100%;
  display: inline-block;
  vertical-align: middle;
}
.child p{
    color: white;
    margin: 0;
}
img {
  max-height: 8vh;
}
</style>
