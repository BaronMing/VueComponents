import Vue from 'vue'
import MousePromptBox from './MousePromptBox'
let MousePromptBoxConstructor = Vue.extend(MousePromptBox)

let MousePromptBoxID = 'MousePromptBox'

let div = document.createElement('div')
div.id = MousePromptBoxID
document.body.appendChild()

export default function (event, item) {
  let position = {
    x: event.pageX,
    y: event.pageY
  }

  let isShow = parseInt(item.status) !== 1

  return new MousePromptBoxConstructor({
    el: '#' + MousePromptBoxID,
    data: {
      item: item,
      isInBox: false,
      isShow: isShow,
      position: position,
      target: event.target,
      id: MousePromptBoxID
    }
  })
}
