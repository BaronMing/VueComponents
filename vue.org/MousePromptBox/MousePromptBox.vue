<template>
  <div :id="id"
       v-show="isShow"
       @mouseover.stop="isInBox = true"
       @mouseleave.stop="isInBox = isShow = false"
  >
  
  </div>
</template>

<script>
const padding = 10
const existTime = 250
const doc = document.documentElement

function setPosition (_this, newPosition, range) {
  let el = _this.$el
  let style = el.style
  let viewPort = {
    left: null,
    right: doc.clientWidth,
    top: null,
    bottom: doc.clientHeight
  }

  if (range) {  // 通过range调整viewPort大小
    for (let key in range) {
      if (typeof range[key] === 'number') {
        if (key === 'left' || key === 'right') {
          viewPort[key] = range[key] * document.documentElement.clientWidth
        } else {
          viewPort[key] = range[key] * document.documentElement.clientHeight
        }
      }
    }
  }

  if (el.offsetWidth + padding + newPosition.x < viewPort.right) { // 一定可以放在右边
    delete style.right
    style.left = newPosition.x + padding + 'px'
  } else if (el.offsetWidth + padding > newPosition.x) { // 一定不能放在左边
    delete style.right
    style.left = newPosition.x + padding + 'px'
  } else { // 其它的放在左边
    delete style.left
    style.right = doc.clientWidth - newPosition.x + padding + 'px'
  }

  if (el.offsetHeight + padding + newPosition.y < viewPort.bottom) { // 一定可以放在下边
    delete style.bottom
    style.top = newPosition.y + padding + 'px'
  } else if (el.offsetHeight + padding > newPosition.y) { // 一定不能放在上边
    delete style.bottom
    style.top = newPosition.y + padding + 'px'
  } else { // 其它放在下边
    delete style.top
    style.bottom = doc.clientHeight - newPosition.y + padding + 'px'
  }
}

export let MousePromptBox = {
  mounted () {
    // 设置位置
    setPosition(this, this.position)
    // 添加鼠标离开时的时间监听
    this.target.addEventListener('mouseleave', () => {
      setTimeout(() => {
        if (!this.isInBox) {
          this.isShow = false
        }
      }, existTime)
    })
    
  }
}

export default MousePromptBox
</script>

<style lang='less'>
@MousePromptBox-padding : 5px;
@MousePromptBox-max-height: 200px;
@MousePromptBox-character-color : white;

@background-color : rgba(50,50,50,0.7);
@scroll-bar-color : rgba(200,200,200,0.7);
@scroll-bar-width : 6px;

.dark {
  background-color: @background-color;
}

#MousePromptBox {
  position: absolute;
  width: auto;
  height: auto;
  overflow-y: scroll;
  color: @MousePromptBox-character-color;
  max-height: @MousePromptBox-max-height;
  padding: @MousePromptBox-padding;

  .dark;

  &::-webkit-scrollbar {
    width: @scroll-bar-width;
    height: 100%;
    border: 0;

    .dark;
  }

  &::-webkit-scrollbar-button {
    display: none;
  }
  &::-webkit-scrollbar-track {
    .dark;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: @scroll-bar-width / 2;
    background: @scroll-bar-color
  }
}
</style>
