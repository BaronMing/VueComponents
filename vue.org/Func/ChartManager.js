import * as echarts from 'echarts'

function _ChartManager (params) {
  const thread = {
    geoMap: null,
    series: null,
    interval: null
  }

  this.option = {}

  this.id = null
  this.canvas = null

  this.chart = null
  this.background = null

  this.series = null
  this.flash = null

  /* let geoMap = async (geoMapThread) => {
      let promise = () => {
          return new Promise(function (resolve, reject) {
              function listener(event) {
                  resolve(event.data);
                  geoMapThread.removeEventListener("message", listener);
              }

              geoMapThread.addEventListener("message", listener)
          })
      }

      while (geoMapThread) {
          await (this.geoMap = promise());
      }
  } */

  this.geoMap = null

  this.workerRoute = './js/thread/'

  this.backgroundIMG = './src/bg.png'

  this.thread = new Proxy(thread, {
    set: (thread, key, value, receiver) => {
      if (~value.indexOf(this.workerRoute)) {
        // 没有找到根路径
        thread[key] = new Worker(value)
      } else {
        thread[key] = new Worker((this.workerRoute + value).replace(/\/\//g, '/'))
      }

      /* if (key === "geoMap") {
          let geoMapThread = this.thread.geoMap;

          geoMap(geoMapThread);

          geoMapThread.postMessage(this.size);
      } */
    }
  })

  this.onResize = () => {
    let SeriesThread = this.thread.series

    let seriesResize = (event) => {
      if (Array.isArray(event.data)) {
        [this.series, this.flash] = event.data
      } else {
        this.series = event.data
      }

      try {
        this.chart.setOption({
          series: this.series
        })
      } catch (e) {
        // console.log("不能在图表绘制的过程中进行缩放");
      }
    }

    let winResize = (event) => {
      if (this.background) {
        this.background.resize()
      }

      try {
        this.chart.resize()
      } catch (e) {
        // console.log("不能在图表绘制的过程中进行缩放");
      }

      /* if (this.thread.geoMap) {
          this.thread.geoMap.postMessage(this.size);
      } */

      if (SeriesThread) {
        SeriesThread.postMessage({
          size: this.size
        })
      }
    }

    if (SeriesThread) {
      SeriesThread.addEventListener('message', seriesResize)
    }

    window.addEventListener('visibilitychange', winResize)

    window.addEventListener('resize', winResize)
  }

  Object.defineProperty(this, 'size', {
    get: function () {
      return {
        clientHeight: document.body.clientHeight,
        clientWidth: document.body.clientWidth,
        screenHeight: window.screen.availHeight,
        screenWidth: window.screen.availWidth,
        outerHeight: window.outerHeight,
        innerHeight: window.innerHeight
      }
    }
  })

  let _this = this

  function Background (depCanvas) {
    let ctx
    let img = new Image()
    let docEle = document.documentElement

    function loadImg (width, height) {
      img.src = _this.backgroundIMG
      img.onload = function () {
        ctx.drawImage(img, 0, 0, width, height)
      }
    }

    function resize () {
      depCanvas.height = docEle.clientHeight + 'px'
      depCanvas.width = docEle.clientWidth + 'px'

      this.width = depCanvas.clientWidth
      this.height = depCanvas.clientHeight

      loadImg(this.width, this.height)
    }

    function init () {
      let background = document.createElement('canvas')
      background.resize = resize
      background.width = depCanvas.clientWidth
      background.height = depCanvas.clientHeight

      ctx = background.getContext('2d')

      loadImg(background.width, background.height)

      return background
    }

    return init()
  }

  function set (_this, key, value, receiver) {
    const result = Reflect.set(_this, key, value, receiver)

    if (key === 'id') {
      receiver.canvas = document.getElementById(value.trim().replace(/#/, ''))
      return result
    }

    if (key === 'canvas') {
      _this.chart = echarts.init(value)
      return result
    }

    if (key === 'series') {
      _this.option.series = value
      return result
    }

    if (key === 'tooltip') {
      _this.option.tooltip = value
      return result
    }

    if (key === 'background') {
      _this.option.bmap = {
        center: [0, 0],
        zoom: 6,
        mapStyle: {}
      }
      if (value === true) {
        _this.background = Background(_this.canvas)

        _this.option.backgroundColor = {
          image: _this.background,
          repeat: 'no-repeat'
        }
      } else {
        _this.option.backgroundColor = {
          image: value,
          repeat: 'no-repeat'
        }
      }

      return result
    }
  }

  return new Proxy(this, {
    set
  })
}

export var ChartManager = new Proxy(_ChartManager, {
  construct: function (_ChartManager, args) {
    let obj = new _ChartManager()
    let params = args[0]

    for (let key in params) {
      obj[key] = params[key]
    }

    return obj
  }
})
