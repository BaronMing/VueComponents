import isPlainObject from './isPlainObject.js'

function DynamicClass () {
  return new _._()
}

let _ = DynamicClass.prototype

_._ = function () {
}

_._.prototype = DynamicClass.prototype

Object.defineProperties(DynamicClass.prototype, {
  'className': {
    get: function () {
      this.CLASSNAME = 'class_' + Math.random().toString().slice(2) + (+new Date())
      return this.CLASSNAME
    },
    enumerable: false,
    configurable: false
  },
  'setClassStyle': {
    get: function () {
      throw new Error('[setClassStyle]只能用来赋值')
    },
    set: function (styleSheet) {
      if (isPlainObject(styleSheet)) {
        let lis = document.getElementsByClassName(this.CLASSNAME)
        let i = lis.length

        let style = null
        let key = null

        while (lis[--i]) {
          style = lis[i].style

          for (key in styleSheet) {
            style[key] = styleSheet[key]
          }
        }
      }
    },
    enumerable: false,
    configurable: false
  }
})

export default DynamicClass
