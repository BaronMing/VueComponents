export class ConfigConstructor {
  selector = null
  target = {}

  constructor (array) {
    if (arguments.length) {
      this.Keys = Array.isArray(array) ? array : Array.prototype.slice.call(arguments, 0)
    }
    return [this, this.target]
  }

  select (args) {
    this.selector = Array.isArray(args) ? args : Array.prototype.slice.call(arguments, 0)
    return this
  }

  deepCopy () {
    let target = this.target
    this.selector.forEach(key => {
      target[key] = JSON.parse(JSON.stringify(target[key]))
    })
    return this
  }

  set setKeys (array) {
    this.Keys = Array.isArray(array) ? array : Array.prototype.slice.call(arguments, 0)
  }

  set setBasicConfig (option) {
    let target = this.target
    this.Keys.map((key, index, array) => {
      target[key] = option(key, index, array)
    })
  }

  set change (option) {
    let target = this.target
    this.selector.forEach(key => {
      Object.assign(target[key], option)
      target[key].button.reverse()
    })
  }
}
